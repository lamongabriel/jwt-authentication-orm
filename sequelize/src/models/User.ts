import { sequelize } from '../database/pg'
import { DataTypes, Model, UUIDV4 } from 'sequelize'
import bcrypt from 'bcrypt'

interface UserAttributes extends Model {
  id?: string
  email: string
  pass: string
}

export const User = sequelize.define<UserAttributes>('user', {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: UUIDV4(),
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pass: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  hooks: {
    beforeCreate: (user) => {
      user.pass = bcrypt.hashSync(user.pass, 8)
    }
  }
})
