'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    try {
      const { data, error } = await supabase.from('products').select('*')
      if (error) throw error
      setProducts(data || [])
    } catch (error: any) {
      console.error('Error fetching products:', error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto" dir="rtl">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">إدارة المنتجات - بين يديك ساه</h1>
      
      {loading ? (
        <p className="text-gray-500">جاري تحميل المنتجات...</p>
      ) : products.length === 0 ? (
        <p className="text-gray-500">لا توجد منتجات مضافة حالياً في قاعدة البيانات.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 bg-white rounded-lg shadow border border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.price} ر.ي</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
