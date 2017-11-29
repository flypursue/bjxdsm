import React from 'react';
import footerLogo from '../assets/images/footer-logo.jpg';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="left">
                    <img src={footerLogo} />
                </div>
                <div className="right">
                    <div className="copyright">
                        <p>版权所有：宝鸡诩东商贸-兰州众邦直销商 </p>
                        <p>地址：陕西省宝鸡市金台区中山东路292号工业品市场中区123号</p>
                        <p>联系电话： 13239170381</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
