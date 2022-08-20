export function htmlScrollIntoView(boolean) {
    const html = document.querySelector('html')
    html.scrollIntoView(!!boolean)
}

