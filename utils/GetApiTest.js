// import React, {useEffect, useState} from 'react';
// import {ActivityIndicator, FlatList, Text, View} from 'react-native';
// import Loading from '../components/Loading';

// const App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   const getMovies = async () => {
//     try {
//       const response = await fetch('https://reactnative.dev/movies.json');
//       const json = await response.json();
//       setData(json.movies);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <View style={{flex: 1, padding: 24}}>
//       {isLoading ? (
//         <Loading isVisible={true} text="API EJECUTANDOSE"/>
//       ) : (
//         <FlatList
//           data={data}
//           keyExtractor={({id}) => id}
//           renderItem={({item}) => (
//             <Text>
//               {item.title}, {item.releaseYear}
//             </Text>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// export default App;

import React, { useState } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import Loading from "../components/Loading";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button } from "@rneui/themed";

const BirthdateInput = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (selectedDate) => {
    setShowDatePicker(Platform.OS === "ios");
    setDate(selectedDate || date);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View>
      <Loading
        isVisible={true}
        text="Seleciona tu fecha de nacimiento"
        textbtn="Colabore mano"
        changed={"home"}
        duration={1000}
      />
      <Button
        onPress={showDatepicker}
        title="Select birthdate"
        buttonStyle={styles.btndate}
      />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <Text>{`Birthdate: ${date.toLocaleDateString()}`}</Text>
    </View>
  );
};

export default BirthdateInput;

const styles = StyleSheet.create({
  btndate: {
    alignContent: "center",
    width: "100%",
    marginVertical: 50,
  },
});
