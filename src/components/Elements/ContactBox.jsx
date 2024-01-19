import React from "react";
import styled from "styled-components";

export default function BlogBox({ tag, title, text, action, data }) {

  // const Callto = ({ phone, children }) => {
  //   return (
  //     <div className="contact-item">
  //       <a href={`tel:${phone}`}>{children}
  //         <img src={require(`../../assets/img/${tag}.png`)} width={60}></img>{phone}
  //       </a>
  //     </div>
  //   )
  // };
  const Context = ({tag}) =>{
    switch (tag){
      case 'phone' : return 'tel:'
      case 'whatsapp' : return 'https://wapp.click/'
      // case 'telegram' : 
      // <a href="telegram.me/@groupname">
      case 'mail' : return 'mailto:'
      default : return 'tel:'
    }
  }

  // https://wapp.click/79691150101
  
  return (
    <Wrapper className="whiteBg radius8 shadow">
      <div style={{textAlign: "center"}}>
        <a href={`${Context(tag)}${data}`}>
          <img src={require(`../../assets/img/${tag}.png`)} width={60}></img>
        </a>
      
        {/* <p className="font13" style={{ padding: "30px 0" }}>
          {text}
        </p> */}
        <p className="font13 extraBold">{title}</p>
        <br/>
        <h3 className="font20 extraBold">{data}</h3>
        {/* <div className="flex">
          <p className="tag coralBg radius6 font13 extraBold">{tag}</p>
        </div> */}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
