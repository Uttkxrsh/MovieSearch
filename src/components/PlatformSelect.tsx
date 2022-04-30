import { ChangeEvent, useEffect, useState } from "react";
import styles from "../style/PlatformSelect.module.scss";
import WatchProvider from "../types/WatchProvider";
import WatchProviderObject from "../types/WatchProviderObject";
import sortWatchProviders from "../utils/sortWatchProviders";
import translateCountryCode from "../utils/translateCountryCode";
import urlBuilder from "../utils/urlBuilder";

interface Props {
  movieId: number;
}

interface WatchProviderResult {
  id: number;
  results: WatchProviderObject;
}

const PlatformSelect = ({ movieId }: Props) => {
  const [watchProviders, setWatchProviders] = useState<WatchProviderObject>({});
  const [choosenCountry, setChoosenCountry] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const watchProvidersRequest = await fetch(
        urlBuilder(`/movie/${movieId}/watch/providers`)
      );
      const watchProviders: WatchProviderResult =
        await watchProvidersRequest.json();

      if (watchProvidersRequest.ok) {
        setWatchProviders(sortWatchProviders(watchProviders.results));
      }
    })();
  }, []);

  const chooseCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    setChoosenCountry(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={styles.watchSelector}>
      <div className={styles.countrySelector}>
        <label htmlFor="country">Select country</label>
        <select id="country" onChange={chooseCountry} defaultValue="default">
          <option disabled value={"default"}>
            Select country
          </option>
          {Object.keys(watchProviders).map((country) => (
            <option key={country} value={country}>
              {translateCountryCode(country) ?? "onknown"}
            </option>
          ))}
        </select>
        <small>
          Data provided by <a href="https://justwatch.com">JustWatch</a>
        </small>
      </div>
      {choosenCountry && (
        <div className={styles.platforms}>
          {watchProviders[choosenCountry].flatrate && (
            <div className={styles.watchOption}>
              <p>Stream</p>
              <div className={styles.platformList}>
                {watchProviders[choosenCountry].flatrate.map((provider) => (
                  <div className={styles.provider} key={provider.provider_id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {watchProviders[choosenCountry].rent && (
            <div className={styles.watchOption}>
              <p>Rent</p>
              <div className={styles.platformList}>
                {watchProviders[choosenCountry].rent.map((provider) => (
                  <div className={styles.provider} key={provider.provider_id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {watchProviders[choosenCountry].buy && (
            <div className={styles.watchOption}>
              <p>Buy</p>
              <div className={styles.platformList}>
                {watchProviders[choosenCountry].buy.map((provider) => (
                  <div className={styles.provider} key={provider.provider_id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PlatformSelect;
