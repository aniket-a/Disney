import styled from "styled-components"

const Login = (props) => {
    return (
        <Container>
            <Content >
                <CTA>
                    <CTALogoOne src="/Images/cta-logo-one.svg" alt=""/>
                    <Signup>Get All There</Signup>
                    <Description>Get Premier Access to Raya and the Last Dragon for an additional free with Disney + Subscription. As of 03/06/2023 The price of Disney+ and The Disney Bundle will increase by $1. </Description>
                    <CTALogoTwo src="/Images/cta-logo-two.png" />
                </CTA>
                <Bgimg />
            </Content>
        </Container>
    )
};

const Container = styled.section`
    
    background-img
    overflow:hidden;
    display:flex;
    flex-direction:column;
    height:100vh;
    text-align:center;
`;

const Content = styled.div`
    
    margin-bottom:10vw;
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:80px 40px;
    height"100%
`;

const Bgimg = styled.div`
    background-image:url("/Images/login-background.jpg");
    background-size:cover;
    background-repeat: no-repeat;
    height:100vh;
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    z-index:-1;
`;

const CTA = styled.div`
    margin-bottom:2vw;
    max-width:700px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    flex-wrap:wrap;
    text-align:center;
    transition-timimg-function:ease-out;
    transition:opacity 0.5s;
    
`;

const CTALogoOne = styled.img`
   margin-bottom:12px;
   max-width:600px;
   min-height:1px;
   display:block;
   width:100%
`;

const Signup = styled.a`
    background-color:#0063e5;
    font-weight:bold;
    color:#f9f9f9;
    width:100%;
    padding:1.5rem 0;
    margin-bottom:18px;
    cursor:pointer;
    font-size:2rem;
    letter-spacing:1.5px;
    border:1px solid transparent;
    border-radius:4px ;
    
    &:hover{
        background-color:#0483ee;
    }
`;

const Description = styled.p`
    font-size:15px;
    color: hsla(0, 0%, 95.3%, 1)
`;

const CTALogoTwo = styled.img`
    max-width:600px;
    width:100%;
    margin-top:1rem;
    margin-bottom:20px;
    display:inline-block;
    verticle-align:bottom; 
`;

export default Login