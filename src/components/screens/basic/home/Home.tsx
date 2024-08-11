import { FC } from "react"
import { HomeHero } from "./hero/HomeHero"
import { HomeSwiper } from "./swiper/HomeSwiper"
import { HomeLastBook } from "./lastBook/HomeLastBook"

const Home:FC = () => {
  return (
    <>
    <HomeHero />
    <HomeSwiper />
    <HomeLastBook />
    </>
  )
}

export { Home }