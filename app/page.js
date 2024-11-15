import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-10">
      <Link href={"/auth/"}>
        <div className="auth mt-10 w-max rounded border-2 border-black p-5">
          <h1 className="text-xl font-bold">Auth</h1>
          <p className="tetx-center">
            This page contains a create user, login, logout and forgot password
            functionalities
          </p>
        </div>
      </Link>
    </div>
  );
}
