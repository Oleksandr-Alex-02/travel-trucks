
import { Camper } from '@/lib/api';

type Props = {
    camper: Camper;
};

const CamperCard = ({ camper }: Props) => {
    console.log(camper.gallery)
    console.log(camper.reviews)

    return (
        <section>
            <div>
                <h2>{camper.name}</h2>
                <div>
                    <ul>
                        <li>{camper.rating}</li>
                        <li>{camper.location}</li>
                    </ul>
                    <p>{camper.price}</p>
                </div>
            </div>

            <div>
                {/* <img src="GALLERY_THUMB_URL_1" alt="Skyline Traveler" />
                <img src="GALLERY_THUMB_URL_2" alt="Skyline Traveler" /> */}
            </div>

            <p>
                {camper.description}
            </p>

            {/* <h3>Equipment</h3> */}
            <div>
                <ul>
                    <li>Transmission: {camper.transmission} </li>
                    <li>AC: {camper.AC}</li>
                    <li>TV: {camper.TV}</li>
                    <li>Engine: {camper.engine}</li>
                    <li>bathroom: {camper.bathroom}</li>
                    <li>kitchen: {camper.kitchen}</li>
                    <li>radio: {camper.radio}</li>
                    <li>refrigerator: {camper.refrigerator}</li>
                    <li>microwave: {camper.microwave}</li>
                    <li>gas: {camper.gas}</li>
                    <li>water: {camper.water}</li>
                </ul>

                <div>
                    <h3>Vehicle details</h3>
                    <ul>
                        <li>Form: {camper.form} </li>
                        <li>Length: {camper.length}</li>
                        <li>Width: {camper.width}</li>
                        <li>Height: {camper.height}</li>
                        <li>Tank: {camper.tank}</li>
                        <li>Consumption: {camper.consumption}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default CamperCard;