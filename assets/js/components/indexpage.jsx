import React from 'react';
import { Animated } from 'react-animated-css';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import {  setDocumentTitle } from '../utils';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Jumbotron } from 'react-bootstrap';


class IndexPage extends React.Component{

  componentDidMount(){
    setDocumentTitle('Minat Silvester')
  }

  render(){
    return(
      <>
        <div className="hero-image">
          <div className="container">
            <div className="hero-text">
              <Animated animationIn="fadeIn" isVisible={true} animationInDelay={100} >
                <h1>Anger + Desire</h1>
              </Animated>
              <Animated animationIn="fadeIn" isVisible={true} animationInDelay={500} >
                <h1> = </h1>
              </Animated>
              <Animated animationIn="fadeIn" isVisible={true} animationInDelay={1000} >
                <h1> Passion </h1>
              </Animated>
              <br/>
              <Animated animationIn="fadeIn" isVisible={true} animationInDelay={1200} >
                <h3>No knowldege can ever amount to a process, unless it is driven by Passion</h3>
              </Animated>
            </div>
          </div>
        </div>
        <br/>
        <div className="container">
          <div className="introduction-paragraph">
            <p>Hello There, I am Minat Silvester</p>
            I Design and Develop Web Services on a variety of languages and framework
          </div>
          <br/>
          <div className="paragraph-with-space">
            <p>I can also do UI/UX, Front end design, Machine Learning, Computer Vision. Being a guy just out of college,
            filled with all the enthusiasim and energy, I got a hobby of getting myself into very difficult situations and fixing it.
            Don't care for the cause, But fixing messy situations is kind of my thing.</p>
          </div>
          <br/>
          <div className="introduction-paragraph">
            <p>I do other fun stuff too, Check out my activities</p>
          </div>
          <br/>
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
            <Link to="/blogs" className="no-underline">
            <ScrollAnimation animateIn="fadeInLeft">
              <div className="style-grid-red">
                <center>
                  <br/>
                  <h1 className="bigger-font">Blogs</h1>
                  <img src="/images/medium.png" alt="Minat Silvester's Blogs" height={'300vh'}/>
                  <p className="bigger-para">Anecdeotes of me working on something, facing difficulties, running into problems
                    and finally learning and fixing them</p>
                </center>
              </div>
            </ScrollAnimation>
            </Link>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
            <Link to="/topics" className="no-underline">
            <ScrollAnimation animateIn="fadeIn">
              <div className="style-grid-yellow">
                <center>
                  <br/>
                  <h1 className="bigger-font">Youtube</h1>
                  <img src="/images/youtube.png" alt="Minat Silvester's Youtube Videos" height={'300vh'}/>
                  <p className="bigger-para">The biggest platform for sharing what you know, check out my videos and playlists on
                  different technologies </p>
                </center>
              </div>
            </ScrollAnimation>
            </Link>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
            <a href="https://www.linkedin.com/in/minat-silvester-80a2a8148/" target="_blank" className="no-underline">
            <ScrollAnimation animateIn="fadeInRight">
              <div className="style-grid-fixed">
                <center>
                  <br/>
                  <h1 className="bigger-font">LinkedIn</h1>
                  <img src="/images/linked.png" alt="Minat Silvester's Blogs" height={'300vh'}/>
                  <p className="bigger-para">Check out my profile on the best platform for visionaries, where every one is respected
                  and every idea is given a thought.</p>
                </center>
              </div>
            </ScrollAnimation>
            </a>
            </div>
          </div>
          <div className="paragraph-with-space">
            <p>Knowledge is useless if it is poessesed by you and not spread. It has value when it is used, and it cannot be used
            if it is not shared. I make it a strong point and do my best to share my knowledge to prove the point.</p>
          </div>
          <br/>
          <div className="introduction-paragraph">
            <p>Steady, Passionate and Evergrowing to make a better future</p>
          </div>
          <div className="paragraph-with-space">
            <p>From Being fascinated and growing a passion for computers in childhood, To choosing to learn it and making a career out of
            it, I have come along way. The lesson that journey taught is that, technology is a beautiful piece of art that emerges from
            the creative power of human brain in the quest to make a better world.</p>
          </div>
          <br/>
          <center>
            <ScrollAnimation animateIn="fadeIn">
              <img src="images/quote.jpg" alt="tesla quote" height="500" />
            </ScrollAnimation>
          </center>
          <br/><br/>
          <div className="paragraph-with-space">
          <p>Just as one of the most inspirational human to have ever born states, I am focued to add my contribution to the betterment of
          mankind.</p>
          </div>
          <div className="introduction-paragraph">
          <p>I'm Available!!!</p>
          </div>
          <div className="paragraph-with-space">
            <p>I am open to freelancing and can help you set up your business's website and support other technology needs, You can contact
            me through any social media provided here.</p>
          </div>
          <br/>
          <center>
            <SocialIcon url="https://www.facebook.com/minat.silvester" />
            <SocialIcon url="https://www.instagram.com/minat__silvester/?hl=en"/>
            <SocialIcon url="https://www.linkedin.com/in/minat-silvester-80a2a8148/"/>
            <SocialIcon url="https://twitter.com/minatsilvester"/>
            <SocialIcon url="https://medium.com/@minat_silvester"/>
            <SocialIcon url="https://www.youtube.com/channel/UCO4kvzDvzNfWqNBqX4WHMLg?view_as=subscriber"/>
          </center>
          <br/>
          <div className="paragraph-with-space">
          <center>
            <h1>Got something to say? Just <Link to="/leave_a_message">Send me a message</Link></h1>
          </center>
          </div>
        </div>
      </>
    );
  }
}

export default IndexPage;
