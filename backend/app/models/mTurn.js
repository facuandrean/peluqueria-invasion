import { DataTypes } from "sequelize";

const turnsAttributes = {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Telefono: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    NroUsuario: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Usuarios',
            key: 'Id'
        }
    }
};

const turnsOptions = {
    timestamps: false
}

const turnsModel = {
    turnsAttributes,
    turnsOptions
}

export default turnsModel;