import { BrowserRouter, Routes, Route } from "react-router-dom";
import DescCurso from "./Pages/DescCurso";


function RoutesApp() {

    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/desccurso" element={<DescCurso />} />
          </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;