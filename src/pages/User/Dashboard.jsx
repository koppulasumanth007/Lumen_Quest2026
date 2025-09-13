import { Link } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import ThemeToggle from '../../components/ThemeToggle.jsx';
import { BarChart, Bell, User, CreditCard } from 'lucide-react';

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Navigation Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-indigo-500/15 text-indigo-400 ring-1 ring-inset ring-indigo-500/30">
                <span className="h-3 w-3 rounded-sm bg-indigo-400 shadow-[0_0_18px] shadow-indigo-500/60" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">SubScribeFlow</span>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 dark:text-slate-300">Welcome, User!</span>
              <ThemeToggle />
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-slate-400 mt-2">Manage your subscriptions and account settings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-indigo-500/10 rounded-lg">
                <CreditCard className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-slate-400">Active Subscriptions</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <BarChart className="h-6 w-6 text-green-500 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-slate-400">Monthly Spend</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">$67</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-500/10 rounded-lg">
                <Bell className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-slate-400">Upcoming Renewals</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">2</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <User className="h-6 w-6 text-purple-500 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-slate-400">Account Status</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">Active</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link to="/user/subscriptions" className="block">
                <Button variant="secondary" className="w-full justify-start">
                  View My Subscriptions
                </Button>
              </Link>
              <Link to="/user/recommendations" className="block">
                <Button variant="secondary" className="w-full justify-start">
                  Get Recommendations
                </Button>
              </Link>
              <Link to="/user/profile" className="block">
                <Button variant="secondary" className="w-full justify-start">
                  Update Profile
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Netflix Subscription</p>
                  <p className="text-gray-600 dark:text-slate-400 text-sm">Renewed today</p>
                </div>
                <span className="text-green-500 dark:text-green-400 text-sm font-medium">$15.99</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Spotify Premium</p>
                  <p className="text-gray-600 dark:text-slate-400 text-sm">Expires in 5 days</p>
                </div>
                <span className="text-yellow-500 dark:text-yellow-400 text-sm font-medium">$9.99</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Adobe Creative Cloud</p>
                  <p className="text-gray-600 dark:text-slate-400 text-sm">Renewed 3 days ago</p>
                </div>
                <span className="text-green-500 dark:text-green-400 text-sm font-medium">$52.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}