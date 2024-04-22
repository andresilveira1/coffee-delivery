import { Banner } from './components/Banner'
import { Card } from './components/Card'

export function Home() {
  document.title = 'Home | Coffee Delivery'

  return (
    <main className="mt-24">
      <Banner />

      <section className="flex flex-wrap justify-center lg:justify-stretch gap-8 pb-4">
        <Card />
      </section>
    </main>
  )
}
