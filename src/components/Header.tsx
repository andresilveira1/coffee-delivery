import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../assets/logo-coffee-delivery.svg'

export function Header() {
  return (
    <header className="flex items-center justify-between py-8 fixed left-0 right-0 top-0 z-20 bg-zinc-50">
      <div className="flex items-center justify-between flex-1 max-w-6xl m-auto px-4">
        <Link to="/" title="Página inicial">
          <img src={logo} alt="" />
        </Link>

        <nav className="flex items-center gap-3">
          <span className="flex items-center gap-1 p-2 text-sm bg-violet-150 text-violet-930 rounded-md">
            <MapPin size={22} weight="fill" className="text-violet-650" />
            Linhares, ES
          </span>

          <NavLink
            to="/checkout"
            className="flex items-center p-2 bg-yellow-150 rounded-md"
            title="Página de checkout"
          >
            <ShoppingCart size={22} weight="fill" className="text-yellow-650" />
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
