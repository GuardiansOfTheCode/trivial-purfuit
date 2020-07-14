import React from 'react';
import Aux from '../../hoc/Aux';

const Layout = (props: any) => {
    return (
        <Aux>
            <main>
                {props.children}
            </main>
        </Aux>
    )
};

export default Layout;
