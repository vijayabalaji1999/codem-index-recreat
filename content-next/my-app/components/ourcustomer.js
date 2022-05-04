export const Ourcustomer = ({ data }) => {
 return (
  <>
   {data.map((e) => {
    if (e.fields.title === "Our Customers") {
     return (
      <section className="sec-padding-5 ">
       <div className="container">
        <div className="row">
         <div className="col-sm-12">
          <div className="sec-padding-5 sec-title-container text-center">
           <h2 className="font-weight-6 less-mar-1 line-height-5">
            {e.fields.title}
           </h2>
           <div className="ce-title-line"></div>
          </div>
         </div>
         <div className="clearfix"></div>
        </div>
        <div className="row">
         <div
          id="customers-logo"
          className="owl-carousel owl-theme customers-list"
         >
          <div className="our-customers">
           {e.fields.images.map((e1) => {
            return (
             <div className="item">
              <img id="ourcustom" src={e1.fields.file.url} alt="" />
             </div>
            );
           })}
          </div>
         </div>
        </div>
       </div>
      </section>
     );
    }
   })}
  </>
 );
};
