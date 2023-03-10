import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import ReactDOM from "react-dom";
import { title } from '../data';

export { render };

async function render(pageContext: PageContextBuiltIn) {
  const { Page } = pageContext
  document.title = title
  ReactDOM.hydrate(
    <Page />,
    document.getElementById("root")
  );
}