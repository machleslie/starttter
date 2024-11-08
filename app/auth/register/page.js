export default function page() {
  return (
    <div>
      <div className="">
        <div className="mx-auto">
          <div className="m-auto w-3/5 rounded-lg border-black px-28 py-16">
            <div className="mb-8">
              <h1 className="text-7xl font-bold text-gray-800">Create User </h1>
              <p className="mt-4 text-xl text-gray-600">Create a new account</p>
            </div>

            <form action="" className="flex flex-col gap-8">
              <input
                type="email"
                placeholder="Email"
                className="h-12 rounded-md border-2 border-gray-300 p-2"
                name="email"
              />
              <input
                type="text"
                placeholder="Username"
                className="h-12 rounded-md border-2 border-gray-300 p-2"
                name="username"
              />
              <input
                type="Password"
                placeholder="Password"
                className="h-12 rounded-md border-2 border-gray-300 p-2"
                name="password"
              />
              <button className="h-12 rounded-md bg-gray-800 text-white">
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
