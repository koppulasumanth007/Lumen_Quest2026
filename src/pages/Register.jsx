import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button.jsx';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // TODO: Implement actual registration logic
    console.log('User registration attempt:', formData);
    
    // For now, just navigate to login
    navigate('/login');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link to="/" className="flex items-center justify-center gap-2 mb-8">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-indigo-500/15 text-indigo-400 ring-1 ring-inset ring-indigo-500/30">
              <span className="h-3 w-3 rounded-sm bg-indigo-400 shadow-[0_0_18px] shadow-indigo-500/60" />
            </span>
            <span className="text-xl font-extrabold tracking-tight text-white">SubScribeFlow</span>
          </Link>
          <h2 className="text-center text-3xl font-extrabold text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-slate-400">
            Or{' '}
            <Link to="/login" className="font-medium text-indigo-400 hover:text-indigo-300">
              sign in to your existing account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-300">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-slate-600 placeholder-slate-400 text-white bg-slate-800 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                Email ID
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-slate-600 placeholder-slate-400 text-white bg-slate-800 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your email ID"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-slate-300">
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-slate-600 placeholder-slate-400 text-white bg-slate-800 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-slate-600 placeholder-slate-400 text-white bg-slate-800 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-slate-600 placeholder-slate-400 text-white bg-slate-800 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="agree-terms"
              name="agree-terms"
              type="checkbox"
              required
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-600 rounded bg-slate-800"
            />
            <label htmlFor="agree-terms" className="ml-2 block text-sm text-slate-300">
              I agree to the{' '}
              <a href="#" className="text-indigo-400 hover:text-indigo-300">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-indigo-400 hover:text-indigo-300">
                Privacy Policy
              </a>
            </label>
          </div>

          <div>
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
