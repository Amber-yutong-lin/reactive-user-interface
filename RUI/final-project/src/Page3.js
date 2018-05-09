
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
let tempUploadList =[];
class Page3 extends Component {
    constructor(props){
        super(props);
        this.state= {
            imgUrlValue:"",
            curImgId:"",
            curId:"",
            uploadList: tempUploadList
        }
    }
    componentWillUnmount(){
        let {uploadList} = this.state;
        tempUploadList =uploadList;
    }
    componentWillMount(){
        let {id} = this.props.match.params;
        let {uploadList} = this.state;
        let isExist=uploadList.some((item)=>{
            return item.id === id;
        });
        if(!isExist){
            uploadList.push({
                id:id,
                list:[{imgId:1,imgUrl:""},{imgId:2,imgUrl:""},{imgId:3,imgUrl:""},{imgId:4,imgUrl:""}]
            });
            this.setState({
                uploadList:uploadList
            })
        }
    }
    getCurUploadList(){
        let {id} = this.props.match.params;
        let {uploadList} = this.state;
        let curList = uploadList.filter((item,i)=>{
            return item.id === id;
        });
        if(curList.length >0){
            return curList[0]
        }else{
            return {}
        }
    }
    handleChangeFile(id,imgId){
        let uploadImg = this.refs.uploadImg;
        this.setState({
            curImgId:imgId,
            curId:id
        },function () {
            uploadImg.click();
        });
    }
    onChangeUpload(e){

        let freader = new FileReader();
        let ofile = e.target.files[0];
        let self = this;
        let {
            curImgId,
            curId,
            uploadList
        }= this.state;
        if (ofile) {
            freader.readAsDataURL(ofile);
            freader.onload = function() {

                for(let i=0;i<uploadList.length;i++){
                    if(uploadList[i].id === curId ){
                        let list = uploadList[i].list;
                        for(let l= 0;l<list.length;l++){
                            console.log(curImgId)
                            if(list[l].imgId === curImgId){
                                list[l].imgUrl = this.result;
                                uploadList[i].list =list;
                                break;
                            }
                        }
                        break;
                    }
                }
                self.setState({
                    imgUrlValue:"",
                    uploadList:uploadList
                })
            };
        }
    }
    render() {
        let {imgUrlValue}= this.state;
        let curUpload = this.getCurUploadList();
        return (
            <div className="page3">
                <div className="container">
                    <div className="content">
                        <div className="p40 page3-inner">
                            <p className="page2-title" style={{'marginBottom':'200px'}}>upload Polaroid</p>
                            <ul className="upload-list">
                                {
                                    curUpload.list.map((item,i)=>{
                                        return (<li key={i} onClick={this.handleChangeFile.bind(this,curUpload.id,item.imgId)}>
                                            <div className="upload-list-inner">
                                                <img src={item.imgUrl} alt=""/>
                                            </div>
                                        </li>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <input ref="uploadImg" value={imgUrlValue} onChange={this.onChangeUpload.bind(this)} type="file" className="hide"/>

                    <div className="footer">
                        <span className="footer-left fl">
                            <Link to="/page2">Back</Link> to create an album.
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page3;
