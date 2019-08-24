import { Progress } from 'antd';
import React from 'react';

function Prog(props) {
    var {tasks} = props
    var totalTasks = tasks.length
    var completedTasks = tasks.filter(t=>{return t.completed}).length
    var uncompletedTasks = totalTasks - completedTasks
    var percent = uncompletedTasks/totalTasks*100

   return(
    <div style = {{ padding: '40px'}}>
    <h3> Completed Tasks</h3>
    <Progress percent={percent} showInfo = {true}  />
    </div>    
   )
}
export default Prog;