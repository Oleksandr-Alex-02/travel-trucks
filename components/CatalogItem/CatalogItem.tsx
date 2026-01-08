import { Camper } from "@/lib/api";

type Props = {
    item: Camper;
}

const CatalogItem = ({ item }: Props) => {
    console.log("CatalogItem отримав:", item);


    return (
        <li>
            <p>{item.name}</p>
        </li>
    )
}

export default CatalogItem;