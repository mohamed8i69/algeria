"use client";

import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ShieldCheck, Truck } from "lucide-react";

export default function FinalCTA() {
  const scrollToOrder = () => {
    const el = document.getElementById("order-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgency */}
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-red-600 text-sm font-bold">
            الكمية محدودة - بقي القليل فقط!
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          لا تفوّت الفرصة!
          <br />
          <span className="text-emerald-600">اطلب الآن</span> قبل نفاد الكمية
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          أكثر من 10,000 عميل جزائري استفادوا من هذا العرض. الدفع عند
          الاستلام، توصيل مجاني، وضمان استرجاع كامل. لا تخاطر شيئاً!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button
            onClick={scrollToOrder}
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-6 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl transition-all duration-300"
          >
            🛒 اطلب الآن - 4,900 د.ج فقط
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 font-bold text-lg px-8 py-6 rounded-xl"
            onClick={() =>
              window.open(
                "https://wa.me/213XXXXXXXXX?text=مرحبا، أريد الاستفسار عن المنتج",
                "_blank"
              )
            }
          >
            <MessageCircle className="w-5 h-5 ml-2" />
            تواصل عبر واتساب
          </Button>
        </div>

        {/* Trust Badges Final */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span>ضمان استرجاع 7 أيام</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-emerald-500" />
            <span>توصيل مجاني</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-emerald-500" />
            <span>دعم عملاء 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
