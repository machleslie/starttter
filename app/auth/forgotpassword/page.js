import Form from "next/form";

export default function page() {
  return (
    <div className="mx-40">
      <div className="text-center">
        <h1 className="my-4 text-center text-7xl font-bold text-gray-800">
          Forgot password ?
        </h1>
        <p className="my-4 text-center text-gray-600">
          Enter your email address below and we&apos;ll send you a link to reset
          your password.
        </p>
      </div>
      <Form className="flex flex-col items-center justify-center">
        <input
          type="email"
          placeholder="Email"
          className="my-4 h-12 w-1/2 rounded-md border-2 border-gray-300 p-2"
        />
        <button className="my-4 h-12 w-1/2 rounded-md bg-gray-800 text-white">
          Send reset link
        </button>
      </Form>
    </div>
  );
}
