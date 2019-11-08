import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import Grid, { Column } from '../containers/grid'
import { Header } from '../../themes/typography'
import Button from './button'
import scrollTo from 'gatsby-plugin-smoothscroll'
import BackgroundImg from './backgroundimage'

const HeroSection = styled(BackgroundImg)`
    padding: 9rem 0 4rem;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 90vh;
    min-height: 65rem;
`
const HeroContent = styled(Grid)`
    padding: 12.6rem 0 0;
`
const Col = styled(Column)`
    padding: 0;
    max-width: 60rem;
    text-align: center;
`
const Cta = styled(Button)`
    margin: 4rem 0;
`

const Hero = () => (
    <HeroSection
        img_name='header.jpg'
        brightness='0.75'
        style={{height: '90vh', minHeight: '65rem'}}
    >
        <Container>
            <HeroContent
                columns="1fr"
                columngap="1rem"
                rowgap="5rem"
                mobilerowgap="3rem"
                justify="center"
            >
                <Col justify="center">
                    <Header as="h1" color="white" align="center">
                        Champion Global Business Services
                    </Header>
                    <Header as="h5" color="white" align="center">
                        World-class support services for FinTech businesses
                    </Header>
                    <Cta
                        onClick={() => scrollTo('#careers')}
                    >
                        Contact Us Now
                    </Cta>
                </Col>
            </HeroContent>
        </Container>
    </HeroSection>
)
export default Hero
