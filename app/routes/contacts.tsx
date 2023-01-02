import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/contacts.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Contacts() {
  return (
    <main className="container">
      <div className="content">
        <h1>Contacts page</h1>
      </div>
    </main>
  );
}
