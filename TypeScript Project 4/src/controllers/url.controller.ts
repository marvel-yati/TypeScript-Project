import { Request, Response } from "express";
import shortid from "shortid";
import { urlModel } from "../models/url.model";


class UrlController {
  public allUrl = async (req: Request, res: Response) => {
    try {
      const url  = req.body;
      let longUrl = url.longUrl;
      const sameurl = await urlModel.findOne({ longUrl: url.longUrl }).select({ _id: 0, updatedAt: 0, createdAt: 0, __v: 0 })
      if(sameurl == null){
      const urlCode = shortid.generate().toLowerCase()
      const baseUrl = "http://localhost:3000/";
      const shortUrl = baseUrl + urlCode;
      longUrl = url.longUrl.trim();
      const urlData = { longUrl, shortUrl, urlCode };
      await urlModel.create(urlData);
      return res.status(201).json({ status: true, data: urlData });
      }
      return res.status(200).json({status: true, data:sameurl})
    } catch (err: any) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  };

  public getUrl = async (req: Request, res: Response) => {
    try{
      const codeUrl:any = req.params.urlCode
      const urlCode1:any = await urlModel.findOne({urlCode:codeUrl})
      if(!urlCode1){
        return res.status(404).json({status:false, message: "No URL found"})
      }
      const findUrlCode:any = await urlModel.findOne({urlCode:codeUrl}).select({urlCode:0})
      console.log(findUrlCode.longUrl)
      return res.status(302).redirect(findUrlCode.longUrl)
    }
    catch(err:any){
      console.log(err)
      return res.status(500).json({message: err.message})
    }
  }
}


export default new UrlController()