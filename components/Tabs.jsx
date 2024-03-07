import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='mt-6'>
      <div className="flex gap-6 justify-center my-6">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer py-2 px-4 rounded-md min-w-24 text-center font-Montserrat ${
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