import {SignUp} from "../src/pages/signup";
import {SignIn} from "../src/pages/signin";
import {SendMoney} from "../src/pages/sendmoney";
import { Dashboard } from "../src/pages/dashboard";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() { 
  return (
<BrowserRouter>
 <Routes>
  <Route path="/signup" element={<SignUp/>}> </Route>
 <Route  path="/sendmoney" element={<SendMoney/>}> </Route>
  <Route path="/signin" element={<SignIn/>}></Route>
  <Route path="/dashboard" element={ <Dashboard/>}></Route> 
 </Routes>
</BrowserRouter>
  )
}

export default App
