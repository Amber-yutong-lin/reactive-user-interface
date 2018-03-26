import React, { Component } from 'react';
import './style.css';

class StarredBox extends Component {
    constructor(props){
        super(props);
    }
    filterSort(arr) {//排序
        let filterObj = {};
        let filterArr = [];
        arr.forEach((item,i)=>{
            let filterLetter = filterObj[item.username.charAt(0).toLocaleUpperCase()]
            if(!filterLetter){
                filterObj[item.username.charAt(0).toLocaleUpperCase()] = [];
            }
            filterObj[item.username.charAt(0).toLocaleUpperCase()].push(item)
        });
        let sortKey =[];
        for(let k in filterObj){
            sortKey.push(k);
        }
        sortKey.sort();
        sortKey.forEach(function (keyItem,i) {
            filterArr.push(Object.assign({},{list:filterObj[keyItem]},{key:keyItem}))
        });
        return filterArr;
    }

    render() {
        let {starredData} = this.props;
        let starredSortData = this.filterSort(starredData);
        return (
            <div className="starredBox">
                <div className="block_title bg-gray"><span className="color-red">STARRED</span> <i className="fa fa-star fa-lg color-yellow"></i></div>
                <div className="starredContent">
                    <ul className="starredList">
                        {
                            starredSortData.map((item,i)=>{
                                return (item.list.map((list,l)=>{
                                    return (
                                        <li key={l} className="starredItem">
                                            <div className="starredLeft">
                                                <div className="color-red"><strong>{list.username}</strong><sup className="color-dark-red"><strong>{list.tag}</strong></sup></div>
                                                <div className="starredInfo">
                                                    <p><span className="bg-gray">COMPANY:</span><span className="color-dark-red">{list.company}</span></p>
                                                    <p><span className="bg-gray">PHONE:</span><span className="color-dark-red">{list.phone}</span></p>
                                                    <p><span className="bg-gray">{list.otherField}:</span><span className="color-dark-red">{list.other}</span></p>
                                                </div>
                                            </div>
                                            <div className="starredRight">
                                                <img style={{width:"100%"}} src={list.imgUrl} alt=""/>
                                            </div>
                                        </li>
                                    )
                                }))
                            })
                        }

                    </ul>
                </div>
            </div>
        );
    }
}

export default StarredBox;
