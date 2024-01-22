import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";

import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

// Assets
// import ContactImg1 from "../../assets/img/contact-1.png";
// import ContactImg2 from "../../assets/img/contact-2.png";
// import ContactImg3 from "../../assets/img/contact-3.png";
import ContactBox from "../Elements/ContactBox";

// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Contact() {

  const events = [
    { status: '1. Позвоните нам', 
      date: 'Оставьте заявку и получите первичную консультацю', 
      icon: 'pi pi-phone', color: '#9C27B0', /*image: 'game-controller.jpg'*/ 
    },
    { status: '2. Обсудим детали', 
      date: 'Составим техническое задание и заключим договор', 
      icon: 'pi pi-cog', color: '#673AB7' 
    },
    { status: '3. Выезд специалистов', 
      date: 'Наши специалисты приедут к вам в согласованную дату для проведения работ', 
      icon: 'pi pi-car', color: '#FF9800' 
    },
    { status: '4. Приемка работ', 
      date: 'Приемка-сдача результата работ и передача пакета документов', 
      icon: 'pi pi-thumbs-up', color: '#607D8B' 
    }
  ];

  const customizedMarker = (item) => {
    return (
      <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
        <i className={item.icon}></i>
      </span>
    );
  };

  const customizedContent = (item) => {
    return (
      <Card title={item.status} /*subTitle={item.date}*/ style={{padding: 10, marginBottom: 10}}>
        { item.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} width={200} className="shadow-1" />}
        <p>{item.date}</p>

        {item.status.includes('1.') && 
        <Button label="Контакты" className="p-button-text" onClick={()=> scroll.scrollToBottom()}></Button>
        }
      </Card>
    );
  };

  const Callto = ({ phone, children }) => {
    return (
      <div className="contact-item">
        <a href={`tel:${phone}`}>{children}
          <img src={require('../../assets/img/phone.svg')} width={60}></img>{phone}
        </a>
      </div>
    )
  };

  return (
    <Wrapper id="contact">

      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Этапы сотрудничества</h1>
            <p className="font13">
              Все пройдет всего в 4 этапа
            </p>
          </HeaderInfo>
          <Timeline value={events} align={window.innerWidth >= 860 ? "alternate" : "left"} 
            className="customized-timeline" marker={customizedMarker} content={customizedContent} 
          />
         
        </div>
      </div>

      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Контакты</h1>
            <p className="font13">
              Свяжитесь с нами!
              {/* <br />
              labore et dolore magna aliquyam erat, sed diam voluptua. */}
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* <Form>
                <label className="font13">First name:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="font13">Email:</label>
                <input type="text" id="email" name="email" className="font20 extraBold" />
                <label className="font13">Subject:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold" />
                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper> */}
              <div className="row textCenter">
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <ContactBox
                    title="Телефон"
                    text="8(969)-115-01-01"
                    tag="phone"
                    data="89691150101"
                    // action={() => alert("clicked")}
                  />
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <ContactBox
                    title="Whatsapp"
                    text="8(969)-115-01-01"
                    tag="whatsapp"
                    data="+79691150101"
                    // action={() => alert("clicked")}
                  />
                </div>
                {/* <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                  <ContactBox
                    title="Telegram"
                    text="8(969)-115-01-01"
                    tag="telegram"
                    data="89691150101"
                    action={() => alert("clicked")}
                  />
                </div> */}
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <ContactBox
                    title="E-Mail"
                    text="a.yampolskiy01@mail.ru"
                    tag="mail"
                    data="a.yampolskiy01@mail.ru"
                    // action={() => alert("clicked")}
                  />
                </div>
              </div>
              
              {/* <Callto phone="+302101234567">Call me!</Callto> */}
              
            </div>
            {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
const Callto = styled.div`
  display: grid
  padding: 70px 0 30px 0;
`;

const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;

const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
