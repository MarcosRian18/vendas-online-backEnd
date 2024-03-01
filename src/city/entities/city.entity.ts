import { adressEntity } from "src/adress/entities/adress.entity";
import { stateEntity } from "src/state/entities/state.entity";
import { Column, CreateDateColumn, Entity, IntegerType, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'city'})

export class cityEntity {
    @PrimaryGeneratedColumn('rowid')
    id:number;
    @Column({name: 'state_id', nullable: false})
    state_id: number;

    @Column({ name: 'name', nullable: false})
    name: string;

    @CreateDateColumn ({name: 'created_at'})
    created_at: Date

    @UpdateDateColumn ({name: 'updated_at'})
    updated_at: Date

    @OneToMany(()=> adressEntity,(address) => address.city)
    adresses?: adressEntity[]

    @ManyToOne(()=> stateEntity, (state) => state.cities)
    @JoinColumn({name: 'state_id', referencedColumnName: 'id'})
    state?: stateEntity
}