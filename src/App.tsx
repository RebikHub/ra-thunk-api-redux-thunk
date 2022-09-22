import * as React from 'react';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ServiceEdit from './components/ServiceEdit';
import ServiceList from './components/ServiceList';

function App(): React.ReactElement {

  // const onOnline = window.addEventListener('online', (ev) => {
  //   console.log('online');
  // });

  // const onOffline = window.addEventListener('offline', (ev) => {
  //   console.log('online');
  // });

  useEffect(() => {
    console.log(navigator);
    if (navigator.onLine) {
      console.log('online');
    } else {
      console.log('offline');
    }
  }, [])

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

export default App;
