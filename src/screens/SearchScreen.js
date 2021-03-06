import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from '../components/ResultsList';
import FoodCard from '../components/FoodCard';


const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result=>{
            return result.price === price;
        });
    };


    return (
      <>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
        />
        <Text>{errorMessage}</Text>
        <ScrollView>
          <ResultsList
            results={filterResultsByPrice("$")}
            title="Cost Effective"
          />
          <ResultsList
            results={filterResultsByPrice("$$")}
            title="Bit pricier"
          />
          <ResultsList
            results={filterResultsByPrice("$$$")}
            title="Big Spender"
          />
          <FoodCard />
        </ScrollView>
      </>
    );
};

const styles = StyleSheet.create({
  text:{
    marginLeft:10
  }
});


export default SearchScreen; 