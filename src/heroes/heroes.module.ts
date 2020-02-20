import { Module } from '@nestjs/common';
import { HeroesGameController } from './heroes.controller';
import { HeroRepository } from './repository/hero.repository';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';
import { HeroesGameSagas } from './sagas/heroes.sagas';

@Module({
  controllers: [HeroesGameController],
  providers: [
    HeroRepository,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    HeroesGameSagas,
  ],
})
export class HeroesGameModule {}
