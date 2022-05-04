export const Ourpartners = ({ data }) => {
 return (
  <>
   {data.map((e) => {
    if (e.fields.title === "Our Partners") {
     return (
      <section
       class="section-side-image sec-padding-5 clearfix animate-in"
       data-anim-type="fade-in-right"
       data-anim-delay="300"
      >
       <div class="container">
        <div class="row">
         <div class="col-sm-12">
          <div class="sec-title-container text-center">
           <h2 class="font-weight-6 less-mar-1 line-height-5">
            {e.fields.title}
           </h2>
           <div class="ce-title-line"></div>
          </div>
         </div>
         <div class="clearfix"></div>
        </div>
        <div class="row">
         <div class="col-sm-12">
          <div id="partners-logo" class="owl-carousel owl-theme customers-list">
           {e.fields.images.map((e1) => {
            return (
             <div class="item">
              <a
               href="https://www.mw2consulting.com/"
               title="MW2 Consulting"
               target="_blank"
              >
               <img className="partner" src={e1.fields.file.url} alt="" />
              </a>
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
