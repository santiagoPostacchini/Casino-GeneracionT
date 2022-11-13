module.exports = (sequelize, Sequelize) => {

    const usuarios = sequelize.define("usuarios", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: Sequelize.STRING,
        },
        Mail: {
            type: Sequelize.STRING
        },
        Balance: {
            type : Sequelize.INTEGER
        },
        Pass: {
            type : Sequelize.STRING
        }
        
        
    }, { timestamps: false });
    return usuarios;
};