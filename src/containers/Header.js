import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="wrapper">
                    <div className="logo">
                        <img src='/assets/images/logo.jpg' />
                    </div>
                    <div className="banner">
                        <img src='/assets/images/zb-banner.jpg' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
