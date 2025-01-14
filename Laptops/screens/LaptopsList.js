import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button, ListItem, FAB } from "@rneui/base";
import { getAllLaptops } from "../rest_client/laptops";
import { useState } from "react";

export const LaptopsList = ({navigation}) => {
  const [laptopsList, setLaptopsList] = useState([]);

  const LaptopItems = ({ laptop }) => {
    return (
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>
            {laptop.marca} {laptop.procesador}
          </ListItem.Title>
          <ListItem.Subtitle>
            {laptop.memoria} {laptop.disco}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  const fnRefreshList = (laptops) => {
    setLaptopsList(laptops);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de laptops</Text>
      <Button
        title="Consultar laptops"
        onPress={() => {
          getAllLaptops(fnRefreshList);
        }}
      />
      <FlatList
        data={laptopsList}
        renderItem={({ item }) => {
          return <LaptopItems laptop={item} />;
        }}
      />
      <FAB
        title="+"
        onPress={()=>{navigation.navigate("LaptopsFormsNav")}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'column',
    alignItems: "stretch",
    justifyContent: "flex-start"
  },
  titulo: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});
