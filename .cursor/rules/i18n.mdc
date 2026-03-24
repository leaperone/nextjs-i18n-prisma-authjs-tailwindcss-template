---
description: i18n, 翻译, 国际化
globs:
alwaysApply: false
---
Internationalization (i18n) Guidelines:

Message Structure:
- Store all text content in `@/i18n/locales/[locale]/*.json`
- Use descriptive message keys in SNAKE_CASE
- Include placeholders with $PLACEHOLDER$ syntax
- Add descriptions for translators in message files
- `console.log` don't need add i18n, only for UI text display on screen

```
# For server component
import { createTranslation } from '@/i18n/server';
const { t } = await createTranslation('home');

# For client component
'use client'
import { useTranslation } from '@/i18n/client';
const { t } = useTranslation('install');
```

Message Format:
```json
"footer": {
    "slogan": "Build something amazing.",
    "copyright": "© {{year}} Your Company. All rights reserved.",
    "sections": {
      "services": "Services",
      "support": "Support",
      "aboutus": "About Us",
      "legal": "Legal"
    },
    "navigation": {
      "services": {},
      "support": {
        "pricing": "Pricing",
        "userManual": "Documentation"
      },
      "aboutUs": {
        "team": "Our Team"
      },
      "legal": {
        "privacy": "Privacy Policy",
        "terms": "Terms of Service"
      }
    }
  },
```

Implementation:
- Use i18n translation functions for all user-facing text
- Never hardcode text strings in components
- Handle RTL languages with appropriate CSS
- Support fallback locales

Best Practices:
- Keep messages concise and clear
- Use semantic keys (e.g., WELCOME_MESSAGE vs MSG_001)
- Maintain consistent terminology across translations
- Handle pluralization properly
- Consider cultural differences in formatting dates, numbers, and currencies
- Test UI with different language lengths
