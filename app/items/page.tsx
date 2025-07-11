// // // // // // app/items/page.tsx (voir objets en cours avec filtre + image + titre + bouton vente)

// // // 'use client';
// // // import { useEffect, useState } from 'react';
// // // import { getActiveItems } from '../../lib/api';
// // // import Link from 'next/link';

// // // export default function ItemsPage() {
// // //   const [items, setItems] = useState<any[]>([]);
// // //   const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all');

// // //   useEffect(() => {
// // //     const fetchItems = async () => {
// // //       const res = await getActiveItems();
// // //       console.log("📦 Items reçus:", res); // Ajoute ceci
// // //       setItems(res);
// // //     };
// // //     fetchItems();
// // //   }, []);

// // //   const now = Date.now();

// // //   const filteredItems = items.filter((item) => {
// // //     const isEnded = Number(item.auctionEndTime) < now;
// // //     if (filter === 'open') return !isEnded;
// // //     if (filter === 'closed') return isEnded;
// // //     return true;
// // //   });

// // //   return (
// // //     <div className="space-y-6 px-4 md:px-8 py-6">
// // //       {/* ✅ HEADER enrichi */}
// // //       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
// // //         <h2 className="text-3xl font-bold">Objets aux enchères</h2>

// // //         <div className="flex flex-wrap gap-2">
// // //           <Link href="/items/won" className="bg-purple-100 text-purple-800 px-4 py-2 rounded hover:bg-purple-200">🎯 Mes achats</Link>
// // //           <Link href="/items/sold" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">🛒 Mes ventes</Link>
// // //           <Link href="/items/new" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow">🎁 Vendre un objet</Link>
// // //           <Link href="/profile" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">👤 Mon profil</Link>
// // //           <button
// // //             onClick={() => {
// // //               localStorage.removeItem('token');
// // //               localStorage.removeItem('userId');
// // //               window.location.href = '/login';
// // //             }}
// // //             className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200"
// // //           >
// // //             🚪 Déconnexion
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Filtres */}
// // //       <div className="flex flex-wrap items-center gap-3">
// // //         <button onClick={() => setFilter('all')} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Tous</button>
// // //         <button onClick={() => setFilter('open')} className="bg-green-100 text-green-800 px-4 py-2 rounded hover:bg-green-200">🟢 En cours</button>
// // //         <button onClick={() => setFilter('closed')} className="bg-red-100 text-red-800 px-4 py-2 rounded hover:bg-red-200">🔴 Terminés</button>
// // //       </div>

