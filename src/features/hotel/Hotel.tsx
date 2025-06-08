import React, {FC} from "react";
import Image from "next/image";

interface IProps {
    img: string
    city: string
}

export const Hotel:FC<IProps> = ({img, city}): React.ReactElement => {
    return (
        <div className={"flex flex-col"}>
            <span className={"rounded-8"}>
            <Image src={img} alt={`Hotel in ${city}`}  width={282} height={282}/>
            </span>
            <span className={"font-bold mt-3"}>{city}</span>
            <span>от 1200$</span>
        </div>
    )
}