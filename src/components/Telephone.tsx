import React, { useState } from 'react';
import add from '../assets/images/add.svg'
import '../css/components.css'

function Telephone() {
  const [smsText, setSmsText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Uzbek');

  const handleTextChangeEn = (e) => {
    const regexEn = /^[a-ya-hg ,.!?:;]+$/;
    if (regexEn.test(e.target.value) || e.target.value === '') {
      setSmsText(e.target.value);
    }
  };

  const handleTextChange = (e) => {
    const handleTextChangeRu = (event) => {
      const regexRu = /^[а-яА-ЯёЁ ,.!?:;]+$/;
      if (regexRu.test(event.target.value) || event.target.value === '') {
        setSmsText(event.target.value);
      }
    };
  
    switch (selectedLanguage) {
      case 'Uzbek':
        setSmsText(e.target.value);
        break;
      case 'Russian':
        handleTextChangeRu(e);
        break;
      case 'English':
        handleTextChangeEn(e);
        break;
      default:
        setSmsText(e.target.value);
        break;
    }
  };
  

  const handleLanguageChange = (language) => {
    if (selectedLanguage === 'Uzbek' && language === 'Russian') {
      setSmsText('');
    }
    setSelectedLanguage(language);
  };

  const renderSmsText = () => {
    switch (selectedLanguage) {
      case 'Uzbek':
        return smsText ? smsText : "Sms matni";
      case 'Russian':
        return smsText ? smsText : 'Текст SMS';
      case 'English':
        return smsText ? smsText : 'Text SMS';
      default:
        return 'Language not supported';
    }
  };
  

  const renderLanguageText = () => {
    switch (selectedLanguage) {
      case 'Uzbek':
        return 'O\'zbekcha';
      case 'Russian':
        return 'Русский';
      case 'English':
      default:
        return 'O\'zbekcha';
    }
  };

  return (
    <>
      <div className="TelephoneBar">
        <div className="phoneSMS">
          <h2>Habarning ko'rinishi</h2>
          <div className="smsTemplate">
            <span>Shablon</span>
            <select>
              <option value="Shablon">Shablon</option>
              <option value="Habar">Habar</option>
            </select>
          </div>
          <div className="smsFields">
            <span>Habar</span>
            <span className="template">
              <img src={add} alt="add" />
              <span>Shablon holatida saqlash</span>
            </span>
          </div>
          <div className="smsLanguage">
            <button onClick={() => handleLanguageChange('Uzbek')}>O'zbekcha</button>
            <button onClick={() => handleLanguageChange('Russian')}>Русский</button>
            <button onClick={() => handleLanguageChange('English')}>English</button>
          </div>
          <div className="smsText">
            <textarea
              className="text"
              value={smsText}
              onChange={handleTextChange}
              placeholder="Текст SMS" // Placeholder in Russian for consistency
            />
          </div>
          <div className="phoneDesign">
            <span>{renderSmsText()}</span>
          </div>
          <div>
            Tanlangan til: {renderLanguageText()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Telephone;
