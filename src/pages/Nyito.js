import { Link } from 'react-router-dom';
import '../assets/nyito.css';
import { Menu } from '../components/Menu';
const Nyito = () => {



    return (
        <>
        <Menu />
        <h1>Formula 1</h1>       
        <div className='row text-center w-100 kozepes'>            
            <div className='col-6'>
            <Link className="btn btn-light bw" to="/lista">Lista</Link>
            </div>
            <div className='col-6'>
            <Link type="button" className="btn btn-light bw" to="/felvesz">Hozzáadás</Link>                
            </div>
        </div>
        </>
    )
  };
  
  export default Nyito;