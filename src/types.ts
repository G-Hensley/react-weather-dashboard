type WeatherData = {
    main: {
        temp: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    name?: string;
    weather: {
        main: string;
        description: string;
    }[];
}

type UnitContextType = {
    Unit: 'metric' | 'imperial';
    toggleUnit: () => void;
}

type Location = {
    coords: {
        latitude: number;
        longitude: number;
    }
}

export type { WeatherData, UnitContextType, Location };