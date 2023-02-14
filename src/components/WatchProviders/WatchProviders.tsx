"use client";

import translateCountryCode from "@/utils/translateCountryCode";
import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { IProps } from "./WatchProviders.types";
import WatchProvider from "@/components/WatchProvider";
import * as S from "./WatchProviders.style";
import CountryContext from "@/context/CountryContext";
import useCountry from "@/hooks/useCountry";

const WatchProviders: FC<IProps> = ({ providers }) => {
  const { results } = providers;
  const country = useCountry();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(
    country
  );

  const selectCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <S.Container>
      <S.CountrySelector>
        <label htmlFor="country">Select country</label>
        <select
          id="country"
          onChange={selectCountry}
          value={selectedCountry ?? "default"}
        >
          <option disabled value={"default"}>
            Select country
          </option>
          {Object.keys(results).map((country) => (
            <option key={country} value={country}>
              {translateCountryCode(country) ?? "unknown"}
            </option>
          ))}
        </select>
        <small>
          Data provided by <a href="https://justwatch.com">JustWatch</a>
        </small>
      </S.CountrySelector>
      {selectedCountry && (
        <S.Platforms>
          {results[selectedCountry].flatrate && (
            <S.WatchOption>
              <p>Stream</p>
              <S.PlatformList>
                {results[selectedCountry].flatrate.map((provider) => (
                  <WatchProvider
                    key={provider.provider_id}
                    name={provider.provider_name}
                    logo={provider.logo_path}
                  />
                ))}
              </S.PlatformList>
            </S.WatchOption>
          )}
          {results[selectedCountry].rent && (
            <S.WatchOption>
              <p>Rent</p>
              <S.PlatformList>
                {results[selectedCountry].rent.map((provider) => (
                  <WatchProvider
                    key={provider.provider_id}
                    name={provider.provider_name}
                    logo={provider.logo_path}
                  />
                ))}
              </S.PlatformList>
            </S.WatchOption>
          )}
          {results[selectedCountry].buy && (
            <S.WatchOption>
              <p>Buy</p>
              <S.PlatformList>
                {results[selectedCountry].buy.map((provider) => (
                  <WatchProvider
                    key={provider.provider_id}
                    name={provider.provider_name}
                    logo={provider.logo_path}
                  />
                ))}
              </S.PlatformList>
            </S.WatchOption>
          )}
        </S.Platforms>
      )}
    </S.Container>
  );
};

export default WatchProviders;
