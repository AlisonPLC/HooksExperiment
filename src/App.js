import React, {useState, useEffect} from 'react';

export default function App(){
  const [location, setLocation] = useState({});

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionRecieved)

    return () => navigator.geolocation.clearWatch(watchId)
  },[]);

  function handlePositionRecieved({coords}){
    
    const {latitude,longitude} = coords;
    setLocation({latitude,longitude});
  }

  return (
    <>{/* isso aqui é um fragment, basicamente uma div sem ser div */}
      Latitude: {location.latitude} <br/>
      Longitude: {location.longitude}<br/>
    </>
  );
}