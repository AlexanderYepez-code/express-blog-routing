import express from "express"
import gameArray from "./post.js"

const router = express.Router();

//INDEX

router.get ("/", (req, res)=> {
    const risposta = {
        count : gameArray.length,
        results : gameArray
    }
    res.json(risposta)
});
//SHOW
router.get("/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const resp = gameArray.find(game => game.id===id);
    res.json (resp)
})

//STORE
router.post("/", (req,res)=>{
    res.send("creo nuovo gioco")
})

//UPDATE
router.put("/:id", (req,res)=>{
    const id =req.params.id;
    res.send("aggiorna gioco n."+ id)
})

//MODIFY
router.patch("/:id", (req,res)=>{
    const id =req.params.id;
    res.send("aggiorna parzialemte gioco n."+ id)
})

//DESTROY
router.delete("/:id", (req,res)=>{
        const id = req.params.id;
        res.send("cancella gioco n."+ id)
})


export default router; 

