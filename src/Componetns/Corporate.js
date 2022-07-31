import React from 'react'

const Corporate = () => {
  return (
    <div>
        <section id="corporate">
            <div className='mainContainer'>
                <div className='corporate-content'>
                    <div className='initialLabel'>
                        <h2>Do You Own a Business</h2>
                        <h3>Become a Corporate Customer</h3>
                    </div>
                    <ul className='corporate-benefits'>
                        <li className='corporate-benefits-item'>
                                <i className='tick'> </i>
                                <img style={{ height:'100px',width:'100px'}}src="/img/money.png"></img>
                               <h4>Special Corporate Prices</h4>
                        </li>
                        <li className='corporate-benefits-item'>
                                <i className='tick'> </i>
                                <img style={{ height:'100px',width:'100px'}}src="/img/support.png"></img>
                               <h4>24 Hours Service</h4>
                        </li>
                        <li className='corporate-benefits-item'>
                                <i className='tick'> </i>
                                <img style={{ height:'100px',width:'100px'}}src="/img/shipped.png"></img>
                               <h4>Fast Delivery</h4>
                        </li>
                        

                    </ul>
                    <a>Find Out More</a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Corporate