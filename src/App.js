import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import AboutScreen from './screens/AboutScreen';
import ProductScreen from './screens/ProductScreen';
import EwasteManagement from './screens/EwasteManagement';
import ScrollTop from './components/ScrollTop'
import { TbMoodBoy } from 'react-icons/tb';

import { MdCall } from 'react-icons/md';







function App() {



  return (
    <div className="bg-black  ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />}>

          </Route>

          <Route path="/contact" element={<ContactScreen />}>

          </Route>


          <Route path="/about" element={<AboutScreen />}>

          </Route>


          <Route path="/emanagement" element={<EwasteManagement />}>

          </Route>


          <Route path="/product" element={<ProductScreen />}>

          </Route>
        </Routes>

        <ScrollTop />
      </BrowserRouter>
      <div className='flex border-t-2 items-center justify-center py-3 border-yellow-600'>
        <TbMoodBoy className='mr-2 text-yellow-600 w-6 h-6' />
        <p className='text-sm'>web Powered by PC  +919820795602</p>

      </div>
      <a href="tel://+919004679268">
        <MdCall className='fixed bottom-14 right-2 rounded-full  bg-white w-8 h-8 text-black p-2' />
      </a>
    </div>
  );
}

export default App;