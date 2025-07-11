'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '../../lib/api';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    setError('');

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Tous les champs sont obligatoires');
      return;
    }

    try {
      await registerUser({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password: password,
      });

      router.push('/login');
    } 
    // catch (err: any) {
    //   setError(err.message || "Erreur lors de l'enregistrement");
    // }
    catch (err: unknown) {
        if (err instanceof Error) {
          alert(err.message || "Erreur lors de l'enregistrement");
        } 
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-indigo-600">Créer un compte</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom d'utilisateur"
          className="w-full border border-gray-300 p-3 rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          className="w-full border border-gray-300 p-3 rounded"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700"
        >
          S'enregistrer
        </button>

        <p className="text-center text-sm text-gray-500">
          Déjà inscrit ? <a href="/login" className="text-indigo-600 underline">Se connecter</a>
        </p>
      </div>
    </div>
  );
}
