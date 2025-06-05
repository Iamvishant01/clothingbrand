import React, { Component } from 'react'

export class DiscountBanner extends Component {
  render() {
    return (
        <>
        <div className="container px-4 text-center mt-5 mb-5">
            <div className="row gx-5">
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <div className="p-3">
                        <img
                        src="https://iili.io/FdOSbaa.jpg"
                        alt="banner 1"
                        className="img-fluid w-70 rounded"
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="p-3">
                        <img
                        src="https://iili.io/FdOSm8J.jpg"
                        alt="banner 2"
                        className="img-fluid w-70 rounded"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-4">
            <div className="banner-wrapper rounded overflow-hidden">
                <img
                src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fgrid%2Fbanner-3.jpg&w=1920&q=100"
                alt="Banner"
                className="img-fluid w-100 d-block"
                style={{ aspectRatio: "16 / 5", objectFit: "cover", borderRadius: "12px" }}
                />
            </div>
        </div>
        </>
    )
  }
}

export default DiscountBanner
