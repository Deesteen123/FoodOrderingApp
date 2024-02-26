_layout.tsx

// Import necessary components and modules
import FontAwesome from '@expo/vector-icons/FontAwesome'; // Importing FontAwesome icon set from expo vector icons
import { Link, Tabs } from 'expo-router'; // Importing Tabs and Link from expo-router
import { Pressable, useColorScheme } from 'react-native'; // Importing Pressable and useColorScheme from react-native

import Colors from '../../constants/Colors'; // Importing custom color constants

// Function to render tab bar icon
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']; // Props for FontAwesome icon name
  color: string; // Props for icon color
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />; // Returning FontAwesome icon with specified size and color
}

// Default export function for the tab layout
export default function TabLayout() {
  const colorScheme = useColorScheme(); // Getting the color scheme of the device

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, // Setting active tab color based on color scheme
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} /> {/* Index screen without any options */}

      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu', // Setting tab title
          headerShown: false, // Hiding header
          tabBarIcon: ({ color }) => ( // Customizing tab bar icon
            <TabBarIcon name="cutlery" color={color} /> // Using TabBarIcon with FontAwesome icon "cutlery"
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Orders', // Setting tab title
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />, // Customizing tab bar icon with FontAwesome icon "list"
        }}
      />
    </Tabs>
  );
}
