
import React from 'react';
import { PaperclipIcon } from './icons';

interface ClickerButtonProps {
  onClick: () => void;
}

const ClickerButton: React.FC<ClickerButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group p-4 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-transform duration-150 ease-in-out active:scale-95"
      aria-label="Create a paperclip"
    >
      <div className="w-48 h-48 md:w-64 md:h-64 text-clip-gray-400 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300">
        <PaperclipIcon />
      </div>
    </button>
  );
};

export default ClickerButton;
