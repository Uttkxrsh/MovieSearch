import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Movie from "./pages/Movie";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import useAppSelector from "./hooks/useAppSelector";
import useAppDispatch from "./hooks/useAppDispatch";
import { setIpLocation } from "./store/CountryReducer";
import LocationRequest from "./types/LocationRequest";

function App() {
  const countryData = useAppSelector((state) => state.country);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      document.title = "Where to watch?";

      if (!countryData.ipLocation) {
        const locationRequest = await fetch("https://geolocation-db.com/json/");

        if (!locationRequest.ok) return;

        const locationData: LocationRequest = await locationRequest.json();

        dispatch(setIpLocation(locationData.country_code));
      }
    })();
  }, []);

  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Search />} path="/search/:query" />
      <Route element={<Movie />} path="/movie/:id" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
