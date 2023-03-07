import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function useChangeLanguage(locale: string) {
  let { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);

  return { i18n };
}
