import { createSlice } from '@reduxjs/toolkit'
import { FilterSatelliteState } from '../../models/models';
const initialState: FilterSatelliteState = {
    year: undefined,
    landed: undefined,
    launched: undefined
};
export const filterSatelliteSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        year: (state: FilterSatelliteState, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.year = action.payload;
        },
        landed: (state: FilterSatelliteState, action) => {
            state.landed = action.payload;
        },
        launched: (state: FilterSatelliteState, action) => {
            state.launched = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { launched, landed, year } = filterSatelliteSlice.actions;

export default filterSatelliteSlice.reducer;