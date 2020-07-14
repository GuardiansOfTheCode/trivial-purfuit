import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';

const Layout = (props: any) => {
    return (
        <Auxiliary>
            <main>
                {props.children}
            </main>
        </Auxiliary>
    )
};

export default Layout;
