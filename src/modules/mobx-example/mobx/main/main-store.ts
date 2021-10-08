import { makeAutoObservable } from 'mobx';

// NOTE: using classes is great. Object oriented programming allows you to model entities very clearly.
class MainStore {
  count: number = 0;
  timer: number = 0;

  constructor() {
    makeAutoObservable(this);

    // NOTE: this is clearer in Mobx because you can kick off the timer in the model instead of the component
    setInterval(this.increaseTimer, 1000);
  }

  increaseTimer = () => {
    this.timer++;
  }

  updateCount = (count: number) => {
    this.count += count;
  }
}

// TODO: MobX is very flexible. Here we have a store that is a singleton for the whole app. 
// If, for example, you wanted multiple counters with their own data, you could just as easily have each Counter component new-up their own store like this:
// const mainStoreRef = useRef<MainStore>(new MainStore());
export const mainStore = new MainStore();
