import { Banner } from './components/Banner'
import { Card } from './components/Card'
import { svg } from '../../assets/import/svg'

const data = [
  {
    id: 1,
    image: svg.espresso,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    tag: ['TRADICIONAL'],
  },
  {
    id: 2,
    image: svg.american,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    tag: ['TRADICIONAL'],
  },
  {
    id: 3,
    image: svg.creamyEspresso,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    tag: ['TRADICIONAL'],
  },
  {
    id: 4,
    image: svg.icedCoffee,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    tag: ['TRADICIONAL', 'GELADO'],
  },
  {
    id: 5,
    image: svg.coffeeWithMilk,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    tag: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 6,
    image: svg.latte,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    tag: ['TRADICIONAL', 'GELADO'],
  },
  {
    id: 7,
    image: svg.capuccino,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    tag: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 8,
    image: svg.macchiato,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    tag: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 9,
    image: svg.mochaccino,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    tag: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 10,
    image: svg.hotChocolate,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    tag: ['ESPECIAL', 'COM LEITE'],
  },
  {
    id: 11,
    image: svg.cuban,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    tag: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
  },
  {
    id: 12,
    image: svg.hawaiian,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    tag: ['ESPECIAL'],
  },
  {
    id: 13,
    image: svg.arabic,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    tag: ['ESPECIAL'],
  },
  {
    id: 14,
    image: svg.irish,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    tag: ['ESPECIAL, ALCOÓLICO'],
  },
]

export function Home() {
  document.title = 'Home | Coffee Delivery'

  return (
    <main className="mt-24">
      <Banner />

      <section className="flex flex-wrap justify-center lg:justify-stretch gap-8 pb-4">
        {data.map((data) => {
          return (
            <Card
              key={data.id}
              image={data.image}
              tag={data.tag}
              title={data.title}
              description={data.description}
              price={data.price}
            />
          )
        })}
      </section>
    </main>
  )
}
