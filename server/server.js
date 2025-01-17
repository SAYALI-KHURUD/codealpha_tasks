express = require ("express");

eobj = express();

port= 5200;

function ListenServer()
{
    console.log("MArvellous server is in listening node");
}

eobj.listen(port.ListenServer)

function ConnectRoute(req,res)
{
  res.send("Marvellous server is on..");
}
eobj.get('/',ConnectRoute)