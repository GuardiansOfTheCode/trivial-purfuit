import React from 'react';
import Aux from '../../hoc/Aux';

const Layout = (props: any) => {
    return (
        <Aux>
            <div>Navbar</div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
};

export default Layout;
