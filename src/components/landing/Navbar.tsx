"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOrder = () => {
    const el = document.getElementById("order-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DZ</span>
            </div>
            <span className="font-bold text-lg text-gray-900">
              DZ Market
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#product"
              className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
            >
              المنتج
            </a>
            <a
              href="#reviews"
              className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
            >
              آراء العملاء
            </a>
            <a
              href="#offer"
              className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
            >
              العرض
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium"
            >
              الأسئلة الشائعة
            </a>
            <Button
              onClick={scrollToOrder}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6"
            >
              اطلب الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              onClick={scrollToOrder}
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
            >
              اطلب الآن
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3 space-y-3">
            <a
              href="#product"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-emerald-600 font-medium py-2"
            >
              المنتج
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-emerald-600 font-medium py-2"
            >
              آراء العملاء
            </a>
            <a
              href="#offer"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-emerald-600 font-medium py-2"
            >
              العرض
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-emerald-600 font-medium py-2"
            >
              الأسئلة الشائعة
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
