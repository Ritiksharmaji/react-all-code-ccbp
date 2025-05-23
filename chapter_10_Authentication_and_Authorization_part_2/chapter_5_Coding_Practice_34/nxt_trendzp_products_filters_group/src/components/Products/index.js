import AllProductsSection from '../AllProductsSection'
import PrimeDealsSection from '../PrimeDealSection'
import Header from '../Header'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="product-sections">
      <PrimeDealsSection/>
      <AllProductsSection />
    </div>
  </>
)

export default Products
