import React from 'react';

export default class ContactPage extends React.Component {
    render() {
        return (
            <div className="page contact">
                <div className="left">
                    <div className="left-nav">
                        <p>联系我们</p>
                    </div>
                    <div className="details">
                        <p>地址：陕西省宝鸡市金台区中山东路292号工业品市场中区123号</p>
                        <p>联系人： 张先生</p>
                        <p>手机： 13239170381 13279188234</p>
                        <p>电话： 0917-3238468</p>
                    </div>
                </div>
                <div className="right">
                    <iframe src="./map.html" />
                </div>
            </div>
        );
    }
};