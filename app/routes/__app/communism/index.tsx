import { useTranslation } from "react-i18next";

export default function Comunismo() {
  let { t } = useTranslation();

  return (
    <main>
      <h1>{t("communism")}</h1>
    </main>
  );
}
