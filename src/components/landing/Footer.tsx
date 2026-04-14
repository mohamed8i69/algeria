export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DZ</span>
              </div>
              <span className="font-bold text-lg text-white">DZ Market</span>
            </div>
            <p className="text-sm leading-relaxed">
              منصتك الموثوقة للتسوق أونلاين في الجزائر. منتجات أصلية بسعر
              منافس مع الدفع عند الاستلام.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-3">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#product"
                  className="hover:text-emerald-400 transition-colors"
                >
                  المنتج
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-emerald-400 transition-colors"
                >
                  آراء العملاء
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-emerald-400 transition-colors"
                >
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a
                  href="#order-form"
                  className="hover:text-emerald-400 transition-colors"
                >
                  اطلب الآن
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-3">تواصل معنا</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 الهاتف: +213 XX XXX XXXX</li>
              <li>💬 واتساب: +213 XX XXX XXXX</li>
              <li>📧 الإيميل: contact@dzmarket.dz</li>
              <li>🕐 أوقات العمل: 8 ص - 10 م</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs">
          <p>© {currentYear} DZ Market. جميع الحقوق محفوظة.</p>
          <p className="mt-1 text-gray-500">
            الدفع عند الاستلام | توصيل لجميع الولايات | ضمان الجودة
          </p>
        </div>
      </div>
    </footer>
  );
}
