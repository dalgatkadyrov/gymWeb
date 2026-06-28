import './Reserve.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'

function Reserve(setPage) {
    
    const [navVisibility,setNavVisibility] = useState(false)

    
    
    return(
        <div className="reserve">
            <header>
                <nav className='reserve-nav'>
                        <img src="./images/Logo.png" alt="" />
                        <div id='navMenu-reserve'>
                            <Link to='/' className='home-btn'>HOME</Link>
                            <Link to='/about' className='about-btn'>ABOUT</Link>
                            <Link to='/reserve' className='reserve-btn'>RESERVE YOUR SPOT</Link>
                        </div>

                        <div id="navMenuBurgerMain-reserve">
                            <div className="burgerMenuButton-reserve" onClick={()=>navVisibility?setNavVisibility(false):setNavVisibility(true)}>
                                <div className='burgerMenuButtonPart1-reserve'></div>
                                <div className='burgerMenuButtonPart2-reserve' style={{display: navVisibility?'none':'block'}}></div>
                            </div>
                            <div className="burgerMenu-reserve" style={{display: navVisibility?'flex':'none'}}>
                                <div><Link to='/' className='home-btn'>HOME</Link></div>
                                <div><Link to='/about' className='about-btn'>ABOUT</Link></div>
                                <div><Link to='/reserve' className='reserve-btn'>RESERVE YOUR SPOT</Link></div>
                            </div>
                        </div>

                </nav>
                <div className='bookSessionTitle-reserve'>
                    <h1>BOOK A </h1> <h1>SESSION</h1>
                </div>
            </header>

            <main>
                <section className="mainSection-reserve">
                    
                    <div className='mainSectionTop-reserve'>
                        <div className='mainSectionTop-strength'>
                            <h2>STRENGTH</h2>
                            <div>
                                <p>Weekdays at 6AM</p>
                                <p>Weekends and Holidays at 8AM</p>
                                <p>Build a foundation of raw power with our comprehensive weightlifting and strength training programs. </p>
                            </div>
                            <button>RESERVE YOUR SPOT</button>
                        </div>
                        <div className='mainSectionTop-conditioning'>
                            <h2>CONDITIONING</h2>
                            <div>
                                <p>Weekdays at 8AM</p>
                                <p>Weekends and Holidays at 10AM</p>
                                <p>Push your limits with high-intensity workouts that challenge your cardiovascular endurance and build functional fitness. </p>
                            </div>
                            <button>RESERVE YOUR SPOT</button>
                        </div>
                        <div className='mainSectionTop-community'>
                            <h2>COMMUNITY <br /> CLASSES</h2>
                            <div>
                                <p>Every day on the hour</p>
                                <p>Experience the power of collective effort with our custom Workout of the Day. Push your limits alongside like-minded individuals. </p>
                            </div>
                            <button>RESERVE YOUR SPOT</button>
                        </div>
                    </div>
                    
                    <div className='mainSectionBottom-reserve'>
                        <h2>PRIMAL PERSONAL TRAINING</h2>
                        <p>Receive personalized guidance and tailored programs designed to unlock your individual primal potential. Our expert coaches will guide you every step of the way.</p>
                        <button>RESERVE YOUR SPOT</button>
                    </div>

                </section>
            </main>
            <footer>
                <section className='primalTrainingFooter-reserve'>
                    <div className='primalFooterTop-reserve'>
                        <div className="primalFooterTopImgHolder-reserve"></div>
                        <h1>PrimalTraining</h1>
                    </div>

                    <div className='primalFooterBottom-reserve'>
                        <div>
                            <h1>CONTACT</h1>
                            <div>
                                <p>Email: hello@figma.com</p>
                                <p>Phone: (203)555-5555</p>
                            </div>
                        </div>
                        
                        <div>
                            <h1>OPENING HOURSE</h1>

                            <ul className='listFooter-reserve'>
                                <li><p>MON-FRI</p><p>5:00 - 23:00</p></li>
                                <li><p>SATURDAYS</p><p>8:00 - 16:00</p></li>
                                <li><p>SUNDAYS</p><p>8:00 - 13:00</p></li>
                                <li><p>HOLIDAYS</p><p>8:00 - 16:00</p></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h1>SOCIAL</h1>

                            <div className='linkHolderFooter-reserve'>
                                <a href="#">Instagram</a>
                                <a href="#">X</a>
                                <a href="#">LinkedIn</a>
                                <a href="#">Spotify</a>
                            </div>
                        </div>
                    </div>

                </section>
            </footer>
        </div>
    )
}

export default Reserve