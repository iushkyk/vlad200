export interface IHotel {
    "name": string,
    "city_id": number,
    "description": string,
    "is_published": boolean,
    "id": number,
    "owner_id": number,
    "city_name": string,
    "photos": [
    {
        "id": number,
        "url": string,
        "is_cover": boolean,
        "hotel_id": number
    }
]
}