export interface IPersonProfileData {
    webId: string;
    name: string;
    storageUrl: string;
    error: Error | null;
  }

  export interface IError {
    message: string;
    statusCode: string;
  
  }