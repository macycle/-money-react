import styled from 'styled-components'

const CategorySection=styled.section`
    >ul{
        display:flex;
        justify-content: center;
        align-items: center;
        min-height:60px;
        background:#9563f1;
        > li {
        font-size: 20px;
        padding: 14px;
        border-bottom: 1px solid transparent;
        &.selected{
        color:white;
        font-weight: bold;
        }
        
    }
}
`

export {CategorySection}