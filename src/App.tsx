import * as React from 'react';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ServiceEdit from './components/ServiceEdit';
import ServiceList from './components/ServiceList';

export default function App(): React.ReactElement {
  const [net, setNet] = useState<boolean>(true)

  useEffect(() => {
    console.log(navigator);

    setInterval(() => {
      if (navigator.onLine) {
        console.log('online');
        setNet(true)
      } else {
        console.log('offline');
        setNet(false)
      }
    }, 2 * 1000)

  }, [navigator.onLine])

  if (!net) {
    return <div>Internet is offline!!!</div>
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/services'}/>}/>
        <Route path='/edit' element={<ServiceEdit />} />
        <Route path='/services' element={<ServiceList />}/>
      </Routes>
    </>
  );
};
