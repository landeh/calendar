import { Progress } from 'antd';
import React from 'react';

function Prog(props) {
    var {tasks} = props
    var totalTasks = tasks.length
    var completedTasks = tasks.filter(t=>{return t.completed}).length
    var uncompletedTasks = totalTasks - completedTasks
    var percent = totalTasks/completedTasks*100

   return(
    <div>
    <Progress percent={percent}  />
    <Progress percent={uncompletedTasks * 100} />
    </div>    
   )
}
export default Prog;