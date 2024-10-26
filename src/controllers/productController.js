import Product from "../models/Product.js"
import crypto from 'crypto'

export const getProduct = async (req, res) => {
    try {
        const products = await Product.findAll()
        res.status(200).json(products)
    } catch (err) {
        console.error(err.message)
    }
}

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create({
            id: crypto.randomUUID(),
            name: req.body.name,
            group: req.body.group,
            price: req.body.price
        })
        res.status(201).json(product)
    } catch (err) {
        console.error(err.message)
    }
}

export const updateProduct = async (req, res) => {
    try {
        await Product.update({
            id: req.params.id,
            name: req.body.name,
            group: req.body.group,
            price: req.body.price
        },
            {
                where: {
                    id: req.params.id
                }
            })
        res.status(201).json({ message: `Produto de ID ${req.params.id} foi atualizado com sucesso.` })
    } catch (err) {
        console.error(err.message)
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({ message: `Produto de ID ${req.params.id} deletado com sucesso.` })
    } catch (err) {
        console.error(err.message)
    }
}