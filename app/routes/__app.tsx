import { Link, Outlet } from "@remix-run/react";

export default function Index() {

  return (
    <>
      <header className="flex p-2 h-24 w-full justify-center">
        <div className="flex flex-col items-center justify-end w-4/5">
          <nav className="flex items-end gap-6 px-4 ">
            <Link
              to="/#"
              className="py-3 tracking-widest no-underline hover:border-b-4 hover:border-red"
            >
              HOME
            </Link>
            <Link
              to="/communism"
              className="py-3 tracking-widest no-underline hover:border-b-4 hover:border-red active:border-red"
            >
              COMUNISMO
            </Link>
            <Link
              to="/socialism"
              className="py-3 tracking-widest no-underline hover:border-b-4 hover:border-red active:border-red"
            >
              SOCIALISMO
            </Link>
            <Link
              to="/capitalism"
              className="py-3 tracking-widest no-underline hover:border-b-4 hover:border-red active:border-red"
            >
              CAPITALISMO
            </Link>
            <Link
              to="/brazilianParties"
              className="py-3 tracking-widest no-underline hover:border-b-4 hover:border-red active:border-red"
            >
              PARTIDOS BRASILEIROS
            </Link>
            <Link
              to="/readingGuide"
              className="py-3 tracking-widest no-underline hover:border-b-4 hover:border-red active:border-red"
            >
              GUIA DE LEITURA
            </Link>
            <Link
              to="/contact"
              className="py-3 tracking-widest no-underline hover:border-b-4 hover:border-red active:border-red"
            >
              CONTATO
            </Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}
