import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="wrapper">
                    <div className="links">
                        <span>加入收藏</span>
                        <span>设为首页</span>
                        <span>网站地图</span>
                        <span>English</span>
                    </div>
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
