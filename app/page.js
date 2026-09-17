'use client';
import { useState } from 'react';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tokenInput, setTokenInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  // قائمة المنتجات المحلية المؤقتة
  const [products, setProducts] = useState([]);
  
  // حقول نموذج إضافة منتج جديد
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDesc, setProductDesc] = useState('');

  // الرمز السري المعتمد (يمكنك تغليفه أو تعديله متى شئت)
  const validToken = 'sah2026';

  const handleLogin = (e) => {
    e.preventDefault();
    if (tokenInput.trim() === validToken) {
      setIsAuthenticated(true);
      setErrorMessage('');
    } else {
      setErrorMessage('الرمز السري غير صحيح، تأكد من الرمز المعطى لك.');
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!productName || !productPrice) return;

    const newProd = {
      id: Date.now(),
      name: productName,
      price: productPrice,
      desc: productDesc,
    };

    setProducts([newProd, ...products]);
    setProductName('');
    setProductPrice('');
    setProductDesc('');
  };

  return (
    <div style={{ fontFamily: 'Tahoma, sans-serif', direction: 'rtl', backgroundColor: '#f8fafc', minHeight: '100vh', padding: '20px', margin: 0 }}>
      {/* رأس الصفحة */}
      <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1e293b', margin: '0 0 6px 0' }}>
            إدارة المنتجات - بين يديك ساه
          </h1>
          <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
            لوحة التحكم المركزية لإدارة منتجاتك بكل سهولة واحترافية.
          </p>
        </div>
        
        {isAuthenticated ? (
          <div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '8px 16px', borderRadius: '12px', fontSize: '13px', fontWeight: 'bold' }}>
            ✓ تم تسجيل الدخول بصلاحية الإضافة
          </div>
        ) : (
          <form onSubmit={handleLogin} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <input 
              type="password" 
              placeholder="أدخل الرمز السري..." 
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', outline: 'none' }}
            />
            <button type="submit" style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>
              دخول
            </button>
          </form>
        )}
      </div>

      {errorMessage && (
        <div style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '12px', borderRadius: '10px', marginBottom: '20px', fontSize: '13px', textAlign: 'center' }}>
          {errorMessage}
        </div>
      )}

      {/* نموذج إضافة منتج (لا يظهر إلا إذا أدخل الرمز الصحيح) */}
      {isAuthenticated && (
        <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '24px', border: '2px solid #2563eb' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e293b', margin: '0 0 16px 0' }}>➕ إضافة منتج جديد للقائمة</h2>
          <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input 
              type="text" 
              placeholder="اسم المنتج (مثال: عسل طبيعي)" 
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              style={{ padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px' }}
              required
            />
            <input 
              type="text" 
              placeholder="السعر (مثال: 50$" 
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              style={{ padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px' }}
              required
            />
            <textarea 
              placeholder="وصف مختصر للمنتج..." 
              value={productDesc}
              onChange={(e) => setProductDesc(e.target.value)}
              style={{ padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', minHeight: '80px' }}
            />
            <button type="submit" style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '10px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}>
              حفظ ونشر المنتج
            </button>
          </form>
        </div>
      )}

      {/* قائمة المنتجات */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>قائمة المنتجات الحالية</h2>
          <span style={{ fontSize: '11px', backgroundColor: '#eff6ff', color: '#2563eb', padding: '4px 12px', borderRadius: '20px', fontWeight: 'bold' }}>
            {products.length} منتج متوفر
          </span>
        </div>

        {products.length === 0 ? (
          <div style={{ padding: '50px 20px', textAlign: 'center' }}>
            <div style={{ maxWidth: '380px', margin: '0 auto' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '26px' }}>
                📦
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 'bold', color: '#334155', margin: '0 0 8px 0' }}>
                لا توجد منتجات مضافة حالياً.
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>
                قم بتسجيل الدخول بالرمز السري المخصص لك بالأعلى لإضافة أول منتج.
              </p>
            </div>
          </div>
        ) : (
          <div style={{ padding: '20px', display: 'grid', gap: '15px' }}>
            {products.map((p) => (
              <div key={p.id} style={{ padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fdfdfd' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#1e293b' }}>{p.name}</h4>
                  <p style={{ margin: '0 0 6px 0', fontSize: '13px', color: '#64748b' }}>{p.desc}</p>
                  <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#16a34a' }}>{p.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
       }
       
