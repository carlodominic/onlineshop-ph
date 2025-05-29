// src/components/layout/Navbar.tsx
'use client';

import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function Navbar() {
  const { user, loading, isHydrated } = useAuth();

  if (!isHydrated) {
    // Render minimal UI during hydration
    return (
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">GlobalTrade</Link>
          <div className="flex space-x-2">
            <div className="w-16 h-8 bg-gray-300 animate-pulse rounded"></div>
            <div className="w-20 h-8 bg-gray-300 animate-pulse rounded"></div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">GlobalTrade</Link>
          
          <div className="space-x-4 hidden md:flex">
            <Link href="/products" className="hover:text-blue-200">Products</Link>
            <Link href="/categories" className="hover:text-blue-200">Categories</Link>
          </div>

          <div className="flex space-x-2">
            {user ? (
              <Link href={`/${user.role}/dashboard`} className="px-4 py-2 rounded bg-white text-blue-600 hover:bg-blue-50">
                Dashboard
              </Link>
            ) : (
              <>
                <Link 
                  href="/auth/login" 
                  className="px-4 py-2 rounded bg-white text-blue-600 hover:bg-blue-50"
                >
                  Login
                </Link>
                <Link 
                  href="/auth/register" 
                  className="px-4 py-2 rounded bg-green-500 hover:bg-green-600"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}