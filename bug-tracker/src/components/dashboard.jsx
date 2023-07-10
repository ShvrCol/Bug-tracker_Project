import React from 'react';
import '../components/dashboard.css';
import user from '../img/user.png';

const Dashboard = () => {
  return (
    <div className='flex'>
    <div className={'w-60 h-screen p-5 pt-8 bg-dark-green relative'}>
        <div className='flex gap-x-4 items-center'>
        <img src={user} alt="" className={'cursor-pointer duration-500'}/>
        <h1 className={'text-white origin-left font-medium text-xl duration-300'}>User</h1>
        </div>
    </div>
    <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
        <h1>Dashboard</h1>
    </div>
    </div>
  );
};

export default Dashboard;