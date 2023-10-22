import React from "react";
("use client");
import { Footer } from "flowbite-react";
import Foodloc from "../assets/FoodLoc.png";

const FooterResto = () => {
  return (
    <Footer container style={{ backgroundColor: "#FFA90A", borderRadius:'0px' }}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand className="pl-12 p-1" src={Foodloc} />
          </div>
          <div className="sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <p>
              This is a social community developed by local community. <br />
              please kindly reach us if you have any suggestion
            </p>
            <div className="flex">
              <Footer.LinkGroup>
                <Footer.Link href="#">Instagram</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterResto;
