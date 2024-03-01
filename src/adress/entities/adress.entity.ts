import { Column, CreateDateColumn, Entity, IntegerType, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'address'})

export class adressEntity {
    @PrimaryGeneratedColumn('rowid')
    id:number;
    @Column({name: 'user_id', nullable: false})
    user_id: number;

    @Column({ name: 'complement', nullable: false})
    complement: string;

    @Column({ name: 'number'})
    number: number;

    @Column({name: 'cep', nullable: false})
    cep: string;

    @Column({name: 'city_id', nullable: false})
    city_id: number

    @CreateDateColumn ({name: 'created_at'})
    created_at: Date

    @UpdateDateColumn ({name: 'updated_at'})
    updated_at: Date
}