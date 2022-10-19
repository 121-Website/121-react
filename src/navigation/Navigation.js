import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Project from '../views/Project';
import AnimatedCursor from 'react-animated-cursor';
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
            <AnimatedCursor
                innerSize={20}
                outerSize={28}
                color='200, 200, 200'
                outerAlpha={0.1}
                innerScale={0.5}
                outerScale={3}
                outerStyle={{
                    mixBlendMode: 'difference'
                }}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    'video',
                    '.link'
                ]}
            />
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