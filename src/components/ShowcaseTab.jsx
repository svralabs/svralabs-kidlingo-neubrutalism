import { useState } from 'react';

export default function ShowcaseTab({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="flex overflow-x-auto border-b-2 border-black">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 font-label-bold text-sm uppercase ${
              activeTab === index
                ? 'bg-primary-container text-on-primary-container border-b-2 border-black'
                : 'bg-white text-on-surface-variant hover:bg-background'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
