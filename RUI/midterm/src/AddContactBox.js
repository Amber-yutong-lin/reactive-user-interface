import React, {Component} from 'react';
 import './AddContactBox.css';
 import staricon from './star-icon.png'

class AddContactBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starred:false,//是否置顶
            username: "",
            company: "",
            tag: "",
            tag1:"",
            phone: "",
            otherField:"",
            other: "",
            rselectArr:["DESIGN","PR","ENGINEER","BANKER"],
            isShowSelect:false,
            isShowSelect1:false
        };
    }

    add(e) {//输入框执行的事件
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handlestarred(){//点击标识是否置顶
        let {starred} = this.state;
        this.setState({
            starred:!starred
        })
    }
    handleSelect(){//点击tag
        let {isShowSelect} = this.state;
        this.setState({
            isShowSelect:!isShowSelect,
            isShowSelect1:false
        })
    }
    handleSelect1(){//点击tag
        let {isShowSelect1} = this.state;
        this.setState({
            isShowSelect:false,
            isShowSelect1:!isShowSelect1
        })
    }
    selectedChange(selected){//点击下拉菜单

        this.setState({
            tag:selected,
            isShowSelect:false
        },()=>{

        })
    }
    selectedChange1(selected){//点击下拉菜单

        this.setState({
            tag1:selected,
            isShowSelect1:false
        },()=>{
            let {tag1} = this.state;
            let {handleFilterTag} = this.props;
            handleFilterTag(tag1);
        })
    }
    handleOtherInfo(txt){//选择 E-MAIL  WEBSITE LINKEDIN
        this.setState({
            otherField:txt
        })
    }

    render() {
        let {username, company, tag, tag1, phone, other, rselectArr, isShowSelect, otherField, isShowSelect1} = this.state;
        return (
            <div className="AddContactBox">
                <div className="starredIcon">
                    <img src={staricon} alt="alt"/>
                </div>
                <div className="info">
                    <div className="infoLebal">
                        <div className="infoField">NAME:
                            <div className="dropdown-wrapp">
                                <span onClick={this.handleSelect.bind(this)} className="tagBtn color-red">
                                    {!tag && <span><i className="fa fa-plus color-red"></i> TAG</span>}
                                    {tag && <span>{tag}</span>}
                                </span>
                                <span onClick={this.handleSelect1.bind(this)} className="tagResult color-red">{tag1?tag1:"select tag"}</span>
                                {
                                    isShowSelect && <ul className="dropdown-menu">
                                        {
                                            rselectArr.map((item,i)=> {
                                                return <li key={i} onClick={this.selectedChange.bind(this,item)} className="dropdown-menu-item">{item}</li>
                                            })
                                        }
                                    </ul>
                                }
                                {
                                    isShowSelect1 && <ul className="dropdown-menu dropdown-menu1">
                                        {
                                            rselectArr.map((item,i)=> {
                                                return <li key={i} onClick={this.selectedChange1.bind(this,item)} className="dropdown-menu-item">{item}</li>
                                            })
                                        }
                                    </ul>
                                }
                            </div>
                        </div>
                        <input name="username" value={username} onChange={this.add.bind(this)} type="text"/>
                    </div>
                    <div className="infoLebal">
                        <p className="infoField">COMPANY:</p>
                        <input name="company" value={company} onChange={this.add.bind(this)} type="text"/>
                    </div>
                    <div className="infoLebal">
                        <p className="infoField">PHONE:</p>
                        <input name="phone" value={phone} onChange={this.add.bind(this)} type="text"/>
                    </div>
                    <div className="infoLebal">
                        <p className="infoField">
                            <span className={`bg-gray mr5 ${otherField === "E-MAIL" ? "infoFieldSelected":""}`} onClick={this.handleOtherInfo.bind(this,"E-MAIL")}>E-MAIL</span>
                            <span className={`bg-gray mr5 ${otherField === "WEBSITE" ? "infoFieldSelected":""}`} onClick={this.handleOtherInfo.bind(this,"WEBSITE")}>WEBSITE</span>
                            <span className={`bg-gray mr5 ${otherField === "LINKEDIN" ? "infoFieldSelected":""}`} onClick={this.handleOtherInfo.bind(this,"LINKEDIN")}>LINKEDIN</span>
                        </p>
                        <input name="other" value={other} onChange={this.add.bind(this)} type="text"/>
                    </div>
                </div>
                <div className="portrait">
                    <div className="uploadBox" >
                        <i className="fa fa-plus fa-4x color-red"></i>
                    </div>
                    <div  className="addButton">ADD CONTACT</div>
                </div>
            </div>
        );
    }
}

export default AddContactBox;
