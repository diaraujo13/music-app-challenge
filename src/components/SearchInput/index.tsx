import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { StyledProps } from '../../../types';

const InputWrapper = styled.View`
    position: relative;
`

 const InputElement = styled.TextInput`
    margin: 25px 0px;
    color: #a5a5a5;
    background-color: ${({theme}: StyledProps) => theme.colors.input.background};
    elevation: ${({theme}: StyledProps) => theme.measurements.input.elevation};
    padding: ${({theme}: StyledProps) => theme.measurements.input.padding};
    padding-left: 50px;
    border-radius: ${({theme}: StyledProps) => theme.measurements.borderRadius};
`

const InputIcon = styled(Ionicons).attrs({
    name: 'search',
})`
    color: ${ ({ theme }: StyledProps) => theme.colors.primary};
    font-size: ${ ({ theme }: StyledProps) => theme.fontsize.icon};
    position: absolute;
    z-index: 10;
    top: 35px;
    left: 10px;
`

const SearchInput: React.FC<{}> = (props) => {
    return (
        <InputWrapper>
            <InputIcon />
            <InputElement {...{props}}  />
        </InputWrapper>
    );
};

export default SearchInput;
