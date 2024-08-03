import { Helmet } from 'react-helmet-async'

import { Banner } from './components/banner'
import { Card } from './components/card'

export function Home() {
  return (
    <main className="mt-24">
      <Helmet title="Home" />
      <Banner />

      <section className="flex flex-wrap justify-center lg:justify-stretch gap-8 pb-4">
        <Card />
      </section>
    </main>
  )
}
