import Link from "next/link";

export default function Register() {
  return (
    <div className="container w-1/2">
      <h1 className="title">Register</h1>

      <form action="" className="space-y-4">
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" />
        </div>

        <div className="flex items-end gap-4">
          <button className="btn-primary">Register</button>

          <Link href="/" className="text-link">
            or login here
          </Link>
        </div>
      </form>
    </div>
  );
}
