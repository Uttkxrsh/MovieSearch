import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChoosenCountry {
  id: string | null;
  ipLocation: string | null;
}

const initialState: ChoosenCountry = {
  id: null,
  ipLocation: null,
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<string | null>) => {
      state.id = action.payload;
    },
    setIpLocation: (state, action: PayloadAction<string | null>) => {
      state.ipLocation = action.payload;
    },
  },
});

export const { setCountry, setIpLocation } = countrySlice.actions;
export default countrySlice.reducer;
