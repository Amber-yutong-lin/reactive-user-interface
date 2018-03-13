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
            listData:[
                {
                    username: "Amber Lin",
                    company: "",
                    tag: "Design",
                    phone: "12345678901",
                    otherField:"",
                    other: ""
                },
                {
                    username: "Ying Wang",
                    company: "",
                    tag: "PR",
                    phone: "13456789026",
                    otherField:"",
                    other: ""
                },
                {
                    username: "Yuling Jin",
                    company: "",
                    tag: "Banker",
                    phone: "10987653467",
                    otherField:"",
                    other: ""
                },
                {
                    username: "Celia Chang",
                    company: "",
                    tag: "Design",
                    phone: "16789065432",
                    otherField:"",
                    other: ""
                },
                {
                    username: "June Wu",
                    company: "",
                    tag: "PR",
                    phone: "16789045783",
                    otherField:"",
                    other: ""
                },
                {
                    username: "Chuyi Zhang",
                    company: "",
                    tag: "Design",
                    phone: "098765789",
                    otherField:"",
                    other: ""
                },
                {
                    username: "Alex Matthew",
                    company: "",
                    tag: "Banker",
                    phone: "6788999777",
                    otherField:"",
                    other: ""
                },
                {
                    username: "Kia Tomien",
                    company: "",
                    tag: "Engineer",
                    phone: "4850433340",
                    otherField:"",
                    other: ""
                },
                {
                    username: "Shiny Wu",
                    company: "",
                    tag: "Design",
                    phone: "988778990",
                    otherField:"",
                    other: ""
                },
                {
                    username: "Sasha Velour",
                    company: "",
                    tag: "Design",
                    phone: "44566777",
                    otherField:"",
                    other: ""
                }
            ],
            starredData:[
                {
                    username: "Amber Lin",
                    company: "NYU SHANGHAI",
                    tag: "DESIGN",
                    phone: "12345678901",
                    otherField:"WEBSITE",
                    other: "AMBERLINCOM",
                    imgUrl:""
                }
            ],
            filterWords:"",
            filterTag:""
        }
    }

    handleFilter(word){
        this.setState({
            filterWords:word
        });
    }

    filterList(){
        let {listData, filterWords, filterTag} = this.state;
        let newList ;
        newList = listData.filter((item,i) =>{
            let a = new RegExp("^"+filterWords);
            if(filterTag !==""){
                return (a.test(item.username)) && (filterTag.toUpperCase() === item.tag.toUpperCase());
            }else{
                return a.test(item.username);
            }

        })
        return newList;
    }
    handleFilterTag(filterTag){
        this.setState({filterTag});
    }
    render() {
        let { starredData, filterWords} = this.state;
        let filterList = this.filterList();
        return (
            <div className="App">
                <div className="innerContent">
                    <SearchBox handleFilter={this.handleFilter.bind(this)} />
                    <AddContactBox  handleFilterTag={this.handleFilterTag.bind(this)}   />
                    <StarredBox starredData={starredData} />
                    <ContactList listData={filterList} filterWords={filterWords} />
                </div>
            </div>
        );
    }
}

export default App;
