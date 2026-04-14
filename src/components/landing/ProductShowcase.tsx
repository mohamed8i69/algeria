"use client";

import {
  CheckCircle2,
  Star,
  Zap,
  Heart,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "نتائج سريعة",
    description:
      "شاهد النتائج من أول استخدام. فعالية مثبتة علمياً ومضمونة 100%",
  },
  {
    icon: Heart,
    title: "آمن وصحي",
    description:
      "مكونات طبيعية 100% بدون أي مواد كيميائية ضارة. مناسب لجميع الأعمار",
  },
  {
    icon: ShieldCheck,
    title: "ضمان الاسترجاع",
    description:
      "إذا لم تكن راضياً، نعود لك أموالك. لا أسئلة تُسأل - مخاطرة صفر",
  },
  {
    icon: TrendingUp,
    title: "جودة مضمونة",
    description:
      "المنتج الأكثر مبيعاً في الجزائر مع شهادات جودة معتمدة دولياً",
  },
];

const features = [
  "مكونات طبيعية 100%",
  "نتائج مضمونة من أول استخدام",
  "بدون آثار جانبية",
  "شهادة جودة دولية",
  "مناسب لجميع الأعمار",
  "صنع بعناية فائقة",
];

export default function ProductShowcase() {
  return (
    <section id="product" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            لماذا هذا المنتج؟
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            المنتج الذي يثق فيه <span className="text-emerald-600">الجزائريون</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            اكتشف لماذا اختار أكثر من 10,000 عميل جزائري هذا المنتج. جودة
            عالمية بسعر محلي مع ضمان كامل
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl flex items-center justify-center aspect-square overflow-hidden">
              <img
                src="/product-hero.png"
                alt="المنتج - صورة أمامية"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center aspect-square overflow-hidden">
              <img
                src="/product-box.png"
                alt="المنتج - صورة العبوة"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 flex items-center justify-center aspect-square">
              <div className="text-center">
                <span className="text-4xl">✨</span>
                <p className="text-amber-600 text-sm mt-2 font-medium">
                  مكونات طبيعية
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 flex items-center justify-center aspect-square">
              <div className="text-center">
                <span className="text-4xl">🏆</span>
                <p className="text-teal-600 text-sm mt-2 font-medium">
                  جودة معتمدة
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              فوائد مذهلة تنتظرك
            </h3>

            <div className="space-y-5 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features Checklist */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">
                ما يميز منتجنا عن غيره:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="mt-6 flex items-center gap-3 bg-white border rounded-xl p-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <span className="font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-500 text-sm">
                بناءً على 2,847 تقييم
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
