const http = require("http");
const fs = require("fs");
const myserver =http.createServer((req,res) =>{
    const log = '${Date.now()}: ${req.url} new req reciveed\n'
    fs.appendFile("log.txt",log,(err,data)=>{
        switch (req.url){
            case "/":
            res.end("dk singh1.jpg");
            break;
            case "/contact":
                res.end("hi i am dhiraj kumar");
                break;
                default:
                    res.end("404 not found");



        }
    })
})
myserver.listen(2000, () => console.log('server start'));