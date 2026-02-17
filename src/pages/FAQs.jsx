import React from 'react'
import Banner from '../components/Banner'
import Faqs from '../components/Faqs'
import { useTranslation } from 'react-i18next';

export default function FAQs() {
  const { t } = useTranslation();
  return (
    <div>
      <Banner title="FAQs" desc="Any Questions? We are here to answer you" />
      <h1>{t('common.welcome')}</h1>;
      <Faqs />
    </div>
  )
}

