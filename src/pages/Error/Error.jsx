import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <h1>
      Ooups cette page n'existe pas{' '}
      <Link to="/">Retour à la page d'acceuil</Link>
    </h1>
  )
}
