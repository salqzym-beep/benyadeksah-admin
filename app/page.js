export default function AdminDashboard() {
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
        <button style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '12px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 6px rgba(37, 99, 235, 0.2)' }}>
          + إضافة منتج جديد
        </button>
      </div>

      {/* محتوى الصفحة أو الجدول */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>قائمة المنتجات الحالية</h2>
          <span style={{ fontSize: '11px', backgroundColor: '#eff6ff', color: '#2563eb', padding: '4px 12px', borderRadius: '20px', fontWeight: 'bold' }}>
            محدث مباشرة
          </span>
        </div>

        <div style={{ padding: '50px 20px', textAlign: 'center' }}>
          <div style={{ maxWidth: '380px', margin: '0 auto' }}>
            <div style={{ width: '60px', height: '60px', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '26px' }}>
              📦
            </div>
            <h3 style={{ fontSize: '15px', fontWeight: 'bold', color: '#334155', margin: '0 0 8px 0' }}>
              لا توجد منتجات مضافة حالياً في قاعدة البيانات.
            </h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 24px 0' }}>
              ابدأ بإضافة أول منتج لكي يظهر هنا ويستعرضه زوار الموقع.
            </p>
            <button style={{ backgroundColor: '#0f172a', color: '#ffffff', border: 'none', padding: '10px 24px', borderRadius: '12px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>
              إضافة أول منتج الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
