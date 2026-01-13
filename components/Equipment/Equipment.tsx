
import { Camper } from '@/lib/api';

type EquipmentProps = {
    camper: Camper;
}

const Equipment = ({ camper }: EquipmentProps) => {
    const { transmission,
        AC,
        TV,
        engine,
        bathroom,
        kitchen,
        radio,
        refrigerator,
        microwave,
        gas,
        water } = camper;
    return (
        <div>
            <ul>
                {transmission && <li> <svg width="20" height="20"> <use href="/sprite.svg#diagram" /></svg>{transmission}</li>}
                {AC && <li> <svg width="20" height="20"><use href="/sprite.svg#ac" /></svg>AC</li>}
                {TV && <li> <svg width="20" height="20"> <use href="/sprite.svg#tv" /></svg>TV</li>}
                {engine && <li> <svg width="20" height="20"><use href="/sprite.svg#petrol" /></svg>{engine}</li>}
                {bathroom && <li> <svg width="20" height="20"><use href="/sprite.svg#" /></svg>bathroom</li>}
                {kitchen && <li> <svg width="20" height="20"><use href="/sprite.svg#" /></svg>kitchen</li>}
                {radio && <li> <svg width="20" height="20"><use href="/sprite.svg#radios" /></svg>radio</li>}
                {refrigerator && <li> <svg width="20" height="20"><use href="/sprite.svg#" /></svg>refrigerator</li>}
                {microwave && <li> <svg width="20" height="20"><use href="/sprite.svg#" /></svg>microwave</li>}
                {gas && <li> <svg width="20" height="20"><use href="/sprite.svg#" /></svg>gas</li>}
                {water && <li> <svg width="20" height="20"> <use href="/sprite.svg#water" /></svg>water</li>}
            </ul>
        </div >
    )
};

export default Equipment;