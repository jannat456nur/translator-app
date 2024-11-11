import { useTranslation } from 'react-i18next'

const Header = () => {
  const [i, i18n] = useTranslation('global')
  const handleChangeLanguage = (language:string)=> {
    i18n.changeLanguage(language)

  }
  return (
    <div>
      <p>{i('header.subtitle')}</p>
      <button onClick={()=>handleChangeLanguage('en')}>English</button>
      <button onClick={()=>handleChangeLanguage('es')}>Spanish</button>
    </div>
  )
}

export default Header
