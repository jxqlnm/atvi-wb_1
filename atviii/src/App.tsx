import {Outlet} from 'react-router-dom';
import Header from './components/NavBar';

function App() {
    return (
        <div className='App'>
            <Header/>
            <div className='min-vh-100'>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
