import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import Header from './component/blog/Header';
import Main from './component/blog/Main';
import Footer from './component/blog/Footer'

class RouterBlog extends Component {

    //displayName
    static displayName = "Router_Blog";
    //constructor
    constructor(props) {
        super(props);
        // state
        this.state = {}
        // bind
    }// end constructor

    //CDM

    //Function

    //Render

    //render
    render() {

        //return
        return (
            <React.Fragment>
                <Header></Header>
                <br />
                <Main></Main>
                <br />
                <Footer></Footer>
            </React.Fragment>
        )//return end
    }//render end
}//Router End

export default withTranslation()(RouterBlog);