export default function ResetPassword() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-medium mb-10 ">Reset Password</h1>

      <form className="flex flex-col w-96 mx-auto space-y-4" method="post">
        <input
          className="border rounded-md py-2 px-3 w-96"
          type="password"
          id="currentPassword"
          name="currentPassword"
          placeholder="current password"
        />

        <input
          className="border rounded-md py-2 px-3 w-96"
          type="password"
          id="newPassword"
          name="newPassword"
          placeholder="new password"
        />

        <button
          className="bg-black text-white border rounded-md py-2 px-4"
          type="submit"
        >
          Reset
        </button>
      </form>
    </div>
  );
}
