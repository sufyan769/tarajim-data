import React from 'react';
import { SearchApp } from './components/SearchApp';
import { Menu, Globe } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-wiki-bg">
      {/* Wikipedia-style Header */}
      <header className="bg-white border-b border-wiki-border h-16">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded md:hidden">
              <Menu className="w-6 h-6 text-slate-600" />
            </button>
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 border border-wiki-border">
                 <Globe className="w-6 h-6" />
               </div>
               <div className="hidden md:block leading-tight">
                 <h1 className="font-serif text-lg font-bold text-wiki-text">
                   التاريخ الكبير
                 </h1>
                 <p className="text-xs text-slate-500">الموسوعة الحرة (تجريبي)</p>
               </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-wiki-link">
            <span className="hidden md:inline hover:underline cursor-pointer">اقرأ</span>
            <span className="hidden md:inline hover:underline cursor-pointer">عدل</span>
            <span className="hidden md:inline hover:underline cursor-pointer">تاريخ</span>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        {/* Sidebar (Wiki style) */}
        <aside className="hidden md:block w-48 flex-shrink-0 text-sm space-y-6 pt-2">
          <div className="space-y-2">
             <div className="font-bold text-slate-500 px-2">الموسوعة</div>
             <ul className="space-y-1">
                <li className="px-2 py-1 hover:bg-slate-200 cursor-pointer text-wiki-link">الصفحة الرئيسية</li>
                <li className="px-2 py-1 hover:bg-slate-200 cursor-pointer text-wiki-link">الأحداث الجارية</li>
                <li className="px-2 py-1 hover:bg-slate-200 cursor-pointer text-wiki-link">أحدث التغييرات</li>
                <li className="px-2 py-1 hover:bg-slate-200 cursor-pointer text-wiki-link">صفحة عشوائية</li>
             </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow bg-white border border-wiki-border p-6 md:p-8 min-h-[600px] shadow-sm relative">
           {/* Page Title Overlay */}
           <div className="border-b border-wiki-border pb-2 mb-6 flex justify-between items-end">
              <h1 className="text-3xl font-serif font-medium text-wiki-text">
                البداية والنهاية
              </h1>
              <div className="text-xs text-slate-500 mb-1">
                من ويكيبيديا، الموسوعة الحرة
              </div>
           </div>

           <SearchApp />
        </div>
      </main>

      <footer className="bg-wiki-bg text-slate-600 py-6 border-t border-wiki-border mt-auto text-xs">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
             النصوص متاحة تحت <span className="text-wiki-link cursor-pointer hover:underline">رخصة المشاع الإبداعي</span>.
          </p>
          <div className="flex justify-center gap-4 text-wiki-link">
            <span className="cursor-pointer hover:underline">سياسة الخصوصية</span>
            <span className="cursor-pointer hover:underline">حول الموسوعة</span>
            <span className="cursor-pointer hover:underline">إخلاء المسؤولية</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;