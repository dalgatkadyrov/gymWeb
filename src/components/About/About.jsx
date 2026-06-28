import './About.css' 
import {Link} from 'react-router-dom'
import {useState, useEffect, useRef} from 'react'

function About(setPage){

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
        <div className="about">
            <header>
                <nav className='about-nav'>
                        <img src="./images/Logo.png" alt="" />
                        <div id='navMenu-about'>
                            <Link to='/' className='home-btn'>HOME</Link>
                            <Link to='/about' className='about-btn'>ABOUT</Link>
                            <Link to='/reserve' className='reserve-btn'>RESERVE YOUR SPOT</Link>
                        </div>

                        <div id="navMenuBurgerMain-about">
                            <div className="burgerMenuButton-about" onClick={()=>navVisibility?setNavVisibility(false):setNavVisibility(true)}>
                                <div className='burgerMenuButtonPart1-about'></div>
                                <div className='burgerMenuButtonPart2-about' style={{display: navVisibility?'none':'block'}}></div>
                            </div>
                            <div className="burgerMenu-about" style={{display: navVisibility?'flex':'none'}}>
                                <div><Link to='/' className='home-btn'>HOME</Link></div>
                                <div><Link to='/about' className='about-btn'>ABOUT</Link></div>
                                <div><Link to='/reserve' className='reserve-btn'>RESERVE YOUR SPOT</Link></div>
                            </div>
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
                    <div className="stage2" ref={img1Ref} style={{opacity:img1Vis?1:0}}>
                        {/* <img src="./images/2men.png" alt="" /> */}
                    </div>
                    <div className="stage3" ref={img2Ref} style={{opacity:img2Vis?1:0}}>
                        {/* <img src="./images/deadLift.jpg" alt="" /> */}
                    </div>
                    <div className="stage4">
                        <h2>DYNAMIC OPEN GYM</h2>
                        <p>
                            At Primal Training, we strip away the fluff and focus on the fundamentals. Our expert coaches guide you through intense,
                            functional workouts designed to build raw strength, resilience, and a body capable of anything.
                        </p>
                    </div>
                    <div className="stage5" ref={img3Ref} style={{opacity:img3Vis?1:0}}>
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