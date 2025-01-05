import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    display: flex;
    justify-content:space-between;
    height:auto;
    border-bottom: 1px solid cadetblue;
`
export const NavLink = styled(Link)`
  color: coral;
  display: flex;
  align-items: center;
  justify-items: space-around;
  text-decoration: none;
  padding: 0 0.75rem;
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
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;