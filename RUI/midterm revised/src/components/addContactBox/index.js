import React, {Component} from 'react';
import './style.css';

class AddContactBox extends Component {
    constructor(props) {
        super(props);
        // localStorage.clear();
        this.state = {
            starred:false,//是否置顶
            username: "",
            company: "",
            tag: "",
            phone: "",
            otherField:"",
            other: "",
            rselectArr:["DESIGN","PR","ENGNIEER","BANKER"],
            isShowSelect:false,
            imgUrl:"" //头像链接
        };
        this.bindWindow =  (e) =>{
            // console.log(e.target.nodeName)
           /* if((e.target.className.indexOf('dropdown-menu-item') === -1) && (e.target.className.indexOf('tagBtn') === -1)){
                this.setState({
                    isShowSelect:false
                });
            }*/
        }
    }
    componentDidMount(){
        window.addEventListener('click',this.bindWindow);
    }
    componentWillUnmount(){
        window.removeEventListener('click',this.bindWindow);
    }
    add(e) {//输入框执行的事件
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSelect(){//点击tag
        let {isShowSelect} = this.state;
        this.setState({
            isShowSelect:!isShowSelect
        })
    }
    selectedChange(selected){//点击下拉菜单
        this.setState({
            tag:selected,
            isShowSelect:false
        })
    }
    handleOtherInfo(txt){//选择 E-MAIL  WEBSITE LINKEDIN
        this.setState({
            otherField:txt
        })
    }
    handlestarred(){//点击标识是否置顶
        let {starred} = this.state;
        this.setState({
            starred:!starred
        })
    }
    handleImgChange(){//点击添加图片
        let uploadFile = document.getElementById("uploadFile");
        let _self = this;
        uploadFile.onchange = function () {
            let freader = new FileReader();
            let ofile = this.files[0];
            if (ofile) {
                freader.readAsDataURL(ofile);
                freader.onload = function() {
                    // console.log(this.result);
                    _self.setState({
                        imgUrl:this.result
                    })
                }
            }
        };
        uploadFile.click();
    }
    handleAddContact(){
        let {starred, username, company, tag, phone, otherField, other, imgUrl} = this.state;
        let {handleListData, handleStarredData} = this.props;
        let obj ={};
        obj.username = username;
        obj.company = company;
        obj.tag = tag;
        obj.phone = phone;
        obj.imgUrl = imgUrl;
        obj.otherField = otherField || 'E-MAIL';
        obj.other = other;
        // obj[otherField || 'E-MAIL'] = other;
        let defualtOps = {
            starred:false,
            username: "",
            company: "",
            tag: "",
            phone: "",
            otherField:"",
            other: "",
            isShowSelect:false,
            imgUrl:""
        };
        if(starred){
            handleStarredData(obj);
        }else{
            handleListData(obj);
        }
        this.setState(defualtOps);
    }
    render() {
        let {username, company, tag, phone, other, rselectArr, isShowSelect, otherField, starred, imgUrl} = this.state;
        return (
            <div className="AddContactBox">
                <div className="starredIcon">
                    <i onClick={this.handlestarred.bind(this)} className={`fa fa-star fa-lg ${starred ?"color-yellow":"color-gray"}`}></i>
                </div>
                <div className="info">
                    <div className="infoLebal">
                        <div className="infoField">NAME:
                            <div className="dropdown-wrapp">
                                <span onClick={this.handleSelect.bind(this)} className="tagBtn color-red">
                                    {!tag && <span><i className="fa fa-plus color-red"></i> TAG</span>}
                                    {tag}
                                </span>
                                {
                                    isShowSelect && <ul className="dropdown-menu">
                                        {
                                            rselectArr.map((item,i)=> {
                                                return <li key={i} onClick={this.selectedChange.bind(this,item)} className="dropdown-menu-item">{item}</li>
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
                    <div className="uploadBox" onClick={this.handleImgChange.bind(this)}>
                        {imgUrl && <img style={{width:'100%'}} src={imgUrl} alt=""/>}
                        {
                            !imgUrl && <i className="fa fa-plus fa-4x color-red"></i>
                        }
                    </div>
                    <input id="uploadFile" style={{display:'none'}} type="file"/>
                    <div onClick={this.handleAddContact.bind(this)} className="addButton">ADD CONTACT</div>
                </div>
            </div>
        );
    }
}

export default AddContactBox;
