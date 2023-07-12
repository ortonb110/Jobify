import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Error, Register, ProtectedRoute} from './pages/index';
import { SharedLayout, Profile, AllJobs, Stats, AddJob } from './pages/Dashboard/index.js'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute>
          <SharedLayout/>
        </ProtectedRoute>}>
          <Route index element={<Stats/>}/>
          <Route  path="profile" element={<Profile/>}/>
          <Route  path="all-jobs" element={<AllJobs/>}/>
          <Route  path="add-job" element={<AddJob/>}/>
        </Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
