
import mongoose from "mongoose"
import { statelistModel, typeofadsModel ,centerlistModel} from "../MongoConfig/Schema"
import { ConnectionString } from "@/MongoConfig/ConnectionString"



const AddNewInstance = (item, res) => {
    const instance = new statelistModel({
        nameSchimaInput: String(decodeURIComponent(String(item)))
    })
    instance.save()
    res.status(200).json({ res: 'done' })

}
export const AddStateListItem = ( item, res) => {
    mongoose.connect(ConnectionString)
        .then(() => {
            statelistModel.find({
                nameSchimaInput: String(decodeURIComponent(String(item)))
            })
            .then((data) => {
                data.length == 0 ? AddNewInstance(item , res) :
                    res.status(200).json({ res: 'exist' });
                })

        })
}

const AddNewInstanceToAdvList = (item, res) => {
    const instance = new typeofadsModel({
        nameSchimaInput: String(decodeURIComponent(String(item)))
    })
    instance.save()
    res.status(200).json({ res: 'done' })

}
export const AddAdvTypeListItem = (item, res) => {
    mongoose.connect(ConnectionString)
        .then(() => {
            typeofadsModel.find({
                nameSchimaInput: String(decodeURIComponent(String(item)))
            })
                .then((data) => {
                    data.length == 0 ? AddNewInstanceToAdvList(item, res) :
                        res.status(200).json({ res: 'exist' });
                })

        })
}


export const GetAllAdv = (res) => {
    mongoose.connect(ConnectionString)
        .then(() => {
            typeofadsModel.find({
              
            })
                .then((data) => {
                    
                        res.status(200).json({ res: data });
                })

        })
}

export const GetAllstates = (res) => {
    mongoose.connect(ConnectionString)
        .then(() => {
            statelistModel.find({

            })
                .then((data) => {

                    res.status(200).json({ res: data });
                })

        })
}



///////////////////////////////////////////////////////////
const AddNewInstanceTocenterList = (center, state, res) => {
    const instance = new centerlistModel({
        centernameSchimaInput: String(decodeURIComponent(String(center))),
        statenameSchimaInput: String(decodeURIComponent(String(state)))
    })
    instance.save()
    res.status(200).json({ res: 'done' })

}
export const AddcenterTypeListItem = (center,state, res) => {
    mongoose.connect(ConnectionString)
        .then(() => {
            centerlistModel.find({
                centernameSchimaInput: String(decodeURIComponent(String(center))),
                statenameSchimaInput: String(decodeURIComponent(String(state)))
            })
                .then((data) => {
                    data.length == 0 ? AddNewInstanceTocenterList(center, state, res) :
                        res.status(200).json({ res: 'exist' });
                })

        })
}
////////////////////////////////

export const GetAllcenters = (res) => {
    mongoose.connect(ConnectionString)
        .then(() => {
            centerlistModel.find({

            })
                .then((data) => {

                    res.status(200).json({ res: data });
                })

        })
}

////////////////////////
export const GetSpecificcenters = (state,res) => {
    mongoose.connect(ConnectionString)
        .then(() => {
            centerlistModel.find({
                statenameSchimaInput: String(decodeURIComponent(String(state)))
            })
                .then((data) => {

                    res.status(200).json({ res: data });
                })

        })
}