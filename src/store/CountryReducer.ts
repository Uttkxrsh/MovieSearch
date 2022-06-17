import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChoosenCountry {
  id: string | null;
}

const initialState: ChoosenCountry = {
  id: null,
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<string | null>) => {
      state.id = action.payload;
    },
  },
});

export const { setCountry } = countrySlice.actions;
export default countrySlice.reducer;
