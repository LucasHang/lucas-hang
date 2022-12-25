import type { LinksFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

import stylesUrl from "~/styles/details.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Details() {
  return (
    <div>
      <Link to="/">go back</Link>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
