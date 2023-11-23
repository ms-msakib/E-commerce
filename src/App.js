import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./components/sign-in/sign-in.component";



const Shop = () => {
  return <h1>i am shop page</h1>;
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='Sign-In' element={<SignIn />} />
      </Route>
    </Routes>
  )
}
export default App;
