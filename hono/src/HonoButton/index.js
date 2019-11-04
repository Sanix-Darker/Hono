import React, {Component} from 'react';

import array_lang_value from './array_lang_value';
import Methods from './Methods';

class HonoButton extends Component {
    constructor (props){
        super(props);

        this.state = {

        }
    }

    componentWillReceiveProps(nextProps){
        this.state.logs = nextProps.logs;
        let array_logs = nextProps.reverse();
        array_logs.map(log => {
            if(log.type === "step"){
                this.state.step = log.message;
            }
            if(log.type === "stop"){
                this.state.stop = log.message;
            }
            if(log.type === "estimatetime"){
                this.state.estimate_time = log.message;
            }
        });
        this.state.connected = nextProps.connected;
    }

    componentDidMount(){
        this.state.logs = this.props.logs;
        let array_logs = this.props.reverse();
        array_logs.map(log => {
            if(log.type === "step"){
                this.state.step = log.message;
            }
            if(log.type === "stop"){
                this.state.stop = log.message;
            }
            if(log.type === "estimatetime"){
                this.state.estimate_time = log.message;
            }
        });
        this.state.connected = this.props.connected;
    }

    render() {
        return (<div>
                    <DispoxConsole ref="console"
                        estimate_time = {this.state.estimate_time}
                        connected = {this.state.connected}
                        step = {this.state.step}
                        stop = {this.state.stop}
                        logs={this.state.logs}/>
                </div>);
    }
}

export default HonoButton;