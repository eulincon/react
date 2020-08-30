import React, { Component } from 'react';  

import '../css/styles.css';

class Header extends Component {
    state = {
        keywords: ''
    }
    inputC = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }
    
    render() {

        return (
            <header>
                <div className="logo">Logo</div>
                <input  
                    type="text" 
                    onChange={this.inputC}
                />
                <div>{this.state.keywords}</div>
            </header>
        )
    }
}

export default Header;