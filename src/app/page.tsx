"use client"

import { Header } from '@/components/section/header'
import { Hero } from '@/components/section/hero'
import { Categories } from "@/components/section/categories"
import { Popular } from "@/components/section/popular"
import { Customer } from "@/components/section/customer"
import { Featured } from "@/components/section/featured"
import { Status } from "@/components/section/status"
import { Footer } from "@/components/section/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header/>

      {/* Hero Section with Search */}
      <Hero />

      {/* Product Categories */}
      
      <Categories />
      

      {/* Popular Products */}
      <Popular />

      {/* Customer Reviews */}
      <Customer/>

      {/* Featured Skateboards */}
      <Featured/>  

      {/* Stats */}
      <Status />

      {/* Footer */}
      <Footer />
    </div>
  )
}
