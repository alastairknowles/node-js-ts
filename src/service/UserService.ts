import {Repository} from "typeorm";
import {User} from "../entity/User";
import {Service} from "typedi";
import {OrmRepository} from "typeorm-typedi-extensions";
import {UserDto} from "../rest/UserDto";

@Service()
export class UserService {

    private userRepository: Repository<User>;

    constructor(@OrmRepository(User) userRepository: Repository<User>) {
        this.userRepository = userRepository;
    }

    public getById(id: number): Promise<UserDto> {
        return this.userRepository.findOneById(id)
        .then((user) => {
            return user ? this.toDto(user) : undefined;
        });
    }

    public getOrCreate(userDto: UserDto): Promise<UserDto> {
        var email: string = userDto.email;
        return this.userRepository.findOne({email: email})
        .then(user => this.createIfUndefined(user, userDto));
    }

    private createIfUndefined(user: User, userDto: UserDto): UserDto | Promise<UserDto> {
        if (user) {
            return {...user}; 
        }

        user = {...userDto};
        return this.create(user);
    }

    private create(user: User): Promise<UserDto> {
        return this.userRepository.save(user)
        .then(user => this.toDto(user))
    }

    private toDto(user: User): UserDto {
        return {...user};
    }

}
