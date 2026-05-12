import express from "express"
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) =>{
    res.json({message: "Signalboard API Running"})
});
// basically _ telling the dev that the Request doesnt need to be used
// can be changed to a variable to be use
// res is a variable to be set to send response as callback
export default app