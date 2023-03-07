import { useTranslation } from "react-i18next";

export default function BrazilianParties() {
  let { t } = useTranslation();

  return (
    <main>
      <h1>{t("brazilianParties")}</h1>
    </main>
  );
}
