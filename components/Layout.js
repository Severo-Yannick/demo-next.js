import { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{user, setUser}}>
      <Navbar />
      {children}
      <Footer />
    </UserContext.Provider>
  );
};

export default Layout;
