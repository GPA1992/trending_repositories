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
	},
	ownerRepo: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	ownerAvatar: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	repoName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
	stars: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	forks: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	language: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	repoLink: {
		type: DataTypes.STRING,
		allowNull: false,
	},
}, {
	sequelize: db,
	createdAt: true,
	updatedAt: true,
	modelName: 'repository',
	tableName: 'repositories',
});

export default Repository;
