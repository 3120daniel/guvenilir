import { useTranslation } from 'react-i18next';

/**
 * QUICK REFERENCE: Using Translations in Your Components
 * 
 * Replace all hardcoded strings with translation keys from the locale files.
 * This ensures your app supports all 10 languages automatically.
 */

// ============================================
// EXAMPLE 1: Simple Component with Translations
// ============================================
export function SimpleExample() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('common.welcome')}</h1>
      <button>{t('buttons.submit')}</button>
    </div>
  );
}

// ============================================
// EXAMPLE 2: Login Page Implementation
// ============================================
export function LoginPageExample() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('auth.loginTitle')}</h2>
      <p>{t('auth.loginSubtitle')}</p>
      
      <form>
        <input type="email" placeholder={t('auth.email')} />
        <input type="password" placeholder={t('auth.password')} />
        
        <label>
          <input type="checkbox" />
          {t('auth.rememberMe')}
        </label>
        
        <button type="submit">{t('auth.loginButton')}</button>
        
        <a href="#forgot">{t('auth.forgotPassword')}</a>
      </form>
      
      <p>
        {t('auth.noAccount')}
        <a href="/register">{t('auth.signupButton')}</a>
      </p>
    </div>
  );
}

// ============================================
// EXAMPLE 3: Pricing Page Implementation
// ============================================
export function PricingPageExample() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('pricing.title')}</h2>
      <p>{t('pricing.subtitle')}</p>
      
      <div className="pricing-cards">
        <div className="card">
          <h3>{t('pricing.basicPlan')}</h3>
          <p>{t('pricing.minInvestment')}: $100</p>
          <p>{t('pricing.dailyReturn')}: 2%</p>
          <button>{t('buttons.joinNow')}</button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// EXAMPLE 4: Dashboard Implementation
// ============================================
export function DashboardExample() {
  const { t } = useTranslation();
  const userBalance = 5000;

  return (
    <div>
      <h1>{t('dashboard.welcomeMessage')}</h1>
      
      <div className="card">
        <p>{t('dashboard.accountBalance')}</p>
        <p>${userBalance}</p>
      </div>
      
      <div className="stats">
        <div>
          <p>{t('dashboard.totalEarnings')}</p>
          <p>$1,250</p>
        </div>
        <div>
          <p>{t('dashboard.activeDeposits')}</p>
          <p>3</p>
        </div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>{t('dashboard.deposits')}</th>
            <th>{t('dashboard.withdrawals')}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

// ============================================
// EXAMPLE 5: Error Handling with Translations
// ============================================
export function ErrorHandlingExample() {
  const { t } = useTranslation();
  const [error, setError] = null;

  return (
    <div>
      {error === 404 && (
        <div>
          <h1>{t('errors.notFound')}</h1>
          <p>{t('errors.notFoundDesc')}</p>
          <button>{t('errors.goHome')}</button>
        </div>
      )}
      
      {error === 'unauthorized' && (
        <div>
          <h2>{t('errors.unauthorized')}</h2>
          <button>{t('errors.tryAgain')}</button>
        </div>
      )}
    </div>
  );
}

// ============================================
// EXAMPLE 6: Conditional Content Based on Language
// ============================================
export function ConditionalLanguageExample() {
  const { i18n, t } = useTranslation();

  return (
    <div>
      <p>Current language: {i18n.language}</p>
      
      {/* Show different content for different languages */}
      {i18n.language === 'ja' && (
        <p>このコンテンツは日本語です</p>
      )}
      
      {i18n.language === 'zh' && (
        <p>此内容是中文</p>
      )}
      
      {/* Show content for all RTL languages (if added in future) */}
      {['ar', 'he'].includes(i18n.language) && (
        <div dir="rtl">RTL Content</div>
      )}
    </div>
  );
}

// ============================================
// EXAMPLE 7: Buttons and Common UI Elements
// ============================================
export function UIElementsExample() {
  const { t } = useTranslation();

  return (
    <div className="button-group">
      <button>{t('buttons.submit')}</button>
      <button>{t('buttons.cancel')}</button>
      <button>{t('buttons.save')}</button>
      <button>{t('buttons.delete')}</button>
      <button>{t('buttons.edit')}</button>
      <button>{t('buttons.close')}</button>
      <button>{t('buttons.explore')}</button>
      <button>{t('buttons.learnMore')}</button>
      <button>{t('buttons.joinNow')}</button>
      <button>{t('buttons.startTrading')}</button>
      <button>{t('buttons.viewMore')}</button>
    </div>
  );
}

// ============================================
// EXAMPLE 8: Form Validation with Translations
// ============================================
export function FormValidationExample() {
  const { t } = useTranslation();
  const [errors, setErrors] = {};

  const validate = (formData) => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = t('auth.emailRequired');
    }
    
    if (!formData.password) {
      newErrors.password = t('auth.passwordRequired');
    }
    
    if (formData.email && !isValidEmail(formData.email)) {
      newErrors.email = t('auth.invalidEmail');
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.password = t('auth.passwordMismatch');
    }
  };

  return (
    <form>
      <div>
        <input placeholder={t('auth.email')} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <input placeholder={t('auth.password')} type="password" />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
    </form>
  );
}

