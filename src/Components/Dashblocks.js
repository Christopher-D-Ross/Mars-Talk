import React from 'react';

export class Dashblock extends React.Component {
    render() {

        return (
            <div>
                <div className="dashblock">
                    <div className="dashtext">
                        <h1>{this.props.text}</h1>
                    </div>
                    <div className="dashnumber">
                        <h1>{this.props.number}</h1>
                    </div>
                    <div className="dashphrase">
                        <h2>{this.props.phrase}</h2>
                    </div>
                </div>
            </div>
        )
    }
}