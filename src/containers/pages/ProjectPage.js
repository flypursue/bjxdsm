import React from 'react';
import projects from '../../common/constant/projects';


export default class ProductPage extends React.Component {
    renderProjects() {
        return projects.map(({ name, src }, index) => {
            return (
                <div className="item" key={index}>
                    <img src={src} />
                    <p>{name}</p>
                </div>
            );
        });
    }
    render() {
        return (
            <div className="page product">
                <div className="left">
                    <div className="left-nav">
                        <p>工程业绩</p>
                    </div>
                    <div className="details">
                        <p>主要业绩包括：</p>
                        <p>出口，电力，石油，铁路，国防航空，公路隧道，冶炼采矿等多方面</p>
                    </div>
                </div>
                <div className="right">
                    <div className="product-list">
                        {this.renderProjects()}
                    </div>
                </div>
            </div>
        );
    }
};