import React from "react"
import Button, { Button2 } from "./Button"

function Hero() {
  return (
    <main className="flex  justify-center ">
      x
      <div className="h-[88vh] px-2 sm:px-5 pt-28  max-w-7xl w-full">
        <h1 className="text-6xl sm:text-8xl lg:text-[120px] lg:w-2/3  text-neutral-800 w-1/2">
          Enhance your fitness
        </h1>
        <div className="flex mt-5 flex-col gap-2">
          <Button text={"Lemon App"} />
          <Button2 text={"About Lemon"} />
        </div>
        <div className="flex flex-col px-5  items-center mt-10">
          <h1 className="text-transparent md:text-lg bg-clip-text bg-gradient-to-r from-neutral-700 via-[#B3C449] to-neutral-700">
            backed by Y-Combinator
            </h1>
           <p className="text-neutral-900 text-center md:text-md text-sm">
            in the realm of fitness we want to support every athlete with Lemon.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Hero
