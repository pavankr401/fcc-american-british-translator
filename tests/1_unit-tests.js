const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
  let translator = new Translator();

  test("#1 to Brtish English", function(){
    assert.equal("Mangoes are my favourite fruit.", translator.americanToBritish("Mangoes are my favorite fruit."))
  })

  test("#2 to Brtish English", function(){
    assert.equal("I ate yoghurt for breakfast.", translator.americanToBritish("I ate yogurt for breakfast."))
  })

  test("#3 to Brtish English", function(){
    assert.equal("We had a party at my friend's flat.", translator.americanToBritish("We had a party at my friend's condo."))
  })

  test("#4 to Brtish English", function(){
    assert.equal("Can you toss this in the bin for me?", translator.americanToBritish("Can you toss this in the trashcan for me?"))
  })

  test("#5 to Brtish English", function(){
    assert.equal("The car park was full.", translator.americanToBritish("The parking lot was full."))
  })

  test("#6 to Brtish English", function(){
    assert.equal("Like a high tech Heath Robinson device.", translator.americanToBritish("Like a high tech Rube Goldberg machine."))
  })

  test("#7 to Brtish English", function(){
    assert.equal("To bunk off means to skip class or work.", translator.americanToBritish("To play hooky means to skip class or work."))
  })

  test("#8 to Brtish English", function(){
    assert.equal("No Mr Bond, I expect you to die.", translator.americanToBritish("No Mr. Bond, I expect you to die."))
  })

  test("#9 to Brtish English", function(){
    assert.equal("Dr Grosh will see you now.", translator.americanToBritish("Dr. Grosh will see you now."))
  })

  test("#10 to Brtish English", function(){
    assert.equal("Lunch is at 12.15 today.", translator.americanToBritish("Lunch is at 12:15 today."))
  })

  test("#11 to American English", function(){
    assert.equal("We watched the soccer match for a while.", translator.britishToAmerican("We watched the footie match for a while."))
  })

  test("#12 to American English", function(){
    assert.equal("Tylenol takes up to an hour to work.", translator.britishToAmerican("Paracetamol takes up to an hour to work."))
  })

  test("#13 to American English", function(){
    assert.equal("First, caramelize the onions.", translator.britishToAmerican("First, caramelise the onions."))
  })

  test("#14 to American English", function(){
    assert.equal("I spent the public holiday at the carnival.", translator.britishToAmerican("I spent the bank holiday at the funfair."))
  })

  test("#15 to American English", function(){
    assert.equal("I had a cookie then went to the fish-and-chip shop.", translator.britishToAmerican("I had a bicky then went to the chippy."))
  })

  test("#16 to American English", function(){
    assert.equal("I've just got odds and ends in my fanny pack.", translator.britishToAmerican("I've just got bits and bobs in my bum bag."))
  })

  test("#17 to American English", function(){
    assert.equal("The swap meet at Boxted Airfield was called off.", translator.britishToAmerican("The car boot sale at Boxted Airfield was called off."))
  })

  test("#18 to American English", function(){
    assert.equal("Have you met Mrs. Kalyani?", translator.britishToAmerican("Have you met Mrs Kalyani?"))
  })

  test("#19 to American English", function(){
    assert.equal("Prof. Joyner of King's College, London.", translator.britishToAmerican("Prof Joyner of King's College, London."))
  })

  test("#20 to American English", function(){
    assert.equal("Tea time is usually around 4 or 4:30.", translator.britishToAmerican("Tea time is usually around 4 or 4.30."))
  })

  test("#21 Highlight translation", function(){
    assert.equal(`Mangoes are my <span class="highlight">favourite</span> fruit.`, translator.highlight("Mangoes are my favorite fruit.", translator.americanToBritish("Mangoes are my favorite fruit.")));
  })

  test("#22 Highlight translation", function(){
    assert.equal(`I ate <span class="highlight">yoghurt</span> for breakfast.`, translator.highlight("I ate yogurt for breakfast.", translator.americanToBritish("I ate yogurt for breakfast.")));
  })

  test("#23 Highlight translation", function(){
    assert.equal(`We watched the <span class="highlight">soccer</span> match for a while.`, translator.highlight("We watched the footie match for a while.", translator.britishToAmerican("We watched the footie match for a while.")));
  })

  test("#24 Highlight translation", function(){
    assert.equal(`<span class="highlight">Tylenol</span> takes up to an hour to work.`, translator.highlight("Paracetamol takes up to an hour to work.", translator.britishToAmerican("Paracetamol takes up to an hour to work.")));
  })



});
