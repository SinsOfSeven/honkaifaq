export default {
    lang: "en-US",
    title: "Honkai Impact FAQ",
    description: "Compiled list of FAQ from Honkai Impact 3rd Official Discord server",
    appearance: "dark",
    base: "/honkaifaq/",
    lastUpdated: true,

    themeConfig: {
        sidebar: customBar()
    }
}

function customBar() {
    return [
        {
            text: "All faqs",
            items: [
                {text: "Compiled", link: "/all"}
            ]
        }
    ]
}