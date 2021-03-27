import React from 'react';

const NavMenuBtn = ({
    setShowProfileDropdown,
}) => {
    return (
        <div className="flex items-center xl:hidden">
            {/* Mobile menu button */}
            <button 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" 
                aria-expanded="false"
                onClick={() => setShowProfileDropdown(true)}
            >
                <span className="sr-only">Open main menu</span>

                {/* menu 按鈕 icon */}
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

            </button>
        </div>
    );
};

export default NavMenuBtn;