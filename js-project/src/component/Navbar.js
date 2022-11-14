
import Logo from '../Ases/logo.png'
function App() {
 
  return (
    <div className="App">
        <div className='w-full md:flex justify-between p-4 bg-red-200 text-white text-2xl'>
            <div>
                <img className='w-20' src={Logo} alt="" />
            </div>
    <menu className='w-96' >
      <ul className='flex justify-around items-center p-4'>
        <li>Home</li>
        <li>Service</li>
        <li>Contact</li>
        <li>Info</li>
      </ul>
    </menu>
   
    </div>
    </div>
  );
}

export default App;
