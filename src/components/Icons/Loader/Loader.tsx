import { FC } from "react";
import * as S from "./Loader.style";
import { IProps } from "./Loader.types";

const Loader: FC<IProps> = (props) => {
  return <S.Wrapper {...props} />;
};

export default Loader;
