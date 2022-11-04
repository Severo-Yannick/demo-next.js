import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav>
      <Link href="/" className={currentRoute === "/" ? "active" : ""}>
        Home
      </Link>
      <Link href="/about" className={currentRoute === "/about" ? "active" : ""}>
        About
      </Link>
      <Link
        href="/contact"
        className={currentRoute === "/contact" ? "active" : ""}
      >
        Contact
      </Link>
      <Link href="/blog" className={currentRoute === "/blog" ? "active" : ""}>
        Blog
      </Link>
      {user && (
        <Link
          href="/dashboard"
          className={currentRoute === "/dashboard" ? "active" : ""}
        >
          Dashboard
        </Link>
      )}
      {!user && (
        <Link
          href="/user/auth"
          className={currentRoute === "/user/auth" ? "active" : ""}
        >
          Login
        </Link>
      )}
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
