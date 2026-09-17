'use client';
import { useState } from 'react';

export default function Page() {
  const [token, setToken] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [products, setProducts] = useState([]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  const validToken = 'sah2026';

  const handleLogin = (e) => {
    e.preventDefault();
    if (token === validToken) {
      setIsAuth(true);
    } else {
      alert('الرمز السري غير صحيح!');
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    const newP = { id: Date.now(), name, price, desc };
    setProducts([newP, ...products]);
    setName('');
    setPrice('');
    setDesc('');
  };

  return (
    <div style={{ fontFamily: 'Tahoma, sans-serif', direction: 'rtl', backgroundColor: '#f4f6f8', minHeight: '100vh', padding: '15px' }}>
      
      <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <h1 style={{ fontSize: '20px', color: '#333', margin: 0 }}>🛒 بين يديك ساه - إدارة المنتجات</h1>
        
        {!isAuth ? (
          <form onSubmit={handleLogin} style={{ display: 'flex', gap: '5px' }}>
            <input 
              type="password" 
              placeholder="رمز الدخول..." 
              value={token} 
              onChange={(e) => setToken(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px' }}
            />
            <button type="submit" style={{ background: '#0070f3', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>دخول</button>
          </form>
        ) : (
          <span style={{ background: '#e6ffed', color: '#22863a', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: 'bold' }}>✓ صلاحية الإضافة مفعلة</span>
        )}
      </div>

      {isAuth && (
        <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', marginBottom: '15px', border: '2px solid #0070f3' }}>
          <h3 style={{ margin: '0 0 12px 0', color: '#0070f3' }}>➕ إضافة منتج جديد</h3>
          <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input type="text" placeholder="اسم المنتج" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }} required />
            <input type="text" placeholder="السعر" value={price} onChange={(e) => setPrice(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }} required />
            <input type="text" placeholder="الوصف" value={desc} onChange={(e) => setDesc(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }} />
            <button type="submit" style={{ background: '#22863a', color: '#fff', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>حفظ ونشر</button>
          </form>
        </div>
      )}

      <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <h3 style={{ margin: '0 0 15px 0', color: '#333' }}>📦 المنتجات الحالية ({products.length})</h3>
        
        {products.length === 0 ? (
          <p style={{ color: '#777', textAlign: 'center', padding: '20px' }}>لا توجد منتجات مضافة حالياً.</p>
        ) : (
          <div style={{ display: 'grid', gap: '10px' }}>
            {products.map(p => (
              <div key={p.id} style={{ padding: '15px', borderRadius: '8px', border: '1px solid #eee', background: '#fafafa', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', color: '#111' }}>{p.name}</h4>
                  <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>{p.desc}</p>
                </div>
                <span style={{ fontWeight: 'bold', color: '#0070f3', fontSize: '15px' }}>{p.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
        }
        
