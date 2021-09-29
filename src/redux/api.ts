import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constants } from '../common';

export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${constants.API_URL}autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1` }),
    endpoints: (builder) => ({
        itemsByName: builder.query({ query: (name) => `query=${name}`})
    })
})

export const { useItemsByNameQuery }  = searchApi;

