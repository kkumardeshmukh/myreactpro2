import React, { Component } from 'react'

export default class Footer extends Component {
    render() {

      

        return (
            <div className='container'  style={{height:"150px", width:"200px"}}>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://www.aljazeera.com/wp-content/uploads/2023/11/AP536365048774-1700734648.jpg?resize=1920%2C1394" className="d-block w-100" alt="not found1" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.aljazeera.com/wp-content/uploads/2023/11/AP536365048774-1700734648.jpg?resize=1920%2C1394" className="d-block w-100" alt="not found2" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.hindustantimes.com/ht-img/img/2023/11/23/1600x900/Actor-Prakash-Raj---File-_1700745855532.jpg" className="d-block w-100" alt="not found3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}
