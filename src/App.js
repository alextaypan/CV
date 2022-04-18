import Container from './components/Container';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import contacts from './data/contacts.json';
import techSkills from './data/techSkills.json';
import softSkills from './data/softSkills.json';
import commandProjects from './data/commandProjects.json';
import ownProjects from './data/ownProjects.json';
import experience from './data/experience.json';
import education from './data/education.json';

function App() {
  return (
    <Container>
      <Sidebar
        contacts={contacts}
        techSkills={techSkills}
        softSkills={softSkills}
      />
      <AboutMe
        commandProjects={commandProjects}
        ownProjects={ownProjects}
        experience={experience}
        education={education}
      />
    </Container>
  );
}

export default App;
