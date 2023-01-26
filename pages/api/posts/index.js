import {Data} from "@/data"

export default function handler(req, res) {
    console.log('req.method ==>', req.method , req.body)
    if(req.method === 'GET'){
        res.status(200).json(Data)
    }else if(req.method === 'POST'){
        const {title} = JSON.parse(req.body)
        console.log('req.method ==>', title)
      const newData = {
        id: Date.now(),
        title,
        author: "typicode 4",
        price: 700
      }
      Data.push(newData)
      res.status(200).json(newData)
    }
    
  }
  