import { Link, Outlet } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import { useTranslation } from "react-i18next";

export default function Index() {
  let { t } = useTranslation();

  const user = useOptionalUser();

  return (
    <div className="h-screen">
      <header className="flex p-2 h-24 w-full justify-between text-chumbo bg-gray100">
        <div className="w-1/5">Language</div>
        <div className="flex flex-col items-center justify-end">
          <nav className="flex items-end gap-6 px-4 ">
            <Link
              to="/capitalism"
              className="py-3 tracking-widest no-underline hover:border-b-2 hover:border-red_dark"
            >
              {t("capitalism")}
            </Link>
            <Link
              to="/socialism"
              className="py-3 tracking-widest no-underline hover:border-b-2 hover:border-red_dark"
            >
              {t("socialism")}
            </Link>
            <Link
              to="/communism"
              className="py-3 tracking-widest no-underline hover:border-b-2 hover:border-red_dark"
            >
              {t("communism")}
            </Link>
            <Link
              to="/brazilianParties"
              className="py-3 tracking-widest no-underline hover:border-b-2 hover:border-red_dark"
            >
              {t("brazilianParties")}
            </Link>
            <Link
              to="/readingGuide"
              className="py-3 tracking-widest no-underline hover:border-b-2 hover:border-red_dark"
            >
              {t("readingGuide")}
            </Link>
            <Link
              to="/contact"
              className="py-3 tracking-widest no-underline hover:border-b-2 hover:border-red_dark"
            >
              {t("contact")}
            </Link>
          </nav>
        </div>
        <div className="w-1/5">Search</div>
        {/* <div className="px-4 w-1/12">
          {user ? (
            <Link
              to="/notes"
              className="border-transparent text-yellow-700 hover:bg-yellow-50 flex items-center justify-center rounded-md border bg-white px-4 py-3 text-base font-medium shadow-sm sm:px-8 "
            >
              View Notes for {user.email}
            </Link>
          ) : (
            <div className="">
              <Link
                to="/join"
                className="border-transparent text-yellow-700 hover:bg-yellow-50 flex items-center justify-center rounded-md border bg-white text-base font-medium text-red-dark  shadow-sm "
              >
                Sign up
              </Link>
              <Link
                to="/login"
                className="bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center rounded-md px-4 py-3 font-medium text-white"
              >
                Log In
              </Link>
            </div>
          )}
        </div> */}
      </header>
      <Outlet />
    </div>
  );
}
