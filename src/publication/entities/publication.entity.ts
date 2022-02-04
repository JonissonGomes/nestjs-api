import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'publications',
})
export class Publication extends Model {
  @Column
  name: string;

  @Column
  description: string;
}
