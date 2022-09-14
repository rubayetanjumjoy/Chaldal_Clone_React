import React from 'react'
import HowtoOrder from './HowtoOrder'
import Corporate from './Corporate'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
         <div className='landingPage2'>
         <div className='landingBanner' style={{backgroundSize: 'auto', backgroundSize: 'cover',height: '325px',paddingTop: '100px', backgroundImage:`url('https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0+Deploy-Release-78/Default/stores/chaldal/components/landingPage2/LandingPage/images/landingBannerTop.png')`}} >
            
        
         </div> 
         <div className='mainContainer'>
            <section id='product-categories' className='categoryTiles'>
                <div className='initialLabel'>
                    <h2>
                        <span>Our Product Categories</span>
                    </h2>
                </div>
                <div className='mainTile'>  
                <Link to='/fresh-fruit'>
                    <div className='categoryBox'>
                        <div className='categoryName'>Fruits and Vegetables</div>
                        <div className='categoryImg' > 
                        <img src="/img/mango.png"></img>

                        </div>
                    </div>
                </Link>
                <Link to='coffee'>
                    <div className='categoryBox'>
                        <div className='categoryName'>Stationary</div>
                        <div className='categoryImg' > 
                        <img src="/img/stationary.png"></img>

                        </div>
                    </div>
                </Link>
                <a href='fruits-vegetables'>
                    <div className='categoryBox'>
                        <div className='categoryName'>Kitchen Items</div>
                        <div className='categoryImg' > 
                        <img src="/img/kitchen.png"></img>

                        </div>
                    </div>
                </a>
                <a href='fruits-vegetables'>
                    <div className='categoryBox'>
                        <div className='categoryName'>Breverage</div>
                        <div className='categoryImg' > 
                        <img src="/img/hot-chocolate.png"></img>

                        </div>
                    </div>
                </a>
                <a href='fruits-vegetables'>
                    <div className='categoryBox'>
                        <div className='categoryName'>Healthcare</div>
                        <div className='categoryImg' > 
                        <img src="/img/healthcare.png"></img>

                        </div>
                    </div>
                </a>
                <a href='fruits-vegetables'>
                    <div className='categoryBox'>
                        <div className='categoryName'>Fish And Meat</div>
                        <div className='categoryImg' > 
                        <img src="/img/fish.png"></img>

                        </div>
                    </div>
                </a>
                <Link to='/cooking'>
                    <div className='categoryBox'>
                        <div className='categoryName'>Cooking</div>
                        <div className='categoryImg' > 
                        <img src="/img/cooking.png"></img>

                        </div>
                    </div>
                </Link>
                <a href='fruits-vegetables'>
                    <div className='categoryBox'>
                        <div className='categoryName'>Cleaning</div>
                        <div className='categoryImg' > 
                        <img src="/img/cleaning.png"></img>

                        </div>
                    </div>
                </a>
                <a href='fruits-vegetables'>
                    <div className='categoryBox'>
                        <div className='categoryName'>Baby Products</div>
                        <div className='categoryImg' > 
                        <img src="/img/baby.png"></img>

                        </div>
                    </div>
                </a>
                <a href='fruits-vegetables'>
                    <div className='categoryBox'>
                        <div className='categoryName'>Stationary</div>
                        <div className='categoryImg' > 
                        <img src="/img/stationary.png"></img>

                        </div>
                    </div>
                </a>
                <Link to='fresh-fruit'>
                    <div className='categoryBox'>
                        <div className='categoryName'>Fruits</div>
                        <div className='categoryImg' > 
                        <img src="/img/mango.png"></img>

                        </div>
                    </div>
                </Link>
                <a href='fruits-vegetables'>
                    <div className='categoryBox'>
                        <div className='categoryName'>Stationary</div>
                        <div className='categoryImg' > 
                        <img src="/img/stationary.png"></img>

                        </div>
                    </div>
                </a>

                </div>
            </section>
            <HowtoOrder/>
            <Corporate/>

        </div>
          
  
        </div>
    </div>
  )
}

export default LandingPage