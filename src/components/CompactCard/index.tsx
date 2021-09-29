import React, { Component } from 'react';
import { View, Text, StyleSheet,  Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { StyledProps } from '../../../types';

interface Props  {
    source: string;
    title: string;
    subtitle: string;
}

const { width } = Dimensions.get('window');

const Content = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    height: 200px;
    width: ${width/3 + 30}px;
    margin: 20px 20px 20px 0px;
    padding: 10px;
    overflow: hidden;
    border-radius: ${({theme}: StyledProps) => theme.measurements.borderRadius};
`

const Title = styled.Text`
    color: ${({theme}: StyledProps) => theme.colors.white};
    font-weight: bold;
    margin-top: 10px;
    font-size: ${({theme}: StyledProps) => theme.fontsize.medium};
`


const SubTitle = styled.Text`
    color: ${({theme}: StyledProps) => theme.colors.white};
    font-size: ${({theme}: StyledProps) => theme.fontsize.helper}
`

const Image = styled.Image`
    min-height: 120px;
    flex-grow: 1;
    width: ${width/3 + 30}px;
    resize-mode: cover;
    border-radius: ${({theme}: StyledProps) => theme.measurements.borderRadius};

`

const CompactCard = ({
     source,
     title,
     subtitle,
}: Props) => {

    return (
        <Content>
                <Image source={{uri: source }} /> 
                <Title>CompactCard</Title>
                <SubTitle>CompactCard</SubTitle>
        </Content>
    );
};

export default CompactCard;
