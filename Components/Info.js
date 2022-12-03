import React from 'react'

export default function Info () {
    return(
        <div id="info">
            <img className="info-img" src="../images/Rectangle.png"/>
            <h1 className="info-name">Laura Smith</h1>
            <h2 className="info-title">Frontend Developer</h2>
            <p className="info-web">laurasmith.website</p>
            <div className="btn--group">
                <button className="btn-email">
                    <i className="fa-solid fa-envelope"></i>
                    <span>Email</span>
                </button>
                <button className="btn-linkedin">
                    <i className="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                </button>
            </div>
        </div>
    )
}