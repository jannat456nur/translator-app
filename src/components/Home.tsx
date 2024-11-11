import React from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t, i18n } = useTranslation('global') // Use `useTranslation` for translations

  return (
    <div>
      <p>{t('home.subtitle')}</p> {/* Translated text from i18next */}
    </div>
  )
}

export default Home
