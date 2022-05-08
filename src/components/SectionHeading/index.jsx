const SectionHeading = ({
	title,
	text,
	img,
	ClassSpan="dream-dots justify-content-center",
	ClassSpanTitle=""
}) => {

  return (
  	<>
  	{img ? (
	      <div className="section-heading text-center">	      		
	        <div className="dream-dots justify-content-center">
	          <img src={img} alt="" />
	        </div>
	        <h2>{title}</h2>
	        <p>{text}</p>
	      </div>
      	):(
				  <div className="section-headingnew text-center">	      	
	        <div className={ClassSpan} data-aos="fade-up">
	            <span className={ClassSpanTitle}>{title}</span>
	        </div>
					  <h2 data-aos="fade-up">{text}</h2>
					  {/* <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p> */}
	      </div>

      	)}
    </>
  );
}

export default SectionHeading;