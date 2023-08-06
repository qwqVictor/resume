import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr";
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import indexHtml from '../../index.html?raw'
import { title } from "../data";
import { langSet } from "../i18n";
export { render };

async function render(pageContext: PageContextBuiltIn) {
    const { Page } = pageContext;
    const viewHtml = ReactDOMServer.renderToString(
        <Page defaultLanguages={langSet} />
    );

    return dangerouslySkipEscape(indexHtml
        /* without strict escaping can cause security risks, 
         * but it is not an externally controllable variable.
         */
        .replace('<!-- title-outlet -->', `<title>${title.replace("<", "&lt;").replace(">", "&gt;")}</title>`)
        .replace('<!-- ssr-outlet -->', dangerouslySkipEscape(viewHtml)._escaped)
    )
}