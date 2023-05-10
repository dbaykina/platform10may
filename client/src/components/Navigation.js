//import { useNavigate } from 'react-router-dom';

const Navigation = () => {

 //   const navigate = useNavigate()

const logOut = () => {
    console.log('i am out .')
}

	return (
		
		<nav className='nav'>
            <button>
                <img src='' alt='menu'/>
            </button>
            <div className="logo-container" >
                <img src="../assets/header-logo.png" alt="logo"/>
            </div>
            <button onClick={logOut}>Выйти</button>
            
        </nav>
	);
};

export default Navigation;


