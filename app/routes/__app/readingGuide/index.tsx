import { useTranslation } from "react-i18next";

export default function ReadingGuide() {
  let { t } = useTranslation();

  return (
    <div className="bg-background h-screen">
      <h1 className="text-">teste</h1>
      <h1>{t("readingGuide")}</h1>
    </div>
  );
}
