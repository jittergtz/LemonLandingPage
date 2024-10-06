import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'
import { Slot } from "@radix-ui/react-slot"
import Pricingcard from './lib/PricingCard'

function PricingSection() {
  return (
    <div className='mt-10 flex items-center flex-col'> 
      <h1 className='text-center text-4xl'>Pricing</h1>

      <div className='mt-20 border'>
          <Pricingcard variant="light"/>
      </div>
    </div>
  )
}

export default PricingSection


