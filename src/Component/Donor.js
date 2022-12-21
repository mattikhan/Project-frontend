import { useState } from 'react';
import './donor.css'
import { useNavigate } from 'react-router-dom';

function Donor() {

  const navigate= useNavigate();
  const goback=()=>{
    navigate(-1);
  };
  const[cdata,setdata]=useState([{id:1,pic: <img src={require('./donor1.webp')} class="card-img-top" alt="..."/>,Title:"(Donor 1) Ali raza",desc:"Ali raza is the top Donor who donate blood many time and anounced as the Donor of the year",desc2:"Delete"},
  {id:2,pic: <img src={require('./image3.jpg')} class="card-img-top" alt="..."/>,Title:"(Donor 2) Abdullah",desc:"Abdullah is the 2nd most donor he also donate blood many times  ",desc2:"Delete"},
  {id:3,pic: <img src={require('./images2.jpg')} class="card-img-top" alt="..."/>,Title:"(Donor 3) Ali Ahmad ",desc:"Ali Ahmad is the 3rd most Blood Donor ",desc2:"Delete"},]);  
function handleDelete(cid){
 const filterData= cdata.filter((e
  )=>e.id!=cid);
 setdata(filterData)
}
return (    
<div id='main-container' >
<div id='text-container'>
<h1>Donors</h1>
<h2>Your Zakat and donations help Many Trust save many precious lives every year.</h2>
<p> While the income from our diagnostic and clinical services continues to fund our expansion, only your Zakat and donations make the treatment of poor cancer patients possible.<br></br>

This year, we need Rs. 28 billion to sustain not only two state-of-the-art cancer hospitals but also to commence construction of the Hospital in Karachi and the Clinical Tower in Lahore.<br></br> As in the past years, we expect about half of this to be met through your generous donations and Zakat.<br></br> Together, we have shown that nothing is impossible in Pakistan when we set our minds to it, and with your invaluable support, we will be able to continue with the mission of providing financially supported cancer care to over 75% of the patients in the coming year as well.</p>
<h3>Our Top Donors are listed below:</h3>
</div>


<div id='card-container' style={{display:"flex"}}>
{
cdata.map((cdta)=>(
<div  class="card"  style={{width: "18rem",height:"28rem",marginLeft:30}}>
  <><>{cdta.pic}{cdta.id}</></>
  <div class="card-body">
    <h5 class="card-title">{cdta.Title}</h5>
    <p class="card-text">{cdta.desc}</p>
  <button class="btn btn-primary" onClick={()=> handleDelete(cdta.id)}>{cdta.desc2}</button>
  </div>
</div>
))
}

</div>

<hr/>
  <button className="btn btn-primary" style={{backgroundColor:"Highlight"}} onClick={()=>goback()}>Goto Signin Page</button>
        </div>
     );
}

export default Donor;