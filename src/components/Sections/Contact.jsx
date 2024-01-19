import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";
import ContactBox from "../Elements/ContactBox";

export default function Contact() {
  const Callto = ({ phone, children }) => {
    return (
      <div className="contact-item">
        <a href={`tel:${phone}`}>{children}
          <img src={require('../../assets/img/phone.png')} width={60}></img>{phone}
        </a>
      </div>
    )
  };

  return (
    <Wrapper id="contact">
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
                    data="89691150101"
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









