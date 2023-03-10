import { existsSync } from 'node:fs'
import { mkdir, readFile } from 'node:fs/promises'
import { chdir, exit } from 'node:process'
import puppeteer from "puppeteer"
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const prefix = path.join(__dirname, "..", "dist", "client")
const pagename = path.join(prefix, "index.html")
const pdfname = path.join(prefix, "resume.pdf")

if (!existsSync(pagename)) {
    console.error("Build failed! exiting.", pagename)
    exit(1)
}

try {
    console.log("[Print] Launching the headless browser...")

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.setRequestInterception(true)
    page.on("request", async (request) => {
        if (request.url().startsWith("http://resume.mock")) {
            let urlPath = request.url().split('http://resume.mock')[1]
            if (urlPath == '/')
                urlPath = "/index.html"
            const content = await readFile(path.join(prefix, urlPath))
            request.respond({
                body: content,
                code: 200
            })
        }
        else
            request.continue()
    })

    console.log("[Print] Loading the generated page...")

    await page.goto("http://resume.mock/")
    await page.emulateMediaType("print")

    console.log("[Print] Printing to PDF...")

    await page.pdf({
        path: pdfname,
        printBackground: true,
        format: 'A4'
    })
    
    console.log("[Print] Done!")
    exit(0)
} catch (e) {
    console.error("Failed to print PDF!", e)
    exit(1)
}
