// import *  as fs from "node:fs";
import { readdirSync, writeFileSync } from "fs";
import { join } from "path"

function walkDir() {
    return readdirSync("docs/faq").sort((a, b) => {
        return a.split(".")[0] - b.split(".")[0] // looks very unsafe kek
    }).map(x => {
        return join("faq", x)
    })
}

function getPageContent() {
    return `# Compiled list of FAQ's from Honkai Impact 3rd Official discord server

[[toc]]

`
}

function main() {
    let fileList = walkDir()

    fileList = fileList.map(x => {
        return `<!--@include: ${x}-->`
    })

    let content = getPageContent() + fileList.join("\n")
    
    writeFileSync("docs/all.md", content)
}

main()