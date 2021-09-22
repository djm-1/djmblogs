import React from 'react'

export default function MyCard(props) {
    //alert(props.theme.themeName)
    return (
        <div>
            
    <div className={`card testimonial-card ${props.theme.navColor}-color`} style={{
        
    }}>


    <div className="card-up purple-gradient lighten-1"></div>


    <div className="avatar mx-auto white">
        <img src="https://res.cloudinary.com/dabykheek/image/upload/v1630162039/Djmblogs/djm-1_t418sz.jpg" className="rounded-circle"
        alt="man avatar"/>
    </div>


    <div className="card-body">

        <h4 className="card-title">Dibyajyoti Mondal</h4>
        <hr/>

        <p><i className="fas fa-quote-left"></i> I am currently pursuing Electronics and Telecommunication Engineering at Jadavpur University (2019-2023). My passion is to write code and make cool stuff out of that. <i className="fas fa-quote-right"></i>
        </p>
    </div>

    </div>
    </div>

    )
}
