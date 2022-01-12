import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import Card from "../components/Card";
import { useSelector, useDispatch } from 'react-redux';
import { getPharmacies } from "../redux/action";




function Page({ navigation }) {

  const [currentPage, setCurrentPage] = useState(0);

  const { pharmacies } = useSelector(state => state.myReducer);
  const dispatch = useDispatch();


  //ComponentDidMount
  useEffect(() => {
    dispatch(getPharmacies(currentPage));

    //componentWillUnmount
    /*return () => {
      setIsMount(false);
    }*/
  }, [currentPage]);

  //componentDidUpdate
  useEffect(() => {
    navigation.setOptions({
      title: "Nombre de résultat: " + pharmacies.length,
    });
  }, [pharmacies]);





  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <View style={{ marginBottom: 15 }}>

      <FlatList
        data={pharmacies}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => navigation.navigate('DetailModalScreen', {
            pharmacyId: item.id
          })} />
        )}
        keyExtractor={item => item.email}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
      />

    </View>
  );
}


export default Page;
