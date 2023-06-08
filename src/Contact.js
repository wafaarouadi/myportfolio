import React from 'react'
import './Contact.css';
import { GrContact } from 'react-icons/gr';


export default function Contact() {
    return (

        <div className='box-info-contact' id="Contact">
            <span className='Isso'><GrContact /></span>

            <p className="test">

                Contact
            </p>




            <div>  <div className='box-info'>

                <div>
                <img src={require("./img/me (1).webp")} alt="test" className="lien" />

                    <h6>Wafaa Rouadi</h6>

                </div>
                <div>
                    <img src={require("./img/gmail.jpg")} alt="test" className="lien" />
                    <h6>wafaaelrouadi@gmail.com</h6>

                </div>



                <div>
                    <img src={require("./img/phone.png")} alt="test" className="Address" className="lien" />
                    <h6>+212605189987</h6>

                </div>
                <div>
                    <img src={require("./img/inkdin.jpg")} alt="test" className="lien" />
                    <h6><a href='https://www.linkedin.com/in/wafae-rouadi-46971520a/'>Inkdin</a></h6>

                </div>
            </div>



                <div class="form">

                    <h2>Connectez-Vous</h2>

                    <input type="email" size="30" maxlength="40" ClassName="name" placeholder="Email" />

                    <input type="password" size="30" maxlength="40" name="password" placeholder="Mot de passe" />

                    <input type="checkbox" name="rest" />Rester Connecté

                    <div class="button">

                        <input type="submit" ClassName="connecter" value="Se Conneter" />
                    </div>
                    <a ClassName="link" href="#">S'inscription</a>
                </div>




            </div>
        </div>


    )
}
