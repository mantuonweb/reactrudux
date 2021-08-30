import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filterSatelliteSlice from '../features/filters/filter.slice';
import satellitesSlice from '../features/home/satellite/satellite.slice';

export const store = configureStore({
  reducer: {
    filters: filterSatelliteSlice,
    satellites: satellitesSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
