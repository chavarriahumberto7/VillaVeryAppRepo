import { View, Text, Image } from 'react-native';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
interface Props{
    imgUrl:string,
    title:string,
}
const CategoryCard = ({imgUrl,title}:Props) => {
  return (
    <TouchableOpacity className='relative mr-2'>
      <Image className='h-20 w-20 rounded'
      source={{
        uri:imgUrl,

      }}
      />

      <Text className='absolute bottom-1 left-1 text-white font-bold text-xs'>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard