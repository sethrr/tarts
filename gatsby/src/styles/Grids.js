import styled from 'styled-components';

export const HomePageGrid = styled.div`
display: grid;
gap: 2rem;
grid-template-columns: repeat(2, minmax(auto, 1fr))
`;


export const ItemsGrid = styled.div`
display: grid;
gap: 2rem;
grid-template-columns: 1fr 1fr;
`;

export const ItemStyles = styled.div`
text-align: center;
position: relative;
img {
    border: 1px solid red;
    height: auto;
    font-size: 0;
}
p {
    transform: rotate(-2deg) translateY(-50%);
    position: absolute;
    left: 0;
}
img.loading {
    background-image: linear-gradient(90deg, var(--background) 0px;
}
`; 