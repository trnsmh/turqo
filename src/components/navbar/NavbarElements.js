import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    display: flex;
    justify-content:space-between;
    height:auto;
    /* border-bottom: .5px solid cadetblue; */
`
export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  justify-items: space-around;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;

  &.active {
    color:cadetblue;
  }

  &:hover {
    text-shadow: black 1px 1px 15px;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: cadetblue;

        @media screen and (max-width:768px){
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 75%);
            font-size: 1.8rem;
            cursor: pointer;
            } 
`;

export const CloseIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 20;
    color: white;
  }
`;

export const IconWrapper = styled.div`
  transition: transform 1s ease, opacity 1s ease;

  &.hidden {
    opacity: 0;
    transform: rotate(90deg); /* Example animation when hidden */
  }

  &.visible {
    opacity: 1;
    transform: rotate(0); /* Default state */
  }
`;
export const NavMenu = styled.div`
    display:flex;
    align-items: center;

    @media screen and (max-width: 768px) {
    display: ${({ className }) => (className === 'active' ? 'flex' : 'none')};
    flex-direction: column;
    width: 20%;
    position: absolute; /* Prevent the menu from affecting layout */
    top: 50px;
    right: 0;
    height:70%;
    background-color: transparent; /* Adjust based on your design */
    z-index: 10; /* Ensure it appears above other elements */
  }
`;