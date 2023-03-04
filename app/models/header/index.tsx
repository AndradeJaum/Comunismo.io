import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export default function Header() {
  const user = useOptionalUser();
  return (
    <main className="flex h-20 w-screen text-white justify-between	">
      <nav className="flex items-center justify-center gap-1 px-4">
        <Link
          to="/capitalismo"
          className="rounded-2xl px-2 py-1 tracking-widest no-underline hover:bg-red-dark"
        >
          Capitalismo
        </Link>
        <Link
          to="/"
          className="rounded-2xl px-2 py-1 tracking-widest no-underline hover:bg-red-dark"
        >
          Socialismo
        </Link>
        <Link
          to="/"
          className="rounded-2xl px-2 py-1 tracking-widest no-underline hover:bg-red-dark"
        >
          Comunismo
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
