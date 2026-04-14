"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "أمين ب.",
    location: "الجزائر العاصمة",
    rating: 5,
    text: "منتج رائع! النتائج ظهرت من أول أسبوع. أنصح الجميع بتجربته. الجودة فعلاً ممتازة والسعر مناسب جداً مقارنة بالمنتجات الأخرى.",
    verified: true,
  },
  {
    name: "فاطمة ز.",
    location: "وهران",
    rating: 5,
    text: "كنت متشككة في البداية لكن بعد ما جربته تغير رأيي تماماً. المنتج فعلاً يستاهل كل ريال. التوصيل كان سريع والتغليف ممتاز.",
    verified: true,
  },
  {
    name: "يوسف م.",
    location: "قسنطينة",
    rating: 5,
    text: "أفضل منتج استخدمته! الدفع عند الاستلام ريحني كثير. ما كنت نحتاج ندفع قبل ما نشوف المنتج. شكراً ليكم!",
    verified: true,
  },
  {
    name: "سارة ع.",
    location: "سطيف",
    rating: 5,
    text: "طلبت 2 علب لأمي وخالتي. الاتنين فرحانين جداً بالنفع. إن شاء الله نعود نطلب مرة أخرى قريباً.",
    verified: true,
  },
  {
    name: "كريم د.",
    location: "باتنة",
    rating: 5,
    text: "تجربتي مع المنتج كانت ممتازة. التوصيل وصل في وقت قياسي والمنتج كما هو موصوف تماماً. أنصح بشدة!",
    verified: true,
  },
  {
    name: "نادية ر.",
    location: "عنابة",
    rating: 5,
    text: "الحمد لله المنتج جاب نتيجة باهية. كنت خايفة من الطلب أونلاين لكن الدفع عند الاستلام طمأنني. شكراً!",
    verified: true,
  },
];

const stats = [
  { value: "10,000+", label: "عميل راضٍ" },
  { value: "4.9/5", label: "تقييم المتوسط" },
  { value: "98%", label: "نسبة الرضا" },
  { value: "24-48h", label: "وقت التوصيل" },
];

export default function SocialProof() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            آراء العملاء الحقيقيين
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            ماذا يقول <span className="text-emerald-600">عملاؤنا</span>؟
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            آلاف العملاء الجزائريين يثقون بمنتجنا. اقرأ تجاربهم الحقيقية
            واقتنع بنفسك
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-emerald-200 mb-3" />

              {/* Stars */}
              <div className="flex mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-700 text-xs font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
                {testimonial.verified && (
                  <span className="text-xs bg-emerald-50 text-emerald-600 font-medium px-2 py-1 rounded-full">
                    ✓ تم التحقق
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
