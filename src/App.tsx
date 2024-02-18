import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContainerPage from './pages/ContainerPage';
import MainPage from './pages/MainPage/MainPage';
import SkillsSection from './pages/MainPage/sections/SkillsSection';
import WorkSection from './pages/MainPage/sections/WorkSection';
import ContactSection from './pages/MainPage/sections/ContactSection';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContainerPage />}>
          <Route index element={<MainPage />} />
          <Route path='*' element={<NotFoundPage />} />
          {/* <Route path='/skills' element={<SkillsSection />} />
          <Route path='/work' element={<WorkSection />} />
          <Route path='/contact' element={<ContactSection />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
