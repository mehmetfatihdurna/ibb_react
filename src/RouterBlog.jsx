//rcc
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

// HEADER, FOOTER
import Header from './component/Header';
import Footer from './component/Footer';

// ROUTER
import { Routes,Route } from 'react-router-dom';

//CRUD COMPONENTS
import BlogList from './component/blog/BlogList';
import BlogCreate from './component/blog/BlogCreate';
import BlogUpdate from './component/blog/BlogUpdate';
import BlogView from './component/blog/BlogView';


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
                {/* HEADER */}
                <Header logo="fa-solid fa-blog"></Header>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<BlogList/>}/>
                        <Route path="/blog/list" element={<BlogList/>}/>
                        <Route path="/blog/create" element={<BlogCreate/>}/>
                        <Route path="/blog/update/:id" element={<BlogUpdate/>}/>
                        <Route path="/blog/view/:id" element={<BlogView/>}/>
                    </Routes>
                </div>
                
                {/* FOOTER */}
                <Footer copy="&copy;2021-2023 FatihTech"></Footer>
                
            </React.Fragment>
        )//return end
    }//render end
}//Router End

export default withTranslation()(RouterBlog);