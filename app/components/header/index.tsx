import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import { useTranslation } from "react-i18next";

export default function Header() {
  let { t } = useTranslation();

  const user = useOptionalUser();

  return (
    <main className="flex h-20 w-screen justify-between text-white	">
      <nav className="flex items-center justify-center gap-1 px-4">
        <Link
          to="/capitalism"
          className="rounded-2xl px-2 py-1 tracking-widest no-underline hover:bg-red-dark"
        >
          {t("capitalism")}
        </Link>
        <Link
          to="/socialism"
          className="rounded-2xl px-2 py-1 tracking-widest no-underline hover:bg-red-dark"
        >
          {t("socialism")}
        </Link>
        <Link
          to="/communism"
          className="rounded-2xl px-2 py-1 tracking-widest no-underline hover:bg-red-dark"
        >
          {t("communism")}
        </Link>
        <Link
          to="/"
          className="rounded-2xl px-2 py-1 tracking-widest no-underline hover:bg-red-dark"
        >
          Partidos Brasileiros
        </Link>
        <Link
          to="/"
          className="rounded-2xl px-2 py-1 tracking-widest no-underline hover:bg-red-dark"
        >
          Guia de Leitura
        </Link>
      </nav>
      <div className="px-4">
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
      </div>
    </main>
  );
}
