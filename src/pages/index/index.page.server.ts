import type { PageContextBuiltIn } from 'vite-plugin-ssr'

export { onBeforeRender }
export { prerender }

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    const pageProps = {}
    return {
        pageContext: {
            pageProps
        }
    }
}

function prerender(): string[] {
    return ['/']
}