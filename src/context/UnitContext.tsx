import { createContext, useState } from 'react';
import { UnitContextType } from '../types';

const UnitContext = createContext<UnitContextType>({
    Unit: 'imperial',
    toggleUnit: () => {},
})

const UnitProvider = ({children}: {children: React.ReactNode}) => {
    const [Unit, setUnit] = useState<UnitContextType['Unit']>('imperial');

    const toggleUnit = () => {
        setUnit(prev => prev === 'imperial' ? 'metric' : 'imperial');
    }

    return (
        <UnitContext.Provider value={{Unit, toggleUnit}}>
            {children}
        </UnitContext.Provider>
    )
}

export { UnitContext, UnitProvider };
