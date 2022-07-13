import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/Directory.Component";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
