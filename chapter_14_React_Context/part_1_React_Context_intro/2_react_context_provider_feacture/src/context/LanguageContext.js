import React from 'react'

const LanguageContext = React.createContext({
  activeLanguage: 'HI',
  changeLanguage: () => {},
})

export default LanguageContext
