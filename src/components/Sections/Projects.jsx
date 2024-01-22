import React from "react";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/каска.png";
import ProjectImg3 from "../../assets/img/projects/планы.png";
import ProjectImg4 from "../../assets/img/projects/монтаж.png";
import ProjectImg5 from "../../assets/img/projects/категории.svg";
import ProjectImg6 from "../../assets/img/projects/документы.png";
import ProjectImg7 from "../../assets/img/projects/gost.png";
import ProjectImg8 from "../../assets/img/firefighter-head.svg";
import AddImage2 from "../../assets/img/add/add2.png";
import PricingTable from "../Elements/PricingTable";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Услуги</h1>
            {/* <p className="font13">
              Предлагаем Вам комплекс услуг в области:
            </p> */}
          </HeaderInfo>
          <div className="row textCenter">
            {/* <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <ProjectBox
                img={ProjectImg1}
                title="Проектирование, монтаж, ремонт и ТО:"
                text={`
                  охранно-пожарной сигнализации;
                  систем оповещения людей при пожаре;
                  эвакуационного освещения;
                  систем внутреннего и наружного противопожарного водоснабжения;
                  установок пожаротушения;
                  противопожарных занавесов, штор и дверей;
                  систем вентиляции и противодымной защиты;
                  видеонаблюдения, контроля и управления доступом;
                `}
                action={() => alert("clicked")}
              />
            </div> */}
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <ProjectBox
                img={ProjectImg2}
                title="Огнезащитные работы"
                text="По повышению предела огнестойкости металлических и деревянных конструкций, изделий и материалов"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <ProjectBox
                img={ProjectImg3}
                title="Разработка планов"
                text="Поэтажных и локальных планов эвакуации, иных фотолюминесцентных эвакуационных систем"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <ProjectBox
                img={ProjectImg4}
                title="Монтаж и испытания"
                text="Пожарных лестниц и ограждений кровли зданий"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <ProjectBox
                img={ProjectImg5}
                title="Категорирование"
                text="Помещений по пожарной и взрывопожарной опасности"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <ProjectBox
                img={require('../../assets/img/projects/расчеты.png')}
                title="Расчеты"
                text="Оформление расчета по оценке пожарного риска"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <ProjectBox
                img={ProjectImg7}
                title="Оформление СТУ"
                text="Оформление специальных технических условий на объекты защиты"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <ProjectBox
                img={ProjectImg8}
                title="Средства противопожарной защиты"
                text="Обеспечение средствами противопожарной защиты"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <ProjectBox
                img={ProjectImg6}
                title="Оформление и ведение документации"
                text="По пожарной безопасности, проведение обследований объектов на предмет соблюдения требований пожарной безопасности с консультацией по устранению нарушений"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          {/* <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div> */}
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  {/* <img className="radius8" src={AddImage2} alt="add" /> */}
                  <TableBox>
                    <PricingTable
                      icon="FireExtinguisher"
                      // price="$29,99/mo"
                      title="Проектирование, монтаж, ремонт и ТО:"
                      // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                      offers={[
                        { name: "охранно-пожарной сигнализации", cheked: true },
                        { name: "систем оповещения людей при пожаре", cheked: true },
                        { name: "эвакуационного освещения", cheked: true },
                        { name: "систем внутреннего и наружного противопожарного водоснабжения", cheked: true },
                        { name: "установок пожаротушения", cheked: true },
                        { name: "противопожарных занавесов, штор и дверей", cheked: true },
                        { name: "систем вентиляции и противодымной защиты", cheked: true },
                        { name: "видеонаблюдения, контроля и управления доступом", cheked: true },
                      ]}
                      // action={() => alert("clicked")}
                    />
                  </TableBox>
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight style={{marginLeft: 20}}>
              <h4 className="font15 semiBold">ИНН 262608694060</h4>
              <h4 className="font15 semiBold">ОГРН 320265100098691 от 23 октября 2020 г.</h4>
           
              <h2 className="font40 extraBold">Банковские реквизиты:</h2>
              <p className="font12">
                р/с 40802810101500419818
                <br/>
                в банке ООО «Банк Точка» г. Москва 
                <br/>
                к/с 30101810745374525104
                <br/>
                БИК 044525104
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="На главную" action={() => scroll.scrollToTop()} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Контакты" action={() => scroll.scrollToBottom()} border />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
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
  position: relative;
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
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  // padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
const TableBox = styled.div`
  width: 100%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;