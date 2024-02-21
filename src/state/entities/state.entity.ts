import { Column, CreateDateColumn, Entity, IntegerType, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}