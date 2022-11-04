import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../contexts/UserContext";

const auth = () => {
  const { setUser } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  const getUser = (e) => {
    e.preventDefault();
    if (userName) {
      setUser(userName);
      router.push("/");
    }
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <form className="form" onSubmit={getUser}>
        <input type="text" onChange={handleChange} />
        <button>Entrer</button>
      </form>
    </div>
  );
};

export default auth;
