import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import { langSet } from '../../i18n'

export { onBeforeRender }
export { prerender }

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    const pageProps = {
        defaultLanguages: langSet
    }
    return {
        pageContext: {
            pageProps
        }
    }
}

function prerender(): string[] {
    return ['/']
}