import React from 'react'
import './Fother.css';


export default function Fother() {
    return (


        <div className="Fother-start">
            <div class="image-fother">
                <img src={require("./img/front-end.png")} alt="test" className="wafaa" />
            </div>


            <div ClassName="Fother-end">



                <div className='FLEX'>
                    <div className='End'>
                        <h4>Ouicklinks</h4>
                        <div className='Ouicklinks'>
                            <span><a href='#Home'>Home</a></span>
                            <span><a href="#About">About</a></span>
                            <span><a href='#Skils'>Skils</a></span>
                            <span><a href='#Projects'>Projects</a></span>
                        </div>
                    </div>


                    <div className='End'>

                        <h4 >Contact Me</h4>
                        <h5>Email:Wafaaelrouadi@gmail.com</h5>
                        <h5> Mobile : +2120605189987</h5>
                    </div>
                    <div className='End'>
                        <h4>Localisation</h4>

                        <h5>Address : Bournazil</h5>

                    </div>


                </div>

            </div>


        </div>
    )
}
