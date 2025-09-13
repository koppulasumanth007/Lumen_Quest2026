import { Link } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import { Users, CreditCard, TrendingUp, Settings, BarChart, DollarSign } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-indigo-500/15 text-indigo-400 ring-1 ring-inset ring-indigo-500/30">
                <span className="h-3 w-3 rounded-sm bg-indigo-400 shadow-[0_0_18px] shadow-indigo-500/60" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">SubScribeFlow Admin</span>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-slate-300">Admin Panel</span>
              <Button variant="secondary" size="sm" onClick={() => window.location.href = '/'}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-slate-400 mt-2">Manage users, subscriptions, and system analytics</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-400">Total Users</p>
                <p className="text-2xl font-bold text-white">12,842</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-400">Monthly Revenue</p>
                <p className="text-2xl font-bold text-white">$94.2k</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <CreditCard className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-400">Active Subscriptions</p>
                <p className="text-2xl font-bold text-white">8,651</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-red-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-400">Churn Rate</p>
                <p className="text-2xl font-bold text-white">2.1%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">Management</h2>
            <div className="space-y-3">
              <Link to="/admin/manage-plans" className="block">
                <Button variant="secondary" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Manage Plans
                </Button>
              </Link>
              <Link to="/admin/manage-discounts" className="block">
                <Button variant="secondary" className="w-full justify-start">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Manage Discounts
                </Button>
              </Link>
              <Link to="/admin/analytics" className="block">
                <Button variant="secondary" className="w-full justify-start">
                  <BarChart className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
              </Link>
              <Button variant="secondary" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Manage Users
              </Button>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">New user registration</p>
                  <p className="text-slate-400 text-sm">john.doe@example.com</p>
                </div>
                <span className="text-green-400 text-sm">2 min ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Plan upgrade</p>
                  <p className="text-slate-400 text-sm">Basic → Growth</p>
                </div>
                <span className="text-blue-400 text-sm">5 min ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Subscription cancelled</p>
                  <p className="text-slate-400 text-sm">Growth plan</p>
                </div>
                <span className="text-red-400 text-sm">12 min ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Payment received</p>
                  <p className="text-slate-400 text-sm">Monthly billing</p>
                </div>
                <span className="text-green-400 text-sm">18 min ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mt-8 bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Revenue Overview</h2>
          <div className="h-64 flex items-center justify-center text-slate-400">
            {/* Placeholder for chart */}
            <div className="text-center">
              <BarChart className="h-16 w-16 mx-auto mb-4 text-slate-600" />
              <p>Revenue chart will be implemented here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
