import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Auth = createStackNavigator();

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

// import Logo from '../components/Header'

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
    // screenOptions={{
    //     headerTitle: () => <Logo />,
    // }}
    >
        <Auth.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
        <Auth.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
    </Auth.Navigator>
);

export default AuthRoutes