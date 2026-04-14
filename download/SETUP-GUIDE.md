# 🚀 DZ Market - COD Landing Page
## Complete Deployment & Setup Guide

---

## 📁 Folder Structure

```
dz-market-landing/
├── public/
│   ├── product-hero.png        # Hero product image
│   ├── product-box.png         # Product box/packaging image
│   ├── og-image.jpg            # Social sharing image (1200x630)
│   ├── favicon.png             # Site favicon
│   └── robots.txt              # SEO robots file
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (SEO, tracking scripts, RTL)
│   │   ├── page.tsx            # Main landing page
│   │   ├── globals.css         # Global styles + RTL + animations
│   │   ├── thank-you/
│   │   │   └── page.tsx        # Thank you page + conversion tracking
│   │   └── api/
│   │       └── orders/
│   │           └── route.ts    # Order submission API (→ Google Sheets)
│   ├── components/
│   │   ├── landing/
│   │   │   ├── Navbar.tsx      # Sticky navbar with CTA
│   │   │   ├── Hero.tsx        # Hero section + product image
│   │   │   ├── ProductShowcase.tsx  # Benefits + features + rating
│   │   │   ├── SocialProof.tsx # Testimonials + stats
│   │   │   ├── OfferSection.tsx # Countdown + pricing + CTA
│   │   │   ├── OrderForm.tsx   # Order form + validation
│   │   │   ├── FAQSection.tsx  # FAQ accordion
│   │   │   ├── FinalCTA.tsx    # Final call-to-action + WhatsApp
│   │   │   └── Footer.tsx      # Footer with links
│   │   └── ui/                 # shadcn/ui components
│   └── lib/
│       ├── algerian-states.ts  # All 58 wilayas
│       ├── tracking.ts         # Meta Pixel + GTM + GA4 utilities
│       └── utils.ts            # Utility functions
├── .env.example                # Environment variables template
├── next.config.ts              # Next.js config (optimization, headers)
├── tailwind.config.ts          # Tailwind CSS config
└── package.json                # Dependencies
```

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```env
# Google Apps Script Web App URL (for orders → Google Sheets)
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# Meta Pixel (Facebook Pixel) ID
NEXT_PUBLIC_META_PIXEL_ID=123456789

# Google Tag Manager ID
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

---

## 📊 Google Sheets Setup (Step-by-Step)

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new sheet named "DZ Market Orders"
3. Add headers in Row 1: **Name | Phone | State | Address | Date**
4. Copy the **Spreadsheet ID** from the URL:
   `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit`

### Step 2: Deploy Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Click **New Project**
3. Paste the code from `download/google-apps-script.js`
4. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual Spreadsheet ID
5. Click **Deploy > New Deployment**
6. Select type: **Web app**
7. Execute as: **Me**
8. Who has access: **Anyone**
9. Click **Deploy** and **Authorize** when prompted
10. Copy the **Web App URL**

### Step 3: Connect to Landing Page
1. Add the Web App URL to your `.env.local`:
   ```
   GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID/exec
   ```

---

## 📱 Tracking Setup

### Meta Pixel (Facebook)
1. Go to [Events Manager](https://business.facebook.com/events_manager)
2. Create a Pixel or use existing one
3. Copy the Pixel ID (numbers only)
4. Add to `.env.local`: `NEXT_PUBLIC_META_PIXEL_ID=123456789`

### Google Tag Manager
1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Create a container
3. Copy the GTM ID (GTM-XXXXXXX)
4. Add to `.env.local`: `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`

### Google Analytics 4
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a GA4 property
3. Copy the Measurement ID (G-XXXXXXXXXX)
4. Add to `.env.local`: `NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX`

### Tracked Events
| Event | Platform | Trigger |
|-------|----------|---------|
| PageView | Meta Pixel, GA4 | On page load |
| Lead | Meta Pixel | On order form submit |
| lead | GA4 | On order form submit |
| conversion | GTM DataLayer | On order form submit |
| PageView | Meta Pixel, GA4 | On /thank-you load |

---

## 🚀 Deploy to Vercel (Step-by-Step)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "DZ Market COD Landing Page"
git remote add origin https://github.com/YOUR_USERNAME/dz-market.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **Add New > Project**
3. Import your GitHub repository
4. Configure:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `next build`
   - Output Directory: `.next`
5. Add Environment Variables:
   - `GOOGLE_APPS_SCRIPT_URL`
   - `NEXT_PUBLIC_META_PIXEL_ID`
   - `NEXT_PUBLIC_GTM_ID`
   - `NEXT_PUBLIC_GA4_ID`
6. Click **Deploy**
7. Wait for deployment to complete (~2 minutes)
8. Your site will be live at: `https://your-project.vercel.app`

