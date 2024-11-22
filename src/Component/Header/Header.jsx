
import './Header.css'
import student from '../../assets/student.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import dars1 from '../../assets/dars1.mp4'
import dars2 from '../../assets/dars2.mp4'
import dars3 from '../../assets/dars3.mp4'
import { t } from 'i18next';
import '../../Pages/Course/Course.css'
import math from '../../assets/math1.jpg'
import fizika from '../../assets/fizika.jpg'
import fizika1 from '../../assets/fizika1.jpg'
import math2 from '../../assets/math2.jpg'
import math1 from '../../assets/math4.webp'
import image from '../../assets/image.png'
// import image from '../../assets/image copy.png'


function Header() {
  useEffect(function () {
    Aos.init({ duration: 1000 }); 
  }, []);
  const backgroundImageStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    with:'100%'
}


  

  return (
    <>
    <div className='header' style={backgroundImageStyle}>
      <div className='container header__container'>
          <h1 className='header__title'>
           {t('header.title1')}<span className='header__span'>{t('header.span1')}</span> {t('header.title2')} <span className='header__span'>{t('header.span2')}</span> {t('header.title3')} <span className='header__span'>{t('header.span3')}</span> {t('header.title4')}
          </h1>
          <p className='header__text'>
          <i class="fa-solid fa-graduation-cap"></i>
         {t('header.text7')}
          </p>
          <Link to="/contact" className='header__link_btn'>{t('navbar.btn')}</Link>
        {/* <img className='header__img' src={student} alt="" /> */}
      </div>
    </div>
    <div className='cours'>
      <div className='container cours__container'>
        <h1 className='cours__title' data-aos="zoom-in-down">{t('kurs.name')}</h1>
        <ul className='cours__list'>
          <li className='cours__item' data-aos="zoom-in-down">
            <img className='cours__img' src={math} alt="math" />
            <h2 className='cours__name'>
              {t('kurs.text1')}
            </h2>
            <p className='cours__text'>
            <i class="fa-regular fa-calendar-days"></i>
            {t('kurs.text6')} <span className='cours__span'>{t('kurs.text7')}</span>
            </p>
            <p className='cours__text'>
            <i class="fa-solid fa-money-bill"></i>
            {t('kurs.text8')}<span className='cours__span'>{t('kurs.text9')}</span>
            </p>
          </li>
          <li className='cours__item' data-aos="zoom-in-down">
            <img className='cours__img' src={math2} alt="math" />
            <h2 className='cours__name'>
             {t('kurs.text2')}
            </h2>
            <p className='cours__text'>
            <i class="fa-regular fa-calendar-days"></i>
            {t('kurs.text6')} <span className='cours__span'>{t('kurs.text7')}</span>
            </p>
            <p className='cours__text'>
            <i class="fa-solid fa-money-bill"></i>
            {t('kurs.text8')} <span className='cours__span'>{t('kurs.text9')}</span>
            </p>
          </li>
          <li className='cours__item' data-aos="zoom-in-down">
            <img className='cours__img' src={fizika} alt="math" />
            <h2 className='cours__name'>
            {t('kurs.text3')}
            </h2>
            <p className='cours__text'>
            <i class="fa-regular fa-calendar-days"></i>
            {t('kurs.text6')} <span className='cours__span'>{t('kurs.text7')}</span>
            </p>
            <p className='cours__text'>
            <i class="fa-solid fa-money-bill"></i>
            {t('kurs.text8')}<span className='cours__span'>{t('kurs.text9')}</span>
            </p>
          </li>
          <li className='cours__item' data-aos="zoom-in-down">
            <img className='cours__img' src={math1} alt="math" />
            <h2 className='cours__name'>
            {t('kurs.text4')}
            </h2>
            <p className='cours__text'>
            <i class="fa-regular fa-calendar-days"></i>
            {t('kurs.text6')}<span className='cours__span'>{t('kurs.text7')}</span>
            </p>
            <p className='cours__text'>
            <i class="fa-solid fa-money-bill"></i>
            {t('kurs.text8')} <span className='cours__span'>{t('kurs.text9')}</span>
            </p>
          </li>
          <li className='cours__item' data-aos="zoom-in-down">
            <img className='cours__img' src={fizika1} alt="math" />
            <h2 className='cours__name'>
            {t('kurs.text5')}
            </h2>
            <p className='cours__text'>
            <i class="fa-regular fa-calendar-days"></i>
            {t('kurs.text6')} <span className='cours__span'>{t('kurs.text7')}</span>
            </p>
            <p className='cours__text'>
            <i class="fa-solid fa-money-bill"></i>
            {t('kurs.text8')} <span className='cours__span'>{t('kurs.text9')}</span>
            </p>
          </li>
        </ul>
      </div>

    </div>
    <div className='section'>
      <div className='container section__container'>
        <h1 className='section__title' data-aos="zoom-in-down">{t('header.name1')}</h1>
        <ul className='section__list'>
          <li className='section__item' data-aos="zoom-in" >
          <i class="fa-solid fa-chalkboard-user"></i>
            <h3 className='section__name'>
             {t('header.text1')}
            </h3>
          </li>
          <li className='section__item'data-aos="zoom-in" >
          <i class="fa-solid fa-book-open-reader"></i>
            <h3 className='section__name'>
            {t('header.text2')}
            </h3>
          </li>
          <li className='section__item' data-aos="zoom-in" >
          <i class="fa-solid fa-user-graduate"></i>
            <h3 className='section__name'>
            {t('header.text3')}
            </h3>
          </li>
          <li className='section__item' data-aos="zoom-in" >
          <i class="fa-solid fa-award"></i>
            <h3 className='section__name'>
            {t('header.text4')}
            </h3>
          </li>
          <li className='section__item' data-aos="zoom-in" >
          <i class="fa-solid fa-group-arrows-rotate"></i>
            <h3 className='section__name'>
            {t('header.text5')}
            </h3>
          </li>
          <li className='section__item' data-aos="zoom-in" >
          <i class="fa-solid fa-group-arrows-rotate"></i>
            <h3 className='section__name'>
            {t('header.text6')}
            </h3>
          </li>
        </ul>
      </div>
    </div>
    <div className='hero'>
      <div className='container hero__container'>
       <h1 className='hero__title'data-aos="zoom-in"  >
       {t('header.name2')}
       </h1>
      <div className='hero__wrap'>
      <video className='hero__link' controls >
      <source src={dars1} type="video/mp4"/>
     </video>
     <video className='hero__link' controls >
      <source src={dars2} type="video/mp4"/>
     </video>
     <video className='hero__link' controls >
      <source src={dars3} type="video/mp4"/>
     </video>
      </div>
      <a className='hero__btn' href="#" data-aos="zoom-in" >{t('header.btn')}</a>
      </div>
    </div>
    </>
  )
}

export default Header
