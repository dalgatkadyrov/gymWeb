import './About.css' 
import {Link} from 'react-router-dom'


function About(setPage){
    return(
        <div className="about">
            <header>
                <nav className='about-nav'>
                    <img src="./images/logo.png" alt="" />
                    <div>
                        <Link to='/' className='home-btn'>HOME</Link>
                        <Link to='/about' className='about-btn'>ABOUT</Link>
                        <Link to='/reserve' className='reserve-btn'>RESERVE YOUR SPOT</Link>
                    </div>
                </nav>
                <div className='aboutUsTittle-about'>
                    <h1>ABOUT US</h1>
                </div>
            </header>

            <main>
                <section className="grid-about">
                    <div className='stage1'>
                        <h2>TAP INTO YOUR PRIMAL POWER. FORGE A STRONGER YOU</h2>
                        <div>
                            <h5>OUR VISION</h5>
                            <p>
                                Primal Training is committed to delivering a training experience rooted in raw strength, functional fitness,
                                and unwavering community support. We empower our members to tap into their primal power,
                                achieve their goals, and live a life of strength, resilience, and unwavering determination.
                            </p>
                        </div>
                    </div>
                    <div className="stage2">
                        {/* <img src="./images/2men.png" alt="" /> */}
                    </div>
                    <div className="stage3">
                        {/* <img src="./images/deadLift.jpg" alt="" /> */}
                    </div>
                    <div className="stage4">
                        <h2>DYNAMIC OPEN GYM</h2>
                        <p>
                            At Primal Training, we strip away the fluff and focus on the fundamentals. Our expert coaches guide you through intense,
                            functional workouts designed to build raw strength, resilience, and a body capable of anything.
                        </p>
                    </div>
                    <div className="stage5">
                        {/* <img src="./images/pushWeight.png" alt="" /> */}
                    </div>
                    <div className="stage6">
                        <p>WHAT WE BELIEVE IN</p>
                        <h3>JOIN THE PRIMAL TRIBE TODAY!</h3>
                        <button>RESERVE YOUR SPOT</button>
                    </div>
                </section>
            </main>
            <footer>
                <section className='primalTrainingFooter-about'>
                    <div className='primalFooterTop-about'>
                        <div className="primalFooterTopImgHolder-about"></div>
                        <h1>PrimalTraining</h1>
                    </div>

                    <div className='primalFooterBottom-about'>
                        <div>
                            <h1>CONTACT</h1>
                            <div>
                                <p>Email: hello@figma.com</p>
                                <p>Phone: (203)555-5555</p>
                            </div>
                        </div>
                        
                        <div>
                            <h1>OPENING HOURSE</h1>

                            <ul className='listFooter-about'>
                                <li><p>MON-FRI</p><p>5:00 - 23:00</p></li>
                                <li><p>SATURDAYS</p><p>8:00 - 16:00</p></li>
                                <li><p>SUNDAYS</p><p>8:00 - 13:00</p></li>
                                <li><p>HOLIDAYS</p><p>8:00 - 16:00</p></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h1>SOCIAL</h1>

                            <div className='linkHolderFooter-about'>
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


export default About;