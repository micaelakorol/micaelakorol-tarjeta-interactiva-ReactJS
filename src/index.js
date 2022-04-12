import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Card from './components/Card';
import CardTwo from './components/CardTwo';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
<BrowserRouter>
<Routes>
<Route path='/' element={<App />} />
<Route path='/card' element={<Card />} />
<Route path='/cardtwo' element={<CardTwo />} />
</Routes>
</BrowserRouter>


</>)
;