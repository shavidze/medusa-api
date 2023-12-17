import { Entity, OneToMany } from "typeorm";
import { Store as MedusaStore, User } from "@medusajs/medusa";

@Entity()
export class Store extends MedusaStore {
  @OneToMany(() => User, (user) => user?.store)
  members?: User[];
}
