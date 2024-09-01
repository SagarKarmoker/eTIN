import React from 'react';

function OrgDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Main Content Area */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Navigation</h2>
            <nav>
              <ul>
                <li className="mb-4">
                  <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                    Dashboard
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                    Manage Users
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                    Reports
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-grow p-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">Welcome to the Organization Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Users</h3>
              <p className="text-gray-600">Manage your users and their roles within the organization.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Reports</h3>
              <p className="text-gray-600">View and generate reports to monitor organization performance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Settings</h3>
              <p className="text-gray-600">Configure your organization's settings and preferences.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default OrgDashboard;