// // //       {/* Liste des objets */}
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {filteredItems.map((item: any) => (
// // //           <div key={item.id} className="border p-4 rounded bg-white shadow hover:shadow-lg transition duration-200">
// // //             <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded mb-3" />
// // //             <h3 className="text-xl font-semibold text-indigo-700">{item.title}</h3>
// // //             <p className="text-gray-700">{item.description}</p>
// // //             <p className="mt-2 font-medium">Prix de départ : {item.startingPrice}€</p>

// // //             {item.currentHighestBid && (
// // //               // <p className="text-gray-800 mt-1">
// // //               //   💰 <span className="font-semibold">{item.currentHighestBid.amount}€</span>
// // //               //   {item.currentHighestBidderName && (
// // //               //     <span className="text-sm text-gray-500"> (par {item.currentHighestBidderName})</span>
// // //               //   )}
// // //               // </p>
// // //               <p className="text-gray-800 mt-1">
// // //                 💰 <span className="font-semibold">
// // //                   {(item.currentHighestBid?.amount ?? item.startingPrice)}€
// // //                 </span>
// // //                 {item.currentHighestBidderName && (
// // //                   <span className="text-sm text-gray-500"> (par {item.currentHighestBidderName})</span>
// // //                 )}
// // //               </p>
// // //             )}

// // //             <p className={Number(item.auctionEndTime) < now ? 'text-red-600' : 'text-green-600'}>
// // //               {Number(item.auctionEndTime) < now ? '⏹️ Terminé' : '⏳ En cours'}
// // //             </p>
// // //             <Link
// // //               href={`/bid/${item.id}`}
// // //               className="inline-block mt-3 text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
// // //             >
// // //               Enchérir
// // //             </Link>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // app/items/page.tsx (liste des objets avec filtre + image + titre + bouton vente)

// // 'use client';
// // import { useEffect, useState } from 'react';
// // import { getActiveItems } from '../../lib/api';
// // import Link from 'next/link';

// // export default function ItemsPage() {
// //   const [items, setItems] = useState<any[]>([]);
// //   const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all');

// //   useEffect(() => {
// //     const fetchItems = async () => {
// //       const res = await getActiveItems();
// //       console.log("📦 Items reçus:", res);
// //       setItems(res);
// //     };
// //     fetchItems();
// //   }, []);

// //   const now = Date.now();

// //   const filteredItems = items.filter((item) => {
// //     const isEnded = Number(item.auctionEndTime) < now;
// //     if (filter === 'open') return !isEnded;
// //     if (filter === 'closed') return isEnded;
// //     return true;
// //   });

// //   return (
// //     <div className="space-y-6 px-4 md:px-8 py-6">
// //       {/* HEADER */}
// //       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
// //         <h2 className="text-3xl font-bold">Objets aux enchères</h2>

// //         <div className="flex flex-wrap gap-2">
// //           <Link href="/items/won" className="bg-purple-100 text-purple-800 px-4 py-2 rounded hover:bg-purple-200">🎯 Mes achats</Link>
// //           <Link href="/items/sold" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">🛒 Mes ventes</Link>
// //           <Link href="/items/new" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow">🎁 Vendre un objet</Link>
// //           <Link href="/profile" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">👤 Mon profil</Link>
// //           <button
// //             onClick={() => {
// //               localStorage.removeItem('token');
// //               localStorage.removeItem('userId');
// //               window.location.href = '/login';
// //             }}
// //             className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200"
// //           >
// //             🚪 Déconnexion
// //           </button>
// //         </div>
// //       </div>

// //       {/* Filtres */}
// //       <div className="flex flex-wrap items-center gap-3">
// //         <button onClick={() => setFilter('all')} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Tous</button>
// //         <button onClick={() => setFilter('open')} className="bg-green-100 text-green-800 px-4 py-2 rounded hover:bg-green-200">🟢 En cours</button>
// //         <button onClick={() => setFilter('closed')} className="bg-red-100 text-red-800 px-4 py-2 rounded hover:bg-red-200">🔴 Terminés</button>
// //       </div>

// //       {/* Liste des objets */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {filteredItems.map((item: any) => (
          
// //           <div key={item.id} className="border p-4 rounded bg-white shadow hover:shadow-lg transition duration-200">
// //             <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded mb-3" />
// //             <h3 className="text-xl font-semibold text-indigo-700">{item.title}</h3>
// //             <p className="text-gray-700">{item.description}</p>
// //             <p className="mt-2 font-medium">Prix de départ : {item.startingPrice}€</p>

// //             <p className="text-gray-800 mt-1">
// //               💰 <span className="font-semibold">
// //                 {item.currentHighestBid ? `${item.currentHighestBid.amount}€` : `${item.startingPrice}€ (prix de départ)`}
// //               </span>
// //               {item.currentHighestBidderName && (
// //                 <span className="text-sm text-gray-500"> (par {item.currentHighestBidderName})</span>
// //               )}
// //             </p>

// //             <p className={Number(item.auctionEndTime) < now ? 'text-red-600' : 'text-green-600'}>
// //               {Number(item.auctionEndTime) < now ? '⏹️ Terminé' : '⏳ En cours'}
// //             </p>
// //             <Link
// //               href={`/bid/${item.id}`}
// //               className="inline-block mt-3 text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
// //             >
// //               Enchérir
// //             </Link>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';
// import { useEffect, useState } from 'react';
// import { getActiveItems } from '../../lib/api';
// import Link from 'next/link';

// export default function ItemsPage() {
//   const [items, setItems] = useState<any[]>([]);
//   const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all');

//   useEffect(() => {
//     const fetchItems = async () => {
//       const res = await getActiveItems();
//       console.log("📦 Items reçus:", res);
//       setItems(res);
//     };
//     fetchItems();
//   }, []);

//   const now = Date.now();

//   // const filteredItems = items.filter((item) => {
//   //   const isEnded = Number(item.auctionEndTime) < now;
//   //   if (filter === 'open') return !isEnded;
//   //   if (filter === 'closed') return isEnded;
//   //   return true;
//   // });
//   const filteredItems = items.filter((item) => {
//     if (filter === 'open') return !item.isClosed;
//     if (filter === 'closed') return item.isClosed;
//     return true;
//   });


//   return (
//     <div className="space-y-6 px-4 md:px-8 py-6">
//       {/* HEADER */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <h2 className="text-3xl font-bold">Objets aux enchères</h2>

//         <div className="flex flex-wrap gap-2">
//           <Link href="/items/won" className="bg-purple-100 text-purple-800 px-4 py-2 rounded hover:bg-purple-200">🎯 Mes achats</Link>
//           <Link href="/items/sold" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">🛒 Mes ventes</Link>
//           <Link href="/items/new" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow">🎁 Vendre un objet</Link>
//           <Link href="/profile" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">👤 Mon profil</Link>
//           <button
//             onClick={() => {
//               localStorage.removeItem('token');
//               localStorage.removeItem('userId');
//               window.location.href = '/login';
//             }}
//             className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200"
//           >
//             🚪 Déconnexion
//           </button>
//         </div>
//       </div>

//       {/* Filtres */}
//       <div className="flex flex-wrap items-center gap-3">
//         <button onClick={() => setFilter('all')} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Tous</button>
//         <button onClick={() => setFilter('open')} className="bg-green-100 text-green-800 px-4 py-2 rounded hover:bg-green-200">🟢 En cours</button>
//         <button onClick={() => setFilter('closed')} className="bg-red-100 text-red-800 px-4 py-2 rounded hover:bg-red-200">🔴 Terminés</button>
//       </div>

//       {/* Liste des objets */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredItems.map((item: any) => {
//           // Calcul du meilleur montant d'enchère à partir des bids
//           const highestBidAmount = item.bids && item.bids.length > 0
//             ? Math.max(...item.bids.map((bid: any) => bid.amount))
//             : null;

//           return (
//             <div key={item.id} className="border p-4 rounded bg-white shadow hover:shadow-lg transition duration-200">
//               <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded mb-3" />
//               <h3 className="text-xl font-semibold text-indigo-700">{item.title}</h3>
//               <p className="text-gray-700">{item.description}</p>
//               <p className="mt-2 font-medium">Prix de départ : {item.startingPrice}€</p>

//               <p className="text-gray-800 mt-1">
//                 💰 <span className="font-semibold">
//                   {highestBidAmount !== null ? `${highestBidAmount}€` : `${item.startingPrice}€ (prix de départ)`}
//                 </span>
//                 {item.currentHighestBidderName && (
//                   <span className="text-sm text-gray-500"> (par {item.currentHighestBidderName})</span>
//                 )}
//               </p>

//               {/* <p className={Number(item.auctionEndTime) < now ? 'text-red-600' : 'text-green-600'}>
//                 {Number(item.auctionEndTime) < now ? '⏹️ Terminé' : '⏳ En cours'}
//               </p> */}
//               <p className={item.isClosed ? 'text-red-600' : 'text-green-600'}>
//                   {item.isClosed ? '⏹️ Terminé' : '⏳ En cours'}
//               </p>

//               <Link
//                 href={`/bid/${item.id}`}
//                 className="inline-block mt-3 text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
//               >
//                 Enchérir
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// 'use client';
// import { useEffect, useState } from 'react';
// import { getActiveItems } from '../../lib/api';
// import Link from 'next/link';

// export default function ItemsPage() {
//   const [items, setItems] = useState<any[]>([]);
//   const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all');

//   useEffect(() => {
//     const fetchItems = async () => {
//       const res = await getActiveItems();
//       console.log("📦 Items reçus:", res);
//       setItems(res);
//     };
//     fetchItems();
//   }, []);

//   // ⏱️ Déclencher un re-render toutes les secondes pour rafraîchir le temps restant
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setItems((prev) => [...prev]);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const now = Date.now();

//   const filteredItems = items.filter((item) => {
//     if (filter === 'open') return !item.isClosed;
//     if (filter === 'closed') return item.isClosed;
//     return true;
//   });

//   // 🧠 Fonction utilitaire pour afficher un format temps lisible
//   function formatRemainingTime(ms: number): string {
//     if (ms <= 0) return '0 seconde';
//     const seconds = Math.floor(ms / 1000) % 60;
//     const minutes = Math.floor(ms / (1000 * 60)) % 60;
//     const hours = Math.floor(ms / (1000 * 60 * 60));
//     const parts = [];
//     if (hours) parts.push(`${hours}h`);
//     if (minutes) parts.push(`${minutes}m`);
//     if (seconds || parts.length === 0) parts.push(`${seconds}s`);
//     return parts.join(' ');
//   }

//   return (
//     <div className="space-y-6 px-4 md:px-8 py-6">
//       {/* ✅ HEADER */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <h2 className="text-3xl font-bold">Objets aux enchères</h2>

//         <div className="flex flex-wrap gap-2">
//           <Link href="/items/won" className="bg-purple-100 text-purple-800 px-4 py-2 rounded hover:bg-purple-200">🎯 Mes achats</Link>
//           <Link href="/items/sold" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">🛒 Mes ventes</Link>
//           <Link href="/items/new" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow">🎁 Vendre un objet</Link>
//           <Link href="/profile" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">👤 Mon profil</Link>
//           <button
//             onClick={() => {
//               localStorage.removeItem('token');
//               localStorage.removeItem('userId');
//               window.location.href = '/login';
//             }}
//             className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200"
//           >
//             🚪 Déconnexion
//           </button>
//         </div>
//       </div>

//       {/* 🧭 Filtres */}
//       <div className="flex flex-wrap items-center gap-3">
//         <button onClick={() => setFilter('all')} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Tous</button>
//         <button onClick={() => setFilter('open')} className="bg-green-100 text-green-800 px-4 py-2 rounded hover:bg-green-200">🟢 En cours</button>
//         <button onClick={() => setFilter('closed')} className="bg-red-100 text-red-800 px-4 py-2 rounded hover:bg-red-200">🔴 Terminés</button>
//       </div>

//       {/* 🖼️ Liste des objets */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredItems.map((item: any) => {
//           const highestBidAmount = item.bids?.length > 0
//             ? Math.max(...item.bids.map((bid: any) => bid.amount))
//             : null;

//           return (
//             <div key={item.id} className="border p-4 rounded bg-white shadow hover:shadow-lg transition duration-200">
//               <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded mb-3" />
//               <h3 className="text-xl font-semibold text-indigo-700">{item.title}</h3>
//               <p className="text-gray-700">{item.description}</p>
//               <p className="mt-2 font-medium">Prix de départ : {item.startingPrice}€</p>

//               <p className="text-gray-800 mt-1">
//                 💰 <span className="font-semibold">
//                   {highestBidAmount !== null ? `${highestBidAmount}€` : `${item.startingPrice}€ (prix de départ)`}
//                 </span>
//                 {item.currentHighestBidderName && (
//                   <span className="text-sm text-gray-500"> (par {item.currentHighestBidderName})</span>
//                 )}
//               </p>

//               {/* ⏳ Temps restant ou terminé */}
//               <p className={item.isClosed ? 'text-red-600' : 'text-green-600'}>
//                 {item.isClosed
//                   ? `⏹️ Terminé depuis : ${formatRemainingTime(now - Number(item.auctionEndTime))}`
//                   : `⏳ Temps restant : ${formatRemainingTime(Number(item.auctionEndTime) - now)}`}
//               </p>

//               <Link
//                 href={`/bid/${item.id}`}
//                 className="inline-block mt-3 text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
//               >
//                 Enchérir
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';
// import { getActiveItems } from '../../lib/api';
// import Link from 'next/link';
// import SocketClient from '../components/SocketClient';

// export default function ItemsPage() {
//   const [items, setItems] = useState<any[]>([]);
//   const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all');
//   const [userId, setUserId] = useState<string | null>(null);

//   // 🧠 Récupérer l'utilisateur connecté depuis localStorage
//   useEffect(() => {
//     const id = localStorage.getItem('userId');
//     if (id) setUserId(id);
//   }, []);

//   // 📦 Charger les objets au démarrage
//   useEffect(() => {
//     const fetchItems = async () => {
//       const res = await getActiveItems();
//       console.log("📦 Items reçus:", res);
//       setItems(res);
//     };
//     fetchItems();
//   }, []);

//   // ⏱️ Déclencher un re-render toutes les secondes pour afficher le temps restant
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setItems((prev) => [...prev]); // force re-render
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   // 🔁 Réception d'une relance d'enchère via WebSocket
//   function handleAuctionRestarted(data: {
//     itemId: string;
//     auctionEndTime: number;
//     isClosed: boolean;
//   }) {
//     setItems(prev =>
//       prev.map(item =>
//         item.id === data.itemId
//           ? { ...item, auctionEndTime: data.auctionEndTime, isClosed: data.isClosed }
//           : item
//       )
//     );
//   }

//   // 🧠 Filtrer les objets selon l’état sélectionné
//   const filteredItems = items.filter((item) => {
//     if (filter === 'open') return !item.isClosed;
//     if (filter === 'closed') return item.isClosed;
//     return true;
//   });

//   const now = Date.now();

//   function formatRemainingTime(ms: number): string {
//     if (ms <= 0) return '0 seconde';
//     const seconds = Math.floor(ms / 1000) % 60;
//     const minutes = Math.floor(ms / (1000 * 60)) % 60;
//     const hours = Math.floor(ms / (1000 * 60 * 60));
//     const parts = [];
//     if (hours) parts.push(`${hours}h`);
//     if (minutes) parts.push(`${minutes}m`);
//     if (seconds || parts.length === 0) parts.push(`${seconds}s`);
//     return parts.join(' ');
//   }

//   return (
//     <div className="space-y-6 px-4 md:px-8 py-6">
//       {/* ✅ HEADER */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <h2 className="text-3xl font-bold">Objets aux enchères</h2>

//         <div className="flex flex-wrap gap-2">
//           <Link href="/items/won" className="bg-purple-100 text-purple-800 px-4 py-2 rounded hover:bg-purple-200">🎯 Mes achats</Link>
//           <Link href="/items/sold" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">🛒 Mes ventes</Link>
//           <Link href="/items/new" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow">🎁 Vendre un objet</Link>
//           <Link href="/profile" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">👤 Mon profil</Link>
//           <button
//             onClick={() => {
//               localStorage.removeItem('token');
//               localStorage.removeItem('userId');
//               window.location.href = '/login';
//             }}
//             className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200"
//           >
//             🚪 Déconnexion
//           </button>
//         </div>
//       </div>

//       {/* 🧭 Filtres */}
//       <div className="flex flex-wrap items-center gap-3">
//         <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>Tous</button>
//         <button onClick={() => setFilter('open')} className={`px-4 py-2 rounded ${filter === 'open' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}>🟢 En cours</button>
//         <button onClick={() => setFilter('closed')} className={`px-4 py-2 rounded ${filter === 'closed' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800 hover:bg-red-200'}`}>🔴 Terminés</button>
//       </div>

//       {/* 🖼️ Liste des objets */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredItems.map((item: any) => {
//           const highestBidAmount = item.bids?.length > 0
//             ? Math.max(...item.bids.map((bid: any) => bid.amount))
//             : null;

//           const remainingTime = Number(item.auctionEndTime) - now;
//           const isClosed = item.isClosed;
//           const timeLabel = isClosed
//             ? `⏹️ Terminé depuis : ${formatRemainingTime(now - Number(item.auctionEndTime))}`
//             : `⏳ Temps restant : ${formatRemainingTime(remainingTime)}`;
//           const timeColor = isClosed
//             ? 'text-red-600'
//             : remainingTime <= 10_000
//               ? 'text-red-600'
//               : remainingTime <= 60_000
//                 ? 'text-orange-500'
//                 : 'text-green-600';

//           return (
//             <div key={item.id} className="border p-4 rounded bg-white shadow hover:shadow-lg transition duration-200">
//               <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded mb-3" />
//               <h3 className="text-xl font-semibold text-indigo-700">{item.title}</h3>
//               <p className="text-gray-700">{item.description}</p>
//               <p className="mt-2 font-medium">Prix de départ : {item.startingPrice}€</p>

//               <p className="text-gray-800 mt-1">
//                 💰 <span className="font-semibold">
//                   {highestBidAmount !== null ? `${highestBidAmount}€` : `${item.startingPrice}€ (prix de départ)`}
//                 </span>
//                 {item.currentHighestBidderName && (
//                   <span className="text-sm text-gray-500"> (par {item.currentHighestBidderName})</span>
//                 )}
//               </p>

//               <p className={`${timeColor} mt-1`}>{timeLabel}</p>

//               <Link
//                 href={`/bid/${item.id}`}
//                 className="inline-block mt-3 text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
//               >
//                 Enchérir
//               </Link>
//             </div>
//           );
//         })}
//       </div>

//       {/* 🔌 WebSocket actif si connecté */}
//       {userId && (
//         <SocketClient
//           userId={userId}
//           onAuctionRestarted={handleAuctionRestarted}
//         />
//       )}
//     </div>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';
// import { getActiveItems } from '../../lib/api';
// import Link from 'next/link';
// import SocketClient from '../components/SocketClient';

// export default function ItemsPage() {
//   const [items, setItems] = useState<any[]>([]);
//   const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all');
//   const [userId, setUserId] = useState<string | null>(null);

//   // Récupérer userId depuis localStorage
//   useEffect(() => {
//     const id = localStorage.getItem('userId');
//     if (id) setUserId(id);
//   }, []);

//   // Charger les objets au démarrage
//   useEffect(() => {
//     const fetchItems = async () => {
//       const res = await getActiveItems();
//       console.log("📦 Items reçus:", res);
//       setItems(res);
//     };
//     fetchItems();
//   }, []);

//   // Re-render toutes les secondes pour mise à jour du temps
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setItems((prev) => [...prev]); // force re-render
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   // Gestion événement WebSocket AUCTION_RESTARTED
//   function handleAuctionRestarted(data: {
//     itemId: string;
//     auctionEndTime: number;
//     isClosed: boolean;
//   }) {
//     setItems(prev =>
//       prev.map(item =>
//         item.id === data.itemId
//           ? { ...item, auctionEndTime: data.auctionEndTime, isClosed: data.isClosed }
//           : item
//       )
//     );
//   }

//   // Filtrer selon état
//   const filteredItems = items.filter((item) => {
//     if (filter === 'open') return !item.isClosed;
//     if (filter === 'closed') return item.isClosed;
//     return true;
//   });

//   const now = Date.now();

//   // Format temps restant ou écoulé lisible
//   function formatRemainingTime(ms: number): string {
//     if (ms <= 0) return '0 seconde';
//     const seconds = Math.floor(ms / 1000) % 60;
//     const minutes = Math.floor(ms / (1000 * 60)) % 60;
//     const hours = Math.floor(ms / (1000 * 60 * 60));
//     const parts = [];
//     if (hours) parts.push(`${hours}h`);
//     if (minutes) parts.push(`${minutes}m`);
//     if (seconds || parts.length === 0) parts.push(`${seconds}s`);
//     return parts.join(' ');
//   }

//   return (
//     <div className="space-y-6 px-4 md:px-8 py-6">
//       {/* HEADER */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <h2 className="text-3xl font-bold">Objets aux enchères</h2>

//         <div className="flex flex-wrap gap-2">
//           <Link href="/items/won" className="bg-purple-100 text-purple-800 px-4 py-2 rounded hover:bg-purple-200">🎯 Mes achats</Link>
//           <Link href="/items/sold" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">🛒 Mes ventes</Link>
//           <Link href="/items/new" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow">🎁 Vendre un objet</Link>
//           <Link href="/profile" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">👤 Mon profil</Link>
//           <button
//             onClick={() => {
//               localStorage.removeItem('token');
//               localStorage.removeItem('userId');
//               window.location.href = '/login';
//             }}
//             className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200"
//           >
//             🚪 Déconnexion
//           </button>
//         </div>
//       </div>

//       {/* Filtres */}
//       <div className="flex flex-wrap items-center gap-3">
//         <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>Tous</button>
//         <button onClick={() => setFilter('open')} className={`px-4 py-2 rounded ${filter === 'open' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}>🟢 En cours</button>
//         <button onClick={() => setFilter('closed')} className={`px-4 py-2 rounded ${filter === 'closed' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800 hover:bg-red-200'}`}>🔴 Terminés</button>
//       </div>

//       {/* Liste des objets */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredItems.map((item: any) => {
//           // Calcul du meilleur montant d'enchère à partir des bids
//           const highestBidAmount = item.bids?.length > 0
//             ? Math.max(...item.bids.map((bid: any) => bid.amount))
//             : null;

//           // Temps restant ou écoulé depuis fin enchère
//           const remainingTime = Number(item.auctionEndTime) - now;
//           const isClosed = item.isClosed;
//           const timeLabel = isClosed
//             ? `⏹️ Terminé depuis : ${formatRemainingTime(now - Number(item.auctionEndTime))}`
//             : `⏳ Temps restant : ${formatRemainingTime(remainingTime)}`;
//           const timeColor = isClosed
//             ? 'text-red-600'
//             : remainingTime <= 10_000
//               ? 'text-red-600'
//               : remainingTime <= 60_000
//                 ? 'text-orange-500'
//                 : 'text-green-600';

//           return (
//             <div key={item.id} className="border p-4 rounded bg-white shadow hover:shadow-lg transition duration-200">
//               <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded mb-3" />
//               <h3 className="text-xl font-semibold text-indigo-700">{item.title}</h3>
//               <p className="text-gray-700">{item.description}</p>
//               <p className="mt-2 font-medium">Prix de départ : {item.startingPrice}€</p>

//               <p className="text-gray-800 mt-1">
//                 💰 <span className="font-semibold">
//                   {highestBidAmount !== null ? `${highestBidAmount}€` : `${item.startingPrice}€ (prix de départ)`}
//                 </span>
//                 {item.currentHighestBidderName && (
//                   <span className="text-sm text-gray-500"> (par {item.currentHighestBidderName})</span>
//                 )}
//               </p>

//               <p className={`${timeColor} mt-1`}>{timeLabel}</p>

//               <Link
//                 href={`/bid/${item.id}`}
//                 className="inline-block mt-3 text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
//               >
//                 Enchérir
//               </Link>
//             </div>
//           );
//         })}
//       </div>

//       {/* WebSocket pour mise à jour temps réel */}
//       {userId && (
//         <SocketClient
//           userId={userId}
//           onAuctionRestarted={handleAuctionRestarted}
//         />
//       )}
//     </div>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';
// import { getActiveItems } from '../../lib/api';
// import Link from 'next/link';
// import SocketClient from '../components/SocketClient';

// export default function ItemsPage() {
//   const [items, setItems] = useState<any[]>([]);
//   const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all');
//   const [userId, setUserId] = useState<string | null>(null);

//   // Récupérer userId depuis localStorage
//   useEffect(() => {
//     const id = localStorage.getItem('userId');
//     if (id) setUserId(id);
//   }, []);

//   // Charger les objets au démarrage
//   useEffect(() => {
//     const fetchItems = async () => {
//       const res = await getActiveItems();
//       console.log("📦 Items reçus:", res);
//       setItems(res);
//     };
//     fetchItems();
//   }, []);

//   // Re-render toutes les secondes pour mise à jour du temps
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setItems((prev) => [...prev]); // force re-render
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   // ========== Handlers WebSocket ==========

//   // AUCTION_RESTARTED : réinitialiser fin enchère + statut
//   function handleAuctionRestarted(data: {
//     itemId: string;
//     auctionEndTime: number;
//     isClosed: boolean;
//   }) {
//     setItems(prev =>
//       prev.map(item =>
//         item.id === data.itemId
//           ? { ...item, auctionEndTime: data.auctionEndTime, isClosed: data.isClosed }
//           : item
//       )
//     );
//   }

//   // NEW_HIGHEST_BID : mise à jour meilleure enchère + enchérisseur
//   function handleNewHighestBid(data: {
//     itemId: string;
//     amount: number;
//     bidderId: string;
//   }) {
//     setItems(prev =>
//       prev.map(item =>
//         item.id === data.itemId
//           ? {
//               ...item,
//               currentHighestBid: data.amount,
//               currentHighestBidderId: data.bidderId,
//               // Optionnel: si tu as les noms, tu peux aussi mettre currentHighestBidderName
//             }
//           : item
//       )
//     );
//   }

//   // AUCTION_WON : marquer enchère fermée, garder montant final
//   function handleAuctionWon(data: { itemId: string; amount: number }) {
//     setItems(prev =>
//       prev.map(item =>
//         item.id === data.itemId
//           ? { ...item, isClosed: true, auctionWonAmount: data.amount }
//           : item
//       )
//     );
//   }

//   // ITEM_SOLD : objet vendu, fermer enchère, enregistrer gagnant et prix
//   function handleItemSold(data: { itemId: string; winnerId: string; amount: number }) {
//     setItems(prev =>
//       prev.map(item =>
//         item.id === data.itemId
//           ? { ...item, isClosed: true, soldTo: data.winnerId, soldPrice: data.amount }
//           : item
//       )
//     );
//   }

  
//   // ========== Filtrage des items selon état ==========
//   const filteredItems = items.filter((item) => {
//     if (filter === 'open') return !item.isClosed;
//     if (filter === 'closed') return item.isClosed;
//     return true;
//   });

//   const now = Date.now();

//   // Format temps restant ou écoulé lisible
//   function formatRemainingTime(ms: number): string {
//     if (ms <= 0) return '0 seconde';
//     const seconds = Math.floor(ms / 1000) % 60;
//     const minutes = Math.floor(ms / (1000 * 60)) % 60;
//     const hours = Math.floor(ms / (1000 * 60 * 60));
//     const parts = [];
//     if (hours) parts.push(`${hours}h`);
//     if (minutes) parts.push(`${minutes}m`);
//     if (seconds || parts.length === 0) parts.push(`${seconds}s`);
//     return parts.join(' ');
//   }

//   return (
//     <div className="space-y-6 px-4 md:px-8 py-6">
//       {/* HEADER */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <h2 className="text-3xl font-bold">Objets aux enchères</h2>

//         <div className="flex flex-wrap gap-2">
//           <Link href="/items/won" className="bg-purple-100 text-purple-800 px-4 py-2 rounded hover:bg-purple-200">🎯 Mes achats</Link>
//           <Link href="/items/sold" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">🛒 Mes ventes</Link>
//           <Link href="/items/new" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow">🎁 Vendre un objet</Link>
//           <Link href="/profile" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">👤 Mon profil</Link>
//           <button
//             onClick={() => {
//               localStorage.removeItem('token');
//               localStorage.removeItem('userId');
//               window.location.href = '/login';
//             }}
//             className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200"
//           >
//             🚪 Déconnexion
//           </button>
//         </div>
//       </div>

//       {/* Filtres */}
//       <div className="flex flex-wrap items-center gap-3">
//         <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>Tous</button>
//         <button onClick={() => setFilter('open')} className={`px-4 py-2 rounded ${filter === 'open' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}>🟢 En cours</button>
//         <button onClick={() => setFilter('closed')} className={`px-4 py-2 rounded ${filter === 'closed' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800 hover:bg-red-200'}`}>🔴 Terminés</button>
//       </div>

//       {/* Liste des objets */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredItems.map((item: any) => {
//           // Calcul du meilleur montant d'enchère à partir des bids
//           const highestBidAmount = item.bids?.length > 0
//             ? Math.max(...item.bids.map((bid: any) => bid.amount))
//             : null;

//           // Temps restant ou écoulé depuis fin enchère
//           const remainingTime = Number(item.auctionEndTime) - now;
//           const isClosed = item.isClosed;
//           const timeLabel = isClosed
//             ? `⏹️ Terminé depuis : ${formatRemainingTime(now - Number(item.auctionEndTime))}`
//             : `⏳ Temps restant : ${formatRemainingTime(remainingTime)}`;
//           const timeColor = isClosed
//             ? 'text-red-600'
//             : remainingTime <= 10_000
//               ? 'text-red-600'
//               : remainingTime <= 60_000
//                 ? 'text-orange-500'
//                 : 'text-green-600';

//           return (
//             <div key={item.id} className="border p-4 rounded bg-white shadow hover:shadow-lg transition duration-200">
//               <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded mb-3" />
//               <h3 className="text-xl font-semibold text-indigo-700">{item.title}</h3>
//               <p className="text-gray-700">{item.description}</p>
//               <p className="mt-2 font-medium">Prix de départ : {item.startingPrice}€</p>

//               <p className="text-gray-800 mt-1">
//                 💰 <span className="font-semibold">
//                   {highestBidAmount !== null ? `${highestBidAmount}€` : `${item.startingPrice}€ (prix de départ)`}
//                 </span>
//                 {item.currentHighestBidderName && (
//                   <span className="text-sm text-gray-500"> (par {item.currentHighestBidderName})</span>
//                 )}
//               </p>

//               <p className={`${timeColor} mt-1`}>{timeLabel}</p>

//               <Link
//                 href={`/bid/${item.id}`}
//                 className="inline-block mt-3 text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
//               >
//                 Enchérir
//               </Link>
//             </div>
//           );
//         })}
//       </div>

//       {/* WebSocket pour mise à jour temps réel */}
//       {userId && (
//         <SocketClient
//           userId={userId}
//           onAuctionRestarted={handleAuctionRestarted}
//           onNewHighestBid={handleNewHighestBid}
//           onAuctionWon={handleAuctionWon}
//           onItemSold={handleItemSold}
//         />
//       )}
//     </div>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';
// import { getActiveItems } from '../../lib/api';
// import Link from 'next/link';
// import SocketClient from '../components/SocketClient';

// export default function ItemsPage() {
//   const [items, setItems] = useState<any[]>([]);
//   const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all');
//   const [userId, setUserId] = useState<string | null>(null);

//   useEffect(() => {
//     const id = localStorage.getItem('userId');
//     if (id) setUserId(id);
//   }, []);

//   useEffect(() => {
//     const fetchItems = async () => {
//       const res = await getActiveItems();
//       console.log("📦 Items reçus:", res);
//       setItems(res);
//     };
//     fetchItems();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setItems((prev) => [...prev]); // force re-render
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   // WebSocket Handlers
//   function handleAuctionRestarted(data: {
//     itemId: string;
//     auctionEndTime: number;
//     isClosed: boolean;
//   }) {
//     setItems(prev =>
//       prev.map(item =>
//         item.id === data.itemId
//           ? {
//               ...item,
//               auctionEndTime: data.auctionEndTime,
//               isClosed: data.isClosed,
//               currentHighestBid: null,
//               currentHighestBidderId: null,
//               currentHighestBidderName: null,
//               auctionWonAmount: null,
//               soldTo: null,
//               soldPrice: null,
//               bids: [], // optionnel : vider les anciennes enchères
//             }
//           : item
//       )
//     );
//   }

//   function handleNewHighestBid(data: {
//     itemId: string;
//     amount: number;
//     bidderId: string;
//   }) {
//     setItems(prev =>
//       prev.map(item =>
//         item.id === data.itemId
//           ? {
//               ...item,
//               currentHighestBid: data.amount,
//               currentHighestBidderId: data.bidderId,
//               // currentHighestBidderName: optionnel selon backend
//             }
//           : item
//       )
//     );
//   }

//   function handleAuctionWon(data: { itemId: string; amount: number }) {
//     setItems(prev =>
//       prev.map(item =>
//         item.id === data.itemId
//           ? { ...item, isClosed: true, auctionWonAmount: data.amount }
//           : item
//       )
//     );
//   }

//   function handleItemSold(data: {
//     itemId: string;
//     winnerId: string;
//     amount: number;
//   }) {
//     setItems(prev =>
//       prev.map(item =>
//         item.id === data.itemId
//           ? { ...item, isClosed: true, soldTo: data.winnerId, soldPrice: data.amount }
//           : item
//       )
//     );
//   }

//   const filteredItems = items.filter((item) => {
//     if (filter === 'open') return !item.isClosed;
//     if (filter === 'closed') return item.isClosed;
//     return true;
//   });

//   const now = Date.now();

//   function formatRemainingTime(ms: number): string {
//     if (ms <= 0) return '0 seconde';
//     const seconds = Math.floor(ms / 1000) % 60;
//     const minutes = Math.floor(ms / (1000 * 60)) % 60;
//     const hours = Math.floor(ms / (1000 * 60 * 60));
//     const parts = [];
//     if (hours) parts.push(`${hours}h`);
//     if (minutes) parts.push(`${minutes}m`);
//     if (seconds || parts.length === 0) parts.push(`${seconds}s`);
//     return parts.join(' ');
//   }

//   return (
//     <div className="space-y-6 px-4 md:px-8 py-6">
//       {/* HEADER */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <h2 className="text-3xl font-bold">Objets aux enchères</h2>
//         <div className="flex flex-wrap gap-2">
//           <Link href="/items/won" className="bg-purple-100 text-purple-800 px-4 py-2 rounded hover:bg-purple-200">🎯 Mes achats</Link>
//           <Link href="/items/sold" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">🛒 Mes ventes</Link>
//           <Link href="/items/new" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow">🎁 Vendre un objet</Link>
//           <Link href="/profile" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">👤 Mon profil</Link>
//           <button
//             onClick={() => {
//               localStorage.removeItem('token');
//               localStorage.removeItem('userId');
//               window.location.href = '/login';
//             }}
//             className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200"
//           >
//             🚪 Déconnexion
//           </button>
//         </div>
//       </div>

//       {/* Filtres */}
//       <div className="flex flex-wrap items-center gap-3">
//         <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>Tous</button>
//         <button onClick={() => setFilter('open')} className={`px-4 py-2 rounded ${filter === 'open' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}>🟢 En cours</button>
//         <button onClick={() => setFilter('closed')} className={`px-4 py-2 rounded ${filter === 'closed' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800 hover:bg-red-200'}`}>🔴 Terminés</button>
//       </div>

//       {/* Liste des objets */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredItems.map((item: any) => {
//           const auctionEnd = Number(item.auctionEndTime || 0);
//           const remainingTime = auctionEnd - now;
//           const isClosed = item.isClosed;

//           const highestBidAmount = item.bids?.length > 0
//             ? Math.max(...item.bids.map((bid: any) => bid.amount))
//             : null;

//           const timeLabel = isClosed
//             ? `⏹️ Terminé depuis : ${formatRemainingTime(now - auctionEnd)}`
//             : `⏳ Temps restant : ${formatRemainingTime(remainingTime)}`;

//           const timeColor = isClosed
//             ? 'text-red-600'
//             : remainingTime <= 10_000
//               ? 'text-red-600'
//               : remainingTime <= 60_000
//                 ? 'text-orange-500'
//                 : 'text-green-600';

//           return (
//             <div key={item.id} className="border p-4 rounded bg-white shadow hover:shadow-lg transition duration-200">
//               <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded mb-3" />
//               <h3 className="text-xl font-semibold text-indigo-700">{item.title}</h3>
//               <p className="text-gray-700">{item.description}</p>
//               <p className="mt-2 font-medium">Prix de départ : {item.startingPrice}€</p>

//               <p className="text-gray-800 mt-1">
//                 💰 <span className="font-semibold">
//                   {highestBidAmount !== null ? `${highestBidAmount}€` : `${item.startingPrice}€ (prix de départ)`}
//                 </span>
//                 {item.currentHighestBidderName && (
//                   <span className="text-sm text-gray-500"> (par {item.currentHighestBidderName})</span>
//                 )}
//               </p>

//               {/* Affichage du gagnant et montant final */}
//               {isClosed && item.auctionWonAmount && (
//                 <p className="text-green-800 font-semibold mt-1">
//                   🏆 Enchère gagnée à {item.auctionWonAmount}€
//                 </p>
//               )}

//               {isClosed && item.soldTo && (
//                 <p className="text-sm text-gray-600">
//                   🎉 Gagnant : {item.currentHighestBidderName ?? item.soldTo}
//                 </p>
//               )}

//               <p className={`${timeColor} mt-1`}>{timeLabel}</p>

//               <Link
//                 href={`/bid/${item.id}`}
//                 className="inline-block mt-3 text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
//               >
//                 Enchérir
//               </Link>
//             </div>
//           );
//         })}
//       </div>

//       {/* WebSocket */}
//       {userId && (
//         <SocketClient
//           userId={userId}
//           onAuctionRestarted={handleAuctionRestarted}
//           onNewHighestBid={handleNewHighestBid}
//           onAuctionWon={handleAuctionWon}
//           onItemSold={handleItemSold}
//         />
//       )}
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { getActiveItems ,deregisterUser} from '../../lib/api';
import Link from 'next/link';
import SocketClient from '../components/SocketClient';

type FullBid = Bid & { type: 'full' };
type PartialBid = { amount: number; type: 'partial' };

type CurrentBid = FullBid | PartialBid | null;

interface Bid {
  id: string;
  amount: number;
  bidderName: string;
  bidderId: string,
  itemId: string,
  timestamp: number,
}

// interface Item {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl?: string;
//   startingPrice: number;
//   auctionEndTime: number | string;
//   bids?: Bid[] | null;
//   currentHighestBid?: Bid;
//   currentHighestBidderName: string;
//   enrichedHighestBid : Bid;
//   isClosed: boolean;
//   isOpen : boolean;
//   auctionWonAmount : number;
//   soldTo : string;

// }
// interface Item {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl?: string;
//   startingPrice: number;
//   auctionEndTime: number | string;
//   bids?: Bid[] | null;
//   currentHighestBid?: Bid;
//   currentHighestBidderName?: string; // ✅ string, pas Bid
//   enrichedHighestBid?: Bid;
//   isClosed: boolean;
//   isOpen: boolean;

//   // ✅ Ajoute ces propriétés si tu les modifies dans handleAuctionRestarted
//   currentHighestBidderId?: string;
//   auctionWonAmount?: number;
//   soldTo?: string;
//   soldPrice?: number;
// }

interface Item {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  startingPrice: number;
  auctionEndTime: number | string;
  bids?: Bid[] | null;

  currentHighestBid?: CurrentBid;
  currentHighestBidderId?: string | null;
  currentHighestBidderName?: string | null;

  enrichedHighestBid?: Bid;
  isClosed: boolean;
  isOpen: boolean;

  auctionWonAmount?: number | null;
  soldTo?: string | null;
  soldPrice?: number | null;
}


interface User {
  id: string;
  name: string;
  email: string;
}

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all');
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const id = localStorage.getItem('userId');
    if (id) setUserId(id);
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await getActiveItems();
      console.log("📦 Items reçus:", res);
      setItems(res);
    };
    fetchItems();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => [...prev]); // force re-render
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // WebSocket Handlers
  function handleAuctionRestarted(data: {
    itemId: string;
    auctionEndTime: number;
    isClosed: boolean;
  }) {
    setItems(prev =>
      prev.map(item =>
        item.id === data.itemId
          ? {
              ...item,
              auctionEndTime: data.auctionEndTime,
              isClosed: data.isClosed,
              currentHighestBid: null,
              currentHighestBidderId: null,
              currentHighestBidderName: null,
              auctionWonAmount: null,
              soldTo: null,
              soldPrice: null,
              bids: [],
            }
          : item
      )
    );
  }

  // function handleNewHighestBid(data: {
  //   itemId: string;
  //   amount: number;
  //   bidderId: string;
  // }) {
  //   setItems(prev =>
  //     prev.map(item =>
  //       item.id === data.itemId
  //         ? {
  //             ...item,
  //             currentHighestBid: data.amount,
  //             currentHighestBidderId: data.bidderId,
  //           }
  //         : item
  //     )
  //   );
  // }
  function handleNewHighestBid(data: {
  itemId: string;
  amount: number;
  bidderId: string;
}) {
  setItems(prev =>
    prev.map(item =>
      item.id === data.itemId
        ? {
            ...item,
            currentHighestBid: { amount: data.amount, type: 'partial' }, // ✅ typé
            currentHighestBidderId: data.bidderId,
          }
        : item
    )
  );
}


  function handleAuctionWon(data: { itemId: string; amount: number }) {
    setItems(prev =>
      prev.map(item =>
        item.id === data.itemId
          ? { ...item, isClosed: true, auctionWonAmount: data.amount }
          : item
      )
    );
  }

  function handleItemSold(data: {
    itemId: string;
    winnerId: string;
    amount: number;
  }) {
    setItems(prev =>
      prev.map(item =>
        item.id === data.itemId
          ? { ...item, isClosed: true, soldTo: data.winnerId, soldPrice: data.amount }
          : item
      )
    );
  }

  const filteredItems = items.filter((item) => {
    if (filter === 'open') return !item.isClosed;
    if (filter === 'closed') return item.isClosed;
    return true;
  });

  const now = Date.now();

  function formatRemainingTime(ms: number): string {
    if (ms <= 0) return '0 seconde';
    const seconds = Math.floor(ms / 1000) % 60;
    const minutes = Math.floor(ms / (1000 * 60)) % 60;
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const parts = [];
    if (hours) parts.push(`${hours}h`);
    if (minutes) parts.push(`${minutes}m`);
    if (seconds || parts.length === 0) parts.push(`${seconds}s`);
    return parts.join(' ');
  }

  return (
    <div className="space-y-6 px-4 md:px-8 py-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-3xl font-bold">Objets aux enchères</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/items/won" className="bg-purple-100 text-purple-800 px-4 py-2 rounded hover:bg-purple-200">🎯 Mes achats</Link>
          <Link href="/items/sold" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">🛒 Mes ventes</Link>
          <Link href="/items/new" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow">🎁 Vendre un objet</Link>
          <Link href="/profile" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">👤 Mon profil</Link>
          {/* <button
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('userId');
              window.location.href = '/login';
            }}
            className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200"
          >
            🚪 Déconnexion
          </button> */}
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
                  } 
                }
              }}
              className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200"
            >
              🚪 Déconnexion
          </button>

        </div>
      </div>

      {/* Filtres */}
      <div className="flex flex-wrap items-center gap-3">
        <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>Tous</button>
        <button onClick={() => setFilter('open')} className={`px-4 py-2 rounded ${filter === 'open' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}>🟢 En cours</button>
        <button onClick={() => setFilter('closed')} className={`px-4 py-2 rounded ${filter === 'closed' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800 hover:bg-red-200'}`}>🔴 Terminés</button>
      </div>

      {/* Liste des objets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item: Item) => {
          const auctionEnd = Number(item.auctionEndTime || 0);
          const remainingTime = auctionEnd - now;
          const isClosed = item.isClosed;

          // const highestBidAmount = item.bids?.length > 0
          //   ? Math.max(...item.bids.map((bid: Bid) => bid.amount))
          //   : null;
          const highestBidAmount = Array.isArray(item.bids) && item.bids.length > 0
              ? Math.max(...item.bids.map((bid: Bid) => bid.amount))
              : null;


          const timeLabel = isClosed
            ? `⏹️ Terminé depuis : ${formatRemainingTime(now - auctionEnd)}`
            : `⏳ Temps restant : ${formatRemainingTime(remainingTime)}`;

          const timeColor = isClosed
            ? 'text-red-600'
            : remainingTime <= 10_000
              ? 'text-red-600'
              : remainingTime <= 60_000
                ? 'text-orange-500'
                : 'text-green-600';

          return (
            <div key={item.id} className="border p-4 rounded bg-white shadow hover:shadow-lg transition duration-200">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded mb-3" />
              <h3 className="text-xl font-semibold text-indigo-700">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
              <p className="mt-2 font-medium">Prix de départ : {item.startingPrice}€</p>

              <p className="text-gray-800 mt-1">
                💰 <span className="font-semibold">
                  {highestBidAmount !== null ? `${highestBidAmount}€` : `${item.startingPrice}€ (prix de départ)`}
                </span>
                {item.currentHighestBidderName && (
                  <span className="text-sm text-gray-500"> (par {item.currentHighestBidderName})</span>
                )}
              </p>

              {isClosed && item.auctionWonAmount && (
                <p className="text-green-800 font-semibold mt-1">
                  🏆 Enchère gagnée à {item.auctionWonAmount}€
                </p>
              )}
              {isClosed && item.soldTo && (
                <p className="text-sm text-gray-600">
                  🎉 Gagnant : {item.currentHighestBidderName ?? item.soldTo}
                </p>
              )}

              <p className={`${timeColor} mt-1`}>{timeLabel}</p>

              {isClosed ? (
                <button
                  disabled
                  className="inline-block mt-3 text-white bg-gray-400 cursor-not-allowed px-4 py-2 rounded"
                >
                  Enchère terminée
                </button>
              ) : (
                // <Link
                //   href={`/bid/${item.id}`}
                //   className="inline-block mt-3 text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
                // >
                //   Enchérir
                // </Link>
                <Link
                  href={item.isClosed ? '#' : `/bid/${item.id}`}
                  className={`inline-block mt-3 px-4 py-2 rounded ${
                    item.isClosed
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-indigo-500 hover:bg-indigo-600 text-white'
                  }`}
                  onClick={e => item.isClosed && e.preventDefault()}
                >
                  Enchérir
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {/* WebSocket */}
      {userId && (
        <SocketClient
          userId={userId}
          onAuctionRestarted={handleAuctionRestarted}
          onNewHighestBid={handleNewHighestBid}
          onAuctionWon={handleAuctionWon}
          onItemSold={handleItemSold}
        />
      )}
    </div>
  );
}
