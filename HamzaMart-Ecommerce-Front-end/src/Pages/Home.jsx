import React from 'react'
import AdditionalInfo from '../components/Layout/AdditionalInfo'
import Addvertise from '../components/Layout/Addvertise'
import Banner from '../components/Layout/Banner'
import BestSeller from '../components/Layout/BestSeller'
import MiddleAdd from '../components/Layout/MiddleAdd'
import NewArrival from '../components/Layout/NewArrival'
import Offers from '../components/Layout/Offers'

const Home = () => {
  return (
      <>
      <Banner />
      <AdditionalInfo />
      <Addvertise />
      <NewArrival />
      <BestSeller />
      <MiddleAdd />
      <Offers/>
      </>
  )
}

export default Home