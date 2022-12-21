import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
export default function About(){
  const navigate= useNavigate();
  const goback=()=>{
    navigate(-1);
  };
    return (

      <div id='main-container'>
        <h1 style={{color:"black",fontFamily:"Arial, Helvetica, sans-serif",fontSize:"small"}}>The only source of blood is healthy volunteer donors. As cancer patients need blood transfusions during their treatment, at Shaukat Khanum Memorial Cancer Hospital and Research Centre in Lahore and Peshawar, we need more than 65 bags of blood and blood components every day. One bag of blood can save more than one life.<br></br>

To act as a model institution to alleviate the suffering of patients with cancer through the application of modern methods of curative and palliative therapy irrespective of their ability to pay, the education of health care professionals and the public and perform research into the causes and treatment of cancer.<br></br>

<h4>Frequently Asked Questions about Blood Donation</h4><br></br>
Q. Who can donate blood?<br></br>

Ans. Any healthy individual can donate blood. Before taking blood, some questions related to your health will be asked to make sure that you can donate blood.<br></br>

Q. Can I donate blood if I had jaundice previously?<br></br>

Ans. No, if you have a history of jaundice in the past, you need to be screened for hepatitis before donating blood.<br></br>

Q. Do I have enough blood in my body to donate?<br></br>

Ans. Yes. The body contains 10 to 12 pints of blood.<br></br>

Q. How much blood is taken?<br></br>

Ans. For a whole blood donation, approximately one pint (which weighs about one pound-up to 500 ml) is collected.<br></br>

Q. How often can I donate?<br></br>

Ans. The interval between blood donations should be at least 8 weeks.<br></br>

Q. Is there anything I should do before I donate?<br></br>

Ans. Be sure to eat well at your regular mealtimes and drink plenty of fluids.<br></br>

Q. Will donating blood hurt?<br></br>

Ans. No more than a pinch in the beginning!  Our skilled phlebotomists make donating blood as painless and comfortable as possible.<br></br>

Q. Can I develop infections like hepatitis or HIV (AIDS Virus) when I donate blood?<br></br>

Ans. No each blood bag and its needle are sterile and disposable.<br></br>


Q. Does Shaukat Khanum offer any free tests?<br></br>

Ans. The following tests will be performed free of cost for blood donors:<br></br>

Blood Group<br></br>
ALT<br></br>
RPR<br></br>
Anti HCV<br></br>
Anti HIV I & II<br></br>
Nucleic Acid Test (NAT)<br></br>
CBC<br></br>
Total Bilirubin<br></br>
Hbs Ag<br></br>
MP ICT<br></br>
HB Core Antibody</h1>


<hr/>
  <button className="btn btn-primary" style={{backgroundColor:"Highlight"}} onClick={()=>goback()}>Goto SignIn Page</button>
        
    </div>

      
      
    )
  }
