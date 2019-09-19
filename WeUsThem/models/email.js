const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let EmailSchema = new Schema({
    sender: {type: String, required: true, max: 100},
    sentTo: {type: String, required: true, max: 100},
    title: {type: String, required: true, max: 100},
    emailBody:{type: String, required: true, max: 1000},
    archived: {type:Boolean, required: true, default:false}
}, {collection: 'emails'});

let archived = new Schema({
    sender: {type: String, required: true, max: 100},
    sentTo: {type: String, required: true, max: 100},
    title: {type: String, required: true, max: 100},
    emailBody:{type: String, required: true, max: 1000},
    archived: {type:Boolean, required: true, default:true}
}, {collection: 'archives'});


email = mongoose.model('Email', EmailSchema);
archived = mongoose.model('ArchivedEmail', EmailSchema);
module.exports = {
    Email: email,
    ArchivedEmail : archived
}