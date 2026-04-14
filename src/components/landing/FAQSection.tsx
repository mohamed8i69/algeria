"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "كيف يتم الدفع؟",
    answer:
      "الدفع يتم عند الاستلام فقط (Cash on Delivery). لا تدفع أي مبلغ قبل استلام المنتج بيديك والتأكد من حالته. عند وصول المندوب إليك، تدفع الثمن نقداً وتستلم المنتج. لا نحتاج لأي معلومات بنكية أو بطائقية.",
  },
  {
    question: "كم مدة التوصيل؟",
    answer:
      "التوصيل يتم خلال 24 إلى 48 ساعة في معظم الولايات. بعض الولايات الجنوبية قد تستغرق حتى 72 ساعة. فريقنا يتصل بك لتأكيد الطلب ومواعيد التوصيل. التوصيل مجاني لجميع ولايات الوطن.",
  },
  {
    question: "هل المنتج أصلي؟",
    answer:
      "نعم، المنتج أصلي 100% ومضمون. نحن نتعامل مباشرة مع المصنع ونحصل على المنتجات من المصدر الرسمي. كل منتج يأتي مع شهادة جودة وضمان. إذا لم تكن راضياً، يمكنك إرجاع المنتج واسترجاع أموالك كاملة.",
  },
  {
    question: "ما هو ضمان الاسترجاع؟",
    answer:
      "نقدم ضمان استرجاع كامل خلال 7 أيام من الاستلام. إذا لم تكن راضياً عن المنتج لأي سبب، اتصل بنا وسنقوم بإرجاع أموالك كاملة بدون أي أسئلة. هدفنا هو رضاك التام عن كل عملية شراء.",
  },
  {
    question: "هل التوصيل متوفر في ولايتي؟",
    answer:
      "نعم! نوفر التوصيل لجميع 58 ولاية جزائرية بدون استثناء. سواء كنت في الجزائر العاصمة، وهران، قسنطينة أو حتى الولايات الجنوبية، سنصل إليك. التوصيل مجاني لجميع الولايات.",
  },
  {
    question: "كيف أتابع طلبي؟",
    answer:
      "بعد تأكيد طلبك، سيتصل بك فريقنا خلال ساعة واحدة لتأكيد التفاصيل. ستحصل على رقم تتبع الطلب عبر رسالة SMS. يمكنك الاتصال بخدمة العملاء في أي وقت لمعرفة حالة طلبك.",
  },
  {
    question: "هل يمكنني طلب أكثر من منتج واحد؟",
    answer:
      "بالتأكيد! يمكنك طلب أي كمية تريدها. نقدم أيضاً خصومات خاصة للطلبات بالجملة. اتصل بنا أو أضف ملاحظة في نموذج الطلب وسنتكفل بتقديم أفضل عرض لك.",
  },
  {
    question: "ما هي طرق التواصل معكم؟",
    answer:
      "يمكنك التواصل معنا عبر الهاتف أو الواتساب على الرقم الموجود في الموقع. فريق خدمة العملاء متوفرون من الساعة 8 صباحاً حتى 10 مساءً كل يوم. نرد على جميع الرسائل خلال دقائق معدودة.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            أسئلة شائعة
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            لديك <span className="text-emerald-600">سؤال</span>؟
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            إليك إجابات عن الأسئلة الأكثر شيوعاً. إذا لم تجد إجابتك، تواصل
            معنا مباشرة
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-50 rounded-xl border border-gray-100 px-6 data-[state=open]:bg-emerald-50 data-[state=open]:border-emerald-200 transition-colors"
            >
              <AccordionTrigger className="text-right hover:no-underline py-4 font-bold text-gray-900 text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
