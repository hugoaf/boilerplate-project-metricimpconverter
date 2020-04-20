/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      if(initUnit==="Invalid" && !isNaN(initNum)) {
        res.json({error: "invalid unit", string : "Error - " + input});
      }
      else if(initUnit!=="Invalid" && isNaN(initNum)){
        res.json({error: "invalid number", string : "Error - " + input});
      }
      else if(initUnit==="Invalid" && isNaN(initNum)){
        res.json({error: "invalid number and unit", string :"Error - " + input});
      } else {

      var initSpellout = convertHandler.spellOutUnit(initUnit);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var returnSpellout = convertHandler.spellOutUnit(returnUnit);
      var toString = convertHandler.getString(initNum, initSpellout, returnNum, returnSpellout);
      
      res.json({
        initNum, initUnit, returnNum, returnUnit, string: toString
      })

      }

 
    });
    
};
