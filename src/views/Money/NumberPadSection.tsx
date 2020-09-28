import styled from 'styled-components'

const NumberPadSection =styled.section`
    display:flex;
    flex-direction:column;

    >.output{
        background:#f5f5f5;
        font-size:24px;
        line-height:24px;
        text-align:right;
        padding:6px 16px;
       
    }

    >.pad{
        > button{
            font-size:18px;
            float: left;
            width:25%;
            height:64px;
            border:none;

            &.ok{
                height:128px;
                float:right;
            }

            &.zero{
                width:50%
            }

            &:nth-child(1){
                background:#b3bcf0
            }

            &:nth-child(2),&:nth-child(5) {
                background:#a6b1ed;
            }

            &:nth-child(3),&:nth-child(6),&:nth-child(9) {
                background:#99a5eb;
            }

            &:nth-child(4),&:nth-child(7),&:nth-child(10) {
                background:#8d9ae8;
            }

            &:nth-child(8),&:nth-child(11),&:nth-child(13) {
                background:#808fe6;
            }

            &:nth-child(12) {background:#6678e1;}
            &:nth-child(14) {background:#7384e3;}
        }
    }

`

export {NumberPadSection};