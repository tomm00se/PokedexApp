import { Tabs } from "expo-router"
import { Image } from "react-native"
import PokeballIcon from "../../assets/Pokeball-Icon.png"

const TabLayout = () => {
  return (
    <Tabs screenOptions={({ route }) => ({
      headerShown: false
    })}>
      <Tabs.Screen name="Carddex"/>
      <Tabs.Screen name="Home" options={{ title: "", tabBarIcon: ()=>{
        return <Image source={PokeballIcon} style={{ width: 80, height: 80 }}/>
      }}}/>
      <Tabs.Screen name="Pokèdex"/>
    </Tabs>
  )
}

export default TabLayout