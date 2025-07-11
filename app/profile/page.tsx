'use client';

import { useEffect, useState } from 'react';
import { getProfile } from '../../lib/api';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  name: string;
  email: string;
  activeSellingItems : number;
  activeLeadingBids : number;
  avatar : string;

}

export default function ProfilePage() {
  const [profile, setProfile] = useState<User| null>(null);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
      } 
      // catch (err: any) {
      //   setError(err.message || 'Impossible de charger le profil');
      //   if (err.message?.toLowerCase().includes('auth')) {
      //     router.push('/login');
      //   }
      // }
        catch (err: unknown) {
        if (err instanceof Error) {
              setError(err.message || 'Impossible de charger le profil');
            if (err.message?.toLowerCase().includes('auth')) {
              router.push('/login');
            }
        } 
      }
    };
    fetchProfile();
  }, []);

  if (error) return <p className="text-red-500 text-center">{error}</p>;

  if (!profile) return <p className="text-center text-gray-600">Chargement du profil...</p>;

  const avatarUrl = profile.avatar || `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(profile.name || profile.email)}`;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow rounded p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center text-indigo-600">👤 Mon profil</h2>

      <div className="flex items-center gap-4">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-20 h-20 rounded-full border border-gray-300"
        />
        <div>
          <p className="text-lg font-semibold">{profile.name}</p>
          <p className="text-gray-600">{profile.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-indigo-50 p-4 rounded text-center">
          <p className="text-sm text-gray-600">Objets en vente</p>
          <p className="text-xl font-bold text-indigo-700">{profile.activeSellingItems ?? 0}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded text-center">
          <p className="text-sm text-gray-600">Enchères où je suis leader</p>
          <p className="text-xl font-bold text-purple-700">{profile.activeLeadingBids ?? 0}</p>
        </div>
      </div>

      <div className="text-center">
        <a
          href="/items"
          className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Retour aux enchères
        </a>
      </div>
    </div>
  );
}
