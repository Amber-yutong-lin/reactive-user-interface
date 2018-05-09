import React, {Component} from 'react';
import SearchBox from './SearchBox';
import AddContactBox from './AddContactBox';
import StarredBox from './StarredBox';
import ContactList from './ContactList';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData:[],
            starredData:[],
            filterWords:""
        }
    }
    componentWillMount(){

        let listData = JSON.parse(localStorage.getItem('listData'));
        let starredData = JSON.parse(localStorage.getItem('starredData'));
        if(listData){
            this.setState({
                listData:listData
            })
        }
        if(starredData){
            this.setState({
                starredData:starredData
            })
        }
    }
    handleFilter(word){
        this.setState({
            filterWords:word
        },()=>{
            let {filterWords} = this.state;
        });
    }
    handleListData(obj){
        let {listData} = this.state;
        listData.push(obj);
        this.setState({
            listData:listData
        },()=> {
            let {listData} = this.state;
            localStorage.setItem('listData',JSON.stringify(listData))
        });
    }
    handleStarredData(obj){
        let {starredData} = this.state;
        starredData.push(obj);
        this.setState({
            starredData:starredData
        }, ()=> {
            let {starredData} = this.state;
            localStorage.setItem('starredData',JSON.stringify(starredData))
        });
    }
    filterList(){
        let {listData, starredData, filterWords} = this.state;
        let newList ;
        newList = listData.filter((item,i) =>{
            let aa = new RegExp("^"+filterWords);
            return aa.test(item.username);
        })
        return newList;
    }
    render() {
        let {listData, starredData, filterWords} = this.state;
        let filterList = this.filterList();
        // var aa = new Date('2018/03/')
        return (
            <div className="App">
                <div className="innerContent">
                    <SearchBox  handleFilter={this.handleFilter.bind(this)} />
                    <AddContactBox handleListData={this.handleListData.bind(this)} handleStarredData={this.handleStarredData.bind(this)} />
                    <StarredBox starredData={starredData} />
                    <ContactList listData={filterList} filterWords={filterWords} />
                </div>
            </div>
        );
    }
}

export default App;
