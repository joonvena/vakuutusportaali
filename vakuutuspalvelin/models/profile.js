var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProfileSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Nimi on pakollinen!']
    },
    address: {
        type: String,
        required: [true, 'Osoite on pakollinen!']
    },
    city: {
        type: String,
        required: [true, 'Kaupunki on pakollinen!']
    },
    phone: {
        type: String
    },
    insurances: [{
        insurancetype: {
            type: String,
            required: [true, 'Otsikko on pakollinen!']
        },
        valid: {
            type: Boolean,
            required: [true, 'Arvosana on pakollinen!'],
            min: [0, 'Yksi on pienin arvosana!'],
            max: 5
        },
        nextPaymentDate: {
            type: Date,
            required: [true, 'Arvio on pakollinen!']
        },
        expires: {
            type: Date,
            required: [true, 'Lähettäjä on pakollinen!']
        }
    }]

}, {collection: 'profiles'});



const Profile = mongoose.model('profiles', ProfileSchema);


module.exports = Restaurant;