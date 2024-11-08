import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-10 ">
      <Link href={"/auth/"}>
      <div className="auth border-black border-2 p-5 rounded  w-max mt-10" >
        <h1 className="font-bold text-xl">Auth</h1>
        <p className="tetx-center">This page contains a create user, login, logout and forgot password functionalities</p>
      </div>
      </Link>
    </div>
  );
}
