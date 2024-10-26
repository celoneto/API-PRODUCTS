export default {
    dialect: 'postgres',
    host: 'localhost',
    database: 'productsdb',
    password: 'postgres',
    username: 'postgres',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true
    }
}