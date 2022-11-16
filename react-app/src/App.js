import './App.css';
import NavBar from './NavBar';

import HeaderImage from './images/header_image.png'
import Landfill from './images/landfill.jpeg'

import Hemp from './images/hemp.jpg';
import Sheet from './images/sheet.JPG';
import Peanuts from './images/peanuts.JPG';

import Arrow from './images/arrow.svg';
import Tractor from './images/farm-tractor-icon.svg';
import Customize from './images/customize.svg';
import Climate from './images/climate-icon.svg';
import Package from './images/package.svg';

function App() {
  return (
    <div>
      <NavBar />
      <div className="App-Container" style={{ backgroundImage: `url(${HeaderImage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
        <div className='Header-Spacer'>
        </div>
        <div className="Header">
          <h1>We're not just protecting your packages. Every product we produce takes harmful CO2 out of the atmosphere.</h1>
          <button>LEARN MORE</button>
        </div>
      </div>

      {/* Contact */}
      <h1 className='Contact'>Let us send you a sample!<br/>Contact <span className='Accent-Color'>packaging@pureshenandoah.com</span> to speak directly with our team.</h1>


      {/* Icons */}
      <h1 className='Icon-Header'>One Product, One Ingredient</h1>
      <div className='Icon-Container'>
        <img className='Icon' src={Hemp} width="200vh" alt="Hemp plant"/>
        <img className='Icon' src={Arrow} width="100vh" alt="Right Arrow"/>
        <img className='Icon' src={Sheet} width="200vh" alt="Sheet of hemp fiber"/>
        <img className='Icon' src={Arrow} width="100vh" alt="Right Arrow"/>
        <img className='Icon' src={Peanuts} width="200vh" alt="Hemp packing peanuts"/>
      </div>
      <p className='Icon-Body'>Hemp fiber, often used for fabrics, is the fundamental ingredient in our packaging. Once the hemp plant has grown tall enough to harvest, it is collected and processed, and the hemp fibers are separated from the hemp hurd. Once the fibers are isolated, we compress them into the sheets that form the starting point of our customized packaging. From there, decide how you would like it cut to best fit your business, or opt for a traditional packing peanut equivalent.</p>

      
      {/* First two cards. */}
      <div className='Section-Container'>
        <div className="Section-Element">
          <img src={Customize} width={100} alt="Customize"/>
          <div>
            <h2 className="Section-Header">Customize your solution</h2>
            <p className="Section-Paragraph">Let us tailor your solution to best fit your business needs. Our packaging can be customized down to the details to ensure that Pure Shenandoah adds as much value as possible to your organization. Our team is ready to answer any questions about how our packaging can best integrate with your supply chain. Reach out to <span className='Accent-Color'>packaging@pureshenandoah.com</span> to learn more!</p>
          </div>
        </div>
        <div className="Section-Element">
          <img src={Tractor} width={150} alt="Tractor"/>
          <div>
            <h2 className="Section-Header">Support farming communities</h2>
            <p className="Section-Paragraph">From the outset, the goal of developing industrial hemp products was to get as many acres of local farmland planted as possible. Pure Shenandoah has always had a close relationship with our growers. Our company started alongside the 2018 farm bill, which hoped to reignite American agriculture, and remains committed to supporting the communities that we owe so much of our success to.</p>
          </div>  
        </div>
      </div>
      

      {/* Second two cards. */}
      <div className='Section-Container'>
        <div className="Section-Element">
          <img src={Climate} width="100vh" alt="Customize"/>
          <div>
            <h2 className="Section-Header">Carbon negative footprint</h2>
            <p className="Section-Paragraph">Pure Shenandoah is committed to doing anything and everything we can to protect and cherish the environment. Hemp, the main ingredient in our packaging, absorbs %162* of its weight in CO2 as it grows to maturity. That means that every ton of hemp grown absorbs 1.62 tones of CO2 from the atmosphere. Pure Shenandoah has already absorbed over 300 tones of CO2 over the course of our operations.
            <br/><br/>*https://hempfoundation.net/how-hemp-can-reduce-carbon-dioxide-in-the-air/</p>
          </div>
        </div>
        <div className="Section-Element">
          <img src={Package} width="100vh" alt="Tractor"/>
          <div>
            <h2 className="Section-Header">Keeping it simple</h2>
            <p className="Section-Paragraph">Our packaging begins as a hemp seed, and apart from water, only contains what is naturally grown here in the Shenandoah valley. We add no chemicals or synthetic materials so you can rest assured that your product is surrounded, protected, and insulated with 100% natural materials. Our process is likewise extremely streamlined and simple. This simplicity is the reason why we are so adaptable to the customer’s needs. Contact us today and see how our packaging can be adapted to your product.</p>
          </div>  
        </div>
      </div>

      {/* Quote. */}
      <div className='Quote-Container' style={{ backgroundImage: `url(${Landfill})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
        <h1><span className='Quote-Main'>"Styrofoam takes 500 years to decompose; it cannot be recycled”</span><span className='Quote-Attribution'><br/>-Colgate University</span></h1>
      </div>
    </div>
  );
}

export default App;
