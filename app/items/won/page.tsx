// // // app/items/won/page.tsx (voir objets achetés)
// // 'use client';
// // import { useState } from 'react';
// // import { getItemsWonByUser } from '../../../lib/api';

// // export default function WonItemsPage() {
// //   const [userId, setUserId] = useState('');
// //   const [items, setItems] = useState<any[]>([]);

// //   const fetchItems = async () => {
// //     const res = await getItemsWonByUser(userId);
// //     setItems(res);
// //   };

// //   const now = Date.now();

// //   return (
// //     <div className="space-y-4">
// //       <h2 className="text-3xl font-bold">Objets que j'ai achetés</h2>
// //       <input value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Votre ID utilisateur" className="border p-2 w-full" />
// //       <button onClick={fetchItems} className="bg-green-600 text-white px-4 py-2 rounded">Voir mes achats</button>
// //       <ul className="space-y-2">
// //         {items.map(item => (
// //           <li key={item.id} className="border p-2 bg-white shadow rounded">
// //             <p className="font-semibold">{item.description}</p>
// //             <p>Montant remporté : {item.currentHighestBid?.amount || 'N/A'}€</p>
// //             <p className={Number(item.auctionEndTime) < now ? 'text-red-600' : 'text-green-600'}>
// //               {Number(item.auctionEndTime) < now ? '⏹️ Terminé' : '⏳ En cours'}
// //             </p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// 'use client';
// import { useState, useEffect } from 'react';
// import { getItemsWonByUser, getProfile } from '../../../lib/api';

// export default function WonItemsPage() {
//   const [items, setItems] = useState<any[]>([]);
//   const [error, setError] = useState('');
//   const now = Date.now();

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const user = await getProfile();
//         const data = await getItemsWonByUser(user.email);
//         setItems(data);
//       } catch (e: any) {
//         setError(e.message || 'Erreur');
//       }
//     };
//     fetch();
//   }, []);

//   return (
//     <div className="space-y-4">
//       <h2 className="text-3xl font-bold">Objets que j'ai achetés</h2>
//       {error && <p className="text-red-600">{error}</p>}
//       <ul className="space-y-2">
//         {items.map(item => (
//           <li key={item.id} className="border p-2 bg-white shadow rounded">
//             <p className="font-semibold">{item.description}</p>
//             <p>Montant remporté : {item.currentHighestBid?.amount || 'N/A'}€</p>
//             <p className={Number(item.auctionEndTime) < now ? 'text-red-600' : 'text-green-600'}>
//               {Number(item.auctionEndTime) < now ? '⏹️ Terminé' : '⏳ En cours'}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getItemsWonByUser, getProfile ,deregisterUser} from '../../../lib/api';


interface Bid {
  id: string;
  amount: number;
  bidderName: string;
  bidderId: string,
  itemId: string,
  timestamp: number,
}

interface Item {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  startingPrice: number;
  auctionEndTime: number | string;
  bids?: Bid[];
  currentHighestBid?: Bid;
  currentHighestBidderName: Bid;
  enrichedHighestBid : Bid;

}

interface User {
  id: string;
  name: string;
  email: string;
}

export default function WonItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [me, setMe] = useState<User| null>(null);
  const [error, setError] = useState('');
  const now = Date.now();

  useEffect(() => {
    const fetch = async () => {
      try {
        const profile = await getProfile();
        setMe(profile);
        const wonItems = await getItemsWonByUser(profile.email);
        setItems(wonItems);
      } 
      // catch (e: any) {
      //   setError(e.message || 'Erreur');
      // }
      catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || 'Erreur');
        } else {
          setError('Erreur inattendue');
        }
      }
    };
    fetch();
  }, []);

  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-6">
      {/* HEADER DASHBOARD */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-3xl font-bold">Objets remportés par moi</h2>
        <div className="flex flex-wrap gap-2 md:justify-end w-full md:w-auto">
          <Link href="/items" className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">🏠 Enchères</Link>
          <Link href="/items/sold" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">🛒 Mes ventes</Link>
          <Link href="/items/new" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow">🎁 Vendre</Link>
          <Link href="/profile" className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">👤 Profil</Link>
          <button
                        onClick={async () => {
                          try {
                            await deregisterUser();
                            localStorage.removeItem('token');
                            localStorage.removeItem('userId');
                            window.location.href = '/login';
                          } 
                          // catch (e: any) {
                          //   alert(`❌ Désinscription impossible : ${e.message}`);
                          // }
                          catch (err: unknown) {
                            if (err instanceof Error) {
                              alert(`❌ Désinscription impossible : ${err.message}`);
                            } else {
                              setError('Erreur inattendue');
                            }
                          }
                        }}
                        className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200"
                      >
                          🚪 Déconnexion
                      </button>
        </div>
      </div>

      {/* LISTE DES OBJETS */}
      <ul className="space-y-4">
        {items.map((item) => {
          const isEnded = Number(item.auctionEndTime) < now;
          // const isWinner = item.currentHighestBid?.bidderId === me?.id;
          // const amount = item.currentHighestBid?.amount;
          const isWinner = item.enrichedHighestBid?.bidderId === me?.id;
          const amount = item.enrichedHighestBid?.amount;

          const endDate = new Date(Number(item.auctionEndTime)).toLocaleString();

          return (
            <li
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-center gap-4 border p-4 bg-white shadow rounded"
            >
              {/* Texte à gauche */}
              <div className="flex-1 space-y-1">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p>{item.description}</p>
                <p>🏷️ Prix final : <span className="font-semibold">{amount} €</span></p>
                <p>📅 Fin de l’enchère : <span>{endDate}</span></p>
                <p className={
                  isEnded
                    ? isWinner ? 'text-green-700' : 'text-red-600'
                    : 'text-gray-600'
                }>
                  {isEnded
                    ? isWinner
                      ? '✅ Vous avez remporté cet objet'
                      : '❌ Enchère perdue'
                    : '⏳ Enchère en cours'}
                </p>
              </div>

              {/* Image à droite */}
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full md:w-48 h-32 object-cover rounded"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
