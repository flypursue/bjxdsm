import React from 'react';
import products from '../../common/constant/products';


export default class ProductPage extends React.Component {
    renderProducts() {
        return products.map(({ name, src }, index) => {
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
                        <p>产品展示</p>
                    </div>
                    <div className="details">
                        <p>主营范围：</p>
                        <p>电线电缆、电力器材、PVC材料、电机设备、农用机械、五金工具、劳保用品、电器电料、电缆桥架的批发兼零售。</p>
                    </div>
                </div>
                <div className="right">
                    <div className="product-list">
                        {this.renderProducts()}
                    </div>
                </div>
            </div>
        );
    }
};