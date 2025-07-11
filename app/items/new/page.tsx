// // app/items/new/page.tsx (formulaire vente)

'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { offerItem } from '../../../lib/api';
import axios from 'axios';
import Link from 'next/link';
import { BASE_URL , deregisterUser } from '../../../lib/api';

export default function OfferItemPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;
    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post(`${BASE_URL}/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setImageUrl(res.data.url);
    } 
    // catch (err: any) {
    //   console.error("ERREUR D'UPLOAD IMAGE", err);
    //   alert('Erreur upload image : ' + (err.response?.data?.error || err.message));
    // } 

    catch (err: unknown) {
      if (err instanceof Error) {
      console.error("ERREUR D'UPLOAD IMAGE", err);
      alert('Erreur upload image : ' + (err.message));
      } 
    }
    
    finally {
      setUploading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = async () => {
    await offerItem({ title, description, imageUrl, startingPrice: price });
    alert('Objet proposé avec succès !');
    window.location.reload();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-6">
      {/* HEADER DASHBOARD */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-3xl font-bold">🎁 Proposer un objet à vendre</h2>
        <div className="flex flex-wrap gap-2 md:justify-end w-full md:w-auto">
          <Link href="/items" className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">🏠 Enchères</Link>
          <Link href="/items/won" className="bg-purple-100 text-purple-800 px-4 py-2 rounded hover:bg-purple-200">🎯 Mes achats</Link>
          <Link href="/items/sold" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">🛒 Mes ventes</Link>
          <Link href="/profile" className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">👤 Profil</Link>
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

      {/* FORMULAIRE DE VENTE */}
      <div className="space-y-4 max-w-xl">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre de l'objet"
          className="border p-2 w-full rounded"
        />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 w-full rounded"
        />

        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded p-4 text-center ${
            isDragActive ? 'bg-blue-50' : 'bg-gray-50'
          }`}
        >
          <input {...getInputProps()} />
          {uploading ? (
            <p className="text-gray-600">📤 Upload en cours…</p>
          ) : (
            <p className="text-gray-600">
              {imageUrl
                ? '✅ Image téléchargée'
                : '📎 Glissez ou cliquez pour ajouter une image'}
            </p>
          )}
        </div>

        {imageUrl && (
          <img
            src={imageUrl}
            alt="Aperçu"
            className="w-full max-h-64 object-cover rounded"
          />
        )}

        <label className="block font-medium text-gray-700">💰 Prix initial de départ</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
          placeholder="Prix de départ"
          className="border p-2 w-full rounded"
        />

        <button
          onClick={handleSubmit}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded"
        >
          Mettre en vente
        </button>
      </div>
    </div>
  );
}
