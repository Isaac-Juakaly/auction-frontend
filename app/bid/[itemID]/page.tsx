// // // // app/bid/[itemId]/page.tsx (enchérir sur un objet spécifique)

// // 'use client';

// // import { useParams } from 'next/navigation';
// // import { useEffect, useState } from 'react';
// // import Link from 'next/link';
// // import { getItemById, bidOnItem, getProfile } from '../../../lib/api';
// // import { authHeaders } from '../../../lib/api';

// // export default function BidPage() {
// //   const params = useParams();
// //   const itemId = params?.itemId as string;

// //   const [item, setItem] = useState<any>(null);
// //   const [amount, setAmount] = useState(0);
// //   const [countdown, setCountdown] = useState(300);
// //   const [error, setError] = useState('');
// //   const [user, setUser] = useState<any>(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (!itemId) return;

// //     const fetchItemAndUser = async () => {
// //       try {
// //         const [profile, data] = await Promise.all([
// //           getProfile(),
// //           getItemById(itemId),
// //         ]);
// //         console.log("📦 Item reçu:", data); // Ajoute ceci
// //         setUser(profile);
// //         setItem(data);

// //         const endTime = Number(data.auctionEndTime);
// //         const now = Date.now();
// //         const diff = Math.floor((endTime - now) / 1000);
// //         setCountdown(diff > 0 ? diff : 0);
// //       } catch (err: any) {
// //         setError(err.message || 'Erreur inattendue');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchItemAndUser();
// //   }, [itemId]);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
// //     }, 1000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const handleBid = async () => {
// //     try {
// //       await bidOnItem({ itemId, amount });
// //       window.location.reload(); // Recharge pour voir le nouveau meilleur prix
// //     } catch (err: any) {
// //       alert(`Erreur lors de l'enchère : ${err.message}`);
// //     }
// //   };

// //   if (loading) return <p className="text-center text-gray-500">⏳ Chargement...</p>;
// //   if (error) return <p className="text-center text-red-600">{error}</p>;
// //   if (!item) return <p className="text-center">Objet non trouvé</p>;

// //   const highestBid = item.currentHighestBid;

// //   return (
// //     <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 space-y-6">
// //       {/* ✅ HEADER mis à jour */}
// //       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
// //         <h2 className="text-3xl font-bold">Faire une enchère</h2>
// //         <div className="flex flex-wrap gap-2 md:justify-end w-full md:w-auto">
// //           <Link href="/items" className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">🏠 Objets</Link>
// //           <Link href="/items/won" className="bg-purple-100 text-purple-800 px-4 py-2 rounded hover:bg-purple-200">🎯 Mes achats</Link>
// //           <Link href="/items/sold" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">🛒 Mes ventes</Link>
// //           <Link href="/items/new" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow">🎁 Vendre</Link>
// //           <Link href="/profile" className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">👤 Profil</Link>
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

// //       {/* CONTENU DE L'OBJET */}
// //       <div className="space-y-6">
// //         <h3 className="text-2xl font-semibold text-indigo-700">Objet : {item.title}</h3>
// //         {item.imageUrl && (
// //           <img src={item.imageUrl} alt={item.title} className="w-full max-h-96 object-cover rounded shadow-md" />
// //         )}
// //         <p className="text-gray-700">Description : {item.description}</p>

// //         <p className="text-gray-800 font-medium">
// //           Prix actuel :
// //           <span className="text-indigo-600"> {highestBid?.amount ?? item.startingPrice} €</span>
// //           {item.currentHighestBidderName && (
// //             <span className="ml-2 text-sm text-gray-500">(par {item.currentHighestBidderName})</span>
// //           )}
// //         </p>

// //         <p className="text-red-500">
// //           Temps restant : {Math.floor(countdown / 60)}m {countdown % 60}s
// //         </p>

// //         <input
// //           type="number"
// //           value={amount}
// //           onChange={(e) => setAmount(+e.target.value)}
// //           className="border p-2 w-full rounded"
// //           placeholder="Montant de l'enchère"
// //         />
// //         <button
// //           onClick={handleBid}
// //           className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
// //         >
// //           Proposer une enchère
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // app/bid/[itemId]/page.tsx (enchérir sur un objet spécifique)

// 'use client';

// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { getItemById, bidOnItem, getProfile } from '../../../lib/api';

// export default function BidPage() {
//   const params = useParams();
//   const itemId = params?.itemId as string;

//   const [item, setItem] = useState<any>(null);
//   const [amount, setAmount] = useState(0);
//   const [countdown, setCountdown] = useState(300);
//   const [error, setError] = useState('');
//   const [user, setUser] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!itemId) return;

//     const fetchItemAndUser = async () => {
//       try {
//         const [profile, data] = await Promise.all([
//           getProfile(),
//           getItemById(itemId),
//         ]);
//         console.log("📦 Item reçu:", data);
//         setUser(profile);
//         setItem(data);

//         const endTime = Number(data.auctionEndTime);
//         const now = Date.now();
//         const diff = Math.floor((endTime - now) / 1000);
//         setCountdown(diff > 0 ? diff : 0);
//       } catch (err: any) {
//         setError(err.message || 'Erreur inattendue');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchItemAndUser();
//   }, [itemId]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleBid = async () => {
//     try {
//       await bidOnItem({ itemId, amount });
//       window.location.reload(); // Recharge pour voir le nouveau meilleur prix
//     } catch (err: any) {
//       alert(`Erreur lors de l'enchère : ${err.message}`);
//     }
//   };

//   if (loading) return <p className="text-center text-gray-500">⏳ Chargement...</p>;
//   if (error) return <p className="text-center text-red-600">{error}</p>;
//   if (!item) return <p className="text-center">Objet non trouvé</p>;

