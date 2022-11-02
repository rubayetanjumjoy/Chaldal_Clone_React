import React from 'react'
import GetWindowSize from '../CustomHooks/GetWindowSize'
import { Link } from 'react-router-dom'
const ProfileIcon = () => {
  let windowsize=GetWindowSize()
 
  return (
    <>
    <span data-reactid=".10kt0qhl1y0.2">
  <div class="chat-section nonVisible" data-reactid=".10kt0qhl1y0.2.0">
    <button class="chatWindowCloseBtn border-radius-small" data-reactid=".10kt0qhl1y0.2.0.0">
      <svg width="24px" height="24px" style={{fill:'white',stroke:'white', 'display':'inline-block',verticalAlign:'middle'}} viewBox="0 0 100 100" data-reactid=".10kt0qhl1y0.2.0.0.0">
        <rect x="19.49" y="46.963" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 121.571 49.0636)" width="62.267" height="5.495" data-reactid=".10kt0qhl1y0.2.0.0.0.0"></rect>
        <rect x="18.575" y="47.876" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 49.062 121.5686)" width="62.268" height="5.495" data-reactid=".10kt0qhl1y0.2.0.0.0.1"></rect>
      </svg>
    </button>
    <iframe id="crisp-chat-iframe" class="border-radius-small" src="https://go.crisp.chat/chat/embed/?website_id=6778d586-895f-4221-a581-488068baaac5&amp;locale=en" data-reactid=".10kt0qhl1y0.2.0.1"></iframe>
  </div>
  <a class="chat_launcher" style={{display:windowsize.width > 700 ?'none':'block'}} data-reactid=".10kt0qhl1y0.2.1">
    <span class="chatContent" data-reactid=".10kt0qhl1y0.2.1.0">
      <Link to="/profile">
        <span class="chatIcon" data-reactid=".10kt0qhl1y0.2.1.0.2">
      <svg xmlns="http://www.w3.org/2000/svg" style={{height:'28px',marginTop:'5px'}}  fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>

        </svg>
        
      </span></Link>
    </span>
  </a>
</span>
  
    </>
  )
}

export default ProfileIcon