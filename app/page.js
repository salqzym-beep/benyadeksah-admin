'use client';
import { useState } from 'react';

export default function SimpleDashboard() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState('');
  const [items, setItems] = useState([
    { id: 1, title: 'المنتج التجريبي الأول', price: '10$', desc: 'هذا منتج تجريبي للتوضيح' }
  ]);
  
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (pass === 'sah2026') {
      setAuthed(true);
    } else {
      alert('الرمز خطأ!');
    }
  };

  const addItem = (e) => {
    e.preventDefault();
    if (!title || !price) return;
    setItems([{ id: Date.now(), title, price, desc }, ...items]);
    setTitle('');
    setPrice('');
    setDesc('');
  };

  return (
    <div style={{ fontFamily: 'Tahoma', direction: 'rtl', padding: '20px', background: '#f5f7fa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>🛒 بين يديك ساه - إدارة المنتجات</h2>

        {!authed ? (
          <form onSubmit={handleLogin} style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
            <input 
              type="password" 
              placeholder="أدخل الرمز السري..." 
              value={pass} 
              onChange={e => setPass(e.target.value)}
              style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd', width: '200px' }}
            />
            <button type="submit" style={{ padding: '10px 20px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>دخول</button>
          </form>
        ) : (
          <div style={{ background: '#e6ffed', color: '#22863a', padding: '10px', borderRadius: '8px', textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>
            ✓ تم تسجيل الدخول بنجاح - أضف منتجاتك
          </div>
        )}

        {authed && (
          <form onSubmit={addItem} style={{ background: '#fafafa', padding: '15px', borderRadius: '8px', border: '1px solid #eee', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h4 style={{ margin: '0 0 5px 0', color: '#0070f3' }}>إضافة منتج جديد</h4>
            <input type="text" placeholder="اسم المنتج" value={title} onChange={e => setTitle(e.target.value)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ddd' }} required />
            <input type="text" placeholder="السعر" value={price} onChange={e => setPrice(e.target.value)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ddd' }} required />
            <input type="text" placeholder="الوصف" value={desc} onChange={e => setDesc(e.target.value)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ddd' }} />
            <button type="submit" style={{ padding: '10px', background: '#22863a', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>حفظ وإضافة</button>
          </form>
        )}

        <h3 style={{ borderBottom: '2px solid #f0f0f0', paddingBottom: '8px', color: '#444' }}>قائمة المنتجات ({items.length})</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
          {items.map(item => (
            <div key={item.id} style={{ padding: '12px', background: '#fff', border: '1px solid #eee', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
              <div>
                <h4 style={{ margin: '0 0 4px 0', color: '#222' }}>{item.title}</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>{item.desc}</p>
              </div>
              <span style={{ fontWeight: 'bold', color: '#0070f3', fontSize: '15px' }}>{item.price}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
              }
              
