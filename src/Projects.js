
import React from 'react'
import './Projects.css'
import { GrProjects } from 'react-icons/gr';


export default function Projects() {
  return (
    <div className='Prp-projet' id='Projects'>

      <span className='Isso'><GrProjects /></span>


      <p className="test">
     

        Projects
      </p>
      <div className='Projects'>

        <div className='div1'>
          
          <img src={require("./projet/beaty2.jpeg")} alt="test" className="pro" />
          <img src={require("./projet/beauty1.jpeg")} alt="test" className="pro" />
        </div>

        <div className='div1'>
          <img src={require("./projet/pharma1.jpeg")} alt="test" className="pro" />
          <img src={require("./projet/pharma2.jpeg")} alt="test" className="pro" />



        </div>



        <div className='div1'>

          <img src={require("./projet/food.jpeg")} alt="test" className="pro" />

          <img src={require("./projet/food2.jpeg")} alt="test" className="pro" />

        </div>

        <div className='div1'>

          <img src={require("./projet/model.jpg")} alt="test" className="pro" />
          <img src={require("./projet/box 1 (2).jpeg")} alt="txest" className="pro" />


        </div>
        <div className='div1'>
        <img src={require("./projet/montres.jpeg")} alt="test" className="pro" />


          <img src={require("./projet/profil.jpg")} alt="test" className="pro" />
          </div>
          <div className='div1'>


          <img src={require("./projet/box 1 (1).jpeg")} alt="test" className="pro" />


          </div>


       



      </div>
      <div class="letterspacing">∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿
</div>

    </div>
  )
}
