
import CamperCard from '@/components/CamperCard/CamperCard';
import { getIdCamper } from '@/lib/api'

type Props = {
    params: { id: string };
};

export default async function CamperDetails({ params }: Props) {
    const { id } = await params;
    console.log("id:", id);

    if (!id) {
        return <section><h1>Camper ID не передано</h1></section>;
    }

    const camper = await getIdCamper(id);
    console.log("camper", camper.name);

    return (
        <section>
            <CamperCard camper={camper} />
        </section>
    )
};