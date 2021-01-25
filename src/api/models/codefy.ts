import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'codefy' })
export class Codefy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  url: string;

  @Column('varchar')
  token: string;

  @Column('bool', {
    default: true,
  })
  active: boolean;
}
