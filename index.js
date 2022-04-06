// noinspection JSCheckFunctionSignatures,JSUnresolvedFunction

import AdmZip from 'adm-zip'
import rimraf from 'rimraf'
import path from 'path'
import fs from 'fs'

import gitRemoteOriginUrl from 'remote-origin-url'
import parseGithubUrl from 'parse-github-url'
import gitBranch from 'git-branch'
import gitLog from 'gitlog'

const packPath = process.argv[2]

async function run() {
    if (packPath == null) console.log("Please provide a path.")
    else if (packPath === 'deploy') {
        const files = fs.readdirSync(packPath).filter(file => file.endsWith(".zip") || file.endsWith(".pack"))
        for (const pack of files) {
            const zipPath = path.join(packPath, pack)
            const zip = new AdmZip(zipPath)
            const metaFile = zip.getEntry('pack.meta')
            const meta = {
                author: 'Rboard Theme Creator'
            }
            if (metaFile != null) {
                const tmp = metaFile.getData().toString()
                tmp.split(new RegExp('(\r\n|\n)')).forEach(metaEntry => {
                    if (metaEntry.includes('=')) {
                        meta[metaEntry.split('=')[0]] = (metaEntry.includes(',') || metaEntry.startsWith("tags")) ? metaEntry.split('=')[1].split(',') : metaEntry.split('=')[1]
                    }
                })
            }
            meta.author = meta.author.replace(new RegExp(' ', 'g'), '_')
            const newPackPath = path.join('packs', `${meta.author}.pack`)
            if (fs.existsSync('tmp')) rimraf.sync('tmp')
            fs.mkdirSync('tmp')
            for (const theme of zip.getEntries().filter(entry => !entry.name.endsWith('.meta')))
                zip.extractEntryTo(theme.entryName, 'tmp', false, true)
            if (fs.existsSync(newPackPath)) {
                const packZip = new AdmZip(newPackPath)
                for (const theme of packZip.getEntries())
                    packZip.extractEntryTo(theme.entryName, 'tmp', false, true)
                const newZip = new AdmZip()
                await newZip.addLocalFolderPromise('tmp')
                await newZip.writeZipPromise(newPackPath)
            } else {
                const packZip = new AdmZip()
                for (const theme of packZip.getEntries().filter(entry => !entry.name.endsWith('.meta')))
                    packZip.extractEntryTo(theme.entryName, 'tmp', false, true)
                await packZip.addLocalFolderPromise('tmp')
                meta.name = `Themes by ${meta.author}`
                packZip.addFile('pack.meta', `name=${meta.name}\nauthor=${meta.author}`)
                await packZip.writeZipPromise(newPackPath)
            }
            fs.unlinkSync(zipPath)
            rimraf.sync('tmp')
        }
    } else {
        const list = []
        const files = fs.readdirSync(packPath).filter(file => file.endsWith(".zip") || file.endsWith(".pack"))
        for (const pack of files) {
            const zip = new AdmZip(path.join(packPath, pack))
            const metaFile = zip.getEntry('pack.meta')
            const gitUrl = parseGithubUrl(gitRemoteOriginUrl.sync())
            gitUrl.branch = gitBranch.sync()
            const meta = {
                url: `https://github.com/${gitUrl.repo}/raw/${gitUrl.branch}/${packPath}/${pack}`,
                author: 'Rboard Theme Creator',
                tags: []
            }
            meta.themes = zip.getEntries().filter(entry => entry.name.endsWith(".zip")).map(entry => entry.name.replace(".zip", ""))
            meta.size = fs.statSync(path.join(packPath, pack)).size
            await new Promise((res) => {
                gitLog({
                    repo: process.cwd(),
                    file: path.join(packPath, pack),
                    fields: ["hash", "authorName", "authorDate"]
                }, (error, commits) => {
                    const commit = commits[0]
                    if (commit) {
                        meta.date = new Date(commit.authorDate).getTime()
                        meta.author = commit.authorName
                    }
                    res()
                })
            })
            if (metaFile != null) {
                const tmp = metaFile.getData().toString()
                tmp.split(new RegExp('(\r\n|\n)')).forEach(metaEntry => {
                    if (metaEntry.includes('=')) {
                        meta[metaEntry.split('=')[0]] = (metaEntry.includes(',') || metaEntry.startsWith("tags")) ? metaEntry.split('=')[1].split(',') : metaEntry.split('=')[1]
                    }
                })
            } else {
                meta.name = pack.replace('_', ' ').replace(new RegExp('\.(zip|pack)'), '')
            }
            list.push(meta)
            console.log(`${meta.name} by ${meta.author} added.`)
        }
        fs.writeFileSync('list.json', JSON.stringify(list, null, 2))
    }
}

run().then(() => console.log('Done.'))