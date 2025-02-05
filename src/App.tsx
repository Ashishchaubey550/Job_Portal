import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
// Only use one correct import for carousel styles
import '@mantine/carousel/styles.css';

import Header from './Header/Header';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobPage from './Pages/FindJobPage';
import Footer from './Foot/Footer';
import FindTalendtPage from './Pages/FindTalendtPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobs from './Pages/PostJobs';
import '@mantine/tiptap/styles.css';
import JobDescriptionPage from './Pages/JobDescriptionPage';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/postjobs' element={<PostJobs/>}/>
          <Route path='/jobs' element={<JobDescriptionPage/>}/>
          <Route path='talent_Profile' element={<TalentProfilePage/>}/>
          <Route path='/findtalend' element={<FindTalendtPage/>}/>
          <Route path='/findjobs' element={<FindJobPage/>} />
          <Route path='*' element={<HomePage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;