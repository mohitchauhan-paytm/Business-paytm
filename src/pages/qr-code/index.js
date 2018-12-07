import React, { Component } from 'react'
import Layout from '../../components/layout'
import * as style from '././style.module.scss';
import { Paytmaccepted } from "../../components/svg-sprite";
class IndexPage extends Component { 

  
  
  render()  {

      return (
    
        <Layout>
          {/* ----------- Banner area ----------- */}
          <div className={`${style.bannerWrapper}`}>
          <p className={`${style.dotBox}`}></p>
              <div className={`container`}>
                <div className={`${style.bannerInner} grid justify-center`}>
                  <div className={`row`}>
                    <div className={`${style.positionDefault} col-xs-12 col-md-6`}>
                      <div className={`${style.bannerTxt}`}>
                        <h2 className={`${style.bannerHeading1}`}>One QR Code to Accept <br/>Payments Anywhere</h2>
                        <h3 className={`${style.bannerHeading2}`}>10 million merchants accept mobile payments with Paytm QR Code every year</h3>
                        <div className={`${style.bannerBtnBox}`}>
                          <button className={` ${style.bannerBlueBtn} btn btn-primary`}>My QR Code</button>
                        </div>
                      </div>
                    </div>
                    <div className={`col-xs-12 col-md-6`}>
                      <div className={`${style.bannerPic}`}>
                        <img src="/assets/banner-home.png" alt="img"/>  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          
          {/* ----------- Give your Business the Paytm Advantage ----------- */}
          <div className={`${style.businessSteps}`}>
            <div className={`${style.globalHeading} ${style.bgBottom}`}>
              <h2>Give your Business the Paytm Advantage</h2>
            </div>
            <div className={`container`}>
              <div className={`${style.businessRow} row`}>
                <div className={`${style.businessRowBox} col-xs-12 col-sm-6 col-md-4`}>
                  <div className={`${style.businessStepBox}`}>
                    <div className={`${style.blueBox} grid align-center justify-center`}> 
                      <img src="/assets/default.svg" alt=""/>
                    </div>
                    <div className={`${style.stepBoxDetail}`}>
                      <h4>Get started in 2 minutes</h4>
                      <p>No documents required. Accept upto ₹50,000 per month for free</p>
                      <a href="#">View Plans and Pricing</a>
                    </div>
                  </div>
                </div>
                <div className={`${style.businessRowBox} col-xs-12 col-sm-6 col-md-4`}>
                  <div className={`${style.businessStepBox}`}>
                    <div className={`${style.blueBox} grid align-center justify-center`}> 
                      <img src="/assets/default-copy.svg" alt=""/>
                    </div>
                    <div className={`${style.stepBoxDetail}`}>
                      <h4>Fast Settlements</h4>
                      <p>Get your money in your bank account when you want- instantly* or next business day.</p>
                      <p className={`${style.termsPara}`}>*TandC apply</p>
                    </div>
                  </div>
                </div>
                <div className={`${style.businessRowBox} col-xs-12 col-sm-6 col-md-4`}>
                  <div className={`${style.businessStepBox}`}>
                    <div className={`${style.blueBox} grid align-center justify-center`}> 
                      <img src="/assets/default.svg" alt=""/>
                    </div>
                    <div className={`${style.stepBoxDetail}`}>
                      <h4>Watch your business grow</h4>
                      <p>Powerful dashboard to view
payments received, bank settlements and more</p>
                      <a href="#">Go to Dashboard</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------- promotion box --------------*/}
          <div className={`${style.promotionBox}`}>
            <div className={`container`}>
                <div className={`${style.promoInner}`}>
                    <div className={`row`}>
                        <div className={`col-xs-12 col-md-8`}>
                            <div className={`${style.promoDscrpt}`}>
                                <div className={`${style.promoLogoWrap}`}><Paytmaccepted viewBox={'0 0 157 157'} width="157px"/></div>
                                <h3 className={`${style.promoHeading}`}>Paytm Accepted everywhere</h3>
                                <p>Customers can simply scan your QR code and pay with a single click. It’s simple, fast & reliable.</p>
                            </div>
                        </div>
                        <div className={`col-xs-12 col-md-4`}>
                            <div className={`${style.appDownload}`}>
                                <h5 className={`${style.promoSmallHeading}`}>Download App</h5>
                                <div className={`grid justify-between align-center`}>
                                    <img src="/assets/google-play.png" alt="google play" className={`${style.appImg}`}/>
                                    <img src="/assets/google-play.png" alt="google play" className={`${style.appImg}`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          {/* -----------Paytm Client Slider ----------- */}
          <div className={`${style.clientWrap}`}>
            <div className={`${style.globalshadow}`}></div>
            <h3 className={`${style.clientHeading}`}>Join the millions of businesses using Paytm</h3>
            <div className={`container`}>
              <div className={`row`}>
                <div className={`col-xs-12 col-md-12`}>
                  <div className={`${style.clientBox}`}>
                    <div className={`${style.clientImgWrap}`}><img src="/assets/myntra.png" alt="myntra-logo"/></div>
                    <p>Myntra</p>
                  </div>
                  <div className={`${style.clientBox}`}>
                    <div className={`${style.clientImgWrap}`}><img src="/assets/swiggy.png" alt="swiggy-logo"/></div>
                    <p>Swiggy</p>
                  </div>
                  <div className={`${style.clientBox}`}>
                    <div className={`${style.clientImgWrap}`}><img src="/assets/oyo.png" alt="Oyo Rooms"/></div>
                    <p>Oyo Rooms</p>
                  </div>
                  <div className={`${style.clientBox}`}>
                    <div className={`${style.clientImgWrap}`}><img src="/assets/uber.png" alt="uber-logo"/></div>
                    <p>Uber</p>
                  </div>
                  <div className={`${style.clientBox}`}>
                    <div className={`${style.clientImgWrap}`}><img src="/assets/dominos.png" alt="dominos-logo"/></div>
                    <p>Dominos</p>
                  </div>
                  <div className={`${style.clientBox}`}>
                    <div className={`${style.clientImgWrap}`}><img src="/assets/foodpanda.png" alt="foodpanda-logo"/></div>
                    <p>Foodpanda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      );
  }
}

export default IndexPage
