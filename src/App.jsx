import './styles/App.css'
import BackgroundFX from './components/BackgroundFX.jsx'
import Button from './components/Button.jsx'
import {
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import UserDashboard from './pages/User/Dashboard.jsx';
import MySubscriptions from './pages/User/MySubscriptions.jsx';
import Recommendations from './pages/User/Recommendations.jsx';
import Profile from './pages/User/Profile.jsx';
import AdminLogin from './pages/Admin/Login.jsx';
import AdminDashboard from './pages/Admin/Dashboard.jsx';
import ManagePlans from './pages/Admin/ManagePlans.jsx';
import ManageDiscounts from './pages/Admin/ManageDiscounts.jsx';
import Analytics from './pages/Admin/Analytics.jsx';

function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-indigo-500/15 text-indigo-400 ring-1 ring-inset ring-indigo-500/30">
            <span className="h-3 w-3 rounded-sm bg-indigo-400 shadow-[0_0_18px] shadow-indigo-500/60" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-white">SubScribeFlow</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            ['#features', 'Features'],
            ['#for-you', 'For You'],
            ['#for-business', 'For Business'],
            ['#pricing', 'Pricing']
          ].map(([href, label]) => (
            <a key={href} href={href} className="group relative text-sm font-semibold text-white/90 hover:text-white transition-colors">
              {label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button as={Link} to="/register" variant="primary" size="sm">
            Register
          </Button>
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-indigo-500/15 text-indigo-400 ring-1 ring-inset ring-indigo-500/30">
                <span className="h-3 w-3 rounded-sm bg-indigo-400 shadow-[0_0_18px] shadow-indigo-500/60" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">SubScribeFlow</span>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a className="hover:text-white" href="#features">Features</a></li>
              <li><a className="hover:text-white" href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a className="hover:text-white" href="#">About</a></li>
              <li><a className="hover:text-white" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Support</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a className="hover:text-white" href="#">Help</a></li>
              <li><a className="hover:text-white" href="#">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8">
          <p className="text-sm text-slate-400">© 2025 SubScribeFlow. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="#" className="hover:text-white" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-full relative">
        <BackgroundFX />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* User Routes */}
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/subscriptions" element={<MySubscriptions />} />
          <Route path="/user/recommendations" element={<Recommendations />} />
          <Route path="/user/profile" element={<Profile />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/manage-plans" element={<ManagePlans />} />
          <Route path="/admin/manage-discounts" element={<ManageDiscounts />} />
          <Route path="/admin/analytics" element={<Analytics />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App