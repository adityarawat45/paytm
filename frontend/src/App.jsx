import {SignUp} from "./pages/signup";
import {SignIn} from "./pages/signin";
import {SendMoney} from "./pages/sendmoney";
import {Dashboard} from "./pages/dashboard";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
<BrowserRouter>
 <Routes>
  <Route  path="/signup" element={<SignUp></SignUp>}> </Route>
  <Route  path="/sendmoney" element={<SendMoney></SendMoney>}> </Route>
  <Route  path="/signin" element={<SignIn></SignIn>}></Route>
  <Route  path="/dashboard" element={ <Dashboard></Dashboard>}></Route>
 </Routes>
</BrowserRouter>
  )
}

export default App
