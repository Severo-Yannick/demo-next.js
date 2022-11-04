import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div>{user ? "Dashboard" : "You are not connected !"}</div>
  );
};

export default Dashboard;
