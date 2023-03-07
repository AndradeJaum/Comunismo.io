import { useTranslation } from "react-i18next";


export default function Capitalismo() {

  let { t } = useTranslation();

  return (
    <main>
      <h1>{t("capitalism")}</h1>
    </main>
  );
}
