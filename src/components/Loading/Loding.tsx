import * as S from './styles'

function Loading(){
    return(
        <S.LoaderContainer>
            <svg className="svg-loader" xmlns="http://www.w3.org/2000/svg" width="331px" height="331px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle className="circle-loader" cx="50" cy="50" fill="none" stroke="#ec5252" stroke-width="4" r="16" stroke-dasharray="75.39822368615503 27.132741228718345" >
                    <animateTransform className="animateTransform-loader" attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.6711409395973155s" values="0 50 50;360 50 50" keyTimes="0;1" ></animateTransform>
                </circle>
            </svg>
        </S.LoaderContainer>
    )
}

export default Loading