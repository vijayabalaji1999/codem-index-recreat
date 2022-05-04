export const Images = ({ data }) => {
 return (
  <>
   {data && (
    <div class="col-md-6">
     <div class="ce-feature-box-65" style={{ marginTop: "3rem" }}>
      <div class="img-box" style={{ width: "514px" }}>
       <img src={data.image.fields.file.url} alt="" class="img-responsive" />
      </div>
     </div>
    </div>
   )}
  </>
 );
};
