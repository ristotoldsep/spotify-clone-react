import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/*
Boilerplate rapidAPI request

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ed97893857mshc06ddd2c3a44ddap1d6cbcjsn99b8d791e3ea",
    "X-RapidAPI-Host": "",
  },
};

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err)); */

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'ed97893857mshc06ddd2c3a44ddap1d6cbcjsn99b8d791e3ea',
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;