// ============================================
// MIGRATION CHECKLIST
// ============================================
/**
 * When updating existing components:
 * 
 * [ ] Import useTranslation hook at the top
 * [ ] Add const { t } = useTranslation(); in component
 * [ ] Replace all hardcoded strings with t('key.path')
 * [ ] Test in all 10 languages
 * [ ] Check for strings in JSX, not in logic
 * [ ] Verify translations exist in all locale files
 * [ ] Update any props that pass text strings
 * [ ] Remove any dead code with old strings
 * 
 * Common strings to replace:
 * - Page titles and headings
 * - Button labels
 * - Form placeholders
 * - Error messages
 * - Menu items
 * - Navigation links text (if dynamic)
 * - Descriptions and paragraphs
 * - Table headers
 * - Dialog messages
 */

// ============================================
// AVAILABLE TRANSLATION KEYS
// ============================================
/**
 * common: welcome, language, login, signup, logout, balance, account, settings, help, contact, about, home, profile, dashboard
 * 
 * navigation: home, about, services, pricing, contact, faq, plans, markets, legal, register, login
 * 
 * hero: title, subtitle, cta, description
 * 
 * auth: email, password, confirmPassword, username, fullname, loginTitle, loginSubtitle, signupTitle, signupSubtitle, rememberMe, forgotPassword, noAccount, haveAccount, agreeTerms, loginButton, signupButton, signupSuccessful, loginSuccessful, emailRequired, passwordRequired, invalidEmail, passwordMismatch
 * 
 * pricing: title, subtitle, perMonth, perYear, getStarted, features, minInvestment, maxInvestment, returns, duration, selectPlan, basicPlan, standardPlan, premiumPlan
 * 
 * dashboard: welcomeMessage, accountBalance, totalEarnings, activeDeposits, pendingWithdrawals, transactions, deposits, withdrawals, referrals, myDeposits, myWithdrawals, referralLink, copyAddress, copied, lastDeposit, activeDeposit, totalDeposit, lastWithdrawal, pendingWithdrawal, totalWithdrawal
 * 
 * services: title, subtitle, crypto, forex, commodities, stocks, etfs, preIPO, learnMore, service1, service1Desc, service2, service2Desc, service3, service3Desc
 * 
 * steps: title, step1, step1Desc, step2, step2Desc, step3, step3Desc, getStarted
 * 
 * faq: title, q1-q6, a1-a6
 * 
 * contact: title, subtitle, email, phone, address, name, message, send, sentSuccessfully, errorSending, contactInfo, followUs
 * 
 * footer: company, about, careers, press, resources, blog, help, status, legal, privacy, terms, copyright
 * 
 * errors: notFound, notFoundDesc, unauthorized, serverError, connectionError, tryAgain, goHome
 * 
 * buttons: submit, cancel, save, delete, edit, close, explore, learnMore, joinNow, startTrading, viewMore
 * 
 * investment: title, description, minDeposit, maxDeposit, dailyReturn, weeklyReturn, monthlyReturn, investmentPeriod, estimatedProfit, investNow
 */
