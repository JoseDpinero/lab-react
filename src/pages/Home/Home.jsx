import React from 'react'

export default function Home() {
  return (
    <div className="bg-gray-200 flex justify-center h-screen items-center">
      <div className="login-card">
        <img
          className="w-full h-40 object-cover md:h-full"
          src="https://picsum.photos/200/300"
          alt=""
        />
        <div className="p-4 flex-1 md:flex md:flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Connexion</h1>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 mb-2">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="input "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input"
            />
          </div>
          <button type="submit" className='submit-button'>Se connecter</button>
        </div>
      </div>
    </div>
  )
}
