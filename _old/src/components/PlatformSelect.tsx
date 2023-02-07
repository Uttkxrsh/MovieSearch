import { ChangeEvent, useEffect, useState } from "react";
import useAppDispatch from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";
import { setCountry } from "../store/CountryReducer";
import styles from "../style/PlatformSelect.module.scss";
import WatchProviderObject from "../types/WatchProviderObject";
import sortWatchProviders from "../utils/sortWatchProviders";
import translateCountryCode from "../utils/translateCountryCode";
import urlBuilder from "../utils/urlBuilder";
import WatchProvider from "./WatchProvider";

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
  const [loading, setLoading] = useState<boolean>(false);
  const savedCountry = useAppSelector((state) => state.country.id);
  const ipLocation = useAppSelector((state) => state.country.ipLocation);
  const dispatch = useAppDispatch();

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

      if (savedCountry && watchProviders.results[savedCountry]) {
        setChoosenCountry(savedCountry);
      } else if (ipLocation && watchProviders.results[ipLocation]) {
        setChoosenCountry(ipLocation);
      }
    })();

    setLoading(false);
  }, []);

  const chooseCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    setChoosenCountry(e.target.value);
    dispatch(setCountry(e.target.value));
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className={styles.watchSelector}>
      <div className={styles.countrySelector}>
        <label htmlFor="country">Select country</label>
        <select
          id="country"
          onChange={chooseCountry}
          value={choosenCountry ?? "default"}
        >
          <option disabled value={"default"}>
            Select country
          </option>
          {Object.keys(watchProviders).map((country) => (
            <option key={country} value={country}>
              {translateCountryCode(country) ?? "unknown"}
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
                  <WatchProvider
                    key={provider.provider_id}
                    name={provider.provider_name}
                    logo={provider.logo_path}
                  />
                ))}
              </div>
            </div>
          )}
          {watchProviders[choosenCountry].rent && (
            <div className={styles.watchOption}>
              <p>Rent</p>
              <div className={styles.platformList}>
                {watchProviders[choosenCountry].rent.map((provider) => (
                  <WatchProvider
                    key={provider.provider_id}
                    name={provider.provider_name}
                    logo={provider.logo_path}
                  />
                ))}
              </div>
            </div>
          )}
          {watchProviders[choosenCountry].buy && (
            <div className={styles.watchOption}>
              <p>Buy</p>
              <div className={styles.platformList}>
                {watchProviders[choosenCountry].buy.map((provider) => (
                  <WatchProvider
                    key={provider.provider_id}
                    name={provider.provider_name}
                    logo={provider.logo_path}
                  />
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
