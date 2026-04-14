"use client";

import { useEffect } from "react";
import { trackConversion, trackGA4PageView } from "@/lib/tracking";
import { CheckCircle2, Phone, Truck, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  useEffect(() => {
    // Track conversion on page load
    trackConversion(4900);
    trackGA4PageView("/thank-you");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full">
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              تم تأكيد طلبك بنجاح! 🎉
            </h1>
            <p className="text-gray-600">
              شكراً لثقتك بنا. طلبك في طريقه إليك!
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-emerald-50 rounded-2xl p-6 mb-6 text-right">
            <h3 className="font-bold text-emerald-800 mb-4 text-center">
              ماذا يحدث الآن؟
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">
                    تأكيد الاتصال
                  </p>
                  <p className="text-gray-600 text-xs">
                    سيتصل بك فريقنا خلال ساعة واحدة لتأكيد طلبك والتفاصيل
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Truck className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">
                    شحن وتوصيل
                  </p>
                  <p className="text-gray-600 text-xs">
                    سيتم شحن طلبك وتوصيله خلال 24-48 ساعة حسب ولايتك
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">
                    الدفع عند الاستلام
                  </p>
                  <p className="text-gray-600 text-xs">
                    ادفع فقط عند استلام المنتج. لا تدفع أي مبلغ مقدماً
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-right">
            <p className="text-amber-800 text-sm font-medium">
              ⚠️ تنبيه مهم: لا تدفع أي مبلغ لأي شخص يتصل بك قبل وصول
              المندوب إليك. الدفع فقط عند الاستلام.
            </p>
          </div>

          {/* CTA */}
          <Button
            onClick={() => (window.location.href = "/")}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 rounded-xl"
          >
            <ArrowRight className="w-4 h-4 ml-2" />
            العودة للصفحة الرئيسية
          </Button>

          {/* Contact Info */}
          <p className="text-gray-400 text-xs mt-6">
            للأسئلة أو الاستفسارات، تواصل معنا عبر واتساب: +213 XX XXX XXXX
          </p>
        </div>
      </div>
    </div>
  );
}