---

## 🌐 Connect Custom Domain (GoDaddy DNS)

### Step 1: Add Domain in Vercel
1. In your Vercel project dashboard, go to **Settings > Domains**
2. Enter your domain: `dzmarket.dz` (or your domain)
3. Vercel will show you the DNS records to configure

### Step 2: Configure DNS in GoDaddy
1. Log in to [GoDaddy](https://dcc.godaddy.com)
2. Go to **My Products > DNS > Manage DNS**
3. Add the following records:

**For root domain (dzmarket.dz):**
| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 600 |
| CNAME | www | cname.vercel-dns.com | 600 |

**OR (if Vercel provides CNAME):**
| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | @ | cname.vercel-dns.com | 600 |
| CNAME | www | cname.vercel-dns.com | 600 |

4. Save changes

### Step 3: Verify Domain
1. Back in Vercel, click **Verify**
2. DNS propagation can take 5 minutes to 48 hours
3. Once verified, Vercel auto-provisions SSL certificate
4. Your site will be accessible at `https://dzmarket.dz`

### Step 4: Update metadataBase
In `src/app/layout.tsx`, update the metadataBase to your actual domain:
```typescript
metadataBase: new URL("https://dzmarket.dz"),
```

---

## 🎨 Customization Guide

### Change Product Info
- **Hero section**: Edit `src/components/landing/Hero.tsx` - update headline, price, description
- **Product images**: Replace files in `public/` folder (product-hero.png, product-box.png)
- **Benefits**: Edit the `benefits` array in `src/components/landing/ProductShowcase.tsx`
- **Testimonials**: Edit the `testimonials` array in `src/components/landing/SocialProof.tsx`
- **FAQ**: Edit the `faqs` array in `src/components/landing/FAQSection.tsx`
- **Prices**: Search and replace `4,900` and `9,900` across components
- **WhatsApp number**: Update in `src/components/landing/FinalCTA.tsx`
- **Contact info**: Update in `src/components/landing/Footer.tsx`

### Change Colors
- **Primary green (emerald)**: Used for trust/branding. Change `emerald-*` classes
- **CTA orange**: Used for action buttons. Change `orange-*` classes
- **Urgency red**: Used for limited offers. Change `red-*` classes

### Change Language
- All text is in Arabic by default (RTL)
- To switch to French: Change `lang="ar" dir="rtl"` to `lang="fr" dir="ltr"` in layout.tsx
- Replace Arabic text strings in component files

---

## 🔧 Performance Notes

- **Lighthouse Score Target**: 90+ on all metrics
- **Image Optimization**: Using Next.js Image + AVIF/WebP formats
- **Caching**: 1-year cache for static images, proper Cache-Control headers
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
- **Mobile-First**: All components built mobile-first with responsive breakpoints
- **Lazy Loading**: Non-critical images use `loading="lazy"`
- **Reduced Motion**: Respects `prefers-reduced-motion` for accessibility

---

## 📋 Pre-Launch Checklist

- [ ] Replace product images with real product photos
- [ ] Update product name, description, and pricing
- [ ] Set up Google Sheet and deploy Apps Script
- [ ] Add GOOGLE_APPS_SCRIPT_URL to environment variables
- [ ] Set up Meta Pixel and add ID to env
- [ ] Set up Google Tag Manager and add ID to env
- [ ] Set up Google Analytics 4 and add ID to env
- [ ] Update WhatsApp number in FinalCTA component
- [ ] Update contact info in Footer component
- [ ] Test order form submission end-to-end
- [ ] Verify tracking events in Facebook Events Manager
- [ ] Verify tracking in Google Analytics Real-Time
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Test on multiple mobile devices
- [ ] Deploy to Vercel
- [ ] Connect custom domain
- [ ] Update metadataBase in layout.tsx
- [ ] Set up Facebook Ads campaign pointing to landing page
- [ ] Set up Google Ads campaign pointing to landing page
