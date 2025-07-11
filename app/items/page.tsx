'use client';

import { useEffect, useState } from 'react';
import { getActiveItems } from '../../../lib/api';
import Link from 'next/link';

interface Item {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  startingPrice: number;
  auctionEndTime: number;
  soldTo?: string;
  auctionWonAmount?: number;
  isClosed: boolean;
}

export default function WonItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const id = localStorage.getItem('userId');
    if (id) setUserId(id);
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await getActiveItems();
      setItems(res);
    };
    fetchItems();
  }, []);

  const wonItems = items.filter(
    (item) => item.isClosed && item.soldTo === userId
  );

  return (
    <div className="space-y-6 px-4 md:px-8 py-6">
      <h2 className="text-3xl font-bold mb-4">🎯 Mes objets remportés</h2>

      {wonItems.length === 0 ? (
        <p className="text-gray-600">Vous n'avez remporté aucun objet pour le moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wonItems.map((item) => (
            <div key={item.id} className="border p-4 rounded bg-white shadow hover:shadow-lg transition">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded mb-3" />
              <h3 className="text-xl font-semibold text-indigo-700">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
              <p className="mt-2 font-medium">🏆 Remporté à : {item.auctionWonAmount ?? item.startingPrice}€</p>
              <p className="text-sm text-gray-500">Fin de l'enchère : {new Date(item.auctionEndTime).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
