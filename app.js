const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("./db");

const app = express();

app.use(express.json());

app.post("/users", middlewear, async (req, res) => {
    const { username, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 5);
    await User.create({ username, passwordHash });
    res.sendStatus(201);
});


function authTesting(req, res, next){
    if(req.body.username === 'testTwo'){
        return res.sendStatus(400)
    }else{
        next()
    }
}

async function middlewear(req, res, next){
const authHeader = req.headers.authorization;
const base64 = authHeader.split(' ')[1];
const [username, password]= usernamePassword
const usernamePassword = String(Buffer.from(bas64, 'base64')).split(':')
const userRecord = await User.findOne({where: {username}})
const verifyUser=await bcrypt.compare(password, userRecord.passwordHash)
if (verifyUser){
    return next()
}else{
    res.sendStatus(404)
}

app.get('/secrets', verifyUser, async(req,res)=>{
    res.send('this is a secret message')
})

}


module.exports = app;