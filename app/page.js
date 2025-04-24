'use client'
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/HomePage.css";
import { Button } from '@mui/material';
// import { BsArrowRight } from "react-icons/bs";
import introimg from "./Images/intro.jpg"
import plnt from "./Images/planet.jpg";
import React from 'react';
import RecyclingIcon from '@mui/icons-material/Recycling';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import GroupsIcon from '@mui/icons-material/Groups';
import CardShow from './Components/CardShow';
import lbb from "./Images/bb.png";
import TabsHolder from './Components/TabsHolder';
import CustomCard from './Components/CustomCard';
import event1 from "./Images/event1.jpg";
import event2 from "./Images/event2.jpg";
import event3 from "./Images/event3.jpg";
import bg from "./Images/bg.jpg";
import { useTranslation } from "react-i18next";
import Link from 'next/link'
import Image from "next/image";
import "./Styles/App.css"

function Home() {
    const { t, i18n } = useTranslation();

    return (
        <div className='bb' style={{gap:"50px"}}>

        <Container fluid="x"  className='relative w-full h-screen flex flex-col justify-center items-center intro-page' >
        <Image
        src={introimg}
        alt="Intro Background"
        layout="fill"
        objectFit="cover"
        quality={100} // Optimized quality
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-black/60 shadow-overlay z-0"></div>
       <div className="z-10 text-center d-flex flex-column justify-content-center align-items-center">
        <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t("Save The World")} </span>
            <div className='intro-title text-center'>
                <span style={{color:"white"}}>  {t("Heal your plants")}  </span>
            </div>
            <div className='w-75 text-center mb-4' style={{color:"white"}}>
             {t("Your Guide to Healthy Plant")} 
            
            </div>
            
            <Link rel="prefetch"  href='/Recycle' >
                <Button variant='contained' className='intro-button'> {t("Healt it Now")} </Button>
            </Link>
            </div>
        </Container>

        
            
        <Container fluid="x" className='d-flex flex-row page-three'>
            <Image src={plnt} alt=""  className='img-left' width={400} height={400}/>
            <div className='d-flex flex-column justify-content-start align-items-start p-5 text-start w-50 right-area' style={{gap:"25px"}}>
                <div className='second-title text-start w-100' style={{fontSize:"40px"}}>
                    <span> <span style={{color:"var(--main)"}}>  {t("Contact")}  </span>  {t("Us with your")}  
                    <span style={{color:"var(--main)"}}>  {t("Ideas")}  </span>  {t("&")}  <span style={{color:"var(--main)"}}> 
                     {t("Suggestions")} .</span></span>
                </div>
                <div>
                 {t("Got recycling ideas brimming? We want to hear them! Share your thoughts and suggestions to help us create a more sustainable future, together. Every voice counts in building a greener world, one brilliant idea at a time. Let's make recycling revolutionary!")} 
                
                </div>
                <Link rel="prefetch"  href={"/Contact"} >
                <Button variant='outlined' className='intro-button'> {t("Contact us")} </Button>
            </Link>
            </div>
        </Container>

        <Container className='d-flex flex-column justify-content-center align-items-center fifth-page'>
        
            <div className='d-flex flex-row justify-content-center align-items-center rgb' style={{gap:"50px"}}>
                <div className='d-flex flex-column justify-content-start align-items-end  second-page-start'>
                <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t("Our Mission!")} </span>
                        <div className='second-title text-end'>
                        <span>  {t("We've a")} <span style={{color:"var(--main)"}}>   {t("Clear Objectives")} </span> 
                           {t("From this")} <span style={{color:"var(--main)"}}> {t("Tools")} </span></span>
                    </div>
                    <div className='w-75 content text-end'>
                     {t("We're on a mission to revolutionize recycling and empower you to make a lasting impact. Our user-friendly tools with clear objectives guide you towards effective recycling practices, making a real difference, one recycled item at a time.")} 
                    

                    </div>
                </div>

                <div className='d-flex flex-row justify-content-start align-items-center w-50' style={{gap:"35px"}}>
                <Image src={lbb} alt="" className='lbb-img'/>
                </div>
            </div>
        </Container>


        
        

        <Container className='d-flex flex-column justify-content-center align-items-center'style={{gap:"15px"}}>
        <div className='second-title text-start w-100'>
                        <span> {t("Lastes")}  <span style={{color:"var(--main)"}}> 
                          {t("Events")} </span></span>
                    </div>
            <div className='d-flex flex-row justify-content-center align-items-center flex-wrap cdcont'style={{gap:"35px"}}>
            <CustomCard icon={<Image src={event1} alt=""  className='itemimg'/>} title= {t("Afforestation campaign")}  content= {t("Kasdi Merbah Ouargla")}  content1= {t('Planting approximately 50 shrubs at the three pole colleges and next to the university transportation bus stop.')} border={false} swap={true} link="https://www.facebook.com/FNTIC.ITI/posts/pfbid0L1WMSZQwGvHCXGJXtiqUej6bt6MHeWPTTEFkANt8PFXXwhBE1ixLVgWqAq6DpY2tl"></CustomCard>
            <CustomCard icon={<Image src={event2} alt=""  className='itemimg'/>} title= {t("Afforestation campaign")}  content= {t('Ouargla Tramway')} content1= {t('Planting some areas of the institutions lands with seedlings and trees to develop and improve the aesthetic appearance of the institution.')} border={false} swap={true} link="https://www.facebook.com/snabel99/posts/pfbid02nSbdDd868qnjzV8VqP2vATKbThCXh5yJwkRS9vnSSvYnBDTyRBe9XWzE9yRyeY5yl"></CustomCard>
            <CustomCard icon={<Image src={event3} alt=""  className='itemimg'/>} title= {t("Afforestation campaign")}  content= {t('Scout section')} content1= {t('A campaign to plant trees on the main street was also carried out, after which a meeting was held at the great Ramadan table of charity.')} border={false} swap={true} link="https://www.facebook.com/199412braim/posts/pfbid0F6aV92x312TYe8jwrqPTxRYxmAhVBuRF2qo91mXwxyofgTyapPxWovEqhYhtmSLvl"></CustomCard>

            </div>
        </Container>



        <Container fluid="x"  className='relative w-full h-screen flex flex-col justify-center items-center  intro-page' >
        <Image
        src={bg}
        alt="Intro Background"
        layout="fill"
        objectFit="cover"
        quality={100} // Optimized quality
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/60 shadow-overlay z-0"></div>

      <div className="z-10 text-center d-flex flex-column justify-content-center align-items-center">
        <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t('Our Diagnosis Model')}</span>
            <div className='intro-title text-center'>
                <span style={{color:"white"}}> {t("We've Reached a Good Point")}  </span>
            </div>
            <div className='w-75 text-center mb-4' style={{color:"white"}}>
             {t("We've reached a tipping point in Diagnosis!  Our innovative model, trained on a massive dataset of over 2,000 images, boasts an impressive 94% accuracy in identifying recyclable materials. But speed is key – and our model delivers lightning-fast results, empowering you to make informed recycling decisions in seconds.")} 
            
            </div>
            </div>
            
        </Container>

        </div>
    );
}

export default Home