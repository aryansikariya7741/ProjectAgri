import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const signupSchema = loginSchema.extend({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  userType: z.enum(['farmer', 'buyer', 'equipment_owner', 'logistics_partner']),
  phone: z.string().regex(/^\+?[1-9]\d{9,11}$/, 'Invalid phone number'),
});

type LoginFormData = z.infer<typeof loginSchema>;
type SignupFormData = z.infer<typeof signupSchema>;

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState(true);

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const signupForm = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onLoginSubmit = (data: LoginFormData) => {
    console.log('Login data:', data);
  };

  const onSignupSubmit = (data: SignupFormData) => {
    console.log('Signup data:', data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isLogin ? 'Sign in to your account' : 'Create your account'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {isLogin ? (
            <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    {...loginForm.register('email')}
                    type="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                  {loginForm.formState.errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {loginForm.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    {...loginForm.register('password')}
                    type="password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                  {loginForm.formState.errors.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {loginForm.formState.errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    {...signupForm.register('name')}
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                  {signupForm.formState.errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {signupForm.formState.errors.name.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    {...signupForm.register('email')}
                    type="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                  {signupForm.formState.errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {signupForm.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    {...signupForm.register('phone')}
                    type="tel"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                  {signupForm.formState.errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {signupForm.formState.errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
                  User Type
                </label>
                <div className="mt-1">
                  <select
                    {...signupForm.register('userType')}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="farmer">Farmer</option>
                    <option value="buyer">Buyer</option>
                    <option value="equipment_owner">Equipment Owner</option>
                    <option value="logistics_partner">Logistics Partner</option>
                  </select>
                  {signupForm.formState.errors.userType && (
                    <p className="mt-1 text-sm text-red-600">
                      {signupForm.formState.errors.userType.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    {...signupForm.register('password')}
                    type="password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                  {signupForm.formState.errors.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {signupForm.formState.errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Sign up
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;