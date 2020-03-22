import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/indexScreen';
import showScreen from './src/screens/showScreen';
import CreateScreen from './src/screens/CreateScreen';
import Edit from './src/screens/Edit';
import { Provider as BlogProvider } from './src/context/BlogContext'


const stackNav = createStackNavigator(
{
  Index: IndexScreen,
  Show: showScreen,
  Create: CreateScreen,
  Edit: Edit
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title:'Blogs'
  }
});

const App = createAppContainer(stackNav);

export default () => {
    return (
      <BlogProvider>
        <App />
      </BlogProvider>
    );
}
