import React, { useState } from 'react'

function Card({e,cart,setCart}) {

    const [toggle,setToggle] = useState(true)
    
  return <>
  {/*<!-- Section--> */}
         
  <div className="col mb-5">
                        <div className="card h-100">
                            {/*<!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            {/*<!-- Product image--> */}
                            <img className="card-img-top" src={e.pImages} alt={e.pName} />
                            {/*<!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*<!-- Product name--> */}
                                    <h5 className="fw-bolder">{e.pName}</h5>
                                    {/*<!-- Product description--> */}
                                    <h5 className="fw-lighter">{e.pDescription}</h5>
                                    {/*<!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    {/*<!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">{e.pOprice}</span>{e.pCprice} 
                                </div>
                            </div>
                            {/*<!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {toggle?(
                                        <button className="btn btn-outline-dark mt-auto" href="#" onClick={()=>{
                                            setCart(++cart)
                                            setToggle(false)
                                        }}>Add to cart</button>
                                    ):(
                                        <button className="btn btn-outline-dark mt-auto" href="#" onClick={()=>{
                                            setCart(--cart)
                                            setToggle(true)
                                        }}>Remove from cart</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

  </>
}

export default Card