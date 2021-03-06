import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ImageLogo = styled.Image`
    margin-bottom: 40px;
`

export const Container = styled(LinearGradient)`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 20px;     
`

export const ForgotPassword = styled.TouchableOpacity`
    margin: 20px 0 20px 0;    
`
export const ForgotPasswordText = styled.Text`
    font-family: 'Roboto-Regular';
    color: #ffff;
`

export const CreateAccountBox = styled.View`
    height: 10%;
    background-color: #fc4e45;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const CreateAccountButton = styled.TouchableOpacity`    
`
export const CreateAccountButtonText = styled.Text`
    color:#0033bf;
`

export const HorizontalLine = styled.View`
    background-color: #c4c4c4;
    height: 1px;
`

export const HalfHorizontalLine = styled.View`
    background-color: #c4c4c4;
    height: 1px;
    align-self: center;
    flex: 1;
`

