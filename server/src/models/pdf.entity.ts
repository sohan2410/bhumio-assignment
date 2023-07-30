import { Blob } from 'buffer'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('pdf')
export class Pdf {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ type: 'bytea', nullable: true })
  data: Buffer
}
