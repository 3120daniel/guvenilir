# Internationalization (i18n) Setup Guide

## Overview
Your application now supports 10 languages:
- **English** (en) - Default
- **Spanish** (es)
- **French** (fr)
- **German** (de)
- **Italian** (it)
- **Portuguese** (pt)
- **Turkish** (tr)
- **Russian** (ru)
- **Japanese** (ja)
- **Chinese Simplified** (zh)

## How to Use Translations in Components

### Basic Usage with `useTranslation` Hook

```jsx
import { useTranslation } from 'react-i18next';

export default function MyComponent() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('common.welcome')}</h1>
      <p>{t('navigation.home')}</p>
      <p>Current language: {i18n.language}</p>
    </div>
  );
}
```

### Translation Keys Structure

Translations are organized by sections for easy management:
- **common** - General UI elements (login, signup, logout, etc.)
- **navigation** - Navigation links and menu items
- **hero** - Hero section content
- **auth** - Login/Registration page content
- **pricing** - Pricing and plans
- **dashboard** - Dashboard components
- **services** - Services section
- **steps** - Step-by-step guides
- **faq** - FAQ content
- **contact** - Contact information
- **footer** - Footer content
- **errors** - Error messages
- **buttons** - Button labels
- **investment** - Investment-related content

### Example: Update Home Page

```jsx
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section>
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <button>{t('hero.cta')}</button>
      </section>

      {/* Services Section */}
      <section>
        <h2>{t('services.title')}</h2>
        <p>{t('services.subtitle')}</p>
      </section>

      {/* 3 Steps Section */}
      <section>
        <h2>{t('steps.title')}</h2>
        {/* Add more content using t() */}
      </section>
    </div>
  );
}
```

### Example: Update Login Page

```jsx
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('auth.loginTitle')}</h2>
      <p>{t('auth.loginSubtitle')}</p>
      
      <form>
        <input placeholder={t('auth.email')} />
        <input placeholder={t('auth.password')} />
        <button>{t('auth.loginButton')}</button>
        
        <p>
          {t('auth.noAccount')}
          <a href="/register">{t('auth.signupButton')}</a>
        </p>
      </form>
    </div>
  );
}
```

## Language Switcher

The LanguageSwitcher component is already integrated into the NavBar and provides:
- ✅ Dropdown selection with all 10 languages
- ✅ Current language display
- ✅ Mobile-friendly interface
- ✅ Persistent language selection (saved in localStorage)
- ✅ Real-time app language switching

### Location: `src/components/LanguageSwitcher.jsx`

## File Structure

```
src/
├── locales/
│   ├── en.json    (English)
│   ├── es.json    (Spanish)
│   ├── fr.json    (French)
│   ├── de.json    (German)
│   ├── it.json    (Italian)
│   ├── pt.json    (Portuguese)
│   ├── tr.json    (Turkish)
│   ├── ru.json    (Russian)
│   ├── ja.json    (Japanese)
│   └── zh.json    (Chinese)
├── i18n.js        (Configuration)
└── components/
    └── LanguageSwitcher.jsx
```

## Configuration Details

### i18n.js Features
- Loads language preference from localStorage
- Falls back to English if no preference is set
- All 10 languages pre-configured
- Efficient interpolation

### Persisting Language Preference
User's language selection is automatically saved to localStorage and restored on page reload.

## Common Translation Patterns

### Conditional Rendering Based on Language
```jsx
import { useTranslation } from 'react-i18next';

export default function Component() {
  const { i18n } = useTranslation();

  return (
    <div>
      {i18n.language === 'ar' && <Text direction="rtl" />}
      {i18n.language !== 'ar' && <Text direction="ltr" />}
    </div>
  );
}
```

### Pluralization (if needed in future)
```jsx
const { t } = useTranslation();
// t('key', { count: variable })
```

## Adding New Translations

1. Add the new key-value pair to all JSON files in `src/locales/`
2. Maintain consistent structure and hierarchy
3. Use the same keys across all language files
4. Use `t('path.to.key')` in your components

## Troubleshooting

### Translation key not displaying?
- Check if key exists in all language files
- Verify the path is correct in `t()` function
- Check browser console for warnings

### Language not changing?
- Ensure LanguageSwitcher is imported in the component
- Check if i18n is initialized before rendering
- Verify localStorage permissions are enabled

## Best Practices

✅ Always use translation keys instead of hardcoded strings
✅ Keep translations organized by sections
✅ Update all language files when adding new content
✅ Use descriptive key names
✅ Test in different languages before deployment
✅ Keep translations concise and clear

## Next Steps

1. Update all existing components to use `useTranslation()` hook
2. Replace hardcoded strings with translation keys
3. Test language switching functionality
4. Add RTL support for Arabic/Hebrew (if needed in future)
