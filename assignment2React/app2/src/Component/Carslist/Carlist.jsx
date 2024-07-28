import styles from './Cars.module.css'
import axios from "axios";
// import LandingPage from './Component/LandingPage/LandingPage';
import { CiLocationOn } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { TbAutomaticGearbox } from "react-icons/tb";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'
export default function Carlist() {
    const [cars, setCars] = useState([]);
    let getCars = async ()=>{
      try {
        let response = await axios.get(
          "https://freetestapi.com/api/v1/cars"
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
    <div className="container-fluid">
        <div className="row">  
        <Link className={`${styles.btn2} btn btn-light mt-5`} to='/LandingPage'> <FaArrowLeft />Back to Home</Link>
            <div className={styles.sec6}>
            <button type="button" className={`${styles.btn1} btn btn-info mt-5`}>POPULAR RENTAL DEALS
    </button>
    <h4 className='mt-4'>Most popular cars rental deals</h4>
    <div className={`${styles.btnn} input-group mb-3 mt-3`}>
  <span className="input-group-text">                 
      <CiLocationOn /> 
  </span>
  <input type="text" className="form-control" placeholder='search by name' aria-label="Amount (to the nearest dollar)"/>
  <button type="button" className="btn btn-primary">Search</button>
</div>
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
            </div>
        </div>
    </div>
    </>
  )
}
