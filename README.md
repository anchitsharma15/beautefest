# BeauteFest

Skincare, cosmetics, makeup and beauty-store website for https://beautefest.in/.

## Hosting

Public GitHub repository deployed through GitHub Actions to GitHub Pages. Hostinger manages the domain and DNS only. Keep this repository public while using GitHub Free for Pages. The workflow publishes only `site/`, never the repository README. Updates to site files on main deploy automatically.

## Local preview

No dependencies or build step. Run `python3 -m http.server 8080 --directory site` and open http://localhost:8080.

## Features

- Skincare, makeup/cosmetics and fragrance discovery
- Category filtering, category search and product enquiry links
- Secondary bridal, engagement/ring ceremony, party/reception and pre-wedding makeup services
- Store introduction, public contact number, map directions and Instagram links
- Enquiry preparation in the browser, with message review before opening WhatsApp
- Responsive navigation, FAQ disclosure panels, privacy page, sitemap and page metadata

The enquiry form does not store or automatically send information. The visitor reviews the prepared message and chooses whether to send it through WhatsApp. No analytics or tracking cookies are added.

## Content

Business facts and photographs were sourced from BeauteFest’s Instagram profile, highlights and credited LifeShots collaborations. See CONTENT-SOURCES.md. The public phone and WhatsApp number is +91 99141 93973. Opening hours, rates, packages and date availability are confirmed directly with the team.

The client-supplied Beaute Fest logo is used in the header, footer, privacy page and browser icon. The site focuses on products and the store, with a smaller makeup-service section.

## Domain

GitHub Pages custom domain: beautefest.in. HTTPS is enabled. Hostinger apex A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153. www CNAME: anchitsharma15.github.io. Nameservers remain with Hostinger. Preserve unrelated email/verification records when changing DNS.

Never commit credentials, enquiry data, private documents or hosting backups.
