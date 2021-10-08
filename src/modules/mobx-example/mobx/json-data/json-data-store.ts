import { makeAutoObservable } from 'mobx';

import { mockXhrService } from '../../../shared/services';

class JsonDataStore {
  isLoading: boolean = false;
  error: Error | null = null;
  jsonData: any = null;

  constructor() {
    makeAutoObservable(this);
  }

  // NOTE: notice how much simpler, clearer, and more legible this is than Redux 
  getJsonData = async (success: boolean) => {
    this.error = null;
    this.isLoading = true;
    this.jsonData = null;
    
    try {
      this.jsonData = await mockXhrService.getJsonData(success);
    } catch (error) {
      this.error = error as Error;
    }

    this.isLoading = false;
  }

  // NOTE: notice how much simpler, clearer, and more legible this is than Redux 
  setFoo = (foo: string) => {
    this.jsonData.deeply.nested.value.foo = foo;
  }
}

export const jsonDataStore = new JsonDataStore();
