import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link, NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'

import logo from '../assets/logo-coffee-delivery.svg'
import { ProductsContext } from '../contexts/products-contexts'

export function Header() {
  const { newOrder, addressDelivery } = useContext(ProductsContext)
  const [cartLenght, setCartLenght] = useState(0)

  useEffect(() => {
    setCartLenght(newOrder.length)
  }, [newOrder])

  return (
    <header className="flex items-center justify-between py-8 fixed left-0 right-0 top-0 z-20 bg-zinc-50">
      <div className="flex items-center justify-between flex-1 max-w-6xl m-auto px-4">
        <Link to="/" title="Página inicial">
          <img src={logo} alt="" />
        </Link>

        <nav className="flex items-center gap-3">
          <span className="flex items-center gap-1 p-2 text-sm bg-violet-150 text-violet-930 rounded-md">
            <MapPin size={22} weight="fill" className="text-violet-650" />
            {addressDelivery &&
              `${addressDelivery?.city}, ${addressDelivery?.uf}`}
          </span>

          <NavLink
            to="/checkout"
            className="flex items-center p-2 bg-yellow-150 rounded-md relative"
            title="Página de checkout"
          >
            <span className="flex items-center justify-center font-bold text-xs text-white bg-yellow-650 w-5 h-5 absolute -top-2.5 -right-2.5 rounded-full ">
              {cartLenght}
            </span>
            <ShoppingCart size={22} weight="fill" className="text-yellow-650" />
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
