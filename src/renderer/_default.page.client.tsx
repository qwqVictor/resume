import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import ReactDOM from "react-dom";

export { render };

async function render(pageContext: PageContextBuiltIn) {
  const { Page } = pageContext
  ReactDOM.hydrate(
    <Page />,
    document.getElementById("root")
  );
}