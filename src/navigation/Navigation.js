import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Project from '../views/Project';
import Trabajo from '../views/Trabajo';
import Diferencia from '../views/Diferencia';
import Hablemos from '../views/Hablemos';
import Soy121 from '../views/Soy121';
import WhatsApp from '../components/WhatsApp';
import NavigationTop from '../components/NavigationTop';
import Home from "../views/Home";
import Transition from '../components/Transition';
import ScrollToTop from '../hooks/ScrollToTop';

export default function Navigation() {
    return (
        <>
            <WhatsApp />
            <Router>
                <Transition />
                <NavigationTop />
                <ScrollToTop />
                <Routes>
                    <Route path='/*' element={<Home />} />
                    <Route path='/trabajo/' element={<Trabajo />} />
                    <Route path='/diferencia/' element={<Diferencia />} />
                    <Route path='/hablemos/' element={<Hablemos />} />
                    <Route path='/soy121/' element={<Soy121 />} />
                    <Route path='/project/' element={<Project />} />
                    <Route path='/project/:id' element={<Project />} />
                </Routes>
            </Router>
        </>
    );
}