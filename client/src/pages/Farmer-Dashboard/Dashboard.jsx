import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex-1">
        <Header />
        <DashboardCards />
      </div>
    </div>
  );
};

export default Dashboard;
