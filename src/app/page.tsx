"use client"
import {useGetHotelsQuery} from "@/enteties/hotel/hotel.api";
import {Hotel} from "@/features/hotel/Hotel";

export default function Home() {

    const {data} = useGetHotelsQuery()
    console.log("data", data)

    return (
        <div>
            {data?.map(hotel => (
                <Hotel key={hotel.id} img={hotel.photos[0].url} city={hotel.city_name} />
            ))}
        </div>
    );
}
