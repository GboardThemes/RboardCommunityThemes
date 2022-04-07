import {fileFromPath} from 'formdata-node/file-from-path'
import {FormData} from 'formdata-node'
import fetch from 'node-fetch'
import JSZip from 'jszip'
import path from 'path'
import fs from 'fs'

import {
    metadata, styleSheetMd, styleSheetMdBorder
} from './variables.js'

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'

const chatId = -1001744484904
const hashtag = '#request'

const token = process.argv[2]

const downloadFile = async (url, path, options) => {
    const res = await fetch(url, options)
    const fileStream = fs.createWriteStream(path)
    await new Promise((resolve, reject) => {
        res.body.pipe(fileStream)
        res.body.on('error', reject)
        fileStream.on('finish', resolve)
    })
}

const run = async () => {
    const now = Date.now() / 1000
    const json = await fetch(`https://api.telegram.org/bot${token}/getUpdates`, {
        method: 'post', headers: {
            'content-type': 'application/json'
        }, body: JSON.stringify({
            allowed_updates: ["message"], offset: -1
        })
    }).then(body => body.json())

    if (json.ok) {
        const messages = json.result.filter(update =>
            update.message?.chat?.id === chatId &&
            (
                update.message?.caption === hashtag ||
                update.message?.text === hashtag
            ) &&
            update.message.date > now - (60 * 30)
        ).map(update => update.message)
        for (const message of messages) {
            if (message.document && message.document?.file_name?.endsWith('.pack')) {
                const getFile = await fetch(`https://api.telegram.org/bot${token}/getFile`, {
                    method: 'post', headers: {
                        'content-type': 'application/json'
                    }, body: JSON.stringify({file_id: message.document.file_id})
                }).then(body => body.json())
                if (getFile.ok) await downloadFile(`https://api.telegram.org/file/bot${token}/${getFile.result.file_path}`, path.join('deploy', message.document.file_name))
            } else if (message.text === hashtag && message.reply_to_message) {
                if (!message.document && (message.reply_to_message.text.startsWith('https://creator.dertyp7214.de') || message.reply_to_message.text.startsWith('https://rboard.dertyp7214.de'))) {
                    const url = new URL(message.reply_to_message.text)
                    const imageUrl = `https://creator.dertyp7214.de/preview${url.search}`

                    const {
                        mainBg, keyBg, keyColor, secondKeyBg, accentBg, themeName, author
                    } = [...url.searchParams.entries()].reduce((map, obj) => {
                        map[obj[0]] = obj[1]
                        return map
                    }, {})

                    const accentBgPressed = shadeColor(`#${accentBg}`, 5)
                    const secondKeyBgPressed = shadeColor(`#${secondKeyBg}`, 5)

                    if (mainBg && keyBg && keyColor && secondKeyBg && accentBg) {
                        const escapedThemeName = (themeName ?? 'DerTyp7124').replace(new RegExp(' ', 'g'), '_')

                        const image = Buffer.from(await fetch(imageUrl).then(body => body.arrayBuffer())).toString('base64')

                        const themeZip = JSZip()

                        const variables = [`@def web_color_bg #${mainBg};`, `@def web_color_label #${keyColor};`, `@def web_color_accent #${accentBg};`, `@def web_color_accent_pressed ${accentBgPressed};`, `@def web_color_key_bg #${keyBg};`, `@def web_color_key_bg_pressed #${secondKeyBg};`, `@def web_color_secondary_key_bg #${secondKeyBg};`, `@def web_color_secondary_key_bg_pressed ${secondKeyBgPressed};`]

                        themeZip.file('metadata.json', JSON.stringify(metadata, null, 2))
                        themeZip.file('style_sheet_md2.css', styleSheetMd)
                        themeZip.file('style_sheet_md2_border.css', styleSheetMdBorder)
                        themeZip.file('variables.css', variables.join('\n'))

                        const packZip = new JSZip()

                        packZip.file('pack.meta', `name=${themeName ?? metadata.id}\nauthor=${author ?? 'DerTyp7214'}`)
                        packZip.file(`${escapedThemeName}.zip`, await themeZip.generateAsync({type: 'base64'}), {base64: true})
                        packZip.file(escapedThemeName, image, {base64: true})

                        const packPath = path.join('deploy', `${themeName}.pack`)

                        await new Promise(res => packZip.generateNodeStream({
                            type: 'nodebuffer', streamFiles: true
                        }).pipe(fs.createWriteStream(packPath)).on('finish', res))

                        await replyWithTheme(packPath, message)
                    }
                }
            }
        }
    }
}

const replyWithTheme = async (file, message) => {
    const body = new FormData()
    body.set('chat_id', message.chat.id)
    body.set('document', await fileFromPath(file))
    body.set('reply_to_message_id', parseInt(message.message_id))

    await fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
        method: 'post', body
    }).catch(console.log)
}

const shadeColor = (color, percent) => {
    let R = parseInt(color.substring(1, 3), 16)
    let G = parseInt(color.substring(3, 5), 16)
    let B = parseInt(color.substring(5, 7), 16)

    R = parseInt(String(R * (100 + percent) / 100))
    G = parseInt(String(G * (100 + percent) / 100))
    B = parseInt(String(B * (100 + percent) / 100))

    R = (R < 255) ? R : 255
    G = (G < 255) ? G : 255
    B = (B < 255) ? B : 255

    const RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16))
    const GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16))
    const BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16))

    return "#" + RR + GG + BB
}

run().then(() => console.log('Done.'))