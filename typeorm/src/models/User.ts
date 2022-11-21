import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm'
import bcrypt from 'bcryptjs'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    email: string

  @Column()
    pass: string

  @BeforeInsert()
  @BeforeUpdate()
  hashPass () {
    this.pass = bcrypt.hashSync(this.pass, 8)
  }
}

export default User
