import {
  HomeDemo1Distribution,
  HomeDemo1Graph11,
} from "../../utils/allImgs"

import SectionHeading from "../SectionHeading"

const TokenDistribution = ({data , ClassSpanTitle}) => {

    return (

      <section className="token-distribution section-padding-100-85" id="token_distribution">
        <div className="container">
          <SectionHeading
            title="Token Distribution"
            text="Our Token Distribution"
            ClassSpanTitle={ClassSpanTitle}
          />

          <div className="row align-items-center">
            <div className="col-lg-12 col-sm-12">
              <div>
                {/* <h2 className="text-center mb-30">Funds Allocation</h2> */}
                <img src={HomeDemo1Distribution} className="center-block" alt="" />
              </div>
            </div>
            {/* <div className="col-lg-6 col-sm-12 mt-s">
              <h2 className="text-center mb-30">Token Distribution</h2>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src={HomeDemo1Graph11} className="center-block" alt="" />
                  </div>
                </div>
                <div className="col-sm-8">
                  {data && data.map((item , key) => (
                      <div className="token-info" key={key}>
                        <div className={item.ClassName}>
                          <div className="token-icon">{item.Num}</div>
                          <div className="token-descr">{item.descr}</div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );

}

export default TokenDistribution