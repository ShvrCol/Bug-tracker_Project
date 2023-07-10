import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/dashboard.css';
import user from '../img/user.png';
import report from '../img/report.png';
import logout from '../img/logout.png';
import timemanage from '../img/t&r.png';
import dashicon from '../img/dashboard.png';
import manage from '../img/manage.png';


const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
      // Perform logout actions or clear user session if necessary
      // Then navigate to the login page
      navigate('/loginpage');
    };
    
  const Menus = [
    { title: "Dashboard", src: dashicon },
    { title: "Time & Resources Management", src: timemanage },
    { title: "Manage Project", src: manage },
    { title: "Report", src: report },
    { title: "Log Out", src: logout, gap: true, onClick: handleLogout },
  ];

  return (
    <div className="flex">
      <div className="w-60 h-screen p-5 pt-8 bg-dark-green relative">
        <div className="flex gap-x-4 items-center">
          <img src={user} alt="" style={{ height: '30px', width: '30px' }}/>
          <h1 className="text-white origin-left font-medium text-xl duration-300">Baghiz</h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"}`}
              onClick={Menu.onClick}
            >
              <img src={Menu.src} alt="" className="w-5 h-5" />
              <span>{Menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
