import React from 'react';
import './Header.less'


class Header extends React.Component{

    render(){
        return (
            <div className="header">
                <div className="header-logo">
                    <img className="logo" src={require('../assets/logo.png')} alt="" />
                </div>
                <div className="header-search"><input type="text"/></div>
                <div className="header-account">Account</div>
                <div className="header-setting">cogwhell</div>
                
            </div>
        )
    }



}
export default Header;