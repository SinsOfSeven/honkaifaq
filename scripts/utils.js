import {readFileSync, readdirSync, writeFileSync} from "fs"
import { join } from "path"

function fixAllHeadings() {
    let fileList = readdirSync("docs/faq").map(x => {
        return join("docs", "faq", x)
    })

    fileList.forEach(el => {
        fixHeading(el)
    });
}

function fixHeading(el) {
    let content = readFileSync(el, {encoding: 'utf8'})
    content = content.replace("## ", "# ")
    writeFileSync(el, content)
}

fixAllHeadings()
