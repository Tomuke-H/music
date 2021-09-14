import styled, { keyframes } from "styled-components";
import { BackgroundColor } from "./query";

export const Appear = keyframes`
    from {
        opacity: 0%;
        background-color: white;
    }
    to {
        opacity: 100%
        background-color: ${BackgroundColor};
    }
`

export const CardContainer = styled.div`
    height: 250px;
    width: 300px;
    padding: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 5px;
    background-color: ${BackgroundColor};
    margin: 20px;
    animation: ${Appear} 1s;
`
