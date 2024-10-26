import Sequelize, { Model } from "sequelize";

class Product extends Model{
    static init(sequelize){
        super.init(
            {
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                group: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                price: {
                    type: Sequelize.STRING,
                    allowNull: false
                }
            },
            {sequelize}
        )
    }
}

export default Product