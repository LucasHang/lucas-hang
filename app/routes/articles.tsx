import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/articles.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Articles() {
  return (
    <main className="container">
      <div className="content">
        <h1>Articles page</h1>
        <p>I'm sorry, this page is in development process...</p>
      </div>
    </main>
  );
}
