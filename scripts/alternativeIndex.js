// import *  as fs from "node:fs";
import { readFileSync, readdirSync, openSync, writeSync } from "fs";
import { join } from "path"

function walkDir() {
    return readdirSync("docs/faq").sort((a, b) => {
        return a.split(".")[0] - b.split(".")[0] // looks very unsafe kek
    })
    .map(x => {
        return join("docs", "faq", x)
    })
}

function getHeader() {
    return `# Compiled list of FAQ's from Honkai Impact 3rd Official discord server

[[toc]]

`
}

function getFileContent(f) {
    // lazy fix from h1 to h2
    return "#" + readFileSync(f)
}

function main() {
    let fileList = walkDir()

    let fd = openSync("docs/all.md", 'w')

    writeSync(fd, getHeader(), null, 'utf-8')

    fileList.forEach(el => {
        writeSync(fd, getFileContent(el) + "\n\n\n", null, 'utf-8')
    });
    
    // writeFileSync("docs/all.md", content)
}

main()