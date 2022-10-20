import React, {useLayoutEffect}from 'react'
import { View , Image, Text, TouchableOpacity} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import {   COLORS } from '../../constants/CONSTANTS';

import { ArrowLeftIcon,
    ChevronRightIcon,
    StarIcon,
    MapPinIcon,
    QuestionMarkCircleIcon

} from 'react-native-heroicons/outline';
import DishCard from '../components/DishCard';
import  {urlFor} from '../../sanity';
import BasketIcon from '../components/BasketIcon';



const RestaurantScreen = () => {

    const navigation =useNavigation();

    const {params:{
        id,imgUrl,title,rating, genre, address,short_description, dishes, long,lat,
      }}=useRoute();

      useLayoutEffect(() => {
        navigation.setOptions({
          headerShown:false,
          })
       }, []);





  return (
    <>
    <BasketIcon/>
   
    <ScrollView>
     <View className='relative'>
        <Image
        source={{uri:imgUrl}}
        className='w-full h-56 bg-gray-300 p-4'
        />

        <TouchableOpacity 
            className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
            onPress={()=>navigation.goBack()}>
            <ArrowLeftIcon size={30} color={COLORS.DELIVEROOCOLOR}/>
            </TouchableOpacity>

     </View>
     <View className='bg-white'>
        
        {/* restaurant Title info */}
        <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold '>
                {title}
            </Text>
            {/* sub info */}
            <View className='flex-row space-x-2 my-1' >
               {/* section rating */}
               <View className='flex-row items-center space-x-1'>
                <StarIcon color='green' opacity={0.5} size={22}/>
                    <Text className='text-xs text-gray-500 pt-1'>
                        <Text className='text-green-500'>
                            {rating}
                        </Text>
                        . {genre}
                    </Text>
               </View>
               {/* section address */}
               <View className='flex-row items-center space-x-1'>
                <MapPinIcon color='gray' opacity={0.4} size={22}/>
                    <Text className='text-xs text-gray-500 '>
                    
                       Nearby . {address}
                    </Text>
               </View>

            </View>

            {/* description section */}

            <Text className='text-gray-500 mt-2 pb-4'>
                {short_description}
            </Text>
        </View>

        {/* button section  */}
        <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
            <QuestionMarkCircleIcon  color={'gray'} opacity={0.6} size={20} />
            <Text className='pt-2 flex-1 text-md font-bold'>
                Have a food allergy?
            </Text>
            <ChevronRightIcon color={COLORS.DELIVEROOCOLOR}/>
        </TouchableOpacity>



     </View>


     {/* Menu section  */}

     <View className='pb-36'>
        {/* Title of the menu */}
        <Text className='px-4 pt-6 font-bold text-xl'>
            Menu

        </Text>

        {/* Dish card */}
        {dishes?.map((dish) =>(
            <DishCard
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={urlFor(dish.image).url()}
            
            />
        ))}



     </View>
     
    </ScrollView>

    

    </>
  )
}

export default RestaurantScreen