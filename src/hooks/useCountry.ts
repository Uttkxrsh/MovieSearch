"use client";

import { useEffect, useState } from "react";

const useCountry = (): string | null => {
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const request = await fetch(`/api/getCountry?tz=${timezone}`);

      if (request.status === 200) {
        const result = await request.text();

        setCountry(result);
      }
    })();
  }, []);

  return country;
};

export default useCountry;
