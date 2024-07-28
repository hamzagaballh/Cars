import { Link } from 'react-router-dom'
import axios from "axios";
import styles from './LandingPage.module.css'
import { IoIosStar } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { useEffect, useState } from "react";
// import 'font-awesome'
export default function LandingPage() {
  const [cars, setCars] = useState([]);
  let getCars = async ()=>{
    try {
      let response = await axios.get(
        "https://freetestapi.com/api/v1/cars?limit=4"
      );
      setCars(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() =>{
    getCars();
  },[]);
  return (
    <>
    {/* <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Outlet/>
        </div>
      </div>
    </div> */}
    <header className={`${styles.headerarea}`}>
        <div className="row">
            <div className="col-12">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src="\assets\imgs\logo.png" className={`${styles.brand} navbar-brand`} alt="" />
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`${styles.navlink} nav-link`} to='#'>Become a renter</Link>
        </li>
        <li className="nav-item">
          <Link className={`${styles.navlink} nav-link`} to='#'>Rental deals</Link>
        </li>
        <li className="nav-item">
          <Link className={`${styles.navlink} nav-link`} to='#'>How it work</Link>
        </li>
        <li className={`${styles.navit} nav-item`}>
          <Link className={`${styles.navlink} nav-link`} to='#'>Why choose us</Link>
        </li>
      </ul>
      <button className={`${styles} btn btn-primary m-2`}>Sign in</button>
      <button className={`${styles} btn btn-light m-2` }>Sign up</button>
    </div>
  </div>
</nav>
            </div>
        </div>
  </header>
  <div className={styles.banaar}>
  <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className={styles.caption}>
            <h2>Find, book and rent a car <span>Easily</span> 
            </h2>
            <p>Get a car wherever and whenever you need it with your IOS and Android device.</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div style={{ backgroundImage: `url('/assets/imgs/Frame.png')`}} className={styles.rightimage}>
            <img src="\assets\imgs\cat50.png" alt=""/>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div className={styles.sec2}>
    <div className={styles.search}>
    <div className={`${styles.btnn} input-group mb-3`}>
  <span className="input-group-text">                 
      <CiLocationOn /> 
  </span>
  <input type="text" className="form-control" placeholder='search by name' aria-label="Amount (to the nearest dollar)"/>
  <button type="button" className="btn btn-primary">Search</button>
</div>
    </div>
    <button type="button" className={`${styles.btn1} btn btn-info mt-5`}>POPULAR RENTAL DEALS
    </button>
    <h1 className='mt-4'>Most popular cars rental deals</h1>
    <div className="container">
      <div className="row">
        {cars.map((item) => (
          <div className="col-md-3 mt-5">
            <div className={`${styles.card7} card`}>
  <img src="\assets\imgs\car2.png" class="card-img-top mt-3" alt="..."/>
  <div className={`${styles.cbody} card-body`}>
    <h5 className="card-title mt-3">{item.make}</h5>
    <p className="card-text">              <span className={styles.icons1}><IoIosStar /></span>
    <span className={styles.spl}>4.6</span> <span className={styles.sp2}>(1345 reviews)</span>
    </p>
    <p className="card-text">              
    <span className={styles.ficon}><MdDateRange /> </span>
    {item.year}
    </p>
    <p className="card-text">      
    <span className={styles.ficon}>
      <TbAutomaticGearbox />
      </span>
        
              {item.transmission}
    </p>
    <hr />
    <p className="card-text">              
             Price: <span className={styles.spr}> ${item.price}</span> 
    </p>
    <button type="button" className="btn btn-dark">View details <FaLongArrowAltRight />
    </button>
    </div>
</div>
          </div>
        ))}
      </div>
    </div>
    
      <Link className={`${styles.btn2} btn btn-light mt-5`} to='/CarList'>Show all vehicles <FaLongArrowAltRight />
          </Link>
   
  </div>
   <div className={styles.howitwork}>
   <button type="button" className="btn btn-info mt-5">HOW IT WORK</button>
    <h1 className='mt-3'>Most popular cars rental deals</h1>
    <div className={`${styles.cards} mt-4`}>
      <div className="container">
        <div className="row">
          <div className={`${styles.card1} col-md-4`}>
            <img src="\assets\imgs\location.png" alt="" />
            <h4 className='mt-3'>Choose location</h4>
            <p>Choose your and find your best car</p>
            
          </div>
          <div className={`${styles.card2} col-md-4`}>
            <img src="\assets\imgs\car-icon.png" alt="" />
            <h4 className='mt-3'>Pick-up date</h4>
            <p>Select your pick up date and time to book your car</p>
            
          </div>
          <div className={`${styles.card3} col-md-4`}>
            <img src="\assets\imgs\location.png" alt="" />
            <h4 className='mt-3'>Book your car
            </h4>
            <p>Book your car and we will deliver it directly to you</p>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.imgsbrands}>
      <div className="container">
        <div className="row">
          <div className={`${styles.img1} col-md-3`}>
            <img src="\assets\imgs\audi.png" alt="" />
          </div>
          <div className={`${styles.img1} col-md-3`}>
            <img src="\assets\imgs\jaguar.png" alt="" />
          </div>
          <div className={`${styles.img1} col-md-3`}>
                <img src="\assets\imgs\nissan.png" alt="" />
          </div>
          <div className={`${styles.img1} col-md-3`}>
            <img src="\assets\imgs\volvo.png" alt="" />
          </div>
        </div>
      </div>
    
    </div>
   </div>
   <div className={styles.sec5}>
      <div className="row">
        <div  style={{ backgroundImage: `url('/assets/imgs/Vector.01008122101a76b5.png')`}} className={`${styles.part1} col-md-6`}>
          <img src="\assets\imgs\Audi 1.png" alt="" />
    </div>
    <div className={`${styles.part2} col-md-6`}>
    <button type="button" className="btn btn-info">WHY CHOOSE US</button>
    <h4 className='mt-3'>We offer the best experience with our rental deals</h4>
    <div className={`${styles.parts} mt-3`}>
      <div className="row">
        <div className={`${styles.parts1} col-md-12`}>
          <img src="\assets\imgs\user.png" alt="" />
          <div className={styles.p1}>
          <h6>Best price guaranteed</h6>
          <p>Find a lower price? We’ll refund you 100% of the difference.</p>
          </div>
             </div>
        <div className={`${styles.parts1} col-md-12`}>
          <img src="\assets\imgs\user.png" alt="" />
          <div className={styles.p1}>
          <h6>24/7 technical support</h6>
          <p>Have a question? Contact Rentcars support any time when you have problem.
          </p>
          </div>            
           </div>
        <div className={`${styles.parts1} col-md-12`}>
          <img src="\assets\imgs\user.png" alt="" />
          <div className={styles.p1}>
          <h6>24 hour car delivery</h6>
          <p>Book your car anytime and we will deliver it directly to you.          </p>
          </div>             
          </div>
        <div className={`${styles.parts1} col-md-12`}>
          <img src="\assets\imgs\user.png" alt="" />
          <div className={styles.p1}>
          <h6>Best price guaranteed</h6>
          <p>Find a lower price? We’ll refund you 100% of the difference.</p>
          </div>             
        </div>
      </div>
    </div>
    </div>
      </div>
    </div>
    
    <div  style={{ backgroundImage: `url('public/assets/imgs/bg-sec6.fe11606f40afc830.png')`}} className={styles.most}>
    <button type="button" className="btn btn-info">TEST IMONIALS</button>
    <h1 className='mt-4'>Most popular cars rental deals</h1>
    <div className="row">
        <div className={`${styles.pepe} col-md-12 mt-5`}>
          <div className={`${styles.pepe1} col-md-5`}>
            <div className={`${styles.pimge1} col-md-6`}>
              <img src="\assets\imgs\Rectangle 8 (1).png" alt="" />
            </div>
            <div className={`${styles.ptitle} col-md-6`}>
              <h2>5.5 <span className={styles.sp1}>stars</span></h2>

              <span className={styles.icons}>
                <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
                </span>
                <p>“I feel very secure when using caretalls services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                <h6>Charlie Johnson</h6>
              <p className={styles.p12}>Last updated 3 mins ago</p>
              

            </div>

          </div>
          <div className={`${styles.pepe1} col-md-5`}>
          <div className={`${styles.pimge1} col-md-6`}>
              <img src="\assets\imgs\girl.png" alt="" />
            </div>
            <div className={`${styles.ptitle} col-md-6`}>
              <h2>5.5 <span className={styles.sp1}>stars</span></h2>
              <span className={styles.icons}>
                <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
                </span>
              <p>“I feel very secure when using caretalls services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
              <h6>Charlie Johnson</h6>
              <p className={styles.p12}>Last updated 3 mins ago</p>

            </div>
          </div>

    </div>
    </div>
    </div>
    <div className={styles.sec6}>
      <div className="container">
        <div className="row">
          <div className={`${styles.forms} col-md-7`}>
                <h1>Download Rentcars App for <span>FREE</span></h1>
                <p>For faster, easier booking and exclusive deals.
                </p>
                <img src="\assets\imgs\andriod.png" alt="" />
                <img src="\assets\imgs\ios.png" alt="" />
                <form>
  <div className="mb-3">
    <input type="name" placeholder='Name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="number" placeholder='Phone' className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <input type="email" placeholder='Email' className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Send</button>
</form>
          </div>
          <div className={`${styles.forms1} col-md-5`}>
            <img src="\assets\imgs\iPhone-14.png" alt="" />

          </div>
        </div>
      </div>
    </div>


 
  <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#1c2331"}}
          >
    
  
    <section>
      <div className="container text-center text-md-start">
      
        <div className="row">
          
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5">
            <img src="\assets\imgs\logo.png" className="text-uppercase fw-bold mb-3" alt="" />
           
         
                <br />
                
                 <span className={styles.spo}>
                   <CiLocationOn /> 
                    <p>25566 Hc 1, Glenallen,
Alaska, 99588, USA
</p>
                 </span>
                 <span className={styles.spo}>
                 <BsTelephone />
                <p>+603 4784 273 12</p>
                 </span>
                 <span className={styles.spo}>
                 <MdOutlineMailOutline />
                <p>rentcars@gmail.com</p>
                 </span>
           
          </div>
         
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
   
            <h6 className="text-uppercase fw-bold">OurProducts</h6>
            <hr
                className={`${styles.but} mb-4 mt-0 d-inline-block mx-auto`}
                // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
            Career
            </p>
            <p>Car</p>
            <p>Packages
            </p>
            <p>Features</p>
            <p>Priceline</p>
          
          </div>
       
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
     
            <h6 className="text-uppercase fw-bold">Resources</h6>
            <hr
                className={`${styles.but} mb-4 mt-0 d-inline-block mx-auto`}
                />
            <p>
            Download
            </p>
            <p>Help Centre</p>
            <p>Guides</p>
            <p>Partner Network</p>
            <p>Developer</p>
            
          </div>
       
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-5">
    
            <h6 className="text-uppercase fw-bold">About Rentcars</h6>
            <hr
                className={`${styles.but} mb-4 mt-0 d-inline-block mx-auto`}
                // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>Why choose us</p>
            <p>Our Story</p>
            <p>Investor Relations</p>
            <p>Press Center</p>
            <p>Advertise</p>
          </div>
      
        </div>
        
      </div>
    </section>
    
    <div
         className="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
     Copyright 2024 ・ Rentcars, All Rights Reserved
      
    </div>
  </footer>

    </>
  )
}
