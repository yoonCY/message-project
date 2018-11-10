import React from 'react'
import classnames from 'classnames';

// style 
import styled from 'styled-components'
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col

} from 'reactstrap';

const SettingContainer = styled.div`
    padding : 30px;
`;

const Title = styled.div`
    width : 100%;
    border-bottom : 0.1px solid #000;
`;

const Body = styled.div`
    margin-top : 20px;
`

const ActiveTabs = styled(TabContent) `
    padding-top : 30px;
`

const TabContents_1 = (props) => {

    return (
        <TabPane tabId="1">
            <Row>
                <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                </Col>
            </Row>
        </TabPane>
    )
};

const TabContents_2 = (props) => {
    return (
        <TabPane tabId="2">
            <Row>
                <Col sm="12">
                    <h4>Tab 2 Contents</h4>
                </Col>
            </Row>
        </TabPane>
    )
};

export default (props) => {

    const {
        activeTab,
        onClick
    } = props;


    return (
        <SettingContainer>
            <Title>
                <h6>환경설정</h6>
            </Title>
            <Body>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { onClick('1'); }}
                        >
                            메뉴설정
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { onClick('2'); }}
                        >
                            Moar Tabs
                        </NavLink>
                    </NavItem>
                </Nav>

                <ActiveTabs activeTab={activeTab}>
                    <TabContents_1 />
                    <TabContents_2 />

                </ActiveTabs>
            </Body>


        </SettingContainer>
    )
}
