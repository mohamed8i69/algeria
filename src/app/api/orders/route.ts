import { NextRequest, NextResponse } from "next/server";

// Google Apps Script Web App URL
// Deploy this script: https://script.google.com and set the URL below
const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL || "";

/**
 * POST /api/orders
 * Receives order form data and forwards it to Google Sheets via Apps Script
 *
 * Expected body: { name, phone, state, address }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Server-side validation
    const { name, phone, state, address } = body;

    if (!name || typeof name !== "string" || name.trim().length < 3) {
      return NextResponse.json(
        { error: "الاسم مطلوب (3 أحرف على الأقل)" },
        { status: 400 }
      );
    }

    const phoneRegex = /^(0)[5-7]\d{8}$/;
    if (!phone || !phoneRegex.test(phone.replace(/\s/g, ""))) {
      return NextResponse.json(
        { error: "رقم هاتف جزائري صحيح مطلوب" },
        { status: 400 }
      );
    }

    if (!state || typeof state !== "string") {
      return NextResponse.json(
        { error: "الولاية مطلوبة" },
        { status: 400 }
      );
    }

    if (!address || typeof address !== "string" || address.trim().length < 10) {
      return NextResponse.json(
        { error: "العنوان مطلوب (10 أحرف على الأقل)" },
        { status: 400 }
      );
    }

    // Prepare data for Google Sheets
    const orderData = {
      name: name.trim(),
      phone: phone.replace(/\s/g, ""),
      state: state,
      address: address.trim(),
      date: new Date().toLocaleString("fr-DZ", {
        timeZone: "Africa/Algiers",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    // Send to Google Sheets via Apps Script
    if (GOOGLE_APPS_SCRIPT_URL) {
      try {
        const sheetsResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/plain" },
          body: JSON.stringify(orderData),
        });

        if (!sheetsResponse.ok) {
          console.error(
            "Google Sheets error:",
            sheetsResponse.status,
            sheetsResponse.statusText
          );
          // Still return success to user - we don't want to block the order
        }
      } catch (sheetsError) {
        console.error("Google Sheets fetch error:", sheetsError);
        // Still return success to user
      }
    } else {
      console.log(
        "GOOGLE_APPS_SCRIPT_URL not set. Order data:",
        JSON.stringify(orderData, null, 2)
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "تم استلام طلبك بنجاح",
        orderId: `DZ-${Date.now()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Order API error:", error);
    return NextResponse.json(
      { error: "حدث خطأ في الخادم. حاول مرة أخرى." },
      { status: 500 }
    );
  }
}
