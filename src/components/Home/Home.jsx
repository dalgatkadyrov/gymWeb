import './Home.css'
import {Link} from 'react-router-dom'


function Home(setPage){
    return(
        <div className="home">
            <header>
                <nav className='home-nav'>
                    <img src="./images/Logo.png" alt="" />
                    <div>
                        <Link to='/' className='home-btn'>HOME</Link>
                        <Link to='/about' className='about-btn'>ABOUT</Link>
                        <Link to='/reserve' className='reserve-btn'>RESERVE YOUR SPOT</Link>
                    </div>
                </nav>
                <section className='trainHard'>
                    <div className='trainHard-title'>
                        <h1>TRAIN HARD.</h1>
                        <h1>LIVE BETTER</h1>
                    </div>
                    <div className="trainHard-content">
                        <div className="trainHard-imgHolder">
                            {/* <img src="" alt="/../images/hoppingOnTheBox.png" /> */}
                        </div>
                        <div className="trainHard-forTheCommitted">
                            <h2>FOR THE COMMITTED</h2>
                            <div>
                                <p>
                                    Train like an athlete with top-tier equipment and expert programming. 
                                    Whether you're building muscle or breaking PRs, we help you push past limits.
                                </p>
                                <a href="">ABOUT US</a>
                            </div>

                        </div>
                        <div className="trainHard-guidedByExperts">
                            <h2>GUIDED BY EXPERTS</h2>
                            <p>We believe in creating a positive environment where you can thrive.
                                 We're here to help you achieve your goals and unlock your full potential.
                            </p>
                        </div>
                        <div className="trainHard-dynamicOpenGym">
                            <h2>DYNAMIC OPEN GYM</h2>
                            <p>Our facility is the optimal environment for strength training and performance,
                                 fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement.
                            </p>
                        </div>
                        <div className="trainHard-lastImgHolder">
                            {/* <img src="./images/standingWithRope.png" alt="" /> */}
                        </div>
                        
                    </div>


                </section>

            </header>

            <main>
                <section className="joinTheCommunity-sect">
                    <div className='joinTheCommunity-title'>
                        <h1>JOIN THE</h1>
                        <h1>COMMUNITY</h1>
                    </div>
                    <div className='joinTheCommunity-cont'>
                        <div className="discoverYourPotential">
                            <div className='discoverYourPotential1-home'>
                                <h2>DISCOVER YOUR POTENTIAL</h2>
                            </div>
                            <div className='discoverYourPotential2-home'>
                                <h3>EXPERT COACHING</h3>
                                <p>Trainers who are passionate about your progress.</p>
                            </div>
                            <div className='discoverYourPotential3-home'>
                                <h3>RESULTS-DRIVEN PROGRAM</h3>
                                <p>Workouts that deliver tangible, measurable results.</p>
                            </div>
                            <div className='discoverYourPotential4-home'>
                                <h3>A SUPPORTIVE TRIBE</h3>
                                <p>A community that pushes you to be your best.</p>
                            </div>
                            <div className='discoverYourPotential5-home'>
                                <button>VIEW CLASSES</button>
                            </div>
                        </div>
                        <div className="discoverYourPotential-img"></div>
                    </div>
                    

                </section>

                <section className="joinThePrimalTribeToday-home">
                    <p>WHAT WE BELIEVE IN</p>
                    <h1>JOIN THE PRIMAL TRIBE TODAY!</h1>
                    <button>RESERVE YOUR SPOT</button>
                </section>
            </main>

            <footer>
                <section className='primalTrainingFooter-home'>
                    <div className='primalFooterTop-home'>
                        <div className="primalFooterTopImgHolder-home"></div>
                        <h1>PrimalTraining</h1>
                    </div>

                    <div className='primalFooterBottom-home'>
                        <div>
                            <h1>CONTACT</h1>
                            <div>
                                <p>Email: hello@figma.com</p>
                                <p>Phone: (203)555-5555</p>
                            </div>
                        </div>
                        
                        <div>
                            <h1>OPENING HOURSE</h1>

                            <ul className='listFooter-home'>
                                <li><p>MON-FRI</p><p>5:00 - 23:00</p></li>
                                <li><p>SATURDAYS</p><p>8:00 - 16:00</p></li>
                                <li><p>SUNDAYS</p><p>8:00 - 13:00</p></li>
                                <li><p>HOLIDAYS</p><p>8:00 - 16:00</p></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h1>SOCIAL</h1>

                            <div className='linkHolderFooter-home'>
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

export default Home;