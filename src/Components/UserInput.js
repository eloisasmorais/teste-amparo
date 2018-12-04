import React from 'react';

class UserInput extends React.Component {

    render() {
        return(
            <div>
                <input className="input" type="number" onChange={this.props.onInput} required/>
            </div>
        )
    }
}

export default UserInput;