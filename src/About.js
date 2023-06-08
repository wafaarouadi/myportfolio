import React from 'react'
import './About.css';
import { FaUserGraduate } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { FaSchool } from 'react-icons/fa';


export default function

    () {
    return (
        <div>
            <span className='Isso'><FaUserGraduate /></span>

            <div className="test" id="About">

                About me
            </div>

            <div class="container">
                <div class="image-box">
                    <img src={require("./image/wafaaelrouadi.jpeg")} alt="test" className="wafaa" />
                </div>
                <div class="text-box">

                    <h1 className='HI'>Hi I'm front-end developer  </h1>

                    <p className="Pargraphe">
                         I'm Wafaa Rouadi , I'm a front-end web developer . Coding have been my passion
                        my dream is to become a successful web developer, because I enjoy programming. I enjoy creating beautifully designed, intuitive and functional websites
                    </p>


                    <button class="cv-button"><a href="#h">
                        Download CV
                    </a>
                    </button>



                </div>

            </div>

            <div class="letterspacing">∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿
            </div>



            <div className='Card'>
                <div>
                    <a href='#' className='ico' ><FaSchool /></a>
                    <h3>Eduction</h3>
                    <h6>Bachelor's degree in computer development and network security</h6>
                    <img src={require("./img/kd.jpg")} alt="test" className="lien" />


                </div>
                <div>
                    <a href='#' className='ico'><BiCodeAlt /></a>
                    <h3>Work Exp</h3>
                    <h6>Training in the public treasury of the Kingdom</h6>
                    <img src={require("./img/sm.jpg")} alt="test" className="lien" />

                </div>
                <div>
                    <a href='#' className='ico'><FaMusic /></a>
                    <h3>Hobbies</h3>
                    <h6 >
                        Art, Dancing , Playing sports (Baseball, Volleyball),Singing
                    </h6>
                                        <img src={require("./img/OIP.jpg")} alt="test" className="lien-OP" />

                </div>

            </div>


            <div class="letterspacing">∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿
            </div>


        </div>





    )
}



