'use client';

import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-10 font-sans">
      {/* رأس الصفحة */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
            إدارة المنتجات - بين يديك ساه
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            لوحة التحكم المركزية لإدارة منتجاتك بكل سهولة واحترافية.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-md transition-all duration-200 flex items-center gap-2">
            <span>+ إضافة منتج جديد</span>
          </button>
        </div>
      </header>

      {/* محتوى الصفحة أو الجدول */}
      <main className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">قائمة المنتجات الحالية</h2>
          <span className="text-xs bg-blue-50 text-blue-600 font-semibold px-3 py-1 rounded-full">
            محدث مباشرة
          </span>
        </div>

        <div className="p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              📦
            </div>
            <h3 className="text-gray-700 font-bold text-lg mb-1">لا توجد منتجات مضافة حالياً في قاعدة البيانات.</h3>
            <p className="text-gray-400 text-sm mb-6">
              ابدأ بإضافة أول منتج لكي يظهر هنا ويستعرضه زوار الموقع.
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-2.5 rounded-xl shadow transition-all duration-200">
              إضافة أول منتج الآن
            </button>
          </div>
        </div>
      </main>
    </div>
  );
        }

