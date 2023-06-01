import { Link, Outlet } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export default function Index() {
  let { t } = useTranslation();

  return (
    <>
      <header className="flex p-2 h-24 w-full justify-center">
        <div className="flex flex-col items-center justify-end w-4/5">
          <nav className="flex items-end gap-6 px-4 ">
            <Link
              to="/#"
              className="py-3 tracking-widest no-underline hover:border-b-4 hover:border-red"
            >
              {t("home")}
            </Link>
            <Link
              to="/communism"
              className="py-3 tracking-widest no-underline hover:border-b-4 hover:border-red active:border-red"
            >
              {t("communism")}
            </Link>
            <Link
              to="/socialism"
              className="py-3 tracking-widest no-underline hover:border-b-4 hover:border-red active:border-red"
            >
              {t("socialism")}
            </Link>
            <Link
              to="/capitalism"
              className="py-3 tracking-widest no-underline hover:border-b-4 hover:border-red active:border-red"
            >
              {t("capitalism")}
            </Link>
            <Link
              to="/brazilianParties"
              className="py-3 tracking-widest no-underline hover:border-b-4 hover:border-red active:border-red"
            >
              {t("brazilianParties")}
            </Link>
            <Link
              to="/readingGuide"
              className="py-3 tracking-widest no-underline hover:border-b-4 hover:border-red active:border-red"
            >
              {t("readingGuide")}
            </Link>
            <Link
              to="/contact"
              className="py-3 tracking-widest no-underline hover:border-b-4 hover:border-red active:border-red"
            >
              {t("contact")}
            </Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}
