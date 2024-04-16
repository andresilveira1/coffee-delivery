import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="max-w-6xl px-4 pb-4 mx-auto antialiased">
      <Header />

      <Outlet />
    </div>
  )
}
