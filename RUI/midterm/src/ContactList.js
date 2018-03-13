import React, { Component } from 'react';
import './MailList.css';

class MailList extends Component {
    constructor(props){
        super(props);
        this.handleSortName = this.handleSortName.bind(this)
        this.state ={
            sortName:'first'
        }
    }
    filterSort(arr) {
        let filterObj = {};
        let filterArr = [];
        let {sortName} = this.state;
        arr.forEach((item,i)=>{
            let sortNameArr = item.username.split(" ");
            let sortNameKey = sortName === "first"?sortNameArr[0]:sortNameArr[1];
            let filterLetter = filterObj[sortNameKey.charAt(0).toLocaleUpperCase()];
            if(!filterLetter){
                filterObj[sortNameKey.charAt(0).toLocaleUpperCase()] = [];
            }
            filterObj[sortNameKey.charAt(0).toLocaleUpperCase()].push(item)
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
        let tpl =[];
         mailListData.forEach((item,i)=>{
            item.list.forEach((list,l) =>{
                tpl.push(<li key={''+i+l} className="mailItem clearfix">
                    <div className="mailLeft">
                        <strong>{list.username}</strong> <strong className="color-dark-red"><sup>{list.tag}</sup></strong>
                    </div>
                    <div className="mailRight">{list.phone}</div>
                </li>)
            })
        });
        return <ul className="mailList">{tpl}</ul>;
    }
    handleSortName(sortName){
        this.setState({
            sortName
        })
    }
    render() {
        let {sortName}  = this.state;
        return (
           <div className="mailListBox">
               <div className="sortNameBox">
                   <button className={sortName === "first"?"active":""} onClick={this.handleSortName.bind(this, "first")}>Sort by First Name</button>
                   <button className={sortName === "last"?"active":""} onClick={this.handleSortName.bind(this, "last")}>Sort by Last Name</button>
               </div>
               <div  className="classify">
                   <div className="block_title bg-gray">CONTACTS</div>
                   <div className="classifyContent">
                       {this.classify.call(this)}
                   </div>
               </div>
           </div>
        );
    }
}

export default MailList;
