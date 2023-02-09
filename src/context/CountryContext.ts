import { createContext } from "react";

const CountryContext = createContext<string | null>(null);

export default CountryContext;
