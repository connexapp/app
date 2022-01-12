import styled, {css} from 'styled-components'

export const LoaderContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .svg-loader{
        margin: auto; 
        background: rgb(255, 255, 255); 
        display: block; 
        shape-rendering: auto; 
        animation-play-state: running; 
        animation-delay: 0s;
        width: 100px;
        .circle-loader{
            animation-play-state: running; 
            animation-delay: 0s;
            .animateTransform-loader{
                animation-play-state: "runnig";
                animation-delay: 0s;
            }
        }
    }
`
