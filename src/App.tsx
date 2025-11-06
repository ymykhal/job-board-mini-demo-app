import './App.css';
import { Layout } from './components/Layout';
import { ThemeProvider } from './contexts/ThemeContext';
import { JobsProvider } from './contexts/JobsContext';
import { JobsArea } from './components/JobsArea';

function App() {
  return (
    <ThemeProvider>
      <JobsProvider>
        <Layout>
          <div className="space-y-6">
            <JobsArea />
          </div>
        </Layout>
      </JobsProvider>
    </ThemeProvider>
  );
}

export default App;
