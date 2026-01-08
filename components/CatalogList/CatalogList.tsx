import { Camper } from "@/lib/api";
import CatalogItem from "../CatalogItem/CatalogItem";

type Props = {
    campers: Camper[]
};

const CatalogList = ({ campers }: Props) => {
    if (!Array.isArray(campers)) {
        console.error("Очікував масив, отримав:", campers);
        return <p>Помилка: campers не масив</p>;
    }

    if (campers.length === 0) {
        return <p>Немає даних для відображення</p>;
    }

    return (
        <ul>
            {campers.map((camper) => (
                <CatalogItem key={camper.id} item={camper} />
            ))}
        </ul>
    );
};

export default CatalogList;