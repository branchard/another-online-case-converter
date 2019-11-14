import * as React from 'react';

import Utils from '../Utils';

interface Props {

}
console.log(Utils.getRandomGradient());
export default class Header extends React.Component<Props> {
    render() {
        return (
            <header className="grey-light">
                <h1 className="title">Another online case converter</h1>
            {/*<header className='header hero is-primary' style={{background: Utils.getRandomGradient()}}>*/}
                {/*<div className='hero-body'>*/}
                    {/*<div className="columns">*/}
                        {/*<div className="column is-12">*/}
                            {/*<div className="container content">*/}
                                {/*<h1 className="title">Another online case converter</h1>*/}
                                {/*<h2 className="subtitle">*/}
                                    {/*Convert any text between camelCase, snake-case, SCREAMING_SNAKE_CASE...*/}
                                {/*</h2>*/}
                            {/*</div>*/}

                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</header>*/}
            </header>
        );
    }
}
