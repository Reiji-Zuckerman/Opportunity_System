import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DataProvider } from './contexts/DataContext';
import Layout from './components/Layout';
import DealList from './pages/DealList';
import DealDetail from './pages/DealDetail';
import TaskList from './pages/TaskList';
import JobList from './pages/JobList';
import JobDetail from './pages/JobDetail';
import CompanyList from './pages/CompanyList';
import CompanyDetail from './pages/CompanyDetail';

export default function App() {
  return (
    <DataProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/deals" replace />} />
            <Route path="/deals" element={<DealList />} />
            <Route path="/deals/:id" element={<DealDetail />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/companies" element={<CompanyList />} />
            <Route path="/companies/:id" element={<CompanyDetail />} />
          </Route>
        </Routes>
      </HashRouter>
    </DataProvider>
  );
}
