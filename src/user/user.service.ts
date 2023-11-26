import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./user.entity";
import {Repository} from "typeorm";
import {UserDto} from "./dto/user.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly  userRepository: Repository<UserEntity>) {}

    async getAll(){
        // const users = await this.userRepository.find();
        // return users;

        return this.userRepository.createQueryBuilder('user').where("user.id = :id", {id: 2}).getOne();
    }

    async findOne(email: string){
        return this.userRepository.findOneBy({email})
    }

    async create(dto: UserDto){
        return this.userRepository.save(dto);
        // return this.userRepository.createQueryBuilder('user').where("user.id = :id", {id: 2});
    }

}
