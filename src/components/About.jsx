import React from "react";
import '../styles/About.css'

function About(){
    return(
        <section id="about">

        <div className="about">
            <h2 className="sec-heading">/about me</h2>
            <div className="row">
            <div className="col-6 about-text">
                <p>
                I am currently a third year Computer Science student who has great interest in full-stack development as well as data science. 
                I am someone who loves to take up new challenges and learn new skills. Along with all this I like taking part in Hackathons, meet new people and exchange different ideas. 
                </p>

            <a href="assets/Akansha_Sakhre_resume.pdf" download="akanshaResume"><button className="download-btn btn btn-outline-light">Resume <i className="fas fa-download"></i></button></a>

            </div>

            <div className="col-6 about-image">
                <img className="self-picture" src="https://lh3.googleusercontent.com/1o004srz7JIwn88XzIsOAb-pFqriYDAePtDMQFlkDEKGqYtR0NLrZQ8LamIsAZBs2vuWkuq5pFWayngVLNaS0RqPIDMAvAHKIhqJAiHZbESO64Y_VFODU73R-scaPqZ1yIs0EoTBZsowolq39pVIx2vFtKrjZ3CpCGnI7Ajax09Eeloz4Dd6j1h79nuebHG8ODCIUFoxYaulHouSn5OK-xfKws_JB97VHD7vqpHaiqny3kn3DaYlnY0Co3MELfNz0kzCY_k_DkQTLV7dtK9f9cFRwX4o3aiux4QTbLHOTWx9aPpkb73PjquWPQojEnYai0bvDh7Cu69jxusF2dTRJS5J1W0OFIpzkizjS12Bjm12Aorb7AhG3fvIUq9DDOpW908Ab18QENrMl903oKs5Lu1SVws3-FLt5cdk1ksDf2Zj3jVFMXRI75VLVxrX8e-uxW68DF0-4Kfv8ZjXirXqbsrL1T4VbUTDa_Qdb47ySTdL2TUmivz5qducJy7v-hto30p6TF7_7g5JWihyYvcGW32JPnTP94yaNMIWk1c2HS_gVKYEmGxiYr7YneeQl_oBVEwavmUgRlh5JeBAQE2OCifCCNsempGsZ87psRVLbXUl_MpwQmkleIYFD_rNFjsuJt1v6r_samg3xmTAp5u15vZml_3PVEl143Iaq6gSNmB0QJG-vDb-RvEvFBCoI3Eyt-RrWKn5VyzVihJVKvmlvYU_EKbVP-GMowU1hcnE5H1hmoYZkTftJ3gZ5yUN=w823-h929-no?authuser=0"/>
            </div>
            </div>
            </div>
    </section>
    );
}

export default About;