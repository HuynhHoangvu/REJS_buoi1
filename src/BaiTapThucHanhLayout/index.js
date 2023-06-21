import React,{ Component } from "react";
import Header from "./header";
import Carousel from "./carousel";
import ListItem from "./list-item";
import Footer from "./footer";
export default class BaiTapThucHanhLayout extends Component{
    render(){
        return(
            <div>
            <Header/>
            <Carousel/>
            <ListItem/>
            <Footer/>
</div>
        )
    }
}
