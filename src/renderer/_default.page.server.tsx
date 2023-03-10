import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr";
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import indexHtml from '../../index.html?raw'
import { title } from "../data";
export { render };

async function render(pageContext: PageContextBuiltIn) {
    const { Page } = pageContext;
    const viewHtml = ReactDOMServer.renderToString(
        <Page />
    );

    return dangerouslySkipEscape(indexHtml
        .replace('<!-- title-outlet -->', `<title>${escapeInject`${title}`}</title>`)
        .replace('<!-- ssr-outlet ->', dangerouslySkipEscape(viewHtml)._escaped)
    )
}