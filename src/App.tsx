import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContainerPage from './pages/ContainerPage';
import MainPage from './pages/MainPage/MainPage';
import WorkPage from './pages/WorkPage/WorkPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage/ProjectDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContainerPage />}>
          <Route index element={<MainPage />} />
          <Route path='/work' element={<WorkPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/project/:id' element={<ProjectDetailsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
