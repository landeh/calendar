import { Progress } from 'antd';
import React from 'react';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

function Prog() {
    var totalTasks = tasks.length
    var completedTasks = tasks.filter(t=>{return t.completed}).length
    var uncompletedTasks = TotalTasks - completedTasks

   return(
    <div>
    <Progress percent={completedTasks * 100}  />
    <Progress percent={uncompletedTasks * 100} />
    </div>    
   )
}

export default Prog;