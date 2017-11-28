import React from 'react';
import HPLeftPart from './components/HPLeftPart';
import Slider from './components/Slider';
import products from '../../common/constant/products';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="page home">
                <div className="left">
                    <div className="left-part">
                        <div className="title">
                            <span>公司外貌</span>
                        </div>
                        <div className="body">
                            12312321312
                        </div>
                    </div>
                    <div className="left-part">
                        <div className="title">
                            <span>联系我们</span>
                        </div>
                        <div className="body">
                            <p>地址: 陕西省宝鸡市金台区中山东路292号工业品市场中区123号</p>
                            <p>联系人: 张先生</p>
                            <p>手机: 13239170381,13279188234</p>
                            <p>电话: 0917-3238468</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-part">
                        <div className="title">
                            <span>公司简介</span>
                        </div>
                        <div className="body">
                            <p>宝鸡诩东商贸有限公司，成立于2016年8月份，公司位于宝鸡市金台区中山东路292号工业品市场中区123号，是总部（兰州众邦电线电缆集团有限公司）在陕西宝鸡市设立的直营销售公司；长年销售专营众邦牌各系列低压电线及750KV以下高、低压电缆产品；公司职能集集团业务的销售、服务、商务及市场推广于一体。总部位于兰州经济技术开发区，为中国电线电缆行业骨干企业，也是中国西部十省区产能最大的电线电缆制造企业，甘肃省工业百强企业，中国电线电缆百强企业。</p>
                            <p>公司专业生产各种“众邦”牌电线电缆，主要产品有：塑料绝缘电力电缆、控制电缆、架空电缆、橡套电缆、电焊机电缆，全系列矿用电缆、耐火电缆、220KV及以下交联电缆、交联架空电缆、平行集束电缆、预分支电缆、硅橡胶电缆、低烟无卤电缆、氟塑料电缆、辐照电缆，以及750KV及以下各类架空导线...</p>
                        </div>
                    </div>
                    <div className="right-part">
                        <div className="title">
                            <span>产品中心</span>
                        </div>
                        <div className="body">
                            <Slider items={products} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};