const app = require ('./app')

const { sequelize, User } = require("./db");

app.listen(3000, ()=>{
    console.log('listening on', 3000)
})