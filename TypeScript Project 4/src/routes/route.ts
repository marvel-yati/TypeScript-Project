import  {Router}  from "express"
import urlController from "../controllers/url.controller";
import { Request,Response } from "express";

class urlRouter {
    public router: Router;
  
    constructor() {
      this.router = Router();
       this.routes();
    }
    private routes(): void {

    this.router.post("/originalUrl", urlController.allUrl)
    this.router.get("/:urlCode",urlController.getUrl)
    this.router.all("*",(req:Request,res:Response) => {
        res.status(400).send({status:false, message: "Invalid Request"})
    })
}
  
  
  }
  
  export default new urlRouter().router;