import { client } from "./client";
import { useState, useEffect } from "react";

export const Certified = ({ data }) => {
 return (
  <>
   {data.map((e) => {
    if (e.fields.maintitle === "Certified") {
     return (
      <div
       className="parallax vertical-align"
       data-parallax-speed="0.9"
       data-parallax-direction="down"
       style={{
        position: "relative",
        background: "transparent none repeat scroll 0% 0%",
        overflow: "hidden",
        zIndex: 1,
       }}
      >
       <div
        className="parallax-inner"
        style={{
         position: "absolute",
         backgroundImage: `url(${e.fields.images[1].fields.file.url})`,
         backgroundPosition: "center center",
         backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
         width: "1440px",
         height: "1270.06px",
         transform: "translate3d(0px, -384.03px, 0px)",
         zIndex: -1,
        }}
       />
       <div class="parallax-overlay bg-opacity-8">
        <div class="container sec-tpadding-4 sec-bpadding-5">
         <div class="row magento">
          <div class="col-md-12 text-center">
           <div class="col-sm-12">
            <div class="sec-title-container less-padding-1 text-center">
             <h2 class="font-weight-6 less-mar-1 line-height-5 text-white">
              {e.fields.title}
             </h2>
             <div class="ce-title-line"></div>
             <br />
             <div class="align-center">
              <img
               src={e.fields.images[0].fields.file.url}
               alt=""
               class="img-responsive"
              />
             </div>
             <h6 class="ce-sub-text raleway opacity-6 text-white">
              "{e.fields.description}"
             </h6>
            </div>
           </div>
           <div class="clearfix"></div>
          </div>
         </div>
        </div>
       </div>
      </div>
     );
    }
   })}
  </>
 );
};
