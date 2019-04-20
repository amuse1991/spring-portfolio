import React, { Component } from 'react';
import Template from "../../Template";
import {Element} from 'react-scroll';
import { Card, Button, CardHeader, CardFooter, CardColumns, CardDeck, CardImg, CardSubtitle, CardBody, CardTitle, CardText, Row, Col, Badge } from 'reactstrap';
import Modal from 'react-responsive-modal';
import ModalContent from "./ModalContent";
import '../../../static/css/page-header.css';
import modalStyles from'../../../static/css/project-modal.css';
import "../../../static/css/project.css";

export default class Projects extends Component{

    constructor(props){
        super(props);
        this.state = {
            open: false,
            modalContent: null
        }
    }

    onOpenModal = (projectId) => {
        let data = this.projectDataSet.find(item=>item["id"]===projectId)
        this.setState({modalContent: data}, // 모달 데이터를 먼저 세팅 후
            ()=>this.setState({open:true})) // 콜백으로 모달 open 을 한다.
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    divStyle = {
        width:'100%',
        height:'100vh'
    };

    projectDataSet = [
        {  
            "id":"portfolio01",
            "name":"Study time",
            "mainImgName":"p1.png",
            "tags":["Spring boot","Android"],
            "startDate":"2019.03",
            "endDate":"2019.05",
            "summary":"Spring boot, Android 스터디에서 진행한 프로젝트입니다. ",
            "imgs":[
                {
                    "imgName":"p1.png",
                    "caption":"위성 위치 정보 도시 화면"
                }
                ,{
                    "imgName":"p2.png",
                    "caption":"위성 데이터 조회 화면1"
                },{
                    "imgName":"p3.png",
                    "caption":"위성 데이터 조회 화면2"
                }],
            "git":"https://github.com/amuse1991/SIMS",
            "demo":"https://www.youtube.com/watch?v=QaJRSSwJtpw&t=4s",
            "skills":{
                "language":{
                    "data" : ["javascript"],
                    "isContributed":false
                }
                    ,
                "front-end framework":{
                    "data" : ["React.js"],
                    "isContributed":true
                },
                "back-end framework" : {
                    "data": ["Node.js, Express"],
                    "isContributed":true
                },
                "server": {
                    "data": ["Ubuntu 16.04(AWS EC2)"],
                    "isContributed":false
                },
                "DB":{
                    "data" : ["SQL Server 2017(AWS RDS)"],
                    "isContributed":false
                },
                "others":{
                    "data" : ["git, trello"],
                    "isContributed":true
                }
            },
            "contribution":[
                {
                    "part" : "프론트엔드 개발",
                    "summary" : "React.js를 이용하여 SPA 형태로 프론트엔드를 구현했습니다.",
                    "workList": [
                        "ajax를 통한 프론트엔드와 백엔드 연동",
                        "위치 정보 도시 컴포넌트 구현",
                        "DB 데이터 차트화 컴포넌트 구현",
                        "소켓 통신 데이터 차트화 컴포넌트 구현"
                    ]
                },
                {
                    "part" : "백엔드 개발",
                    "summary" : "Node.js를 이용하여 RESTful API 서버를 구현했습니다.",
                    "workList": [
                        "DB access API 구현", 
                        "web socket을 이용한 소켓 통신 구현",
                        "client-server API 구현"
                    ]
                }]
        },
        {  
            "id":"portfolio02",
            "name":"인공위성 관제 모니터링 웹 서비스 구성",
            "mainImgName":"p1.png",
            "tags":["node.js","exprss","react.js"],
            "startDate":"2018.03",
            "endDate":"2018.12",
            "summary":"(주)쎄트렉아이와 진행한 산학 협력 프로젝트입니다. Node.js, React.js를 이용해 위성 정보를 웹 상에서 모니터링 할 수 있는 서비스를 개발했습니다.",
            "imgs":[
                {
                    "imgName":"p1.png",
                    "caption":"위성 위치 정보 도시 화면"
                }
                ,{
                    "imgName":"p2.png",
                    "caption":"위성 데이터 조회 화면1"
                },{
                    "imgName":"p3.png",
                    "caption":"위성 데이터 조회 화면2"
                }],
            "git":"https://github.com/amuse1991/SIMS",
            "demo":"https://www.youtube.com/watch?v=QaJRSSwJtpw&t=4s",
            "skills":{
                "language":{
                    "data" : ["javascript"],
                    "isContributed":false
                }
                    ,
                "front-end framework":{
                    "data" : ["React.js"],
                    "isContributed":true
                },
                "back-end framework" : {
                    "data": ["Node.js, Express"],
                    "isContributed":true
                },
                "server": {
                    "data": ["Ubuntu 16.04(AWS EC2)"],
                    "isContributed":false
                },
                "DB":{
                    "data" : ["SQL Server 2017(AWS RDS)"],
                    "isContributed":false
                },
                "others":{
                    "data" : ["git, trello"],
                    "isContributed":true
                }
            },
            "contribution":[
                {
                    "part" : "프론트엔드 개발",
                    "summary" : "React.js를 이용하여 SPA 형태로 프론트엔드를 구현했습니다.",
                    "workList": [
                        "ajax를 통한 프론트엔드와 백엔드 연동",
                        "위치 정보 도시 컴포넌트 구현",
                        "DB 데이터 차트화 컴포넌트 구현",
                        "소켓 통신 데이터 차트화 컴포넌트 구현"
                    ]
                },
                {
                    "part" : "백엔드 개발",
                    "summary" : "Node.js를 이용하여 RESTful API 서버를 구현했습니다.",
                    "workList": [
                        "DB access API 구현", 
                        "web socket을 이용한 소켓 통신 구현",
                        "client-server API 구현"
                    ]
                }]
        },
        {  
            "id":"portfolio03",
            "name":"블랙잭 웹 게임 개발",
            "tags":["Spring","Java"],
            "mainImgName":"p2_1.png",
            "startDate":"2018.04",
            "endDate":"2018.06",
            "summary":"Spring MVC 교육 과정 중 수행한 팀 프로젝트입니다. 랭킹 기능을 제공하는 블랙잭 게임을 개발 했습니다.",
            "imgs":[
                {
                    "imgName":"p2_1.png",
                    "caption":"로그인 화면"
                },
                {
                    "imgName":"p2_2.png",
                    "caption":"게임 룸 생성 화면"
                },
                {
                    "imgName":"p2_3.png",
                    "caption":"게임 화면 1"
                },
                {
                    "imgName":"p2_4.png",
                    "caption":"게임 화면 2"
                }
            ],
            "git":"https://github.com/amuse1991/spring-web-13",
            "demo":"https://youtu.be/i2CAKLeQM0g?t=183",
            "skills":{
                "language":{
                    "data" : ["Java"],
                    "isContributed":false
                }
                    ,
                "framework":{
                    "data" : ["Spring boot"],
                    "isContributed":true
                },
                "server": {
                    "data": ["window 10"],
                    "isContributed":false
                },
                "DB":{
                    "data" : ["H2"],
                    "isContributed":false
                },
                "others":{
                    "data" : ["git, maven, jenkins"],
                    "isContributed":true
                }
            },
            "contribution":[
                {
                    "part" : "컨트롤러 및 API 구현",
                    "summary" : "Spring 컨트롤러를 구현하고, 해당 기능에 접근할 수 있는 API를 구현했습니다.",
                    "workList": [
                        "히트, 더블다운, 스탠드 기능 구현",
                        "아이디 생성 및 로그인 기능 구현",
                        "점수 계산 기능 구현",
                        "랭킹 기능 구현"
                    ]
                }]
        },
        {  
            "id":"portfolio04",
            "name":"사내 업무 평가 관리 웹 어플리케이션 개발",
            "tags":["MVC",".NET MVC 5"],
            "mainImgName":"p3_1.png",
            "startDate":"2017.12",
            "endDate":"2018.02",
            "summary":"2017년 동계 인턴 기간 동안 수행한 프로젝트 입니다. .NET MVC 프레임워크를 사용해 사원들의 업무 내용을 확인하고, 주간 및 월간 평가를 할 수 있는 웹 어플리케이션을 개발했습니다.",
            "imgs":[
                {
                "imgName":"p3_1.png",
                "caption":"사내 규정상 결과물 스크린샷을 찍을 수 없었습니다."
                }
            ],
            "git":"https://github.com/amuse1991/SIMS_Client",
            "demo":"",
            "skills":{
                "language":{
                    "data" : ["C#"],
                    "isContributed":false
                }
                    ,
                "framework":{
                    "data" : [".NET MVC"],
                    "isContributed":true
                },
                "server": {
                    "data": ["window 10"],
                    "isContributed":false
                },
                "DB":{
                    "data" : ["SQL Server 2017"],
                    "isContributed":false
                },
                "others":{
                    "data" : ["Jira"],
                    "isContributed":true
                }
            },
            "contribution":[
                {
                    "part" : "웹 어플리케이션 프로토타입 개발",
                    "summary" : "MVC 패턴에 기반하여 어플리케이션 프로토타입을 개발했습니다.",
                    "workList": [
                        "로그인, 사원 관리, 사원 평가, 평가 조회 기능 구현",
                        "Jira REST APIs를 활용해 업무 정보를 조회하는 기능 구현"
                    ]
                }]
        }
    ]

    render(){
        let {open, modalContent} = this.state;
        const imageContext = require.context('../../../../public/projects', true);
        return(
            <Element name="projects" className="element">
                <div style={this.divStyle}>
                    <Row>
                        <Col className="page-header">
                            <h1 className="page-title">PROJECTS</h1><br/>
                            <div className="page-title-bar center-block"></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardColumns>
                                {
                                    this.projectDataSet.map(project=>
                                            <Card>
                                                <CardHeader className="text-center">{project.name}</CardHeader>
                                                <CardImg top width="100%" src={imageContext(`./${project.mainImgName}`)} alt="project main image" />
                                                <CardBody className="text-center">
                                                    <CardTitle>
                                                    {project.tags.map(tag=>
                                                        <Badge color="primary">{tag}</Badge>
                                                        )}
                                                    </CardTitle>
                                                    <CardText>{project.summary}</CardText>
                                                    <Button onClick={()=>this.onOpenModal(project.id)}>LEARN MORE</Button>
                                                </CardBody>
                                            </Card>
                                        )
                                }
                            </CardColumns>
                            <Modal open={open} onClose={this.onCloseModal} modalId="project-modal" overlayId="project-modal-overlay" >
                                {modalContent==undefined?null:<ModalContent modalContent={modalContent}/>}
                            </Modal>
                        </Col>
                    </Row>
                </div>
            </Element>
        )
    }
}