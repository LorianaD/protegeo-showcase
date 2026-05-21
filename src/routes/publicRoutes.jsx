import { Route, Routes } from "react-router";
import { About, Contact, Helps, Home, Measure, Steps, Templates } from "../pages/public";
import { MainLayout } from "../components";

function PublicRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route index element={<Home />}/>
                <Route path='measure' element={<Measure/>}/>
                <Route path='helps' element={<Helps />}/>
                <Route path='templates' element={<Templates />}/>
                <Route path='steps' element={<Steps />}/>
                <Route path='contact' element={<Contact />}/>
                <Route path='about' element={<About />}/>
            </Route>
        </Routes>
    )
}

export default PublicRoutes;