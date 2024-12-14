import NavLink from "./NavLink";

export default function Navigation() {
  return (
    <nav>
      <NavLink label="Home" href="/" />
      <div>
        <NavLink label="Register" href="/register" />
        <NavLink label="Login" href="/login" />
        <NavLink label="Dashboard" href="/dashboard" />
      </div>
    </nav>
  );
}
