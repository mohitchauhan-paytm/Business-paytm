import React, { Component } from 'react'
import Layout from '../components/layout'
// import {AndroidIcon} from './../components/svg-sprite';
import * as style from './home.module.scss';

class IndexPage extends Component { 

  
  
  render()  {

      return (
    
        <Layout>
          {/* ----------- Banner area ----------- */}
          <div className={`${style.bannerWrapper} ${style.extraPadding}`}>
              <div className={`container`}>
                <div className={`${style.bannerInner} grid justify-center`}>
                  <div className={`${style.bannerTxt}`}>
                    <h2 className={`${style.bannerHeading1}`}>The easiest way to accept payments everywhere</h2>
                    <h3 className={`${style.bannerHeading2}`}>More than 350 million customers and merchants use Paytm- India's most trusted payments platform</h3>
                    <div className={`${style.bannerBtn}`}>
                      <button className={`btn btn-primary`}>Sign up for free</button>
                      <img src="/assets/dots.svg" className={`${style.dots} d-visible`} alt="dots"/>
                    </div>
                  </div>
                  <div className={`${style.bannerPic}`}>
                    <img src="/assets/banner-home.png"  className={`${style.bannerImg1}`} alt="img"/>  
                  </div>
                </div>
              </div>
          </div>
          {/* ----------- Payment box----------- */}
          <div className={`${style.paymentWrap}`}>
            <div className={`container`}>
              <div className={`row`}>
                <div className={`col-xs-12 col-md-4`}>
                  <div className={`${style.paymentBox}`}>
                    <img src="/assets/qr-code-icon.svg" alt="qr-code-icon"/>
                    <h3 className={`${style.paymentHeading}`}>Payment Gateway</h3>
                    <p>Add payments to your mobile app or website with Paytm SDKs and APIs</p>
                    <div className={`${style.paymentBtnWrap}`}>
                      <button className={`btn btn-primary`}>View Docs</button>
                      <button className={`btn btn-blue`}>Learn More</button>
                    </div>
                  </div>
                </div>
                <div className={`col-xs-12 col-md-4`}>
                  <div className={`${style.paymentBox}`}>
                    <img src="/assets/qr-code-icon.svg" alt="qr-code-icon"/>
                    <h3 className={`${style.paymentHeading}`}>QR Code</h3>
                    <p>Accept mobile payments via UPI, Cards and Wallet from customers in your store</p>
                    <div className={`${style.paymentBtnWrap}`}>
                      <button className={`btn btn-primary`}>Get your QR</button>
                      <button className={`btn btn-blue`}>Learn More</button>
                    </div>
                  </div>
                </div>
                <div className={`col-xs-12 col-md-4`}>
                  <div className={`${style.paymentBox}`}>
                    <img src="/assets/qr-code-icon.svg" alt="qr-code-icon"/>
                    <h3 className={`${style.paymentHeading}`}>Payment Links</h3>
                    <p>Request payments from your customers over SMS, Chat or Email</p>
                    <div className={`${style.paymentBtnWrap}`}>
                      <button className={`btn btn-primary`}>Create Link</button>
                      <button className={`btn btn-blue`}>Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------- Choose Paytm for your Business ----------- */}
          <div className={`${style.businessSteps}`}>
            <div className={`${style.globalHeading}`}>
              <h2>Choose Paytm for your Business</h2>
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
                      <img src="/assets/default.svg" alt=""/>
                    </div>
                    <div className={`${style.stepBoxDetail}`}>
                      <h4>Fast Settlements</h4>
                      <p>Get your money in your bank account when you want- instantly* or next business day.</p>
                      <p>*TandC apply</p>
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
                <div className={`${style.businessRowBox} col-xs-12 col-sm-6 col-md-4`}>
                  <div className={`${style.businessStepBox}`}>
                    <div className={`${style.blueBox} grid align-center justify-center`}> 
                      <img src="/assets/default.svg" alt=""/>
                    </div>
                    <div className={`${style.stepBoxDetail}`}>
                      <h4>Accept every payment</h4>
                      <p>Get paid using UPI, Debit/ Credit Cards, Net Banking, Paytm Wallet and EMI</p>
                    </div>
                  </div>
                </div>
                <div className={`${style.businessRowBox} col-xs-12 col-sm-6 col-md-4`}>
                  <div className={`${style.businessStepBox}`}>
                    <div className={`${style.blueBox} grid align-center justify-center`}> 
                      <img src="/assets/default.svg" alt=""/>
                    </div>
                    <div className={`${style.stepBoxDetail}`}>
                      <h4>Secure Payments</h4>
                      <p>Anti-Fraud Technology to keep you safe PCI-DSS complaint with 128-bit encryption.</p>
                    </div>
                  </div>
                </div>
                <div className={`${style.businessRowBox} col-xs-12 col-sm-6 col-md-4`}>
                  <div className={`${style.businessStepBox}`}>
                    <div className={`${style.blueBox} grid align-center justify-center`}> 
                      <img src="/assets/default.svg" alt=""/>
                    </div>
                    <div className={`${style.stepBoxDetail}`}>
                      <h4>Happy to help</h4>
                      <p>24*7 email support, speak to us from 8AM to 8PM. We are here for you</p>
                    </div>
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
