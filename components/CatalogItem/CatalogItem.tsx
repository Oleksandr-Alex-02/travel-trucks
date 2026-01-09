
import Link from "next/link";
import { Camper } from "@/lib/api";

type Props = {
    item: Camper;
}

const CatalogItem = ({ item }: Props) => {

    return (
        <li>
            <Link href={`/catalog/${item.id}`}>{item.name}</Link>
        </li>
    )
}

export default CatalogItem;