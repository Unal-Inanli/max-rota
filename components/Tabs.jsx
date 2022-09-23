import React from 'react';
import Tab from './Tab';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = React.useState(1);

    const isActive = (id) => {
        return activeTab === id ? "active" : ""
    }
    return (
        <div className='container'>
            <ul className="nav nav-tabs" id="bulten_tabs">
                {tabs && tabs.map(tab => {
                    return (<li onClick={e => setActiveTab(tab.id)} className="nav-item" role="presentation">
                        <button className={"nav-link " + isActive(tab.id)} id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">{tab.title}sdasd</button>
                    </li>)
                })}
            </ul>

            <div className="tab-content" id="bulten_tabs_content">
                {tabs && tabs.map(tab => {

                    if (activeTab === tab.id) {
                        return <Tab tabId={tab.id} content={tab.content} />
                    }
                })}
            </div>
        </div>
    );
}

export default Tabs;
