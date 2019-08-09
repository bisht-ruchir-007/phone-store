import styled from "styled-components";

export const ButtonContainer = styled.button`
    font-size: 1.4rem;
    background: palevioletred;
    border-radius: 0.5rem;
    border: 0.15rem solid var(--dark);
    border-color:${props => (props.cart?"var(--Yellow)":"var(--lightBlue)")};
    color:${props =>(props.cart?"var(--Yellow)":"var(--lightBlue)")};
    padding: 0.2rem 0.5rem;
    color: white;
    cursor:pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition:all 0.8s ease-in-out;
    &:hover{
        background:${props =>(props.cart?"var(--Yellow)":"var(--lightBlue)")};
        color: var(--Blue);
    }
    &:focus{
        outline:none;
    }
`;
export const NavWrapper = styled.nav`
    background:var(--dark) !important;
    .nav-link{
        color:var(--white)!important;
        font-size:1.3rem;

    }
`