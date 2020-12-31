import React from 'react'
import { Text, View, KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Input from '../../components/Input'
import Button from '../../components/Button'

import LogoImg from '../../assets/logo.png'

import {
    ImageLogo,
    Container,
    ForgotPassword,
    ForgotPasswordText,
    CreateAccountBox,
    CreateAccountButton,
    CreateAccountButtonText,
    HorizontalLine,
    HalfHorizontalLine
} from './styles'

const SignIn: React.FC = () => {
    const navigation = useNavigation();

    return (
        <>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
                <Container colors={['#833ab4', '#fc4e45']}>
                    <ImageLogo source={LogoImg} />
                    <Input name="username" placeholder="Username" />
                    <Input name="password" placeholder="Password" />
                    <Button>Submit</Button>

                    <ForgotPassword>
                        <ForgotPasswordText>Forgot my password</ForgotPasswordText>
                    </ForgotPassword>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <HalfHorizontalLine />
                        <Text style={{ alignSelf: 'center', paddingHorizontal: 18, fontSize: 20, color: '#ffff' }}>OR</Text>
                        <HalfHorizontalLine />
                    </View>
                    <Button>Login with Facebook</Button>
                </Container>
            </KeyboardAvoidingView>

            <HorizontalLine />
            <CreateAccountBox>
                <Text style={{ color: '#fff' }}>No Account? </Text>
                <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
                    <CreateAccountButtonText>Create one here!</CreateAccountButtonText>
                </CreateAccountButton>
            </CreateAccountBox>
        </>
    )
}

export default SignIn;