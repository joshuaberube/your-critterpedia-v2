import Image from "next/image"
const Critter = ({critter: {icon_uri, id, name}}) => {
    return (
        <div>
            <Image 
                src={icon_uri}
                alt={`${name["name-USen"]}`}
                width={50}
                height={50}
                priority
            />
            {name["name-USen"]}
        </div>
    )
}

export default Critter