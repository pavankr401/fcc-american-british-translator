'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const {text, locale} = req.body;
      if(Object.keys(req.body).length < 2) return res.json({error: 'Required field(s) missing' });
      if(text == "") return res.json({error: "No text to translate"});
      if( !(locale == 'american-to-british' || locale == "british-to-american") ) return res.json({ error: 'Invalid value for locale field' });

      if(text != "" && locale == 'american-to-british'){
        return res.send({text: text, translation: translator.highlight(text, translator.americanToBritish(text))});
        
      }
      else{
        return res.send({text: text, translation: translator.highlight(text, translator.britishToAmerican(text))});
      }
      
    });
};
