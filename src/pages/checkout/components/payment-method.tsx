import { CurrencyDollar, CreditCard, Bank, Money } from '@phosphor-icons/react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { Control, Controller } from 'react-hook-form'

interface PaymentMethodProps {
  useFormControl: Control<{
    paymentMethod: 'credit' | 'debit' | 'money'
    address: string
    cep: number
    addressNumber: number
    district: string
    city: string
    uf: string
    complement?: string | undefined
  }>
}

export function PaymentMethod({ useFormControl }: PaymentMethodProps) {
  return (
    <div className="p-10 mt-3 rounded-md bg-base-50 w-[40rem]">
      <div className="flex gap-2">
        <CurrencyDollar size={22} className="text-violet-650" />
        <div>
          <strong className="font-normal text-base-700">Pagamento</strong>
          <p className="text-sm text-base-500">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>

      <Controller
        name="paymentMethod"
        control={useFormControl}
        rules={{ required: true }}
        render={({ field }) => (
          <RadioGroup.Root
            onValueChange={field.onChange}
            className="flex items-center gap-3 mt-8"
          >
            <RadioGroup.Item
              value="credit"
              id="credit"
              className="bg-base-200 flex-1 h-[3.188rem] rounded-md border hover:bg-base-250 data-[state=checked]:bg-violet-150 data-[state=checked]:border-violet-650"
            >
              <RadioGroup.Indicator />
              <label
                htmlFor="credit"
                className="flex item-center justify-start gap-3 ml-4 cursor-pointer"
              >
                <CreditCard size={16} className="text-violet-650" />
                <span className="uppercase text-xs text-base-500">
                  Cartão de crédito
                </span>
              </label>
            </RadioGroup.Item>

            <RadioGroup.Item
              value="debit"
              id="debit"
              className="bg-base-200 flex-1 h-[3.188rem] rounded-md border hover:bg-base-250 data-[state=checked]:bg-violet-150 data-[state=checked]:border-violet-650"
            >
              <RadioGroup.Indicator />
              <label
                htmlFor="debit"
                className="flex item-center justify-start gap-3 ml-4 cursor-pointer"
              >
                <Bank size={16} className="text-violet-650" />
                <span className="uppercase text-xs text-base-500">
                  Cartão de débito
                </span>
              </label>
            </RadioGroup.Item>

            <RadioGroup.Item
              value="money"
              id="money"
              className="bg-base-200 flex-1 h-[3.188rem] rounded-md border hover:bg-base-250 data-[state=checked]:bg-violet-150 data-[state=checked]:border-violet-650"
            >
              <RadioGroup.Indicator />
              <label
                htmlFor="money"
                className="flex item-center justify-start gap-3 ml-4 cursor-pointer"
              >
                <Money size={16} className="text-violet-650" />
                <span className="uppercase text-xs text-base-500">
                  Dinheiro
                </span>
              </label>
            </RadioGroup.Item>
          </RadioGroup.Root>
        )}
      />
    </div>
  )
}
