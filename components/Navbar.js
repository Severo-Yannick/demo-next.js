import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/blog">Blog</Link>
      {user && <Link href="/dashboard">Dashboard</Link>}
      {!user && <Link href="/user/auth">Login</Link>}
      {user && (
        <Link href="/">
          <button onClick={() => setUser(null)}>
            Hello <span>{user}</span> | Logout
          </button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
