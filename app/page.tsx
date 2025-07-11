// // app/page.tsx
// export default function HomePage() {
//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-indigo-50 p-6">
//       <div className="text-center max-w-2xl space-y-6">
//         <h1 className="text-5xl font-extrabold text-indigo-700 drop-shadow">
//           🎯 Bienvenue sur <span className="text-indigo-500">Cloud Auction</span>
//         </h1>
//         <p className="text-lg text-gray-700">
//           Participez à des enchères en temps réel, gagnez des objets rares, et vendez ce que vous voulez en un clic.
//         </p>

//         <div className="flex flex-wrap justify-center gap-4 mt-8">
//           <a href="/register" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow transition">
//             Créer un compte
//           </a>
//           <a href="/items" className="bg-white border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl shadow hover:bg-indigo-50 transition">
//             Voir les objets
//           </a>
//         </div>

//         <img
//           src="/auction_system.png"
//           alt="Illustration enchères"
//           className="mx-auto mt-10 max-w-sm drop-shadow-lg"
//         />
//       </div>
//       {/* <div className="bg-red-200 p-4 mt-7 text-center">TEST TAILWIND</div> */}

//     </div>
//   );
// }

// app/page.tsx


// app/page.tsx
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 p-6 overflow-hidden relative">
      {/* Éléments décoratifs - version Tailwind */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="text-center max-w-4xl space-y-8 relative z-10">
        {/* Titre avec animation */}
        <div className="animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 leading-tight drop-shadow-sm">
            Découvrez l'art des enchères <span className="block text-indigo-500">en ligne</span>
          </h1>
        </div>

        {/* Sous-titre */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in-down animation-delay-100">
          Une expérience d'enchères <span className="font-semibold text-indigo-600">immersive</span> pour collectionneurs passionnés et chasseurs de bonnes affaires.
        </p>

        {/* CTA avec animation */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 animate-fade-in-down animation-delay-200">
          <a 
            href="/login" 
            className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-300 rounded-xl group bg-gradient-to-br from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10">Commencer maintenant</span>
            <span className="absolute -bottom-0 -right-0 w-full h-10 transition-all duration-300 ease-in-out skew-x-12 bg-indigo-800 group-hover:-right-8 group-hover:-bottom-8 opacity-30 group-hover:opacity-50"></span>
          </a>
          
          <a 
            href="/register" 
            className="relative inline-flex items-center justify-center px-8 py-4 font-medium transition-all duration-300 rounded-xl group border-2 border-indigo-600 text-indigo-600 hover:text-white hover:bg-indigo-600 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              Inscrivez-Vous
            </span>
          </a>
        </div>

        {/* Illustration avec animation */}
        <div className="mt-16 animate-fade-in-up animation-delay-300">
          <div className="relative inline-block">
            <img
              src="/auction_system.png"
              alt="Illustration enchères"
              className="mx-auto w-full max-w-2xl rounded-xl shadow-2xl border-8 border-white transform hover:-translate-y-2 transition-transform duration-300"
            />
            <div className="absolute -bottom-5 -right-5 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Enchères en direct</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-in-up animation-delay-400">
          {[
            { value: "10K+", label: "Objets vendus" },
            { value: "5K+", label: "Utilisateurs" },
            { value: "99%", label: "Satisfaction" },
            { value: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
