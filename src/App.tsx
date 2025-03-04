import { UnitProvider } from './context/UnitContext';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';
import { getLocation } from './util/GetLocation';
import { useState, useEffect } from 'react';
import { Location } from './types';
import ToggleUnit from './components/ToggleUnit';
export default function App() {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    getLocation().then(setLocation);
  }, []);

  if (!location) return (
    <div className='flex justify-center items-center h-screen text-5xl font-bold'>
      <p>Loading...</p>
    </div>
  );

  return (
    <UnitProvider>
      <main className='flex flex-col gap-8 items-center max-h-screen'>
        <header className='flex flex-col items-center'>
          <h1 className='text-5xl font-bold'>Weather Dashboard</h1>
          <hr className='w-full border-t-2 border-black mt-4' />
          <ToggleUnit />
        </header>
        <WeatherDisplay
          lat={location.coords.latitude}
          lon={location.coords.longitude}
        />
      </main>
    </UnitProvider>
  );
}
