import { Calendar } from 'antd';
import React from 'react';

function onPanelChange(value, mode) {
    console.log(value, mode);
}

function Cal({ dateSelected }) {
    return (

        <div style={{ width: '700 px', border: '1px solid #d9d9d9', borderRadius: 4, align: 'center' }}>
            <Calendar 
            fullscreen={false} 
            onPanelChange={onPanelChange} 
            onSelect={dateSelected} />
        </div>
    )
}

export default Cal;