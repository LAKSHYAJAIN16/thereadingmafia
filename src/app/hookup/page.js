"use client";
import { useUser } from "@/contexts/useUser";

export default function Hookup() {
  const { user, setUser, loading, connectionError } = useUser();

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-8xl logo-bold text-center mt-7">
        thereading<span className="text-red-500">mafia</span>
      </h1>
      <h3 className="text-center mt-2 logo-light">
        the underground community of the most serious readers.
      </h3>

      <br />
      <button className="signUpButton font googleButton">
        <img src="/search.png" height={25} width={25} className="mr-2"/>
        <p>Sign in with Google</p>
      </button>
    </div>
  );
}
