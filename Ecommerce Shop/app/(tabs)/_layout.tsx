import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

const TabRoot = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'green' }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false ,
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="offers"
        options={{
          headerShown: false ,
          title: 'offers',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false ,
          title: 'account',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-circle-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerShown: false ,
          title: 'Cart',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} />,
        }}
      />
    </Tabs>
  );
}

export default TabRoot;