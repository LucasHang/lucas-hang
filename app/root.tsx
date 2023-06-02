import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { json } from "@remix-run/node";
import type { MetaFunction, LinksFunction, LoaderArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
// import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";
import i18next from "~/i18next.server";

import globalStylesUrl from "./styles/global.css";
import globalMediumStylesUrl from "./styles/global-medium.css";
import globalLargeStylesUrl from "./styles/global-large.css";
import Questions, { links as questionsLinks } from "./components/Questions";

export const loader = async ({ request }: LoaderArgs) => {
  const locale = await i18next.getLocale(request);
  return json({ locale });
};

export const handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "translation",
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Lucas Hang",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStylesUrl,
    },
    {
      rel: "stylesheet",
      href: globalMediumStylesUrl,
      media: "print, (min-width: 640px)",
    },
    {
      rel: "stylesheet",
      href: globalLargeStylesUrl,
      media: "screen and (min-width: 1024px)",
    },
    ...questionsLinks(),
  ];
};

export default function App() {
  const { i18n } = useTranslation();
  // Get the locale from the loader
  const { locale } = useLoaderData<typeof loader>();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  //   useChangeLanguage(locale);
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <main className="container">
          <Outlet />

          <Questions />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        <Analytics />
      </body>
    </html>
  );
}
