import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TableOfChapters from './components/pages/TableOfChapters';
import AddChapterForm from './components/pages/AddChapterForm';
import EditChapterForm from './components/pages/EditChapterForm'
import Navigation from './components/Navigation'


const App = () => {
 

  return (
    

    <>
    <Navigation/>
    <BrowserRouter>
    <Routes>
           
   {/* <Route path="/login" element={<LoginForm/>} />*/}
    <Route path="/admin/sections/" element={<TableOfChapters/>}/>
    <Route path="/admin/add/section/" element={<AddChapterForm/>}/>
    <Route path="/admin/edit/section/:id" element={<EditChapterForm/>} />
  
      </Routes>  
    </BrowserRouter>
    </>
     
  )
 
}

export default App;


