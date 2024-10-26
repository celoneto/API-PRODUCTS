import express from 'express'
import productRouter from './routers/routes.js'
import config from './config/database.js'
import Product from './models/Product.js'
import Sequelize from 'sequelize'

const app = express()

app.use(express.json())

const sequelize = new Sequelize(config)
Product.init(sequelize)

app.use('/produtos', productRouter)


sequelize.authenticate()
    .then(()=>{
        console.log('Banco de dados rodando 💻')
        app.listen(3000, ()=>{
            console.log('Servidor rodando 🚀')
        })
    })
    .catch((err)=>{
        console.error(err.message)
    })