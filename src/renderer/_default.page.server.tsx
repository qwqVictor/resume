import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape } from "vite-plugin-ssr";
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import indexHtml from '../../index.html?raw'
export { render };

async function render(pageContext: PageContextBuiltIn) {
    const { Page } = pageContext;
    const viewHtml = ReactDOMServer.renderToString(
        <Page />
    );

    return dangerouslySkipEscape(indexHtml.replace('<!-- ssr-outlet ->', dangerouslySkipEscape(viewHtml)._escaped))
}