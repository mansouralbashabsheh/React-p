import styled from 'styled-components'

export const Mansour = styled.div`
border:1px solid #f00;width:20%;color:white;text-align:center;
background-color:${ props => props.color === "1" ? '#ff0000' : ''};
background-color:${ props => props.color === "2" ? '#ff00ff' : ''};
background-color:${ props => props.color === "3" ? '#0000ff' : ''};
`

export const ImageItem =styled.img `
max-width:150px;height:auto`