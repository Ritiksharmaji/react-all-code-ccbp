import { Component } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ProductCard from '../ProductCard'
import './index.css'
import ProductsHeader from '../ProductsHeader'


const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

class AllProductsSection extends Component {
  state = {
    productsList: [],
    isLoading: false,
    activeOptionId: sortbyOptions[0].optionId, // Initialize with default sort option
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const { activeOptionId } = this.state

    this.setState({
      isLoading: true,
    })

    console.log(`Fetching products with sort option: ${activeOptionId}`) // Debug log

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}`
    console.log(`API URL: ${apiUrl}`) // Debug log

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    try {
      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const fetchedData = await response.json()
        const updatedData = fetchedData.products.map(product => ({
          title: product.title,
          brand: product.brand,
          price: product.price,
          id: product.id,
          imageUrl: product.image_url,
          rating: product.rating,
        }))
        this.setState({
          productsList: updatedData,
          isLoading: false,
        })
        console.log('Fetched products:', updatedData) // Debug log
      } else {
        this.setState({ isLoading: false })
        console.error('Failed to fetch products') // Debug log
      }
    } catch (error) {
      this.setState({ isLoading: false })
      console.error('Error fetching products:', error) // Debug log
    }
  }

  renderProductsList = () => {
    const { productsList, activeOptionId } = this.state
    return (
      <>
        <ProductsHeader 
          sortbyOptions={sortbyOptions} 
          activeOptionId={activeOptionId} 
          updateActiveOptionId={this.updateActiveOptionId} 
        />
        
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </>
    )
  }

  updateActiveOptionId = activeOptionId => {
    console.log(`Updating sort option to: ${activeOptionId}`) // Debug log
    this.setState(
      { activeOptionId }, // Update active sort option
      this.getProducts // Call getProducts after state update
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <ThreeDots color="#0b69ff" height={50} width={50} />
    </div>
  )

  render() {
    const { isLoading } = this.state
    return <>{isLoading ? this.renderLoader() : this.renderProductsList()}</>
  }
}

export default AllProductsSection
