import { Navigate } from "./navigation";
import { client } from "./client";
import { useState, useEffect } from "react";
import { Ourcustomer } from "./ourcustomer";
import { Companyreview } from "./companyReview";
import { Investment } from "./investment";
import { Ourpartners } from "./ourpartners";
import { Certified } from "./certified";
import { Innews } from "./InNews";
import { Footer } from "./footer";
import { Copyright } from "./copyright";
import { Ourservices } from "./ourservices";

export const Index = ({ nav, herobanner }) => {
 return (
  <>
   <div id="wrapper-boxed">
    <div className="site-wrapper">
     <Navigate nav={nav} />
     <div id="bannerVideo">
      <div class="container-fluid nopadding">
       <div class="video-overlay bg-opacity-6"></div>
       <div
        class="slider_text slider-caption"
        style={{
         backgroundImage: `url(${herobanner.heroImage.fields.file.url})`,
         height: "100vh",
        }}
       >
        <div className="absolute">
         <div className="inner">
          <h2 className="solving">{herobanner.heroTitle}</h2>
          <p className="tech">{herobanner.heroDescription}</p>
          <a class="btn btn-default contact-us us" href="contact.html">
           CONTACT US
          </a>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};
