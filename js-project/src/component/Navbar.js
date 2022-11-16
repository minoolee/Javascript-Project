
import Logo from '../Ases/logo.png'
function App() {
 
  return (
  
        <div className='w-full flex justify-between items-center p-5 bg-red-200 text-white text-2xl'>
            <div>
                <img className='w-20' src={Logo} alt="" />
            </div>
      <menu className='w-96'>
      <ul className='hidden md:flex justify-between'>
        <li>Home</li>
        <li>Service</li>
        <li>Contact</li>
        <li>Info</li>
      </ul>
      </menu>
   
    </div>
  
  );
}

export default App;
