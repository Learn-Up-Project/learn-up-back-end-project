import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 60 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @Column()
  isAdm: boolean;
  
  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ type: Date })
  createdAt: string;

  @UpdateDateColumn({ type: Date })
  updatedAt: string;
};
