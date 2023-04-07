import { useTranslation } from "react-i18next";

export default function ReadingGuide() {
  let { t } = useTranslation();

  return (
    <div>
      <h1>{t("readingGuide")}</h1>
    </div>
  );
}
