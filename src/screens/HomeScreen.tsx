import { View, Text, Image } from 'react-native'
import React,{useEffect, useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {
  UserIcon,
  ChevronDownIcon,
MagnifyingGlassIcon,
AdjustmentsHorizontalIcon,
AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../../sanity';
import category from '../../sanity/schemas/category';

const DELIVEROOCOLOR='#00CCBB'


export default function HomeScreen() {
  const navigation=useNavigation();




  const [featuredCategories,setFeaturedCategories]=useState();


 


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
      })
   }, []);

   useEffect(()=>{

     sanityClient.fetch(`*[_type=='featured']{
      ...,
      restaurants[]->{
        ...,
      dishes[]->        
      }
    }
    `).then((data:any)=>{
      setFeaturedCategories(data);
    }) 
  
    },[]);

  

  return (
    <SafeAreaView className='pt-5'>
  

     
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
            <Image
              source={{

                uri:'https://links.papareact.com/wru'
              }}
              className='h-7 w-7 bg-gray-300 p-4 rounded-full'
            />
          <View className='flex-1'>
              <Text className='font-bold text-gray-400  text-xs'>
                Deliver Now!
              </Text>
              <Text className='font-bold text-xl'>
                Current Location
                <ChevronDownIcon size={20} color={DELIVEROOCOLOR}/>
              </Text>
          </View>
          <UserIcon size={35} color={DELIVEROOCOLOR}/>


      </View>



    {/* Search section  */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
          <View className='flex-row flex-1 bg-gray-200 p-3'>
            <MagnifyingGlassIcon size={30} color={DELIVEROOCOLOR}/>
            <TextInput placeholder='Food and some more...'/>
          </View>

            <AdjustmentsVerticalIcon color={DELIVEROOCOLOR}/>

      </View>

      {/* Body */}

      <ScrollView>
        {/* categoreis */}
        <Categories/>

        {/* Featued ROWS */}

        {featuredCategories?.map(category=>(

            <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
            featuredCategory='featured'

            />
        ))}

        

       


      </ScrollView>

     

    </SafeAreaView>
  )
}