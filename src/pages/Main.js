import React, { useEffect, useState } from 'react';
import '../styles/Main.css';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Main = () => {   
    const [productIndex, setProductIndex] = useState(0);
    // const [listItems, setListItems] = useState([]);
    // const [slider, setSlider] = useState('');
    // const [reverseItems, setReverseItems] = useState([]);
    // const [direction, setDirection] = useState({
    //     left: '',
    //     height: '',
    //     width: '',
    //     zIndex: '',
    // })
    const reverse = () => {
        // reverseItems.forEach((el, index) => {
        //     if(index < listItems.length - 1){
        //         el.style.left = reverseItems[index + 1].offsetLeft + 'px'
        //         el.style.height = reverseItems[index + 1].offsetHeight + 'px'
        //         el.style.width = reverseItems[index + 1].offsetWidth + 'px'
        //         el.style.zIndex = reverseItems[index + 1].zIndex
        //         el.style.transform = 'unset'
        //         el.style.opacity = 1
        //     }
           
        //     if(index === listItems.length - 1){
        //         el.style.transform = 'scale(1.5)'
        //         el.style.opacity = '0'
            
        //         let cln = el.cloneNode(true)
                
        //         setTimeout(() => {
        //             el.remove()
        //             cln.style.transform = 'scale(0)'
        //             cln.style.left = direction.left
        //             cln.style.height = direction.height
        //             cln.style.width = direction.width
        //             cln.style.opacity = '1'
        //             cln.style.zIndex = '1'
        //             cln.style.animation = 'unset'
        //             slider.appendChild(cln)
        //         }, 1000)
        //     }
        // })
    }

    // useEffect(() => {
    //     let slide = document.querySelectorAll('.new-slide');
    //     let container = document.querySelector('.slider-container');
    //     let reversedArray = Array.from(slide).slice().reverse();
    //     setTimeout(() => {
    //         setListItems(slide)
    //         setSlider(container)
    //         setReverseItems(Array.from(slide).slice().reverse());
    //         setDirection({
    //             ...direction,
    //             left: reversedArray[0].offsetLeft + 'px',
    //             height: reversedArray[0].offsetHeight + 'px',
    //             width: reversedArray[0].offsetWidth + 'px',
    //             zIndex: reversedArray[0].style.zIndex 
    //         })
    //     }, 200);
    // }, [productIndex]);
    

    
    // useEffect(() => {
    //     reverse()
    // }, [productIndex])

    
    return(
        <div className='new-main-container'>
            <div className='overlay'></div>
            

            {/* social icon */}
            {/* <div className='sci'>
                <FaFacebook className={'bx bxl-facebook-circle'} />
                <FaInstagram className={'bx bxl-instagram-alt'}/>
                <FaYoutube className={'bx bxl-youtube'}/>
                <FaTwitter className={'bx bxl-twitter'}/>
            </div> */}
            {/* end social icon */}

            {/* fashion label */}
                {/* <div className='fashion'>
                    2021.05 Magazine
                </div> */}
            {/* end fashion label */}

            {/* product info */}
                <div className={'col-5 z-index-99'}>
                    <div className='info-section'>
                        <div className={productIndex === 0 ? 'product-info active':'product-info'}>
                            <h1>
                            <span className='txt-red'>S</span>hare
                            </h1>
                            <h1>
                            <span className='txt-red'>M</span>agazine
                            </h1>
                            <span>
                            TEAM 12 <span className='reduce-space'>PROJECT</span> 2021
                            </span>
                            <p>
                                언택트 시대, 당신을 세상과 이어줄 단 하나의 정치 매거진 플랫폼
                            </p>
                            <Link to="/xfile">
                            <button className='go-to-xfile'>
                                MAGAZINE
                            </button>
                            </Link>
                            
                        </div>

                        <div className={productIndex === 1 ? 'product-info active':'product-info'}>
                            <h1>
                               <span className='txt-red'>R</span>EVEAL
                            </h1>
                            <h1>
                                <span className='txt-red'>T</span>HE <span className='txt-red'>T</span>RUTH
                            </h1>
                            <span>
                            TEAM 12 <span className='reduce-space'>PROJECT</span> 2021
                            </span>
                            <p>
                            과거에 묻혀버린 진실, 당신의 글을 통해 밝혀주세요 
                            </p>
                            <Link to="/xfile">
                            <button className='go-to-xfile'>
                                MAGAZINE
                            </button>
                            </Link>
                        </div>

                        <div className={productIndex === 2 ? 'product-info active':'product-info'}>
                            <h1>
                                <span className='txt-red'>I</span>nfluence
                            </h1>
                            <h1>
                            <span className='txt-red'>P</span>EOPLE 
                            </h1>
                            <span>
                            TEAM 12 <span className='reduce-space'>PROJECT</span> 2021
                            </span>
                            <p>
                               여러분의 소중한 글은 세상을 바꾸는 원동력입니다
                            </p>
                            <Link to="/xfile">
                            <button className='go-to-xfile'>
                                MAGAZINE
                            </button>
                            </Link>
                        </div>

                        {/* <div className={productIndex === 3 ? 'product-info active':'product-info'}>
                            <h1>
                                NEWS<span className='txt-yellow'>PAPER</span>
                            </h1>
                            <h1>
                                <span className='txt-yellow'>R</span>EAD
                            </h1>
                            <span>
                                Collection 2020
                            </span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <button className='go-to-xfile'>
                                정치 X-파일
                            </button>
                        </div> */}

                        {/* <div className={productIndex === 4 ?'product-info active' : 'product-info'}>
                            <h1>
                                OPI<span className='txt-yellow'>NION</span>
                            </h1>
                            <h1>
                                <span className='txt-yellow'>WR</span>ITE
                            </h1>
                            <span>
                                Collection 2020
                            </span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <button className='go-to-xfile'>
                                정치 X-파일
                            </button>
                        </div> */}
                    </div>
                </div>
            {/* end product info */}

            {/* product images slide */}
                <div className='col-7'>
                    {/* slider */}
                        <div className='slider-container'>
                            <div className={productIndex === 0 ? 'new-slide front' : (productIndex === 1 ? 'new-slide back' : (productIndex === 2 ? 'new-slide middle' : 'new-slide front'))}>
                                <div className='img-holder'
                                style={{ backgroundImage: 'url("https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/magazine.jpeg")' }}></div>
                            </div>
                            
                            <div className={productIndex === 0 ? 'new-slide middle' : (productIndex === 1 ? 'new-slide front' : (productIndex === 2 ? 'new-slide back' : 'new-slide middle'))}>
                            <div className='img-holder'
                                style={{ backgroundImage: 'url("https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/promise.jpeg")' }}></div>
                            </div>

                            <div className={productIndex === 0 ? 'new-slide back' : (productIndex === 1 ? 'new-slide middle' : (productIndex === 2 ? 'new-slide front' : 'new-slide back'))}>
                            <div className='img-holder'
                                style={{ backgroundImage: 'url("https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/map.jpeg")' }}></div>
                            </div>

                            {/* <div className='new-slide'>
                            <div className='img-holder'
                                style={{ backgroundImage: 'url("https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/newspaper.jpeg")' }}></div>
                            </div> */}

                            {/* <div className='new-slide'>
                            <div className='img-holder'
                                style={{ backgroundImage: 'url("https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/opinion.jpeg")' }}></div>
                            </div> */}
                        </div>

                    {/* end slider */}
                </div>

                <div className={'slide-control z-index-99'} onClick={
                    () => {
                        if (productIndex + 1 > 2){
                            setProductIndex(0)
                        } else{
                            setProductIndex(productIndex + 1)
                        }
                    }
                }>
                    <FiArrowRight className='right-arrow' />
                </div>
            {/* end product images slide */}

            <div className={productIndex === 0 ? 'main-page-line first' : (productIndex === 1 ? 'main-page-line second' : (productIndex === 2 ? 'main-page-line third' : 'main-page-line first'))}></div>
            
        </div>
        
    );
};

export default Main;