import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';

// TODO: Add navbar for use over entire application
const Layout = (props: any) => {
    return (
        <Auxiliary>
            <main>
                {props.children}
            </main>
        </Auxiliary>
    );
};

export default Layout;
