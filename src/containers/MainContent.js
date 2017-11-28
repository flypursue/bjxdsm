import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import IntroducePage from './pages/IntroducePage';
import ProductPage from './pages/ProductPage';

const menus = [
    { 
        name: '首页',
        hash: '#0',
        page: HomePage
    },
    { 
        name: '产品展示',
        hash: '#1',
        page: ProductPage
    },
    { 
        name: '公司简介',
        hash: '#2',
        page: IntroducePage
    },
    { 
        name: '联系我们',
        hash: '#3',
        page: ContactPage
    }
];

class MainContent extends React.Component {

    state = {
        activedHash: '#0'
    }
    
    switch(activedHash) {
        this.setState({ activedHash });
    }

    getActivedHash() {
        return (window ? window.location.hash : '') || this.state.activedHash;
    }

    renderMenus() {
        
        return (
            <ul>
                {menus.map(({ name, hash }) => {
                    return (
                        <li className={classNames({ actived: this.getActivedHash() === hash })} onClick={() => this.switch(hash)}>
                            <a href={hash}>{name}</a>   
                        </li>
                    );
                })}
            </ul>
        );
    }

    renderPage() {
        const activedHash = this.getActivedHash();
        const menu = _.find(menus, ({ hash }) => hash === activedHash);
        if (menu) {
            return <menu.page />;
        }
    }

    render() {
        return (
            <div className="main">
                <div className="menu">
                    {this.renderMenus()}
                </div>
                <div className="content">
                    {this.renderPage()}
                </div>
            </div>
        );
    }
}

export default MainContent;
