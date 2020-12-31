import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background-color: #4cb3fc;
    justify-content: center;
    align-items: center;
`

export const ButtonText = styled.Text`
    color: #ffff;
    font-family: 'Roboto-Medium';
`