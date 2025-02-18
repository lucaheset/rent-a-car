import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Botão do Dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none"
      >
        Comprar
      </button>

      {/* Lista de Opções */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
            Novos
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
            Seminovos
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
            Motos
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;