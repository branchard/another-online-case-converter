import * as React from 'react';

interface Props {

}

export default class TextArea extends React.Component<Props> {
    render() {
        return (
            <div className="text-area">
                <button className='button is-primary' type="reset">Reset</button>
                <button type="button">Copy</button>
                <button type="button">Paste</button>
                <textarea/>
            </div>
        )
    }
}
