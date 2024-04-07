'use client'
import { useState } from 'react'
import styles from './siteNavigation.module.css'
import { BsBasket } from 'react-icons/bs'
import { CiMenuKebab } from 'react-icons/ci'
import Basket from '@/components/basket/basket'

const SiteNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBasketOpen, setIsBasketOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleBasketClick = () => {
    setIsBasketOpen(!isBasketOpen)
  }

  return (
    <header className={styles.siteNavigationWrapper}>
      <nav className={styles.navWrapper}>
        <div>Your Logo Here</div>
        <div className={styles.rightSideItems}>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href='products'>Products</a>
            </li>
            <li>
              <a href=''>Services</a>
            </li>
            <li>
              <a href=''>About</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
          <BsBasket onClick={handleBasketClick} />
        </div>
        <div className={styles.mobileMenuLogo}>
          <div onClick={handleBasketClick}>
            <BsBasket />
          </div>
          <div onClick={handleMenuClick}>
            <CiMenuKebab />
          </div>
        </div>
        <div
          className={`${styles.mobileMenuDrop} ${
            isMenuOpen ? styles.open : ''
          }`}
        >
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href='products'>Products</a>
            </li>
            <li>
              <a href=''>Services</a>
            </li>
            <li>
              <a href=''>About</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
        </div>

        <div
          className={`${styles.basketDrop} ${isBasketOpen ? styles.open : ''}`}
        >
          <Basket />
        </div>
      </nav>
    </header>
  )
}

export default SiteNavigation
