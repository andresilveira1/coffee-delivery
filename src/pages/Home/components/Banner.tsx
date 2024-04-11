import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import banner from '../../../assets/banner.svg'

export function Banner() {
  return (
    <div className="flex flex-col lg:flex-row gap-14 py-14 md:py-24">
      <div>
        <div className="mb-16">
          <h1 className="font-alt font-extrabold text-5xl mb-4 text-base-800">
            Encontre o café perfeito para qualquer hora do dia
          </h1>

          <p className="text-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <footer className="flex flex-wrap gap-2 md:gap-0 items-center text-base-700">
          <span className="flex items-center gap-3 w-[14.375rem] mr-10 md:mb-5">
            <ShoppingCart
              weight="fill"
              className="w-8 h-8 p-2 text-white bg-yellow-650 rounded-full"
            />
            Compra simples e segura
          </span>
          <span className="flex items-center gap-3 md:mb-5">
            <Package
              weight="fill"
              className="w-8 h-8 p-2 text-white bg-base-500 rounded-full"
            />
            Embalagem mantém o café intacto
          </span>
          <span className="flex items-center gap-3 md:mr-10">
            <Timer
              weight="fill"
              className="w-8 h-8 p-2 text-white bg-yellow-550 rounded-full"
            />
            Entrega rápida e rastreada
          </span>
          <span className="flex items-center gap-3">
            <Coffee
              weight="fill"
              className="w-8 h-8 p-2 text-white bg-violet-650 rounded-full"
            />
            O café chega frequinho até você
          </span>
        </footer>
      </div>

      <img src={banner} alt="" className="w-96 lg:w-auto mx-auto" />
    </div>
  )
}
