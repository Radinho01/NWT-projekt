import React, { useState, useEffect } from 'react'
import {  Row, Col, Modal } from 'antd';
import QuestionField  from './CrosswordQuestionField';
import EmptyField from './CrosswordEmptyField';
import InputField from './CrosswordInputFeld'
import DoubleQuestionField from './DoubleQuestionField'

export default function Crossword1532024() {

  const [solvedFieldCounter, setSolvedFieldCounter] = useState(0);
  const [crosswordSolved,setCrosswordSolved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

 useEffect(() => {
    if (solvedFieldCounter === 157) {
      setCrosswordSolved(true);
      setIsModalOpen(true);
    }
  }, [solvedFieldCounter]);
  

  return (
    <div>
      <h1>Crossword: 16.3.2024.</h1>
        <Row>
          <Col><EmptyField/></Col>
          <Col><QuestionField>Sredstvo za smirenje živčane napetosti</QuestionField></Col>
          <Col><QuestionField>Vrsni španjolski tenisač</QuestionField></Col>
          <Col><QuestionField>Iznos pri odustanku od ugovora</QuestionField></Col>
          <Col><QuestionField>Crnoruna ovca</QuestionField></Col>
          <Col><QuestionField>Pravo vrijeme (hora)</QuestionField></Col>
          <Col><QuestionField>"Dan"</QuestionField></Col>
          <Col><QuestionField>Odabrati, probirati</QuestionField></Col>
          <Col><QuestionField>25. i 16. slovo abecede</QuestionField></Col>
          <Col><QuestionField>Njistanje, njiskanje (njisak)</QuestionField></Col>
          <Col><QuestionField>Latinski: voda (fon.)</QuestionField></Col>
          <Col><QuestionField>Pjevački zbor</QuestionField></Col>
          <Col><QuestionField>Bivši nogometaš "Varteksa" i "Karlovca"</QuestionField></Col>
          <Col><QuestionField>Revati poput magarca</QuestionField></Col>
          <Col><QuestionField>Soli ocetene kiseline</QuestionField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Curica od tri godine</QuestionField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"G"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"D"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"Š"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"NJ"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"K"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"NJ"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Radio lokatori</QuestionField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"D"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Kriminalac"} children2={"Dorađivanje"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"Z"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"L"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"K"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"V"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"C"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Dio grada Vila Nova de Gaia u Portugalu</QuestionField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"F"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"U"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"D"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Ptice slične vranama"} children2={"Rijeka u Bihaću"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"S"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"V"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"K"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"E"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Američka svemirska agencija</QuestionField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"S"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Obučavanje"} children2={"Naša naftna tvrtka"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"B"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"U"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"K"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Šav na ženskoj čarapi"} children2={"Staro ime vijetnama"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Najmanja sportska jedrilica</QuestionField></Col>
        <Col><InputField corectInput={"K"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"E"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Ljepotica Shayk"} children2={"Ruski basnopisac, Ivan"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Bolni mjehurić sluznice usta"} children2={"Pasta za obuću"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"F"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Industrijski pogon za proizvodnju vlakana</QuestionField></Col>
        <Col><InputField corectInput={"V"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"L"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"K"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Eskimi na eskimskome"} children2={"Bilo kada"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"U"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Operna uvertira</QuestionField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"D"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><DoubleQuestionField children1={"Muslimanski duhovnik"} children2={"Razoreni grad u Siriji (Alepo)"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"M"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"M"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Italija"} children2={"Mlatiti koga"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>

        </Row>
        <Row>
        <Col ><QuestionField>Prošle godine</QuestionField></Col>
        <Col><InputField corectInput={"L"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><DoubleQuestionField children1={"Mineral nazvan po Atacami"} children2={"Pozdrav Cezaru"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"K"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"M"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col ><QuestionField>Naprava za grijanje</QuestionField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Imenjakinja nogometaša Ramija</QuestionField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"D"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"L"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><DoubleQuestionField children1={"Turska uštaka (Hilal)"} children2={"Ognjen Naglić"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"L"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"L"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Trubasta zemljana posuda"} children2={"Nobelij"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"Ć"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"U"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"P"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Ponovno, iznova, opet</QuestionField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"V"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><DoubleQuestionField children1={"Bh. nogometaš Džeko"} children2={"Škola"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"E"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"D"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Peto i deveto slovo abecede"} children2={"Vanadij"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"Ć"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"E"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Glumac iz TV serije "Vatre ivanjske"</QuestionField></Col>
        <Col><InputField corectInput={"S"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"L"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"V"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"E"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"Š"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"P"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"V"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"Ć"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        

        <Modal title="Čestitamo" style={{textAlign: "center"}} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Čestitamo, rješili ste križaljku 16.3.2024</p>
      </Modal>
    </div>
  )
}

