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
      <h1>Crossword: 15.3.2024.</h1>
        <Row>
          <Col><EmptyField/></Col>
          <Col><QuestionField>Vrsta povrća, paradajz</QuestionField></Col>
          <Col><QuestionField>Starleta Karabatić</QuestionField></Col>
          <Col><QuestionField>Dio Zagreba</QuestionField></Col>
          <Col><QuestionField>20. i 21. slovo abecede</QuestionField></Col>
          <Col><QuestionField>Zagrebački sajam inovacija</QuestionField></Col>
          <Col><QuestionField>Peto slovo abecede</QuestionField></Col>
          <Col><QuestionField>Stanovnik Irske</QuestionField></Col>
          <Col><EmptyField /></Col>
          <Col><QuestionField>Pjesma Petra Graše</QuestionField></Col>
          <Col><QuestionField>Nasad voćaka</QuestionField></Col>
          <Col><QuestionField>Olga Pakalović</QuestionField></Col>
          <Col><QuestionField>Žestoko alkoholno piće</QuestionField></Col>
          <Col><QuestionField>Rimska jedinica</QuestionField></Col>
          <Col><QuestionField>Vodena vidrica</QuestionField></Col>
          <Col><QuestionField>Predak (lat.)</QuestionField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Komadići mesa na štapiću i pečeni na žaru</QuestionField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"Ž"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"NJ"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"Ć"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Drvo vrbe ive"} children2={"Česta kršćanska molitva"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"V"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"V"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Zrakoplov</QuestionField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"V"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Gorje u JI Europi"} children2={"Naš bivši ministar Tonino"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"D"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"P"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Emil Nikolić"} children2={"Šezdeset sekundi"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"E"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Slovo glagoljske abecede</QuestionField></Col>
        <Col><InputField corectInput={"J"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Naša političarka Milanka"} children2={"Triješće"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"P"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"Č"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"Ć"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Prestanak života"} children2={"Atlantik i pacifik (mn.)"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"S"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"M"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>"Čelik"</QuestionField></Col>
        <Col><InputField corectInput={"Č"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Mjesto na Krku"} children2={"Period paleozojske ere"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"NJ"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"V"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"C"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"E"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Sitne njoke"} children2={"Zapadni dio Nove Gvineje (Irian)"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"NJ"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"K"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"C"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"E"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Muškarac koji govori ikavicom</QuestionField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"K"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"V"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"C"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Nikotinska kiselina"} children2={"Tuga"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"C"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Norveška"} children2={"Izrasti, porasti"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Dosjetke</QuestionField></Col>
        <Col><InputField corectInput={"C"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"K"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"E"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Proizvođačice užadi"} children2={"Križanje znakom X"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"U"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"Ž"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"K"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"E"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Rijeka u Bihaću"} children2={"Služba čuvanja vojnog objekta"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"U"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Sto metara četvornih</QuestionField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Kukci s rilcima"} children2={"Konji u narodnim pjesmama"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"L"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"Š"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter} ></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Kemijski element (At)"} children2={"Abelova imenjakinja"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"S"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col><EmptyField/></Col>
        <Col><DoubleQuestionField children1={"Bajkalsko jezero (kraće)"} children2={"Naučavanje"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"B"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"J"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"K"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"L"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Fosilna smola četinara"} children2={"Marka pića (osvježavajučeg)"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"J"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col ><QuestionField>Abelov brat po bibliji</QuestionField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Džepna bilježnica</QuestionField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"E"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"S"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Selekcija, izabir"} children2={"Oružani sukob naroda"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"D"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"B"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={'"Atletski klub"'} children2={"Titula mongolskog vladara"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"K"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Češka potvrdna riječ</QuestionField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Nogometni trener Wenger"} children2={'"Osnovna jedinica"'}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"S"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"E"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"E"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Osovina"} children2={"Enes Čengić"}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"K"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"S"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Urugvaj</QuestionField></Col>
        <Col><InputField corectInput={"U"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Odavati neugodan miris"} children2={'"Litra"'}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"V"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"O"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"NJ"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><DoubleQuestionField children1={"Biti u ležećem položaju"} children2={'"Radijus"'}></DoubleQuestionField></Col>
        <Col><InputField corectInput={"L"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"E"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"Ž"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>
        <Row>
        <Col ><QuestionField>Koliba u vinogradu</QuestionField></Col>
        <Col><InputField corectInput={"K"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"L"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"J"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"E"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col ><QuestionField>Stanovnik Trakije</QuestionField></Col>
        <Col><InputField corectInput={"T"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"R"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"Č"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"A"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"I"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        <Col><InputField corectInput={"N"} solvedFieldCounter={solvedFieldCounter} setSolvedFieldCounter={setSolvedFieldCounter}></InputField></Col>
        </Row>

        <Modal title="Čestitamo" style={{textAlign: "center"}} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Čestitamo, rješili ste križaljku 15.3.2024</p>
      </Modal>
    </div>
  )
}

