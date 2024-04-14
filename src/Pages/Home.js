import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function Home() {
  return (
    <div>
            <Header />
            <div>
                {/* Page Content */}
                {/* Banner Starts Here */}
                <div className="banner header-text">
                    <div className="owl-banner owl-carousel">
                        <div className="banner-item-01">
                            <div className="text-content">
                                <h4>Best Offer</h4>
                                <h2>New Arrivals On Sale</h2>
                            </div>
                        </div>
                        <div className="banner-item-02">
                            <div className="text-content">
                                <h4>Flash Deals</h4>
                                <h2>Get your best products</h2>
                            </div>
                        </div>
                        <div className="banner-item-03">
                            <div className="text-content">
                                <h4>Last Minute</h4>
                                <h2>Grab last minute deals</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner Ends Here */}
                <div className="page-heading products-heading header-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-content">
                                    <h4>Flash Deals</h4>
                                    <h2>Get your best products</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


  )
}

export default Home