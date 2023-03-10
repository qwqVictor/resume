import { existsSync } from 'node:fs'
import { mkdir } from 'node:fs/promises'
import { chdir, exit } from 'node:process'
import puppeteer from "puppeteer"
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pagename = path.join(__dirname, "..", "dist", "client", "index.html")
const pdfname = path.join(__dirname, "..", "dist", "client", "resume.pdf")

if (!existsSync(pagename)) {
    console.error("Build failed! exiting.", pagename)
    exit(1)
}

try {
    console.log("[Print] Launching the headless browser...")

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    console.log("[Print] Loading the generated page...")

    await page.goto(pathToFileURL(pagename))
    await page.emulateMediaType("screen")

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
}
