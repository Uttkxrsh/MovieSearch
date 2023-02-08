import IWatchProvider from "./IWatchProvivider";

export default interface IWatchProviders {
  results: {
    [key: string]: {
      link: string;
      rent: IWatchProvider[];
      flatrate: IWatchProvider[];
      buy: IWatchProvider[];
    };
  };
}
