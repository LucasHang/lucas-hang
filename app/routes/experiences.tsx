import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/education.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Experiences() {
  return (
    <main className="container">
      <div
        className="content"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <h1>Experiences page</h1>
      </div>
    </main>
  );
}
