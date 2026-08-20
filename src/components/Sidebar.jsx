import React from 'react';

const Sidebar = ({ items, activeItem }) => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-primary-container border-r-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-40">
      <div className="h-16 flex items-center px-gutter border-b-2 border-black">
        <span className="font-headline-main-mobile text-headline-main-mobile font-black text-on-primary">Thirtyspace</span>
      </div>
      <nav className="p-md">
        <ul className="space-y-sm">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`block p-sm font-body-md ${item.name === activeItem ? 'text-on-primary-container underline decoration-2 underline-offset-4' : 'text-on-primary-container/80'} hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
