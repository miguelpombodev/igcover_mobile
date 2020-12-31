import React from 'react'
import { Text, View, KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Input from '../../components/Input'
import Button from '../../components/Button'

import LogoImg from '../../assets/logo.png'

import {
    ImageLogo,
    Container,
    CreateAccountBox,
    BackToLogonButton,
    BackToLogonButtonText,
    HorizontalLine,
    HalfHorizontalLine
} from './styles'

const SignUp: React.FC = () => {
    const navigation = useNavigation();

    return (
        <>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
                <Container colors={['#833ab4', '#fc4e45']}>
                    <ImageLogo source={LogoImg} />
                    <Input name="name" placeholder="Name" />
                    <Input name="username" placeholder="Username" />
                    <Input name="email" placeholder="Email" />
                    <Input name="password" placeholder="Password" />
                    <Input name="passwordConfimartion" placeholder="Confirm your Password" />
                    <Button >Submit</Button>

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
                <Text style={{ color: '#fff' }}>Already have one? </Text>
                <BackToLogonButton onPress={() => navigation.navigate('SignIn')}>
                    <BackToLogonButtonText>Try logon here!</BackToLogonButtonText>
                </BackToLogonButton>
            </CreateAccountBox>
        </>
    )
}

export default SignUp;