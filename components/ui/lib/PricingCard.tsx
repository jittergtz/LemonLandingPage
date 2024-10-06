"use client"


import { cn } from "@/lib/utils"
// Fixed typo in import path (was 'utlis')
import { VariantProps, cva } from "class-variance-authority"
import React from "react"
import { FaCheckCircle } from "react-icons/fa"

const buttonVariants = cva("h-96 w-full", {
  variants: {
    variant: {
      light:
        "bg-gradient-to-b from-neutral-100 to-neutral-300 text-neutral-600 border border-neutral-400",
      spaceblack: "bg-gradient-t from-neutral-950 to-neutral-600",
      ocean:
        "bg-gradient-to-t from-blue-700 to-neutral-950 border border-gray-900 text-gray-300",
      secondary:
        "bg-gradient-to-b from-neutral-900 to-neutral-950 text-neutral-400 border border-neutral-800",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
  },
  defaultVariants: {
    variant: "light",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Pricingcard = React.forwardRef<HTMLDivElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const features = [
      {
        title: "Email Support",
      },
      {
        title: "Financial Analytics",
      },
      {
        title: "Checking Accounts",
      },
      {
        title: "Support+ 24/7",
      },
    ]

    const getStyles = (variant: any) => {
      const styles = {
        // + deafult styles (optional)
        borderColor: "border-neutral-300",
        gradient: "bg-gradient-to-b from-white to-neutral-500",
        pClass: "text-sm",
        button: "",
        checks: "text-green-400",
      }

      switch (variant) {
        case "light":
          styles.borderColor = "border-neutral-300"
          styles.gradient = "bg-gradient-to-b from-neutral-900 to-neutral-500"
          styles.button = "text-neutral-500 bg-neutral-900 border-neutral-800"
          break
        case "spaceblack":
          styles.borderColor = "border-neutral-800"
          styles.gradient = "bg-gradient-to-b from-black to-gray-800"
          styles.button = "text-neutral-500 bg-neutral-900 border-neutral-800"
          break
        case "ocean":
          styles.borderColor = "border-gray-700"
          styles.gradient = "bg-gradient-to-b from-gray-200 to-gray-500"
          styles.button =
            "text-neutral-500 bg-neutral-900 border-neutral-800 bg-neutral-900"
          styles.checks = "text-neutral-300"
          break
        case "secondary":
          styles.borderColor = "border-neutral-800"
          styles.gradient = "bg-gradient-to-b from-neutral-200 to-neutral-700"
          styles.button = "text-neutral-500 bg-neutral-900 border-neutral-800"
          break
        case "ghost":
          styles.borderColor = "border-neutral-400"
          styles.gradient = "bg-gradient-to-b from-accent-light to-accent-dark"
          styles.button = "text-neutral-500 bg-neutral-900 "
          break
        case "link":
          styles.borderColor = "border-primary"
          styles.gradient =
            "bg-gradient-to-b from-primary-light to-primary-dark"
          styles.button = "text-neutral-500 bg-neutral-900 "
          break
        default:
          // Standardwerte bleiben bestehen
          break
      }

      return styles
    }

    const styles = getStyles(variant)

    return (
      <div
        className={cn(
          buttonVariants({ variant, className }),
          "w-64 h-min py-4  rounded-2xl"
        )}
        {...props}
      >
        <div className="flex flex-col mx-3 items-center p-2 justify-center">
          <p className="text-sm">Pro</p>
          <h1 className="text-3xl mt-5">$10/mo</h1>
          <div className={cn(styles.borderColor, "border-b mt-4 w-full")}></div>
        </div>

        <div
          className={cn(
            styles.gradient,
            "flex flex-col mx-3 text-transparent bg-clip-text  items-center p-2 justify-center"
          )}
        >
          <p className="text-xs text-center">
            Up to 3,000 emails /mo
            <br />
            100 emails/day
          </p>
          <div className={cn(styles.borderColor, "border-b mt-4 w-full")}></div>
        </div>

        <div className="flex flex-col gap-4 p-1 px-7">
          {features.map((data) => (
            <span className="flex gap-1 items-center text-sm" key={data.title}>
              <FaCheckCircle className={styles.checks} size={12} /> {data.title}
            </span>
          ))}
        </div>

        <div className="mt-10 flex justify-center mx-5">
          <button
            className={cn(
              styles.button,
              "border rounded-xl w-full px-6 p-1  hover:scale-105 transition"
            )}
          >
            Start now
          </button>
        </div>
      </div>
    )
  }
)

Pricingcard.displayName = "PricingCard"

export default Pricingcard