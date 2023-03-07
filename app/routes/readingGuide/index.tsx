import { useTranslation } from "react-i18next";

export default function ReadingGuide() {
  let { t } = useTranslation();

  return (
    <main>
      <h1>{t("readingGuide")}</h1>
    </main>
  );
}
