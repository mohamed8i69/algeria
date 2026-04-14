"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, Truck, Clock } from "lucide-react";

export default function Hero() {
  const scrollToOrder = () => {
    const el = document.getElementById("order-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-600 text-sm font-bold">
                عرض محدود - الكمية تنفد سريعاً!
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              حلّ مشكلتك الآن مع{" "}
              <span className="text-emerald-600">المنتج الأكثر مبيعاً</span>{" "}
              في الجزائر
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 lg:ml-auto leading-relaxed">
              أكثر من 10,000 عميل راضٍ في الجزائر. نتائج مضمونة من أول
              استخدام. الدفع عند الاستلام - لا تخاطر شيئاً!
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                <Truck className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">
                  توصيل مجاني
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">
                  الدفع عند الاستلام
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                <Clock className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">
                  توصيل 24-48 ساعة
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={scrollToOrder}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-6 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 animate-pulse-slow"
            >
              اطلب الآن - الدفع عند الاستلام
            </Button>

            <p className="text-sm text-gray-400 mt-3">
              ⭐ أكثر من 10,000 طلب ناجح
            </p>
          </div>

          {/* Product Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-orange-400/20 rounded-3xl blur-2xl scale-105" />

              <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md mx-auto">
                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src="/product-hero.png"
                    alt="المنتج الأكثر مبيعاً في الجزائر"
                    className="w-full h-full object-cover rounded-2xl"
                    loading="eager"
                  />
                </div>

                {/* Price Badge */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through text-lg">
                      9,900 د.ج
                    </span>
                    <span className="text-emerald-600 font-extrabold text-3xl mr-3">
                      4,900 د.ج
                    </span>
                  </div>
                  <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    -50%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex justify-center mt-8">
          <button
            onClick={() =>
              document
                .getElementById("product")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="animate-bounce text-gray-400 hover:text-emerald-600 transition-colors"
          >
            <ArrowDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
