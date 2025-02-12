import { useAuth } from "../../hooks/context/AuthContext";
const Dashboard = () => {
  const { name } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      {name ? (
        <h2>
          Welcome, {name.fullname?.firstname || "Unknown"}
          {name.fullname?.lastname || "User"}!
        </h2>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Dashboard;
