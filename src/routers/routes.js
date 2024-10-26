import express from 'express'
import { getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js'

const route = express.Router()

route.get('/listar', getProduct)
route.post('/cadastrar', createProduct)
route.put('/atualizar/:id', updateProduct)
route.delete('/deletar/:id', deleteProduct)

export default route