import { useState } from "react";
import style from "../style/WatchProvider.module.scss";

interface Props {
  name: string;
  logo: string;
}

const WatchProvider = ({ name, logo }: Props) => {
  const [tooltip, showTooltip] = useState(false);

  return (
    <div className={style.provider}>
      <div className={`${style.tooltip} ${tooltip ? style.showTooltip : ""}`}>
        {name}
      </div>
      <div
        onMouseEnter={() => showTooltip(true)}
        onMouseLeave={() => showTooltip(false)}
      >
        <img alt={name} src={`https://image.tmdb.org/t/p/w45${logo}`} />
      </div>
    </div>
  );
};

export default WatchProvider;
