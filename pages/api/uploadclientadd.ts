import {NextApiResponse,NextApiRequest} from 'next'
import formidable, { File } from 'formidable';
import { promises as fs } from "fs";
import path from "path";
import { adminadsModel, adsModel } from '@/MongoConfig/Schema';


export const config = {
    api: {
        bodyParser: false,
    }
};

type ProcessedFiles = Array<[string, File]>;

export  default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

   
    const title_ = req.headers.title;
    const desc_ = req.headers.desc;
    const center_ = req.headers.center;
    const state_ = req.headers.state;
    const street_ = req.headers.street;
    const typeofads_ = req.headers.typeofads;
    const enddate_ = req.headers.enddata;
    const startdate_ = req.headers.startdate;
    const price_ = req.headers.price;
    const id_ = req.headers.id;
    const phone_ = req.headers.phone;

   
  var filename_:String = ''
     const files = await new Promise<ProcessedFiles | undefined>((resolve, reject) => {
        const form = new formidable.IncomingForm();
        const files: ProcessedFiles = [];
        form.on('file', function (field, file) {
            files.push([field, file]);
        })
        form.on('end', () => resolve(files));
        form.on('error', err => reject(err));
        form.parse(req, () => {
            //
        });
    })

    if (files?.length) {

        /* Create directory for uploads */
        const targetPath = path.join(process.cwd(), `/public/UploadedImg/`);
        try {
            await fs.access(targetPath);
        } catch (e) {
            await fs.mkdir(targetPath);
        }
       
        /* Move uploaded files to directory */
        for (const file of files) {
             const NoInQue = (await fs.readdir(targetPath)).length+1;
            const tempPath = file[1].filepath;
            await fs.rename(tempPath, targetPath +NoInQue + '_'  +file[1].originalFilename );
            filename_= String(NoInQue + '_'  +file[1].originalFilename)
        }
    }

    const newitem = new adsModel({
    titleSchimaInput:String(decodeURIComponent(String(title_))),
    stateSchimaInput:String(decodeURIComponent(String(state_))),
    centerSchimaInput:String(decodeURIComponent(String(center_))),
    streetSchimaInput:String(decodeURIComponent(String(street_))),
    descSchimaInput:String(decodeURIComponent(String(desc_))),
    useridSchimaInput:id_,
    typeofAdsSchimaInput:String(decodeURIComponent(String(typeofads_))),
    priceSchimaInput:String(decodeURIComponent(String(price_))),
    imgsrcSchimaInput:String(decodeURIComponent(String(filename_))),
    startdateSchimaInput:startdate_,
    enddateSchimaInput:enddate_,
    phoneSchimaInput:String(decodeURIComponent(String(phone_))),
    valueSchimaInput:'0',
    })
    newitem.save().then(() =>{
    res.status(200).json({res:'done'});
}
    )



}