export const Investment = ({ data }) => {
 return (
  <>
   <section className="sec-padding-4">
    <div className="container">
     <div className="row align-centered inves">
      <div
       class=" col-sm-6 col-md-6 margin-bottom"
       data-anim-type="fade-in-left"
       data-anim-delay="150"
      >
       <div class="col-sm-12 nopadding">
        <div class="sec-title-container less-padding-4 text-left">
         <h2 class="font-weight-6 less-mar-1 line-height-5">{data.title}</h2>
         <div class="ce-title-line align-left"></div>
        </div>
       </div>
       <div class="clearfix"></div>

       <br />
       <p class="running-text">{data.description}</p>
      </div>

      <div
       class="width-50 col-sm-6 margin-bottom animate-in"
       data-anim-type="fade-in-right"
       data-anim-delay="100"
      >
       <img
        src={data.images[0].fields.file.url}
        alt=""
        class="img-responsive"
       />
      </div>
     </div>
    </div>
   </section>
  </>
 );
};
