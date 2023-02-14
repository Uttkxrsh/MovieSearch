import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import urlBuilder from "@/utils/urlBuilder";

const useCountry = (): string | null => {
  const [country, setCountry] = useState<string | null>(null);

  const getCountry = async () => {
    const request = await fetch(
      urlBuilder("/api/getCountry", {
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
      })
    );

    if (request.ok) {
      const response = await request.text();

      if (response.length === 2) {
        setCountry(response);
        Cookies.set("wtw_country", response);
      }
    }
  };

  useEffect(() => {
    const savedCountry = Cookies.get("wtw_country");

    if (savedCountry && savedCountry.length === 2) {
      setCountry(savedCountry);
    } else {
      (async () => {
        getCountry();
      })();
    }
  }, []);

  return country;
};

export default useCountry;
