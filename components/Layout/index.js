import React from 'react';

function Layout({children}) {
  return (
    <div className="min-h-screen flex flex-col">
        <div className="flex">
          {/* <SideBar /> */}
          <main className="flex-1">
            {/* <Header /> */}
            <div className="app-body">
              {children}
            </div>
          </main>
        </div>
      </div>
  );
}

export default Layout;