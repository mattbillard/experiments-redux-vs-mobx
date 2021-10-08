import { jsonData } from "../../constants";

class MockXhrService {
  getJsonData = (success: boolean): Promise<any> => {
    return this.mockXhrSuccess(success, jsonData);
  }

  private mockXhrSuccess = (success: boolean, data: any): Promise<any> => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve(data)
        } else {
          reject(new Error('mock xhr failed'));
        }
      }, 500);
    })
    return promise;
  }
}

export const mockXhrService = new MockXhrService();