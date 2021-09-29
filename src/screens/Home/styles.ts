import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { StyledProps } from '../../../types';

export const Container = styled(SafeAreaView)`
    background-color: ${({theme}: StyledProps) => theme.colors.background.primary};
    padding: 20px;
    flex-grow: 1;
`

export const Header = styled.View`
`

export const TopHeadline = styled.Text`
    font-size: ${({theme}: StyledProps) => theme.fontsize.title};
    color: ${({theme}: StyledProps) => theme.colors.primary};
    font-weight: bold;
`

export const Subtitle = styled.Text`
    font-size: ${({theme}: StyledProps) => theme.fontsize.subtitle};
    color: ${({theme}: StyledProps) => theme.colors.white};
    font-weight: bold;
    letter-spacing: 3px;
`

export const SearchInput = styled.TextInput`
    margin: 25px 0px;
    color: #a5a5a5;
    background-color: ${({theme}: StyledProps) => theme.colors.input.background};
    elevation: ${({theme}: StyledProps) => theme.measurements.input.elevation};
    padding: ${({theme}: StyledProps) => theme.measurements.input.padding};
    border-radius: ${({theme}: StyledProps) => theme.measurements.borderRadius};
`

export const SectionTitle = styled.Text`
    font-size: ${({theme}: StyledProps) => theme.fontsize.medium};
    color: ${({theme}: StyledProps) => theme.colors.primary};
    font-weight: bold;
    letter-spacing: 0px;    
`
export const SectionList = styled.ScrollView`

`