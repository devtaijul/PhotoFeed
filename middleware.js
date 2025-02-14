import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["en", "bn"];
let defaultLocale = "en";

const getLocale = (req) => {
  const acceptedLanguages = req.headers.get("accept-language") ?? undefined;

  const headers = {
    "accept-language": acceptedLanguages,
  };

  const languages = new Negotiator({ headers }).languages();

  const locale = match(languages, locales, defaultLocale);

  return locale;
};

export const middleware = async (req) => {
  const { pathname } = req.nextUrl;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(req);
    console.log("locale", locale);

    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, req.url));
  }
};

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
