/**
 * Created by LWH on 2018-4-16.
 */
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
let tempAlbumList =[
    {
        id:1,
        name:"album1",
        active:false
    },
    {
        id:2,
        name:"album2",
        active:false
    },
    {
        id:3,
        name:"album3",
        active:false
    },
    {
        id:4,
        name:"album4",
        active:false
    }
];
class Page2 extends Component {
    constructor(props){
        super(props);
        this.state={
            searchValue:"",
            selectedAlbumId:'',
            albumList:tempAlbumList
        }
    }
    componentWillUnmount(){
        let {albumList} = this.state;
        tempAlbumList = albumList;
    }
    addAlbum(e){
        e.preventDefault();
        let {albumList} = this.state;
        let id = albumList.length +1;
        albumList.push({
            id:id,
            name:'album'+id,
            active:false
        });
        this.setState({
            searchValue:"",
            albumList:albumList
        })
    }
    handleOnchangeValue(id,e){
        // console.log(id);
        let {albumList} = this.state;
        for(let i=0;i<albumList.length;i++){
            if(albumList[i].id === id){
                albumList[i].name =e.target.value;
                this.setState({
                    albumList:albumList
                });
                break;
            }
        }
    }
    handleFilterValue(e){
        this.setState({
            searchValue:e.target.value
        })
    }
    filterAlbum(){
        let {albumList, searchValue} = this.state;
        return albumList.filter((item)=>{
            return (item.name.indexOf(searchValue) >=0 || searchValue ==="")
        });
    }
    handleActive(id,e){
        e.preventDefault();
        let {albumList} = this.state;
        for(let i=0;i<albumList.length;i++){
            if(albumList[i].id === id){
                albumList[i].active = !albumList[i].active;
                this.setState({
                    selectedAlbumId:id,
                    albumList:albumList
                });
            }else{
                albumList[i].active = false;
            }
        }
    }
    handleGoPage3(e){
        e.preventDefault();
        let {selectedAlbumId} = this.state;
        if(selectedAlbumId ===""){
            alert("select The album");
            return;
        }
        this.props.history.push("/page3/"+selectedAlbumId);
    }
    render() {
        let {albumList, searchValue} = this.state;
        albumList = this.filterAlbum();
        return (
            <div className="page2">
                <div className="container">
                    <div className="content">
                        <div className="p40 page2-inner">
                            <p className="page2-title">create an album</p>
                            <p className="page2-search">
                                <input placeholder="Search for album" onChange={this.handleFilterValue.bind(this)} value={searchValue} type="text"/>
                            </p>
                            <ul className="album-list clearfix">
                                {
                                    albumList.map((albumItem,i)=>{
                                        return (<li key={i}>
                                            <a href="" onClick={this.handleActive.bind(this,albumItem.id)}>
                                                <div className={`album-img ${albumItem.active && 'active'}`}></div>
                                            </a>
                                            <div className="album-name">
                                                <input value={albumItem.name} onChange={this.handleOnchangeValue.bind(this,albumItem.id)}  type="text"/>
                                            </div>
                                        </li>)
                                    })
                                }
                                <li>
                                    <a href="" onClick={this.addAlbum.bind(this)}>
                                        <div className="album-img">
                                            <div className="add-img"></div>
                                            <div className="add-text">New Ablum</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer">
                        <span className="footer-left fl">
                            <Link to="/">Back</Link> to homepage.
                        </span>
                        <span className="footer-right fr">
                            <a onClick={this.handleGoPage3.bind(this)} href="" >Go</a> to upload Polaroid.
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page2;
