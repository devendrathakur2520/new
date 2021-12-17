import {React} from 'react'
import { Content } from './components/layout/Content';
import {Header} from './components/layout/Header';
import { ProjectsProvider } from './context/projects-context';
import { SelectedProjectProvider } from './context/selected-project-context';

export const App=()=>  (
    <div className="App">
      <SelectedProjectProvider>
        <ProjectsProvider>
      <Header />
      <Content />
      </ProjectsProvider>
      </SelectedProjectProvider>
    </div>
  );


