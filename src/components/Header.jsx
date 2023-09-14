import styled from "styled-components";
import logo from "../../public/Images/logo.svg";
import Home from "../../public/Images/home-icon.svg"
const Header = (props)=>{
    return(
        <Nav>
            <Logo>
                <img src={logo} alt="Disney+" />
            </Logo>
            <NavMenu>

                <a href="/home" >
                    <img src="/Images/home-icon.svg" alt="home" />
                    <span>HOME</span>
                </a>

                <a href="/search" >
                    <img src="/Images/search-icon.svg" alt="home" />
                    <span>SEARCH</span>
                </a>

                <a href="/watchlist" >
                    <img src="/Images/watchlist-icon.svg" alt="home" />
                    <span>WATCHLIST</span>

                </a>

                <a href="/originals" >
                    <img src="/Images/original-icon.svg" alt="home" />
                    <span>ORIGINALS</span>
                </a>

                <a href="/movies" >
                    <img src="/Images/movie-icon.svg" alt="home" />
                    <span>MOVIES</span>
                </a>

                <a href="/series" >
                    <img src="/Images/series-icon.svg" alt="home" />
                    <span>SERIES</span>
                </a>
               
            </NavMenu>
            
            <Button>Login</Button>
            
            
        </Nav>
    )
}

const Nav = styled.nav`
    position:fixed;
    background-color:#090b13;
    width:100%;
    height:70px;

    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 36px;
    z-index:3;
`;

const Logo = styled.a`
    cursor:pointer!important;
    padding:0;
    width:90px;
    font-size:0;
    display:inline-block;

    img{
        display:block;
        width:100%
    }
`;

const NavMenu = styled.div`
        margin:0;
        padding:0;
        position:relative;
        display:flex;
        align-items:center;
        justify-content:flex-end;
        flex-flow:row nowrap;
        height:100%;
        margin-right:auto;
        margin-left:35px;

        @media (max-width:768px){
            display:none;
        }

        a{
            margin:0 0.8rem;
            display:flex;
            justify-content:center;
            align-items:center;
            cursor:pointer;
            width:100%
        }
        img{
            height:20px;
            width:20px;
            min-width:20px;
            z-index:auto;
        }

        span {
            color: rgb(249, 249, 249);
            font-size: 17px;
            position: relative;
        }
        
        span:before {
            content: "";
            position: absolute;
            width:100%;
            bottom: -0.8px;
            left: 0;
            right: 0;
            height: 2px;
            background-color: transparent;
            transform: scaleX(0); 
            transform-origin:left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.56, 0.90); 
            opacity:0;
            visibility:hidden;
        }
        
        span:hover:before {
            transform: scaleX(1); 
            background-color: white; 
            opacity:1;
            visibility:visible;
        }
`;

const Button = styled.a`
        padding:0.5rem 2rem ;
        background-color:rgba(0,0,0,0.6);
        border:1px solid white;
        cursor:pointer;
        transition:all 0.5s ease;
        font-weight:700;
        border-radius:0.5rem;

        &:hover{
            background:white;
            color:black;
        }

        @media (max-width:689px){
            padding:0.2rem 1rem ;
        }

`;


export default Header
