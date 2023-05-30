import { Fragment } from "react"
import classes from "./mainpage.module.css"
import Kaifpic from "../Images/MD_KAIF.jpeg"
import workingcodepic from "../Images/wwc.jpeg"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Mainpage=()=>{


      return(
        <Fragment>
              <header className={classes.Headingbox}>
                     <div className={classes.details}>
                     <p>About</p>
                     </div>
                     <div className={classes.Edu}>
                      <p>Education</p>
                     </div>
                     <div className={classes.contact}>
                     <p>Contact Me</p>
                     </div>
              </header>
          <div className={classes.container}>
                <div className={classes.heading}>
                 <p>HELLO</p>
                 <p>I AM MOHAMED KAIF</p>
                 </div>
          </div>
          {/* <div> */}
                 <img src={Kaifpic} className={classes.image} alt="Pic of me wearing E-cell Hoodie"></img>
          {/* </div> */}
          <div className={classes.icons}>
            <a href="https://instagram.com/md_kkaiff_10?igshid=NTc4MTIwNjQ2YQ==">  <InstagramIcon fontSize="large"/></a>
          </div>
          <div className={classes.iconlinkedin}>
          <a href="https://www.linkedin.com/in/mohamed-kaif-182636259"><LinkedInIcon fontSize="large"/></a>
          </div>
          <div className={classes.githubicon}>
          <a href="https://github.com/Mohamedkaif10"><GitHubIcon fontSize="large"/></a>
          </div>
          <div className={classes.About}>
                 <p>ABOUT ME</p>
                 <div className={classes.Abtcontainer}>
                     <p>Hello, I'm Mohamed Kaif.D, an undergraduate studying Industrial Chemistry at IIT Hyderabad. Alongside my academic pursuits, I am passionate about web development, specifically in React.</p>
                     <p>With a keen interest in React, I have honed my skills in web development to create dynamic and interactive user interfaces. I find joy in crafting elegant and efficient code that brings ideas to life on the web.</p>
                     <p>I am committed to continuous learning and staying updated with the latest advancements in web technologies and frameworks. As a result, I strive to create seamless and user-friendly experiences by leveraging the power of React and other cutting-edge tools.</p>
                 </div>
                 <div className={classes.abtimage}>
                     <img src={workingcodepic} className={classes.immg} alt="a man working on his code"></img>

                 </div>
          </div>
          <div className={classes.contactme}>
                <p>EDUCATION</p>
          <section className={classes.timelline}>
            <div className={classes.swipercontainer}> 
                <div className={classes.swiperwrapper}>
                    <div className={classes.swiperslide}>
                      <div className={classes.timestamp}><span className={classes.date}>2018-2020</span></div>
                      <div className={classes.status}><span>The Leaders Academy,Karaikudi</span></div>
                    </div>
                    <div className={classes.swiperslide}>
                      <div className={classes.timestamp}><span className={classes.date}>MIRS, Chennai</span></div>
                      <div className={classes.status}><span>2020-2022</span></div>
                    </div>
                    <div className={classes.swiperslide}>
                      <div className={classes.timestamp}><span className={classes.date}>2022-Present</span></div>
                      <div className={classes.status}><span>Indian Instiute Of Technology,Hyderabad</span></div>
                    </div>
                </div>
               </div>
       </section>
          </div>
          <footer className={classes.CM}>
               <p>REACH ME</p>
              <p>If you're interested in collaborating on exciting web development projects or have any inquiries, please feel free to reach out to me via  <a href = "mailto:mkaif7736@google.com?subject=Collaboration%20Inquiry%20">
 E-mail
</a> or connect with me on  <a href ="https://www.linkedin.com/in/mohamed-kaif-182636259">LinkedIn</a>. I look forward to exploring new opportunities and contributing to the world of React and web development</p>
          </footer>
          </Fragment>
      )
    }
export default Mainpage