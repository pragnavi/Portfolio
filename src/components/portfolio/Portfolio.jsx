import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IOS_IMG from '../../assets/IOS_IMG.jpeg'
import DEV_IMG from '../../assets/dev_img.jpeg'

const data = [
  {
    id: 1,
    image: IOS_IMG,
    title: 'Task Tab',
    description: 'An IOS App that simplifies daily task management through a user-friendly interface, offering persistent local storage, task editing, and calendar views to enhance productivity',
    github: 'https://github.com/pragnavi/Task-Tab',
  },
  {
    id: 2,
    image: IOS_IMG,
    title: 'Hurdle',
    description: 'Inspired from Wordle, this IOS app revolutionizes your Wordle experience with customizable word lengths, thematic selections, unique gameplay modes and more features',
    github: 'https://github.com/pragnavi/Hurdle'
  },
  {
    id: 3,
    image: DEV_IMG,
    title: 'Janus - Pedestrian Safety',
    description: 'Janus leverages Big Data analytics on NYPD arrest data and crime data and the Google Maps API to provide NYC pedestrians with safer walking routes, enhancing urban safety through technological innovation',
    github: 'https://github.com/pragnavi/Janus-Enhancing-Pedestrian-Safety-in-NYC-through-Big-Data-Analytics'
  },
  {
    id: 4,
    image: DEV_IMG,
    title: 'Optimizing OS Performance',
    description: 'A dedicated exploration into enhancing operating system performance through various optimization techniques and strategies',
    github: 'https://github.com/pragnavi/Optimizing-Performance-in-Operating-Systems'
  },
  {
    id: 5,
    image: DEV_IMG,
    title: 'Filtering & Neural Networks in ML',
    description: 'A comprehensive machine learning project exploring item-based and user-based filtering techniques, alongside neural network models, to enhance prediction accuracy in various applications',
    github: 'https://github.com/pragnavi/Advanced-Filtering-and-Neural-Networks-in-Machine-Learning'
  },
  {
    id: 6,
    image: DEV_IMG,
    title: 'Speech Recognition - LSTM',
    description: 'A Deep Learning project employing LSTM and bidirectional LSTM networks for high-accuracy speech recognition of spoken digits, showcasing advancements in audio signal processing and neural network modeling',
    github: 'https://github.com/pragnavi/Speech-Recognition-with-LSTM-and-Bidirectional-LSTM-Networks'
  },
  {
    id: 7,
    image: IOS_IMG,
    title: 'Enhanced Mario Kart',
    description: 'An advanced Mario Kart iOS app, featuring complex interactions, powerups, and customizable game settings for an immersive educational experience',
    github: 'https://github.com/pragnavi/Enhanced-Mario-Kart-Interactions'
  },
  {
    id: 8,
    image: DEV_IMG,
    title: 'Human-Detection - HOG',
    description: 'A project demonstrating the application of Histogram of Oriented Gradients (HOG) for effective human detection in images, complete with implementation, testing scripts, and a detailed analysis report',
    github: 'https://github.com/pragnavi/Human-Detection-Using-HOG-Descriptors'
  },
  {
    id: 9,
    image: DEV_IMG,
    title: 'Canny Edge Detector',
    description: 'A comprehensive exploration and implementation of the Canny Edge Detection algorithm, with detailed analysis and documentation of the process and results',
    github: 'https://github.com/pragnavi/Canny-Edge-Detector'
  },
  {
    id: 10,
    image: IOS_IMG,
    title: 'BlogScroll',
    description: 'An iOS app that dynamically presents a scrollable feed of Tumblr posts, offering a seamless content exploration experience',
    github: 'https://github.com/pragnavi/BlogScroll'
  },
  {
    id: 11,
    image: IOS_IMG,
    title: 'Quizzy Whiz',
    description: 'A real time IOS quiz app that tests your knowledge across various subjects and tracks your progress',
    github: 'https://github.com/pragnavi/Quizzy-Whiz-Real-Time'
  },
  {
    id: 12,
    image: IOS_IMG,
    title: 'Cloud Cast',
    description: 'Interactive iOS weather app leveraging real-time data and URLSession for dynamic, location-based forecasts',
    github: 'https://github.com/pragnavi/CloudCast_RealTime'
  },
  {
    id: 13,
    image: DEV_IMG,
    title: 'Image Classification - ResNet',
    description: 'A Deep Learning project employing LSTM and bidirectional LSTM networks for high-accuracy speech recognition of spoken digits, showcasing advancements in audio signal processing and neural network modeling',
    github: 'https://github.com/pragnavi/Deep-Learning-for-Image-Classification'
  },
  {
    id: 14,
    image: DEV_IMG,
    title: 'Interactive Educational Content Delivery System',
    description: 'Enhancing education in rural Chhattisgarh through a software-driven approach to deliver interactive learning content, fostering improved engagement and attendance',
    github: 'https://github.com/pragnavi/Interactive-Educational-Content-Delivery-System-for-Rural-Chhattisgarh'
  },
  {
    id: 15,
    image: DEV_IMG,
    title: 'Bike Sharing Demand Prediction',
    description: 'Leveraging R and machine learning models to predict bike-sharing demand, with insights into usage patterns and influencing factors',
    github: 'https://github.com/pragnavi/Bike-Sharing-Demand-Prediction'
  },
  {
    id: 16,
    image: DEV_IMG,
    title: 'Kerala Explorer',
    description: 'A web-based guide to exploring Kerala, offering a rich database of tourist spots with interactive CRUD functionalities',
    github: 'https://github.com/pragnavi/Kerala-Explorer'
  },
  {
    id: 17,
    image: DEV_IMG,
    title: 'Attendance Manager',
    description: 'A flexible and user-friendly platform for managing attendance in educational and corporate settings',
    github: 'https://github.com/pragnavi/Attendance-Manager'
  },
  {
    id: 18,
    image: DEV_IMG,
    title: 'Shopit',
    description: 'An intuitive and responsive web-based shopping platform designed to enhance the online shopping experience',
    github: 'https://github.com/pragnavi/Shopit'
  },
  {
    id: 19,
    image: DEV_IMG,
    title: 'Portfolio',
    description: 'A response react based portfolio website. This project contains the latest code for this portfolio website',
    github: 'https://github.com/pragnavi/Portfolio'
  },
  {
    id: 20,
    image: IOS_IMG,
    title: 'Favorites Tab',
    description: 'A Swift-based iOS app showing a list of latest movies with detailed description and demonstrating the use of UserDefaults to save user preferences and implement a favorites tab feature using a Tab Bar Controller',
    github: 'https://github.com/pragnavi/Favorites-Tab',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfoliio</h2>

      <div className="container  portfolio__container">
        {
          data.map(({id, image, title, description, github}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <div className="portfolio__item-text">
                  <h3>{title}</h3>
                  <h5>{description}</h5>
                </div>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn btn-primary' target='_blank'>Github</a>
                  {/* <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a> */}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
};

export default Portfolio