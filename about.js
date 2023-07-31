import React,{Component} from 'react';
import './style.css';
class App2 extends Component{
    render(){
        return(
            <div className="heading">
                <h1>About us</h1>
                <p className='abt'>Pothys is a chain of textile showrooms in South India. Originally they exclusively sold silk sarees, but today all types of garments are sold. The flagship store in Chennai is called Pothys' Palace.
                Pothys has established itself as house hold name in the textile industry in Tamil Nadu. Our undisputed reputation stems from our unflinching dedication to give you the highest quality, exclusive and diverse clothing options and unmatched customer service.
                Our hard work, dedication and perseverance has earned us the distinction of being voted the most preferred saree showroom in Chennai, according to SUN TV Neilson survey in the year 2002. 
                We are also the first retail showroom in Tamil Nadu to be accredited with ISO 9001 certification way back in 2003. Pothys desire to innovate and excel in silk manufacturing won us the Guinness World Record in the year 2005 for creating the worlds longest silk saree.
                </p>
                <img className='shop' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokjvegxYPMu4VHEsHik12Z3gaPwMW2iYK1g&usqp=CAU"></img>
            </div>
        );
    }
}
export default App2;