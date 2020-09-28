import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';


const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    min-height:100vh;
    
    
`

const Main=styled.div`
    flex-grow:100;
`


function Layout(props: any){
    return (
        <Wrapper>
                <Main className={props.className}>
                    {props.children}
                </Main>
            <Nav />
        </Wrapper>
    )
}

export default Layout