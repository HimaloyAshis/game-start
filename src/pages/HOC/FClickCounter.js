import React from 'react';

class FClickCounter extends React.Components {

    state={
        count:0
    }

    render() {
        return (
            <div>
                <button>Clicked x times</button>
            </div >
        );
    }
};

export default FClickCounter;