import styled from "styled-components"

export const LoadingBar = styled.div<{ percent: number | undefined }>`
   background-color: #9333ea;
   border-radius: 20px;
   height: 1.5rem;
   width: ${(props) => `${props.percent}%`};
`
