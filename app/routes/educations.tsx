import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/education.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Educations() {
  return (
    <main className="container">
      <div
        className="content"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <h1>Educations page</h1>
      </div>
    </main>
  );
}
