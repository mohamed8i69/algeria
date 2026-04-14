"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { algerianStates } from "@/lib/algerian-states";
import { trackConversion } from "@/lib/tracking";
import {
  Loader2,
  ShieldCheck,
  Truck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  state: string;
  address: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  state?: string;
  address?: string;
}

export default function OrderForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    state: "",
    address: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "الاسم يجب أن يكون 3 أحرف على الأقل";
    }

    // Phone validation (Algerian numbers: start with 0, 10 digits)
    const phoneRegex = /^(0)[5-7]\d{8}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "أدخل رقم هاتف جزائري صحيح (مثال: 0555123456)";
    }

    // State validation
    if (!formData.state) {
      newErrors.state = "اختر الولاية";
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "العنوان مطلوب";
    } else if (formData.address.trim().length < 10) {
      newErrors.address = "أدخل عنواناً مفصلاً أكثر (10 أحرف على الأقل)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.replace(/\s/g, ""),
          state: formData.state,
          address: formData.address.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit order");
      }

      // Track conversion
      trackConversion(4900);

      setIsSuccess(true);

      // Redirect to thank-you page after short delay
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 1000);
    } catch (error) {
      console.error("Order submission failed:", error);
      setErrors({ ...errors, phone: "حدث خطأ. حاول مرة أخرى." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="order-form" className="py-16 sm:py-20 bg-emerald-50">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
              تم تأكيد طلبك بنجاح! ✅
            </h3>
            <p className="text-gray-600">
              جاري تحويلك لصفحة التأكيد...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order-form" className="py-16 sm:py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            اطلب الآن
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            أرسل طلبك في <span className="text-emerald-600">30 ثانية</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            أدخل معلوماتك أدناه وسنتصل بك لتأكيد الطلب. الدفع عند الاستلام -
            لا مخاطرة!
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
            noValidate
          >
            {/* Trust Header */}
            <div className="flex items-center justify-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-1.5 text-emerald-600">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-medium">دفع آمن</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600">
                <Truck className="w-4 h-4" />
                <span className="text-xs font-medium">توصيل سريع</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-medium">ضمان كامل</span>
              </div>
            </div>

            {/* Name Field */}
            <div className="space-y-2 mb-4">
              <Label htmlFor="name" className="text-gray-700 font-medium">
                الاسم الكامل *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="مثال: محمد أحمد"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`text-right ${
                  errors.name
                    ? "border-red-400 focus:border-red-500"
                    : "border-gray-200 focus:border-emerald-500"
                }`}
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className="space-y-2 mb-4">
              <Label htmlFor="phone" className="text-gray-700 font-medium">
                رقم الهاتف *
              </Label>
              <div className="relative">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="مثال: 0555123456"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`text-right ${
                    errors.phone
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-emerald-500"
                  }`}
                  dir="ltr"
                  disabled={isSubmitting}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* State Dropdown */}
            <div className="space-y-2 mb-4">
              <Label htmlFor="state" className="text-gray-700 font-medium">
                الولاية *
              </Label>
              <Select
                value={formData.state}
                onValueChange={(value) =>
                  setFormData({ ...formData, state: value })
                }
                disabled={isSubmitting}
              >
                <SelectTrigger
                  className={`text-right ${
                    errors.state
                      ? "border-red-400"
                      : "border-gray-200"
                  }`}
                >
                  <SelectValue placeholder="اختر الولاية" />
                </SelectTrigger>
                <SelectContent className="max-h-64">
                  {algerianStates.map((state) => (
                    <SelectItem key={state.value} value={state.value}>
                      {state.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.state && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.state}
                </p>
              )}
            </div>

            {/* Address Field */}
            <div className="space-y-2 mb-6">
              <Label htmlFor="address" className="text-gray-700 font-medium">
                العنوان الكامل *
              </Label>
              <Input
                id="address"
                type="text"
                placeholder="مثال: حي السلام، شارع 1 نوفمبر، بناية 5"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className={`text-right ${
                  errors.address
                    ? "border-red-400 focus:border-red-500"
                    : "border-gray-200 focus:border-emerald-500"
                }`}
                disabled={isSubmitting}
              />
              {errors.address && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.address}
                </p>
              )}
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 text-sm">السعر الأصلي:</span>
                <span className="text-gray-400 line-through text-sm">
                  9,900 د.ج
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 text-sm">الخصم:</span>
                <span className="text-red-500 font-bold text-sm">
                  -5,000 د.ج
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 text-sm">التوصيل:</span>
                <span className="text-emerald-600 font-bold text-sm">مجاني</span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between items-center">
                <span className="font-bold text-gray-900">المجموع:</span>
                <span className="text-emerald-600 font-extrabold text-xl">
                  4,900 د.ج
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-6 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl transition-all duration-300"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  جاري إرسال الطلب...
                </span>
              ) : (
                "🛒 تأكيد الطلب - الدفع عند الاستلام"
              )}
            </Button>

            {/* Reassurance */}
            <div className="mt-4 space-y-2">
              <p className="text-center text-xs text-gray-400">
                🔒 معلوماتك محمية ولا تُشارك مع أي طرف ثالث
              </p>
              <p className="text-center text-xs text-gray-400">
                📞 سيتصل بك فريقنا خلال ساعة لتأكيد الطلب
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
