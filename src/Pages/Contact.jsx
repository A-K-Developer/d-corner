import FormContact from '../components/formCompo';
import './css/ContactPage.css'
import {lastPictures} from '../utils/constants';

;const Contact = () => {
    return (
        <div>
            <div className="headerInContact">
                <img className='header-Img' src={lastPictures.contactPage} alt="contactPAge error" />
                <div className="heading">
                    <h3>Let's get in touch!</h3>
                    <p>A to-the-point tagline that really draws in the user</p>
                </div>
                <div className="contactInfo">
                    <div className="infoContent">
                    <h3>Contact us</h3>
                    <p>We encourage you to fill up the contact form and we will get back to you as soon as possible.</p>
                    <div className="contactInfoContainer">
                        <div className="infoRows">
                            <img src="" alt="email" />
                            <p>designdevcorner@gmail.com</p>
                        </div>
                        <div className="infoRows">
                            <img src="" alt="number" />
                            <p>+45 30 52 1914</p>
                        </div>
                        <div className="infoRows">
                            <img src="" alt="address" />
                            <p>Company Adresse 23,
                                Copenhagen, Denmark</p>
                        </div>
                    </div>
                    </div>
                    <div className="opacityContactInfo"></div>

                </div>
            </div>
            <div className="form">
                <div className="form-heading">
                    <h3>Let's get this show on the road</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                </div>
                
                    <FormContact />
               
            </div>
        </div>
    )
}
export default Contact;


