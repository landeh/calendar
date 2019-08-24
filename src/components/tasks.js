import React from 'react';
import moment from 'moment';
import { List} from 'antd';
import { Checkbox } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';

class Tasks extends React.Component {
    state = {
        edit: false
    }
    render() {
        var { onCheck, data, selectedDate, back } = this.props
        var { edit, text } = this.state

        return (
            <div>
                <h3 style={{ margin: '16px 0' }}>Tasks for {moment(selectedDate * 1000).format('ll')}</h3>
                <List
                    size="small"
                    dataSource={data}
                    renderItem={(item) => <List.Item>
                        <Checkbox
                            onChange={(e) => onCheck(e, item)}
                            checked={item.completed}
                        >
                            {item.text}
                        </Checkbox>
                    </List.Item>}
                />
                <div>
                    <Button
                        onClick={() => this.setState({ edit: true })}
                        placeholder="Add another task"
                    >
                        Add
                    </Button>
                    <Button onClick={back}> Back </Button>
                    {edit && <Input
                        value={text}
                        onChange={e => this.setState({ text: e.target.value })}
                        onPressEnter={(e) => this.props.addTask({ text, date: selectedDate })} />}
                </div>
            </div>
        )
    }
}


export default Tasks;