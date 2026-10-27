# BeauteFest

Services and enquiries website for BeauteFest. Target domain: https://beautefest.in/.

## Hosting

Public repository on GitHub, deployed by GitHub Actions to GitHub Pages, matching the LifeShots hosting arrangement. Hostinger manages the domain and DNS only. Keep this repository public while using GitHub Free for Pages.

Only `site/` is published. The workflow deliberately avoids publishing the repository root or this README.

## Current release

A temporary coming-soon page linking to https://www.instagram.com/beaute_fest/ for enquiries. Typography, colours and illustration are provisional, pending the client logo. No client photographs, unconfirmed services, prices, reviews, contact numbers or booking promises have been added.

## Development

No build or dependencies. Run `python3 -m http.server 8080 --directory site` and open http://localhost:8080.

## Production content still needed

- Official logo and brand direction
- Confirmed service list and descriptions
- Approved portfolio photos and videos
- Business location, service area and hours
- Public enquiry phone/WhatsApp and email, if wanted
- Booking workflow and privacy details if collecting enquiries on the site

## Domain setup

Select GitHub Actions as the Pages publishing source. Configure beautefest.in in Pages settings before DNS cutover. Preserve email and verification records. Add the GitHub Pages apex A records and point www to anchitsharma15.github.io. Wait for DNS checks and certificate provisioning, then enable HTTPS and verify apex and www.

Never commit credentials, personal enquiry data, or hosting backups.
