import React from 'react'
import { Header } from './Header/Header'
import { GlobalStyles } from './GlobalStyles'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <Header />
      </main>
    </>
  )
}
