import {Landing,Error,Dashboard,Register} from "./pages";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
