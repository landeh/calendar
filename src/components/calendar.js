import { Calendar } from 'antd';
import React from 'react';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

function Cal({dateSelected}) {
   return(
        <div>
            <Calendar 
             onPanelChange={onPanelChange}
            onSelect = {dateSelected}
            />
        </div>
   )
}

export default Cal;