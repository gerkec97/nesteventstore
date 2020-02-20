import {
    EventStoreBusConfig,
    EventStoreSubscriptionType,
} from 'nestjs-eventstore';
import {HeroFoundItemEvent} from "./heroes/events/impl/hero-found-item.event";
import {HeroKilledDragonEvent} from "./heroes/events/impl/hero-killed-dragon.event";

const HeroEventInstantiators = {
    HeroFoundItemEvent: (heroId, itemId) => new HeroFoundItemEvent(heroId, itemId),
    HeroKilledDragonEvent: (heroId, dragonId) => new HeroKilledDragonEvent(heroId, dragonId),
};


export const eventStoreBusConfig: EventStoreBusConfig = {
    subscriptions: [
        {
            type: EventStoreSubscriptionType.Persistent,
            stream: '$ce-heroes',
            persistentSubscriptionName: 'heroactions',
        },
    ],
    eventInstantiators: {
        ...HeroEventInstantiators,
    },
};