import React, { Component } from 'react';
import './style.css';

class MailList extends Component {
    constructor(props){
        super(props);
    }
    filterSort(arr) {
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
    classify(){
        let { listData} = this.props;
        let mailListData = this.filterSort(listData);
        // console.log(JSON.stringify(mailListData))
        return mailListData.map((item,i)=>{
            return (<div key={i} className="classify">
                <div className="block_title bg-gray">{item.key}</div>
                <div className="classifyContent">
                    <ul className="mailList">
                        {
                            item.list.map((list,l) =>{
                                return (<li key={l} className="mailItem clearfix">
                                    <div className="mailLeft">
                                        <strong>{list.username}</strong> <strong className="color-dark-red"><sup>{list.tag}</sup></strong>
                                    </div>
                                    <div className="mailRight">{list.phone}</div>
                                </li>)
                            })
                        }
                    </ul>
                </div>
            </div>)
        });

    }
    render() {

        return (
           <div className="mailListBox">
               {this.classify.call(this)}
           </div>
        );
    }
}

export default MailList;
