import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='mt-6'>
      <div className="flex sm:gap-6 justify-center my-6 w-full">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`p-2 cursor-pointer rounded-md min-w-24 text-center font-Montserrat text-sm sm:py-2 sm:px-4 ${
              index === activeTab ? 'bg-text-gray text-white' : 'bg-transparent text-white'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
