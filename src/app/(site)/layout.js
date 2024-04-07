import SiteNavigation from '@/components/navigation/siteNavigation/siteNavigation'
import { BasketContextProvider } from '@/context/basket.context'

export default function siteLayout({ children }) {
  return (
    <div>
      <BasketContextProvider>
        <SiteNavigation />
        {children}
      </BasketContextProvider>
    </div>
  )
}
