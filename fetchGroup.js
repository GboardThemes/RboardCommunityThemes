import fetch from 'node-fetch'
import path from 'path'
import fs from 'fs'

const chatId = -1001744484904

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
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            allowed_updates: ["message"],
            offset: -1
        })
    }).then(body => body.json())

    if (json.ok) {
        const messages = json.result.filter(update =>
            update.message?.chat?.id === chatId &&
            update.message?.document?.file_name?.endsWith('.pack') &&
            update.message?.caption === '#request' &&
            update.message.date > now - (60 * 30)
        ).map(update => update.message)
        for (const message of messages) {
            const getFile = await fetch(`https://api.telegram.org/bot${token}/getFile`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({file_id: message.document.file_id})
            }).then(body => body.json())
            if (getFile.ok) await downloadFile(
                `https://api.telegram.org/file/bot${token}/${getFile.result.file_path}`,
                path.join('deploy', message.document.file_name)
                )
        }
    }
}

run().then(() => console.log('Done.'))