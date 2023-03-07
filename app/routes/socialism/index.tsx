import { useTranslation } from "react-i18next";

export default function Socialismo() {
  let { t } = useTranslation();

  return (
    <main>
      <h1>{t("socialism")}</h1>
    </main>
  );
}
