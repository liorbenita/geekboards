import React from 'react';

class Header extends React.Component{

    render(){
        return (
            <div className="header">
                <div className="header-logo">logo</div>
                <div className="header-search"><input type="text"/></div>
                <div className="header-account">Account</div>
                <div className="header-setting">cogwhell</div>
                
            </div>
        )
    }



}
export default Header;