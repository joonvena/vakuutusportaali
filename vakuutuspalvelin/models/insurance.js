var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var InsuranceSchema = new Schema({
    insurancetype: {
        type: String,
        required: [true, 'Nimi on pakollinen!']
    },
    valid: {
        type: String,
        required: [true, 'Osoite on pakollinen!']
    },
    nextPaymentDate: {
        type: String,
        required: [true, 'Kaupunki on pakollinen!']
    },
    expires: {
        type: String
    },

}, {collection: 'insurances'});



const Insurance = mongoose.model('insurances', InsuranceSchema);


module.exports = Restaurant;