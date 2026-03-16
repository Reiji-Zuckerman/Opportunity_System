import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import DealList from './pages/DealList';
import DealDetail from './pages/DealDetail';
import TaskList from './pages/TaskList';
import CompanyList from './pages/CompanyList';
import CompanyDetail from './pages/CompanyDetail';
import MyPage from './pages/MyPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/deals" replace />} />
          <Route path="/deals" element={<DealList />} />
          <Route path="/deals/:id" element={<DealDetail />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:id" element={<CompanyDetail />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
