import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';


const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
    
`

const Main=styled.div`
    flex-grow:1;
`


function Layout(props: any){
    return (
        <Wrapper>
                <Main>
                {props.children}
                </Main>
            <Nav />
        </Wrapper>
    )
}

export default Layout