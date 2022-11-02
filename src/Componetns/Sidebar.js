import React from 'react'
import { Link } from 'react-router-dom'
import GetWindowSize from '../CustomHooks/GetWindowSize'
const Sidebar = ({handleNav,setNavopen}) => {
 
  const windowsize=GetWindowSize()
  return (
    <>
     
    <div className='menuWrapper ' >
    <div>
    <div className='topMenu vertical'>
          <div data-reactid=".1ouxpi3x6ke.4.0.1.0.0.0">
          <div class="hamBergerMenuIcon" onClick={handleNav}  data-reactid=".1ouxpi3x6ke.4.0.1.0.0.0.0">
                <div class="bar1" data-reactid=".1ouxpi3x6ke.4.0.1.0.0.0.0.0"></div>
                <div class="bar2" data-reactid=".1ouxpi3x6ke.4.0.1.0.0.0.0.1"></div>
                <div class="bar3" data-reactid=".1ouxpi3x6ke.4.0.1.0.0.0.0.2"></div>
          </div>
      </div>
  
        <div className='menu' style={{height:'100vh'}}>
                
               <ul className='misc-menu'>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/food' onClick={()=>windowsize.width <700 && setNavopen(false)}>
                     <span>Offers</span>
                     </Link>

                     </div>

                    </li>
                    <li className='unselected' >
                     <div className='name'>
                     <Link to='/food' onClick={()=>windowsize.width <700 && setNavopen(false)}>
                     <span>Food Aid</span>
                     </Link>

                     </div>

                    </li>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/food' onClick={()=>windowsize.width <700 && setNavopen(false)}>
                     <span>Favorite</span>
                     </Link>

                     </div>

                    </li>
                     
                </ul>
                <ul className='level-0'>
                <ul className='misc-menu'>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/cooking' onClick={()=>windowsize.width <700 && setNavopen(false)} >
                     <img className='MenuItemIcons' src='https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95790&q=best&v=1&m=40&webp=1&alpha=1'/>
                     <span style={{marginLeft:"5px"}}>Cooking</span>
                     </Link>

                     </div>

                    </li>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/meat-fish' onClick={()=>windowsize.width <700 && setNavopen(false)} >
                     <img className='MenuItemIcons' src='https://chaldn.com/_mpimage/flash-sales?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95784&q=best&v=1&m=40&webp=1&alpha=1'></img>
                     <span style={{marginLeft:"5px"}}>Meat and Fish</span>
                     </Link>

                     </div>

                    </li>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/fresh-fruit' onClick={()=>windowsize.width <700 && setNavopen(false)} >
                     <img className='MenuItemIcons' src='https://chaldn.com/_mpimage/personal-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101765&q=low&v=1&m=40&webp=1&alpha=1'></img>
                     <span style={{marginLeft:"5px"}}>Fruits And Vegitable</span>
                     </Link>

                     </div>

                    </li>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/coffee' onClick={()=>windowsize.width <700 && setNavopen(false)}>
                     <img className='MenuItemIcons' src='https://chaldn.com/_mpimage/food?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95785&q=low&v=1&m=40&webp=1&alpha=1'></img>
                     <span style={{marginLeft:"5px"}}>Coffee</span>
                     </Link>

                     </div>

                    </li>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/food' onClick={()=>windowsize.width <700 && setNavopen(false)}>
                     <img className='MenuItemIcons' src='https://chaldn.com/_mpimage/personal-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101765&q=low&v=1&m=40&webp=1&alpha=1'></img>
                     <span style={{marginLeft:"5px"}}>Offers</span>
                     </Link>

                     </div>

                    </li>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/food' onClick={()=>windowsize.width <700 && setNavopen(false)}>
                     <img className='MenuItemIcons' src='https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95790&q=best&v=1&m=40&webp=1&alpha=1'></img>
                     <span style={{marginLeft:"5px"}}>Popular</span>
                     </Link>

                     </div>

                    </li>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/food' onClick={()=>windowsize.width <700 && setNavopen(false)}>
                     <img className='MenuItemIcons' src='https://chaldn.com/_mpimage/flash-sales?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95784&q=best&v=1&m=40&webp=1&alpha=1'></img>
                     <span style={{marginLeft:"5px"}}>Flash Sale</span>
                     </Link>

                     </div>

                    </li>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/food' onClick={()=>windowsize.width <700 && setNavopen(false)}>
                     <img className='MenuItemIcons' src='https://chaldn.com/_mpimage/personal-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101765&q=low&v=1&m=40&webp=1&alpha=1'></img>
                     <span style={{marginLeft:"5px"}}>Food</span>
                     </Link>

                     </div>

                    </li>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/food' onClick={()=>windowsize.width <700 && setNavopen(false)}>
                     <img className='MenuItemIcons' src='https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95790&q=best&v=1&m=40&webp=1&alpha=1'></img>
                     <span style={{marginLeft:"5px"}}>Popular</span>
                     </Link>

                     </div>

                    </li>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/food' onClick={()=>windowsize.width <700 && setNavopen(false)}>
                     <img className='MenuItemIcons' src='https://chaldn.com/_mpimage/flash-sales?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95784&q=best&v=1&m=40&webp=1&alpha=1'></img>
                     <span style={{marginLeft:"5px"}}>Flash Sale</span>
                     </Link>

                     </div>

                    </li>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/food' onClick={()=>windowsize.width <700 && setNavopen(false)}>
                     <img className='MenuItemIcons' src='https://chaldn.com/_mpimage/personal-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101765&q=low&v=1&m=40&webp=1&alpha=1'></img>
                     <span style={{marginLeft:"5px"}}>Food</span>
                     </Link>

                     </div>

                    </li>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/food' onClick={()=>windowsize.width <700 && setNavopen(false)}>
                     <img className='MenuItemIcons' src='https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95790&q=best&v=1&m=40&webp=1&alpha=1'></img>
                     <span style={{marginLeft:"5px"}}>Popular</span>
                     </Link>

                     </div>

                    </li>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/food' onClick={()=>windowsize.width <700 && setNavopen(false)} >
                     <img className='MenuItemIcons' src='https://chaldn.com/_mpimage/flash-sales?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95784&q=best&v=1&m=40&webp=1&alpha=1'></img>
                     <span style={{marginLeft:"5px"}}>Flash Sale</span>
                     </Link>

                     </div>

                    </li>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/offers' onClick={()=>windowsize.width <700 && setNavopen(false)}>
                     <img className='MenuItemIcons' src='https://chaldn.com/_mpimage/personal-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101765&q=low&v=1&m=40&webp=1&alpha=1'></img>
                     <span style={{marginLeft:"5px"}}>Food</span>
                     </Link>

                     </div>

                    </li>
                     
                </ul>

                </ul>
                
        </div>
    
   
    </div>
    </div>
    </div>
   
    </>
  )
}

export default Sidebar