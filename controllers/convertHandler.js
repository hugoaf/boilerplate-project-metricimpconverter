/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {

    let number = input.split(/[a-zA-Z]/)[0];

    if (!number) {
      // No number portion is present so 1 is returned
      return 1;
    }
    // Error Double Fraction or more
    if (number.split("/").length > 2) {
      return "Invalid";
    }
    // Fraction & fraction with decimal
    if (number.split("/").length === 2) {
      return number.split('/')[0] / number.split('/')[1];
    }

    // Integer, Decimal
    if(!isNaN(number)){
      //console.log("!isNaN(number)", !isNaN(number));
      return number;
    }

    return "Invalid number not idenfied";

  };

  this.getUnit = function(input) {
    let number = input.split(/[a-zA-Z]/)[0];
    let unit  = input.replace(number,'');
    //console.log('unit is: ', unit);

    let units = [
      'gal',
      'l',
      'mi',
      'km',
      'lbs',
      'kg',
      'GAL',
      'L',
      'MI',
      'KM',
      'LBS',
      'KG',
    ];
    if (units.includes(unit)) {
      return unit; 
    } else return "Invalid";
  };

  this.getReturnUnit = function(initUnit) {
    let units =
    {
      gal:'l',
      l:'gal',
      mi:'km',
      km:'mi',
      lbs:'kg',
      kg: 'lbs'
    }
//console.log(units[initUnit]);
    if(initUnit.toLowerCase() in units) {
      return units[initUnit.toLowerCase()];
    } else {
      return "Invalid initUnit";
    }

  };

  this.spellOutUnit = function(unit) {
    let spellOuts =
    {
      l:'liters',
      gal:'gallons',
      km:'kilometers',
      mi:'miles',
      kg: 'kilograms',
      lbs: 'pounds'
    }
//console.log(units[initUnit]);
    if(unit.toLowerCase() in spellOuts) {
      return spellOuts[unit.toLowerCase()];
    } else {
      return "Invalid Unit";
    }
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    const conversions = {
      l: initNum / galToL,
      gal: initNum * galToL,
      km: initNum / miToKm,
      mi: initNum * miToKm,
      kg: initNum / lbsToKg,
      lbs: initNum * lbsToKg
    }
    
    if( initUnit.toLowerCase() in conversions ) {
      return Math.round(conversions[initUnit.toLowerCase()] * 100) / 100;
    } else return "initUnit not valid";
    
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    //"5 kilometers converts to 3.10686 miles"

    return initNum + " " + initUnit + ' converts to ' + returnNum + ' ' + returnUnit;

  };
}

module.exports = ConvertHandler;
