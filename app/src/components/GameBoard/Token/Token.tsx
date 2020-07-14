import React, {useEffect} from 'react';

const Token = (props: any) => {
    useEffect(() => console.log(`[Token] props: ${JSON.stringify(props)}`));
    return (
        <div>
            Token
        </div>
    )
}

export default Token;
