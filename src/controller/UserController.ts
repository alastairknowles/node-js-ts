import {Get, Post, Param, Body, JsonController} from "routing-controllers";
import {UserService} from "../service/UserService";
import {User} from "../entity/User";
import {Inject} from "typedi";
import {UserDto} from "../rest/UserDto";

@JsonController("/users")
export class UserController {

    private userService : UserService;

    constructor(userService : UserService) {
        this.userService = userService;
    }

    @Get("/:id")
    public getUser(@Param("id") id: number) : Promise<UserDto> {
        return this.userService.getById(id);
    }

    @Post("/")
    public postUser(@Body({required: true}) userDto: UserDto) : Promise<UserDto> {
        return this.userService.getOrCreate(userDto);
    }

}
