import mongoose, {Schema,model} from "mongoose";

const userSchima = new Schema({
    nameSchimaInput:String,
    phoneSchimaInput: String,
    passwordSchimaInput: String,

})

const statelistSchima = new Schema({
    nameSchimaInput: String,
    
})
const typeofadsSchima = new Schema({
    nameSchimaInput: String,

})
const centerlistSchima = new Schema({
    centernameSchimaInput: String,
    statenameSchimaInput:String,
})

const adminadsSchima = new Schema({
    titleSchimaInput: String,
    imgsrcSchimaInput: String,
})

const contactmsgSchima = new Schema({
    msgSchimaInput: String,

})

const adsSchima = new Schema({
    titleSchimaInput:String,
    stateSchimaInput:String,
    centerSchimaInput:String,
    streetSchimaInput:String,
    descSchimaInput:String,
    useridSchimaInput:String,
    typeofAdsSchimaInput:String,
    priceSchimaInput:String,
    imgsrcSchimaInput:String,
    startdateSchimaInput:String,
    enddateSchimaInput:String,
    phoneSchimaInput:String,
    valueSchimaInput:String,

})


export const adsModel = mongoose.models.ads || model('ads', adsSchima)
export const userModel = mongoose.models.users || model('users', userSchima, 'users')
export const statelistModel = mongoose.models.statelists || model('statelists', statelistSchima)
export const typeofadsModel = mongoose.models.typeofads || model('typeofads', typeofadsSchima)
export const centerlistModel = mongoose.models.centerlists || model('centerlists', centerlistSchima)
export const adminadsModel = mongoose.models.adminads || model('adminads', adminadsSchima)
export const contactmsgModel = mongoose.models.contactmsgs || model('contactmsgs', contactmsgSchima)
