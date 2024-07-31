import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts'

import { Home } from './pages/home'
import { Checkout } from './pages/checkout'
import { OrderConfirmed } from './pages/order-confirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}
