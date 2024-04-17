import { ShoppingCartSimple } from '@phosphor-icons/react'
import { Counter } from '../../../components/Counter'

interface CardProps {
  image: string
  tag: string[]
  title: string
  description: string
  price: string
}

export function Card({ image, tag, title, description, price }: CardProps) {
  return (
    <div className="flex flex-col items-center w-64 px-5 pb-5 bg-base-50 rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] hover:scale-110 transition-all hover:shadow-md hover:shadow-violet-650 animate-fadeUp">
      <img src={image} alt="" className="w-32 -mt-5 mb-3" />

      <span className="py-1 px-2 mb-4 text-xs font-bold text-yellow-650 bg-yellow-150 w-fit rounded-[100px]">
        {tag}
      </span>

      <strong className="text-xl text-base-700 font-alt font-bold mb-2">
        {title}
      </strong>

      <p className="text-sm text-base-300 text-center mb-8">{description}</p>

      <footer className="flex w-full items-center justify-between">
        <span className="flex items-baseline gap-1 font-alt text-base-500 text-2xl font-extrabold before:content-['R$'] before:font-sans before:text-sm before:font-normal">
          {price}
        </span>

        <div className="flex gap-2">
          <Counter className="flex items-center gap-2 bg-base-200 p-2 rounded-md" />

          <button
            title="Adicionar ao carrinho de compras"
            className="p-2 text-base-50 bg-violet-930 hover:bg-violet-650 transition-colors rounded-md"
          >
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </footer>
    </div>
  )
}
