import { cityEntity } from "src/city/entities/city.entity";
import { Column, CreateDateColumn, Entity, IntegerType, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'state'})

export class stateEntity {
    @PrimaryGeneratedColumn('rowid')
    id:number;

    @Column({ name: 'name', nullable: false})
    name: string;

    @CreateDateColumn ({name: 'created_at'})
    created_at: Date

    @UpdateDateColumn ({name: 'updated_at'})
    updated_at: Date

    @OneToMany( () => cityEntity, (city) => city.state)
    cities?: cityEntity[];
}