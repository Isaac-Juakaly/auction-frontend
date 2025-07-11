'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../../lib/api';
import { saveToken } from '../../lib/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    setError('');
    if (!email || !password) {
      setError('Email et mot de passe requis');
      return;
    }

    try {
      const { token, user } = await loginUser(email.trim().toLowerCase(), password);
      console.log('✅ Login OK:', { token, user }); // pour debug
      saveToken(token);
      localStorage.setItem('userId', user.id);
      router.push('/items'); // ou page de tableau de bord
    } 
    // catch (err: any) {
    //   setError(err.message || 'Échec de connexion');
    // }
    catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || 'Échec de connexion');
        } 
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-indigo-600">Connexion</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700"
        >
          Se connecter
        </button>

        <p className="text-center text-sm text-gray-500">
          Pas encore de compte ? <a href="/register" className="text-indigo-600 underline">S'inscrire</a>
        </p>
      </div>
    </div>
  );
}
