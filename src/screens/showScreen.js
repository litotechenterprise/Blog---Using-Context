import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons'


const showScreen = ({navigation}) => {
    const {state} = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
    return(
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );

}

showScreen.navigationOptions = ( {navigation} ) => {
    return {
        headerRight:<TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                <EvilIcons name="pencil" size={30} />
            </TouchableOpacity>
    };
};

const styles = StyleSheet.create({

});


export default showScreen;