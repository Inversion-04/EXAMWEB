import { useEffect, useState } from 'react'
import axios from 'axios'

function Apicalling() {
  const [allProducts, setAllProducts] = useState([])   // ✅ Fixed spelling
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const API = 'https://fakestoreapi.com/products'

    async function fetchProducts() {
      try {
        const response = await axios.get(API)
        setAllProducts(response.data)
        console.log(response.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { allProducts, loading, error }
}

export default Apicalling
