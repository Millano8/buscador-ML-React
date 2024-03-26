import React from "react"

class SearchResultItem extends React.Component<any,any>{
    constructor(props){
        super(props)
    }

    render(){
        return <div className="search-result-item">
            <img className="search-result-item__picture" src={this.props.picture}/>
            <div className="search-result-item__data">
                <h1>{this.props.title}</h1>
                <h2>{this.props.price}</h2>
            </div>
        </div>
    }
}


export {SearchResultItem}