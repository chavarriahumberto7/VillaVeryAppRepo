import { Text, View } from 'react-native'
import React, { Component,useState,useEffect } from 'react'
import CategoryCard from './CategoryCard';
import { ScrollView } from 'react-native-gesture-handler';
import sanityClient, { urlFor } from '../../sanity';

const Categories=()=> {

const [category, setcategory] = useState();

useEffect(()=>{

  sanityClient.fetch(`
    *[_type=='category']
  `).then((data)=>setcategory(data)).catch( err=> console.log(err));
},[]);

    return (
      <ScrollView
      contentContainerStyle={
        {
          paddingHorizontal:15,
          paddingTop:10,
        }
      }
      horizontal
      showsHorizontalScrollIndicator={false}
      >
        {/* Category Card */}

        {category?.map(cat =>(

        <CategoryCard 
        key={cat._id}
        imgUrl= {urlFor(cat.image).url()} 
        title={cat.name}/>
        ))}
        
      </ScrollView>
    )
  }


export default Categories