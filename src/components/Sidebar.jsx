import React, { useState } from 'react';

export default function Sidebar({
  items,
  className = '',
  ...props
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`flex ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 ${className}`} {...props}>
      <div className="flex flex-col h-full bg-surface border-r-2 border-black">
        <div className="p-lg border-b-2 border-black flex justify-between items-center">
          {!isCollapsed && (
            <h2 className="font-heading-card text-heading-card uppercase tracking-tight">
              Menu
            </h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-xs rounded-full bg-primary-container text-on-primary-container"
          >
            <span className="material-symbols-outlined">
              {isCollapsed ? 'menu' : 'close'}
            </span>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="flex items-center p-lg hover:bg-primary-container/10 transition-colors"
                >
                  <span className="material-symbols-outlined mr-lg">
                    {item.icon}
                  </span>
                  {!isCollapsed && (
                    <span className="font-label-bold text-label-bold">
                      {item.label}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
