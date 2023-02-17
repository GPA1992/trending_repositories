import { DataTypes, Model } from 'sequelize';
import db from './index';

class User extends Model {
    public id!: number;
    public name!: string;
    public password!: string;
    public role!: string;
}

User.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    underscored: true,
    sequelize: db,
    timestamps: false,
    modelName: 'User',
    tableName: 'Users',
});

export default User;
