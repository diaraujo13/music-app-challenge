import React, { Component } from 'react';
import { View } from 'react-native';
import { CompactCard, SearchInput } from '../../components';
import { Container, TopHeadline, Subtitle, Header,  SectionList, SectionTitle } from './styles';
import { MotiView } from 'moti'

const Home = () => {
    return (
        <Container>
            
            <Header>
                <MotiView from={{
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    type: 'spring',
                }}>
                    <TopHeadline>Hi there,</TopHeadline>
                    <Subtitle>Javier</Subtitle>
                </MotiView>
            </Header>

            <SearchInput />

            <MotiView from={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 500,
                    type: 'timing',
                }}>
                <SectionTitle>Trending Now</SectionTitle>
                <SectionList horizontal>
                    <CompactCard source='https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg' title='Test' subtitle='test' />
                    <CompactCard source='https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg' title='Test' subtitle='test' />
                    <CompactCard source='https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-500x500.jpg' title='Test' subtitle='test' />
                
                </SectionList>
            </MotiView>
        </Container>
    );
};

export default Home;
