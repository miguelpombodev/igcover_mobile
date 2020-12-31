import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { Container, ButtonText } from './style'

const Button: React.FC<RectButtonProperties> = ({ children }) => {
    return (
        <Container>
            <ButtonText>{children}</ButtonText>
        </Container>
    )
}

export default Button;