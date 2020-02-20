export class HeroFoundItemEvent {
  constructor(public readonly heroId: string, public readonly itemId: string) {}
  get streamName() {
    return `$ce-heroes`;
  }
}
