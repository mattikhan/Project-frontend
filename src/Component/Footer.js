import "./Footer.css"
import {Link} from "react-router-dom"
function Footer(){




return(
<footer>
   <div className="content">
     <div className="left box">
       <div className="upper">
         <div className="topic"> More About Blood Donation</div>
         <p>Schedule an Appointment<br></br>
          View Your Lab Results<br></br>
          Financial Assistance Programme<br></br>
          Find a Doctor</p>
       </div>
       <div className="lower">
         <div className="topic">Contact us</div>
         <div className="phone">
           <a href="#"><i className="fas fa-phone-volume"></i>+37646465823</a>
         </div>
         <div className="email">
           <Link to="#"><i className="fas fa-envelope"></i>abc@gmail.com</Link>
         </div>
       </div>
     </div>
     <div className="middle box">
       <div className="topic">Our Services</div>
       <Link to="#">Web Design, Development</Link>
       <Link to="#">Web UX Design, Reasearch</Link>
       <Link to="#">Web User Interface Design</Link>
       <Link to="#">Theme Development, Design</Link>
       <Link to="#">Mobile Application Design</Link>
     </div>
     <div className="right box">
       <div className="topic">Contact for Emergency</div>
       <form action="#">
         <input type="text" placeholder="Enter email address"/>
         <input type="submit" name="" value="Send"/>
        
       </form>
     </div>
   </div>
   <div className="bottom">
     <p>Copyright © 2020 <Link to="#">Blood Bank Main Branch</Link> All rights reserved</p>
   </div>
 </footer>


);}
export default Footer;