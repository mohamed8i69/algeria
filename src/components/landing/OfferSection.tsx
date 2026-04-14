"use client";

import { Button } from "@/components/ui/button";
import { Clock, Gift, Truck, ShieldCheck, BadgePercent } from "lucide-react";
import { useEffect, useState } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 33,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 2;
          minutes = 47;
          seconds = 33;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex gap-3 justify-center mb-6">
      {[
        { value: pad(timeLeft.hours), label: "ساعة" },
        { value: pad(timeLeft.minutes), label: "دقيقة" },
        { value: pad(timeLeft.seconds), label: "ثانية" },
      ].map((item, i) => (
        <div key={i} className="text-center">
          <div className="bg-red-500 text-white font-extrabold text-2xl sm:text-3xl w-16 sm:w-20 h-16 sm:h-20 rounded-xl flex items-center justify-center shadow-lg">
            {item.value}
          </div>
          <span className="text-xs text-gray-500 mt-1 block">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function OfferSection() {
  const scrollToOrder = () => {
    const el = document.getElementById("order-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="offer" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/30 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/20 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: Offer Details */}
              <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                  <BadgePercent className="w-4 h-4" />
                  <span className="text-sm font-bold">عرض خاص محدود</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
                  خصم <span className="text-amber-300">50%</span> لفترة محدودة
                  فقط!
                </h2>

                <p className="text-emerald-100 text-lg mb-6 leading-relaxed">
                  لا تفوّت هذه الفرصة! احصل على المنتج بسعر استثنائي مع
                  التوصيل المجاني لجميع الولايات. العرض ينتهي قريباً!
                </p>

                {/* Price Comparison */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-emerald-200 text-sm line-through">
                        السعر الأصلي: 9,900 د.ج
                      </span>
                      <div className="text-4xl font-extrabold text-amber-300 mt-1">
                        4,900 د.ج
                      </div>
                    </div>
                    <div className="bg-red-500 text-white font-bold text-lg px-4 py-2 rounded-xl">
                      وفّر 5,000 د.ج
                    </div>
                  </div>
                </div>

                {/* Offer Features */}
                <div className="space-y-3">
                  {[
                    {
                      icon: Truck,
                      text: "توصيل مجاني لجميع الولايات",
                    },
                    {
                      icon: ShieldCheck,
                      text: "الدفع عند الاستلام - لا مخاطرة",
                    },
                    {
                      icon: Gift,
                      text: "هدية مجانية مع كل طلب",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-emerald-50 text-sm font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Countdown + CTA */}
              <div className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <Clock className="w-8 h-8 text-red-500 mx-auto mb-3" />
                  <h3 className="text-gray-900 font-extrabold text-xl mb-2">
                    العرض ينتهي خلال:
                  </h3>
                  <CountdownTimer />

                  <div className="border-t border-gray-100 pt-6 mt-4">
                    <p className="text-gray-600 text-sm mb-4">
                      اطلب الآن واحصل على خصم 50% + توصيل مجاني
                    </p>
                    <Button
                      onClick={scrollToOrder}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-6 rounded-xl shadow-lg shadow-orange-500/30"
                    >
                      🛒 اطلب الآن بـ 4,900 د.ج فقط
                    </Button>
                    <p className="text-xs text-gray-400 mt-3">
                      الدفع عند الاستلام | لا حاجة لبطاقة بنكية
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
