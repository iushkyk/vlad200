import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IHotel} from "@/enteties/hotel/hotel.typed";


export const hotelsApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://topolechek.store/' }),
    endpoints: (builder) => ({
        getHotels: builder.query<IHotel[], void>({
            query: () => ({
                url: 'hotel/list/'
            }),
        }),
    }),
});

export const { useGetHotelsQuery } = hotelsApi;