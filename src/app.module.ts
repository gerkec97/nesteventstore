import {Module} from '@nestjs/common';
import {HeroesGameModule} from './heroes/heroes.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {EventStoreCqrsModule} from "nestjs-eventstore/dist";
import {eventStoreBusConfig} from "./event-bus.provider";

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        EventStoreCqrsModule.forRootAsync({
                useFactory: async (config: ConfigService) => {
                    return {
                        connectionSettings: {
                            defaultUserCredentials: {
                                username: 'admin',
                                password: 'changeit',
                            }
                        },
                        endpoint: {
                            host: 'localhost',
                            port: 1113,
                        }
                    }

                },
                inject: [ConfigService],
            },
            eventStoreBusConfig,
        ),
        HeroesGameModule
    ],
})

export class ApplicationModule {}
