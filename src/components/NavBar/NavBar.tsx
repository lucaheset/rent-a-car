import React from 'react'
import CustomButton from '../Button/CustomButton'
import Dropdown from '../Dropdown/Dropdown';

const NavBar = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-red-600">Rent-a-Car</h1>
      <nav className="flex space-x-4">
        <Dropdown />
        <a href="#" className="text-gray-700 hover:text-red-600">Vender</a>
        <a href="#" className="text-gray-700 hover:text-red-600">Financiamento</a>
      </nav>
    </header>
  );
};
export default NavBar