import { useContext } from 'react';
import { UnitContext } from '../context/UnitContext';

export default function ToggleUnit() {

    const { Unit, toggleUnit } = useContext(UnitContext);

    return (
        <button className='bg-white rounded-full p-2 mt-4 text-lg shadow-md hover:bg-gray-200 transition-all duration-300 cursor-pointer active:scale-95' onClick={toggleUnit}>
            Switch Unit: {Unit === 'imperial' ? '°F' : '°C'}
        </button>
    );

}