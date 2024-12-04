    // import React from "react";
    // import { Swiper, SwiperSlide } from "swiper/react";
    // import { Navigation, Pagination } from "swiper/modules";
    // import "swiper/css";
    // import "swiper/css/navigation";
    // import "swiper/css/pagination";
    // import "./style.css";
    // import image1 from "./img/first.jpg"
    // import image2 from "./img/high-angle.jpg"
    // import "./CertificationPage.css"

    // const Header = () => {
    // const slides = [
    //     {
    //     title: "Получайте навыки и сертификации",
    //     description:
    //         "Хотите добиться профессионального успеха? С подготовкой к сертификациям на нашей платформе вы сможете подтвердить владение навыками AWS, Azure, CompTIA и др.",
    //     imageUrl: image1,
    //     buttonText: "Подробнее",
    //     },
    //     {
    //     title: "Откройте новые возможности",
    //     description:
    //         "Изучайте востребованные навыки и продвигайте свою карьеру вперед.",
    //     imageUrl: image2,
    //     buttonText: "Узнать больше",
    //     },
    //     {
    //     title: "Подготовка к экзаменам",
    //     description: "Получите необходимые знания и пройдите сертификацию.",
    //     imageUrl: "path/to/your/image3.jpg",
    //     buttonText: "Начать сейчас",
    //     },
    // ];

    // return (
    //     <Swiper
    //     modules={[Navigation, Pagination]}
    //     navigation
    //     pagination={{ clickable: true }}
    //     spaceBetween={50}
    //     slidesPerView={1}
    //     >
    //     {slides.map((slide, index) => (
    //         <SwiperSlide key={index}>
    //         <div className="slide-container" >
    //             <div className="slide-content">
    //             <h2>{slide.title}</h2>
    //             <p>{slide.description}</p>
    //             <button className="slide-button">{slide.buttonText}</button>
    //             </div>
    //             <div className="slide-image">
    //             <img className="img" src={slide.imageUrl} alt="Slide Image" />
    //             </div>
    //         </div>
    //         </SwiperSlide>
    //     ))}
    //     </Swiper>
    // );
    // };

    // const CertificationPage = () => {
    //     return (
    //     <div className="certification-page">
    //         <section className="hero-section">
    //         <h1>Подготовка к сертификации</h1>
    //         <p>
    //             Udemy предлагает специализированные курсы в сфере ИТ, бизнеса и управления проектами,
    //             созданные экспертами для успешной подготовки учащихся к сдаче сторонних сертификационных
    //             экзаменов. Эти недорогие курсы станут для вас интерактивной и адаптируемой опцией практической
    //             подготовки к успешной сдаче экзаменов.
    //         </p>
    //         </section>
    
    //         <section className="certification-organizations">
    //         <h2>Ведущие сертифицирующие организации</h2>
    //         <p>
    //             Получайте сертификаты от ведущих организаций в индустрии с нашим каталогом подготовительных сертификационных курсов
    //         </p>
    
    //         <div className="organization-list">
    //             <div className="organization-item">
    //             <h3>Сертификации Amazon Web Services (AWS)</h3>
    //             <p>8 200 296 студентов</p>
    //             </div>
    //             <div className="organization-item">
    //             <h3>Сертификации Microsoft</h3>
    //             <p>4 161 867 студентов</p>
    //             </div>
    //             <div className="organization-item">
    //             <h3>Сертификации Cisco</h3>
    //             <p>3 415 078 студентов</p>
    //             </div>
    //             <div className="organization-item">
    //             <h3>Сертификации CompTIA</h3>
    //             <p>3 056 167 студентов</p>
    //             </div>
    //         </div>
    
    //         <button className="view-more-button">→</button>
    //         </section>
    //     </div>
    //     );
    // };
    // CertificationPage();

    // export default Header ;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import image1 from "./img/first.jpg";
import image2 from "./img/high-angle.jpg";
import image3 from "./img/com.jpg"
import "./CertificationPage.css";

import img4 from "./img/AWS-Certified.png"
import img5 from "./img/images.png"
import img6 from "./img/CCNP-Collaboration-certwizard.png"
import img7 from "./img/unnamed.jpg"
import img8 from "./img/bg.jpg"

const Header = () => {
  const slides = [
    {
      title: "Gain skills and certifications",
      description:  "Want to achieve professional success? With certification preparation on our platform, you can confirm your AWS, Azure, CompTIA, and other skills.",
      imageUrl: image1,
      buttonText: "More details",
    },
    {
      title: "Open up new possibilities",
      description: "Learn in-demand skills and advance your career.",
      imageUrl: image2,
      buttonText: "Find out more",
    },
    {
      title: "Preparation for exams",
      description: "Get the knowledge you need and get certified.",
      imageUrl: image3,
      buttonText: "Start now",
    },
  ];
  
  const handleScrollToSection = () => {
    // Scroll smoothly to the section with id="certifications"
    document.getElementById("certifications").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide-container">
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button className="slide-button" onClick={handleScrollToSection}>{slide.buttonText}</button>
            </div>
            <div className="slide-image">
              <img className="img" src={slide.imageUrl} alt="Slide Image" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const CertificationPage = () => {
  return (
    <div  className="certification-page">
        <Header/>
      <section className="hero-section">
        <h1>Preparation for certification</h1>
        <p>
        EduLearn offers specialized courses in IT, business, and project management, created by experts to help students succeed on third-party certification exams. These low-cost courses provide you with an interactive, customizable, hands-on preparation option to succeed on exams.
        </p>
      </section>

      <section id="certifications" className="certification-organizations">
        <h2>Leading Certification Organizations</h2>
        <p>
        Earn certifications from industry-leading organizations with our catalog of preparatory certification courses
        </p>

        <div className="organization-list">
            <div className="organization-item">
              <h3>Certifications Amazon (AWS)</h3>
              <p>8 200 students</p>
              <img src={img4}/>
            </div>
          <div className="organization-item">
            <h3>Certifications Microsoft</h3>
            <p>4 161 students</p>
            <img src={img5}/>
          </div>
          <div className="organization-item">
            <h3>Certifications Cisco</h3>
            <p>3 415 students</p>
            <img src={img6}/>
          </div>
          <div className="organization-item">
            <h3>Certifications CompTIA</h3>
            <p>3 056 students</p>
            <img src={img7}/>
          </div>
          <div className="organization-item">
            <h3>Certifications Google</h3>
            <p>3 056 students</p>
            <img src={img8}/>
          </div>
        </div>

      </section>
    </div>
  );
};

export default CertificationPage;
