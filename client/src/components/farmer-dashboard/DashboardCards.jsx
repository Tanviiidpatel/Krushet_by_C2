const DashboardCards = () => {
    const stats = [
      { title: "Total Orders", value: "15", color: "bg-blue-500" },
      { title: "Total Earnings", value: "₹50,000", color: "bg-green-500" },
      { title: "Active Crops", value: "5", color: "bg-yellow-500" },
      { title: "Pending Deliveries", value: "3", color: "bg-red-500" },
    ];
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {stats.map((stat, index) => (
          <div key={index} className={`p-4 text-white rounded-lg shadow-md ${stat.color}`}>
            <h3 className="text-lg font-semibold">{stat.title}</h3>
            <p className="text-2xl">{stat.value}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default DashboardCards;
  