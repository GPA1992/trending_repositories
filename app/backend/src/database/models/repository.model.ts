import { DataTypes, Model } from 'sequelize';
import db from './index';

class Repository extends Model {
    public id!: number;
    public owner: string;
    public ownerRepo: string;
    public ownerAvatar: string; 
    public repoName: string;
    public  description: string; 
    public  stars: number; 
    public  forks: number; 
    public  language: string; 
    public  repoLink: string; 
}

Repository.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    owner: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ownerRepo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ownerAvatar: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    repoName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    stars: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    forks: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    language: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    repoLink: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: db,
    createdAt: true,
    updatedAt: true,
    modelName: 'repository',
    tableName: 'repositories',
});

export default Repository;
