import "reflect-metadata";
import {createExpressServer, useContainer as routingUseContainer} from "routing-controllers";
import {createConnection, useContainer as typeormUseContainer} from "typeorm";
import {UserController} from "./controller/UserController";
import {User} from "./entity/User";
import {Logger} from "./logging/Logger";
import {Container} from "typedi";

typeormUseContainer(Container);
routingUseContainer(Container);
Logger.info("Set up dependency injection");

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "node_js_ts",
    password: "wedding",
    database: "node_js_ts",
    synchronize: false,
    logging: false,
    entities: [
        User
    ]
}).then(() => {
    Logger.info("Connected to database");

    const app = createExpressServer({
        controllers: [
            UserController]
     });
    
    app.listen(3000);
    Logger.info("Listening on port: 3000");
}).catch((error) => {
    Logger.error("Cannot connect to database", error);
});
