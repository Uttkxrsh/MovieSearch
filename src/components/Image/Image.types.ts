export interface IProps {
  src: string;
  alt: string;
  w?: string;
  h?: string;
}

export interface IWrapperProps {
  w: string | undefined;
  h: string | undefined;
}

export interface ILoadingProps {
  isLoaded: boolean;
}
