const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const britishOnly = require('./british-only.js');
const britishToAmericanSpelling = inverseObj(americanToBritishSpelling);
const titles = ["mr", "Mr", "Mrs", "mrs", "mx", "Mx", "Dr", "dr", "prof", "Prof", "ms"]


function inverseObj(obj){
  let newObj = {};
  for(let key in obj){
    newObj[obj[key]] = key;
  }
  return newObj;
}

class Translator {

  americanToBritish(sentence){
    let result = new String(sentence);
    result = this.convertWithBoundary(americanToBritishSpelling, result); 
    result = this.convertToBritishTitle(result);
    result = this.convertWithBoundary(americanOnly, result);

    if(/\d+:\d+/.test(result)) result = result.replace(/(\d+):(\d+)/, "$1.$2");

    if(result == sentence) return "Everything looks good to me!";
    else return result;
  }

  britishToAmerican(sentence){
    let result = new String(sentence);
    result = this.convertWithBoundary(britishToAmericanSpelling, result);
    result = this.convertToAmericanTitle(result);
    result = this.convertWithBoundary(britishOnly, result);

    if(/\d+\.\d+/.test(result)) result = result.replace(/(\d+)\.(\d+)/, "$1:$2");
    // console.log(result);

    if(result == sentence) return "Everything looks good to me!";
    else return result;
  }

  convertToBritishTitle(sentence){
    for(let title of titles){
      let pattern = new RegExp(`\\b${title}\\b[.](?= )`);
      if(pattern.test(sentence) ) sentence = sentence.replace(pattern, title);
    }
    
    return sentence;
  }

  convertToAmericanTitle(sentence){
    for(let title of titles){
      let pattern = new RegExp(`\\b${title}\\b(?= )`);
      if(pattern.test(sentence) ) sentence = sentence.replace(pattern, `${title}.`);
    }
    return sentence;
  }

  convertWithBoundary(country, sentence){
    for(let key in country){
      let pattern = new RegExp(`\\b(?<= |^)${key}\\b`, "ig");

      if(pattern.test(sentence)){
        sentence = sentence.replace(pattern, country[key]);
        
      } 
    }
    return sentence;
  }

  highlight(original, modified){
    if(modified == "Everything looks good to me!") return modified;
    
    let originalArr = original.split(" ");
    let modifiedArr = modified.split(" ");
    let modifiedStr = "";

    for(let word1 of modifiedArr){
      let found = false;
      for(let word2 of originalArr){
        if(word1 == word2){
          found = true;
          break;
        }
      }
      if(!found) modifiedStr += `<span class="highlight">${word1}</span> `;
      else modifiedStr += `${word1} `;
    }

    modifiedStr = modifiedStr.replace(/ $/, "");

    return modifiedStr;
  }

}

const translate = new Translator();
// console.log(translate.highlight1("Mrs", "Mrs."));



module.exports = Translator;