//   const highestBid = item.currentHighestBid;

//   return (
//     <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 space-y-6">
//       {/* HEADER */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <h2 className="text-3xl font-bold">Faire une enchère</h2>
//         <div className="flex flex-wrap gap-2 md:justify-end w-full md:w-auto">
//           <Link href="/items" className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">🏠 Objets</Link>
//           <Link href="/items/won" className="bg-purple-100 text-purple-800 px-4 py-2 rounded hover:bg-purple-200">🎯 Mes achats</Link>
//           <Link href="/items/sold" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">🛒 Mes ventes</Link>
//           <Link href="/items/new" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow">🎁 Vendre</Link>
//           <Link href="/profile" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">👤 Profil</Link>
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

//       {/* CONTENU DE L'OBJET */}
//       <div className="space-y-6">
//         <h3 className="text-2xl font-semibold text-indigo-700">Objet : {item.title}</h3>
//         {item.imageUrl && (
//           <img src={item.imageUrl} alt={item.title} className="w-full max-h-96 object-cover rounded shadow-md" />
//         )}
//         <p className="text-gray-700">Description : {item.description}</p>

//         <p className="text-gray-800 font-medium">
//           Prix actuel :
//           <span className="text-indigo-600"> {highestBid?.amount ?? item.startingPrice} €</span>
//           {item.currentHighestBidderName && (
//             <span className="ml-2 text-sm text-gray-500">(par {item.currentHighestBidderName})</span>
//           )}
//         </p>

//         <p className="text-red-500">
//           Temps restant : {Math.floor(countdown / 60)}m {countdown % 60}s
//         </p>

//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(+e.target.value)}
//           className="border p-2 w-full rounded"
//           placeholder="Montant de l'enchère"
//         />
//         <button
//           onClick={handleBid}
//           className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
//         >
//           Proposer une enchère
//         </button>
//       </div>
//     </div>
//   );
// }

'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getItemById, bidOnItem, getProfile,deregisterUser } from '../../../lib/api';

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
  currentHighestBidderName?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

export default function BidPage() {
  const params = useParams();
  const itemId = params?.itemId as string;

  const [item, setItem] = useState<Item | null>(null);
  const [amount, setAmount] = useState(0);
  const [countdown, setCountdown] = useState(300);
  const [error, setError] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!itemId) return;

    const fetchItemAndUser = async () => {
      try {
        const [profile, data] = await Promise.all([
          getProfile(),
          getItemById(itemId),
        ]);
        console.log("📦 Item reçu:", data);
        setUser(profile);
        setItem(data);

        const endTime = Number(data.auctionEndTime);
        const now = Date.now();
        const diff = Math.floor((endTime - now) / 1000);
        setCountdown(diff > 0 ? diff : 0);
      } 
      // catch (err: any) {
      //   setError(err.message || 'Erreur inattendue');
      // } 
      catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Erreur inattendue');
        }
      }
      finally {
        setLoading(false);
      }
    };

    fetchItemAndUser();
  }, [itemId]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBid = async () => {
    try {
      await bidOnItem({ itemId, amount });
      window.location.reload(); // Recharge pour voir le nouveau meilleur prix
    } 
    // catch (err: any) {
    //   alert(`Erreur lors de l'enchère : ${err.message}`);
    // }
    catch (err: unknown) {
      if (err instanceof Error) {
        alert(`Erreur lors de l'enchère : ${err.message}`);
      } else {
        setError('Erreur inattendue');
      }
    }
  };

  if (loading) return <p className="text-center text-gray-500">⏳ Chargement...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;
  if (!item) return <p className="text-center">Objet non trouvé</p>;

  const highestBid = item.currentHighestBid;
  const highestBidAmount = item.bids && item.bids.length > 0
    ? Math.max(...item.bids.map((bid: Bid) => bid.amount))
    : null;

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 space-y-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-3xl font-bold">Faire une enchère</h2>
        <div className="flex flex-wrap gap-2 md:justify-end w-full md:w-auto">
          <Link href="/items" className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">🏠 Objets</Link>
          <Link href="/items/won" className="bg-purple-100 text-purple-800 px-4 py-2 rounded hover:bg-purple-200">🎯 Mes achats</Link>
          <Link href="/items/sold" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">🛒 Mes ventes</Link>
          <Link href="/items/new" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow">🎁 Vendre</Link>
          <Link href="/profile" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">👤 Profil</Link>
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
                //  catch (e: any) {
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

      {/* CONTENU DE L'OBJET */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-indigo-700">Objet : {item.title}</h3>

        {item.imageUrl && (
          <img src={item.imageUrl} alt={item.title} className="w-full max-h-96 object-cover rounded shadow-md" />
        )}

        <p className="text-gray-700">Description : {item.description}</p>

        <p className="text-gray-800 font-medium">
          Prix de départ :
          <span className="text-indigo-600">
            {item.startingPrice} €
          </span>
        </p>
        <p className="text-gray-800 font-medium">
          Prix actuel :
          <span className="text-indigo-600">
            {highestBid?.amount ?? highestBidAmount ?? item.startingPrice} €
          </span>
          {item.currentHighestBidderName && (
            <span className="ml-2 text-sm text-gray-500">(par {item.currentHighestBidderName})</span>
          )}
        </p>

        <p className="text-sm text-gray-500">
          Nombre d’enchères : {item.bids?.length ?? 0}
        </p>

        <p className="text-red-500">
          Temps restant : {Math.floor(countdown / 60)}m {countdown % 60}s
        </p>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
          className="border p-2 w-full rounded"
          placeholder="Montant de l'enchère"
        />

        <button
          onClick={handleBid}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Proposer une enchère
        </button>
      </div>
    </div>
  );
}

