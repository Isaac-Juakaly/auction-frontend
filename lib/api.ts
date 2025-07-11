import { getToken } from './auth';

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';


export function authHeaders() {
  const token = localStorage.getItem('token');
  console.log('🔐 Token utilisé :', token);
  return token ? { Authorization: `Bearer ${token}` } : {};
}



export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Erreur API');
  }

  return res.json(); // { id, name, email, ... }
}


export async function loginUser(email: string, password: string) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Erreur de connexion');
  }

  return res.json(); // { token, user }
}


export async function getActiveItems() {
  const res = await fetch(`${BASE_URL}/items`, {
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders(),
    }as HeadersInit,
  });
  if (!res.ok) throw new Error('Erreur lors du chargement des items');
  return res.json();
}



export async function offerItem(data: {
  title: string;
  description: string;
  imageUrl: string;
  startingPrice: number;
  
   }) {
  // const res = await fetch(`${BASE_URL}/items`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     ...authHeaders(),
  //   },
  //   body: JSON.stringify(data),
    
  // });
  const res = await fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders(),
    } as HeadersInit, // ✅ ici
    body: JSON.stringify(data),
  });
  console.log(authHeaders())
  const json = await res.json();
  console.log(json);
  return json;

}

// export async function bidOnItem(itemId: string, amount: number, bidderId: string) {
//   const res = await fetch(`${BASE_URL}/bid`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       ...authHeaders(),
//     } as HeadersInit,
//     body: JSON.stringify({ itemId, amount, bidderId }), // ✅ Ajouté ici
//   });

//   if (!res.ok) {
//     const error = await res.json().catch(() => ({}));
//     throw new Error(error.message || 'Erreur lors de l\'enchère');
//   }

//   return res.json();
// }

// export async function bidOnItem(itemId: string, amount: number, bidderId: string) {
//   const body = JSON.stringify({ itemId, amount, bidderId });
//   console.log("📤 Envoi enchère :", body); // 👈 AJOUTE CE LOG

//   const res = await fetch(`${BASE_URL}/bid`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       ...authHeaders(),
//     } as HeadersInit,
//     body,
//   });

//   if (!res.ok) {
//     const error = await res.json().catch(() => ({}));
//     throw new Error(error.message || 'Erreur lors de l\'enchère');
//   }

//   return res.json();
// }


export async function bidOnItem(data: {
  itemId: string;
  amount: number; 
   }) {
  const res = await fetch(`${BASE_URL}/bid`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders(),
    } as HeadersInit, // ✅ ici
    body: JSON.stringify(data),
  });
  console.log(authHeaders())
  const json = await res.json();
  console.log(json);
  return json;
}

// export async function getItemById(itemId: string) {
//   const res = await fetch(`${BASE_URL}/items/${itemId}`);
//   if (!res.ok) throw new Error('Erreur lors de la récupération de l\'objet');
//   return res.json();
// }
export async function getItemById(itemId: string) {
  const res = await fetch(`${BASE_URL}/items/${itemId}`, {
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders(),
    } as HeadersInit,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Erreur lors de la récupération de l\'objet');
  }

  return res.json();
}


// export async function getItemById(itemId: string) {
//   const res = await fetch(`${BASE_URL}/items/${itemId}`);
//   if (!res.ok) throw new Error('Échec du chargement de l\'objet');
//   return res.json();
// }

// export async function bidOnItem(itemId: string, amount: number) {
//   const res = await fetch(`${BASE_URL}/bid`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       ...authHeaders(),
//     } as HeadersInit,
//     body: JSON.stringify({ itemId, amount }),
//   });

//   if (!res.ok) {
//     const error = await res.json();
//     throw new Error(error.message || 'Erreur inconnue');
//   }

//   return res.json();
// }


export async function getItemsSoldByUser(email: string) {
  const res = await fetch(`${BASE_URL}/items/sold?email=${encodeURIComponent(email)}`, {
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders(),
    } as HeadersInit,
  });
  if (!res.ok) throw new Error('Erreur lors du chargement des ventes');
  return res.json();
}

export async function getItemsWonByUser(email: string) {
  const res = await fetch(`${BASE_URL}/items/won?email=${encodeURIComponent(email)}`, {
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders(),
    } as HeadersInit,
  });
  if (!res.ok) throw new Error('Erreur lors du chargement des achats');
  return res.json();
}




export async function getProfile() {
  const res = await fetch(`${BASE_URL}/me`, {
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders(),
    } as HeadersInit,
  });

  console.log(authHeaders())
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Erreur de chargement du profil');
  }

  return res.json(); // { id, name, email, avatar }
}


export async function deregisterUser() {
  const res = await fetch(`${BASE_URL}/me`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders(),
    } as HeadersInit,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Échec de la désinscription');
  }
}
