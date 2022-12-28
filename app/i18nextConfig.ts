export default {
  debug: process.env.NODE_ENV !== "production",
  fallbackLng: "en",
  supportedLngs: ["en", "pt"],
  defaultNS: "translation",
  react: { useSuspense: false },
};
