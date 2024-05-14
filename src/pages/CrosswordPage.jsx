import { Form } from "antd";
//import {Button} from 'antd'
import { Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Link from "antd/es/typography/Link";
import '../style/crosswordPage.css'
import React, { useState, useEffect } from 'react';
import Crossword1532024 from '../components/Crossword1532024'
import Crossword1632024 from '../components/Crossword1632024'

import { TbSquareLetterS } from "react-icons/tb";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const {  Content, Footer, Sider } = Layout;
function getItem(label, key, icon, link) {
  return {
    key,
    icon,
    label,
    link,
  };
}

const items = [
  getItem('15.3.2024', '1', <TbSquareLetterS />, "/1532024"),
  getItem('16.3.2024', '2', <TbSquareLetterS />, "/1632024"),
  getItem('17.3.2024', '3', <TbSquareLetterS />, "/1732024")
];

function CrosswordPage() {
    const [selectedMenuItem, setSelectedMenuItem]= useState('1');

    const navigate = useNavigate();

    const [buttonClassName, setButtonClassName]=useState("daily-challange-button");
    const [collapsed, setCollapsed] = useState(true);

    const {token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [isdailyButtonClicked, setIsDailyButtonClicked] = useState(true)
    const [isCrosswordPuzzleLibaryClicked, setIsCrosswordPuzzleLibaryClicked] = useState(false)


    useEffect(() => {
        handleDailyChallangeButton()
      },[]);
    
    function handleDailyChallangeButton() {
        setIsDailyButtonClicked(true)
        setIsCrosswordPuzzleLibaryClicked(false)
        if(isdailyButtonClicked===true)
        {
            setButtonClassName("daily-challange-button-active")
        }
        else
        {
            setButtonClassName("daily-challange-button")

        }
    }
    const componentsSwitch = (key) => {
        switch (key) {
          case '1':{
            return (<Crossword1532024/>)
            
        };
          case '2':
            return (<Crossword1632024/>);
          case '3':
            return (<h3>item3</h3>);
          default:
            break;
         }
        }

    return(
        <>
        <div className="crosswordPage-header">
            <div className="left-section">
            <h2 className="crosswordPage-header-title">Scandix</h2>
            </div>
            <div className="right-section">
            <button className={buttonClassName}  onClick={handleDailyChallangeButton}>Daily challange</button>
            </div>
        </div>
        <Form className="sider-crossword">
        <Layout
            style={{
                minHeight: '100vh',
            }}
            >
            <Sider className="sider" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu className="sider-menu" selectedKeys={selectedMenuItem} onClick={(e) => 
        setSelectedMenuItem(e.key)} mode="inline" items={items} color="white"/>
                    
            </Sider>
            <Layout>
                <Content
                style={{
                    margin: '0 16px',
                    
                }}
                // hidden={isdailyButtonClicked}
            
                >
                
                <div
                    style={{
                    padding: 24,
                    minHeight: 360,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                    }}
                >
                    {componentsSwitch(selectedMenuItem)}
                    
                </div>

                </Content>
                <Footer
                style={{
                    textAlign: 'center',
                }}
                >
                Marin Radić & Boris Puljak © {new Date().getFullYear()}
                </Footer>
            </Layout>
        </Layout>
        </Form>
        </>
    );
}
export default CrosswordPage