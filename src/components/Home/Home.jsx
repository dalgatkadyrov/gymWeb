import './Home.css'
import {Link} from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'




function Home(setPage){

    const [navVisibility, setNavVisibility] = useState(false)
    
    const img1Ref = useRef()
    const [img1Vis, setImg1Vis] = useState()
    
        console.log('el', img1Vis)
        useEffect(()=>{
            const observer = new IntersectionObserver((entries)=>{
                const entry = entries[0]
                setImg1Vis(entry.isIntersecting)
            })
            observer.observe(img1Ref.current)
    
        }, [])
    
    
        const img2Ref = useRef()
        const [img2Vis, setImg2Vis] = useState()
    
        console.log('el', img2Vis)
        useEffect(()=>{
            const observer = new IntersectionObserver((entries)=>{
                const entry = entries[0]
                setImg2Vis(entry.isIntersecting)
            })
            observer.observe(img2Ref.current)
    
        }, [])
    
    
        const img3Ref = useRef()
        const [img3Vis, setImg3Vis] = useState()
    
        console.log('el', img3Vis)
        useEffect(()=>{
            const observer = new IntersectionObserver((entries)=>{
                const entry = entries[0]
                setImg3Vis(entry.isIntersecting)
            })
            observer.observe(img3Ref.current)
    
        }, [])

    return(
        <div className="home">
            
            <header>
                <nav className='home-nav'>
                        <img src="./images/Logo.png" alt="" />
                        <div id='navMenu-home'>
                            <Link to='/' className='home-btn'>HOME</Link>
                            <Link to='/about' className='about-btn'>ABOUT</Link>
                            <Link to='/reserve' className='reserve-btn'>RESERVE YOUR SPOT</Link>
                        </div>

                        <div id="navMenuBurgerMain-home">
                            <div className="burgerMenuButton-home" onClick={()=>navVisibility?setNavVisibility(false):setNavVisibility(true)}>
                                <div className='burgerMenuButtonPart1-home'></div>
                                <div className='burgerMenuButtonPart2-home' style={{display: navVisibility?'none':'block'}}></div>
                            </div>
                            <div className="burgerMenu-home" style={{display: navVisibility?'flex':'none'}}>
                                <div><Link to='/' className='home-btn'>HOME</Link></div>
                                <div><Link to='/about' className='about-btn'>ABOUT</Link></div>
                                <div><Link to='/reserve' className='reserve-btn'>RESERVE YOUR SPOT</Link></div>
                            </div>
                        </div>
                </nav>
                <section className='trainHard'>
                    <div className='trainHard-title'>
                        <h1>TRAIN HARD. <span>LIVE BETTER</span></h1>
                    </div>
                    <div className="trainHard-content">
                        <div ref={img1Ref} style={{opacity:img1Vis?1:0}} className="trainHard-imgHolder ">
                            {/* <img src="/../images/hoppingOnTheBox.png" alt="" /> */}
                        </div>
                        <div className="trainHard-forTheCommitted todo">
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
                        <div ref={img2Ref} style={{opacity:img2Vis?1:0}} className="trainHard-lastImgHolder todo">
                            {/* <img src="./images/standingWithRope.png" alt="" /> */}
                        </div>
                        
                    </div>


                </section>

            </header>

            <main>
                <section className="joinTheCommunity-sect">
                    <div className='joinTheCommunity-title'>
                        <h1>JOIN THE <span>COMMUNITY</span> </h1>
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
                        <div ref={img3Ref} style={{opacity:img3Vis?1:0}} className="discoverYourPotential-img todo"></div>
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