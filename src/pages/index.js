import React, { Component } from 'react'
import Layout from '../components/layout'
// import {AndroidIcon} from './../components/svg-sprite';
import * as style from './home.module.scss';

class IndexPage extends Component { 

  
  
  render()  {

      return (
    
        <Layout>
          <div className={`${style.bannerWrapper} ${style.extraPadding}`}>
              <div className={`container`}>
                <div className={`${style.bannerInner} grid justify-center`}>
                  <div className={`${style.bannerTxt}`}>
                    <h2 className={`${style.bannerHeading1}`}>The easiest way to accept payments everywhere</h2>
                    <h3 className={`${style.bannerHeading2}`}>More than 350 million customers and merchants use Paytm- India's most trusted payments platform</h3>
                    <div className={`${style.bannerTxt}`}>
                      <button className={`btn btn-primary`}>Sign up for free</button>
                      <img src="/assets/dots.svg" className={`${style.dots}`} alt="dots"/>
                    </div>
                  </div>
                  <div className={`${style.bannerPic}`}>
                    <img src="/assets/banner-home.png"  className={`${style.bannerImg1}`} alt="img"/>  
                  </div>
                </div>
              </div>
          </div>
          <div className={`${style.paymentWrap}`}>
            <div className={`container`}>
              <div className={`grid justify-between`}>
                <div className={`${style.paymentBox}`}>
                  <img src="/assets/qr-code-icon.svg" alt="qr-code-icon"/>
                  <h3 className={`${style.paymentHeading}`}>Payment Gateway</h3>
                  <p>Add payments to your mobile app or website with Paytm SDKs and APIs</p>
                  <div className={`${style.paymentBtnWrap}`}>
                    <button className={`btn btn-primary`}>View Docs</button>
                    <button className={`btn btn-blue`}>Learn More</button>
                  </div>
                </div>
                <div className={`${style.paymentBox}`}>
                  <img src="/assets/qr-code-icon.svg" alt="qr-code-icon"/>
                  <h3 className={`${style.paymentHeading}`}>QR Code</h3>
                  <p>Accept mobile payments via UPI, Cards and Wallet from customers in your store</p>
                  <div className={`${style.paymentBtnWrap}`}>
                    <button className={`btn btn-primary`}>Get your QR</button>
                    <button className={`btn btn-blue`}>Learn More</button>
                  </div>
                </div>
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
        </Layout>
      );
  }
}

export default IndexPage
