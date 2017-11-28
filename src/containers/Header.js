import React from 'react';
import logo from '../assets/images/logo.jpg';
import banner from '../assets/images/zb-banner.jpg';

class Header extends React.Component {

    render() {
        const { children } = this.props;
        return (
            <div className="header">
                <div className="wrapper">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="banner">
                        <img src={banner} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
