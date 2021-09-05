import React from "react";
import "./css/main.css";
import { NavLink } from "react-router-dom";
import { cityData } from "./city/cityData";

const Cities = () => {
  // const cityCard=({ cityName, cityDescription, cityPath })=>{
  //   return(
  //   <>
  //     <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 project wow animated animated4 fadeInLeft">
  //       <div className="project-hover">
  //         <h2 className="text-uppercase">{cityName}</h2>
  //         <hr />
  //         <p>{cityDescription}</p>
  //         <NavLink to={`/citypage/${cityPath}`}>Explore</NavLink>
  //       </div>
  //     </div>
  //   </>
  //   );
  // }
  return (
    <>
      <div className="container-fluid my-5">
        <div className="title-style">Popular Cities</div>
        {/* {cityCard(cityData.delhi,cityData.desc2,cityData.delhi)} */}
        {/* <cityCard
          cityName={cityData.delhi}
          cityDescription={cityData.desc1}
          cityPath={cityData.delhi}
        />
         <cityCard
          cityName={cityData.mumbai}
          cityDescription={cityData.desc2}
          cityPath={cityData.mumbai}
        />
        <cityCard
          cityName={cityData.pune}
          cityDescription={cityData.desc3}
          cityPath={cityData.pune}
        />
        <cityCard
          cityName={cityData.banglore}
          cityDescription={cityData.desc4}
          cityPath={cityData.banglore}
        /> */}

        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 project wow animated animated4 fadeInLeft">
          <div className="project-hover">
            <h2 className="text-uppercase">{cityData.delhi}</h2>
            <hr />
            <p>{cityData.desc1}</p>
            <NavLink to={`/citypage/${cityData.delhi}`}>Explore</NavLink>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 project project-2 wow animated animated3 fadeInLeft">
          <div className="project-hover">
            <h2>{cityData.mumbai}</h2>
            <hr />
            <p>{cityData.desc2}</p>
            <NavLink to={`/citypage/${cityData.mumbai}`}>Explore</NavLink>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 project project-3 wow animated animated2 fadeInLeft">
          <div className="project-hover">
            <h2>{cityData.pune}</h2>
            <hr />
            <p>{cityData.desc3}</p>
            <NavLink to={`/citypage/${cityData.pune}`}>Explore</NavLink>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 project project-4 wow animated fadeInLeft">
          <div className="project-hover">
            <h2>{cityData.banglore}</h2>
            <hr />
            <p>{cityData.desc4}</p>
            <NavLink to={`/citypage/${cityData.banglore}`}>Explore</NavLink>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  );
};

export default Cities;
