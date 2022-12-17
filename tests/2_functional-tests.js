const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

  suite('#1 test', function(){
    test("Translation with text and locale fields: POST request", function(done){
      chai.request(server)
      .post("/api/translate")
      .send({text: "color", locale: "american-to-british"})
      .end((req, res) => {
        assert.equal(200, res.status);
        assert.equal("application/json",res.type);
        assert.equal('<span class="highlight">colour</span>', res.body.translation);

        done();
      })
    });

  });

  suite('#2 test', function(){
    test("Translation with text and invalid locale field: POST request", function(done){
      chai.request(server)
      .post("/api/translate")
      .send({text: "color", locale: "american"})
      .end((req, res) => {
        assert.equal(200, res.status);
        assert.equal("application/json",res.type);
        assert.equal('Invalid value for locale field', res.body.error);

        done();
      })
    });
  });

  suite('#3 test', function(){
    test("Translation with missing text field:  POST request", function(done){
      chai.request(server)
      .post("/api/translate")
      .send({ locale: "american-to-british"})
      .end((req, res) => {
        assert.equal(200, res.status);
        assert.equal("application/json",res.type);
        assert.equal('Required field(s) missing', res.body.error);

        done();
      })
    });
  });

  suite('#4 test', function(){
    test("Translation with missing locale field:  POST request", function(done){
      chai.request(server)
      .post("/api/translate")
      .send({text: "color"})
      .end((req, res) => {
        assert.equal(200, res.status);
        assert.equal("application/json",res.type);
        assert.equal('Required field(s) missing', res.body.error);

        done();
      })
    });
  })

  suite('#5 test', function(){
    test("Translation with empty text:  POST request", function(done){
      chai.request(server)
      .post("/api/translate")
      .send({text:"", locale: "american-to-british"})
      .end((req, res) => {
        assert.equal(200, res.status);
        assert.equal("application/json",res.type);
        assert.equal('No text to translate', res.body.error);

        done();
      })
    });
  })

  suite('#6 test', function(){
    test("Translation with text that needs no translation:  POST request", function(done){
      chai.request(server)
      .post("/api/translate")
      .send({text:"color", locale: "british-to-american"})
      .end((req, res) => {
        assert.equal(200, res.status);
        assert.equal("application/json",res.type);
        assert.equal('Everything looks good to me!', res.body.translation);

        done();
      })
    });
  })

});
