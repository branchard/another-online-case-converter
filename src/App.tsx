import * as React from 'react';

import TextArea from './components/TextArea';
import Header from "./components/Header";

interface Props {

}

export default class App extends React.Component<Props> {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <TextArea/>
                <TextArea/>
            </React.Fragment>
        )
    }
}
