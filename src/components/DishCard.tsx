import { View, Text, Image, TouchableOpacity } from 'react-native';
import React,{useState} from 'react'
import {COLORS}  from '../../constants/CONSTANTS'
import Currency from 'react-currency-formatter'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import {useDispatch, useSelector} from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../../features/basketSlice';



interface Props{
    key:string,
    id:string,
    name:string,
    description:string,
    price:string,
    image:String
}

const DishCard = ({
    id,
    name,
    description,
    price,
    image,}:Props) => {

const [isPressed,setIsPressed]=useState(false);
const dispatch=useDispatch();
const items=useSelector((state)=>selectBasketItemsWithId(state,id));


const removeItemFromBasket=()=>{
    if(!(items.length>0)) return;
    

    dispatch(removeFromBasket({id}));
   
    
}

const addItemToBasket=()=>{
 

    dispatch(addToBasket({id, name, description, price, image}))


}
            

        
  return (
    <>
 
    
    <TouchableOpacity 
    onPress={()=>setIsPressed(!isPressed)}
    key={id} 
    className={` bg-white border p-4 boder-gray-200 ${isPressed&& 'border-b-0'}`} >
        {/* Title description and image section */}
        <View className='flex-row'>
            {/* Title and description  */}
           
           <View className='flex-1 pr-2'>
           <Text className='text-lg mb-1'>
                {name}</Text>
            <Text className='text-gray-400'>
                {description}
            </Text>
            <Text className='text-gray-400 mt-2'>
                <Currency quantity={price} currency='USD'/>
            </Text>
           </View>
            
           <View>
            <Image
                    style={{
                        borderWidth:1,
                        borderColor:'#F3F3F4'
                    }}
                    source={{uri:image}}
                    className='bg-gray-300 p-2 h-20 w-20'
                    />
           </View>

            
        </View>

    </TouchableOpacity>

    {isPressed && (
        <View className='bg-white px-4'>
          <View className='flex-row items-center space-x-2 pb-3'>
                    <TouchableOpacity onPress={
                        removeItemFromBasket}
                        disabled={!items.length}>
                        <MinusCircleIcon
                                // color=
                                color='white'
                                fill={items.length > 0 ? COLORS.DELIVEROOCOLOR: "gray"}
                                size={40}/>
                    </TouchableOpacity>
                    
                    <Text>
                        {items?.length}
                    </Text>
                    
                    <TouchableOpacity onPress={addItemToBasket}>
                    <PlusCircleIcon
                        // color={items.length > 0 ? "#00CC8B": "gray"}
                        color='white'
                        fill={COLORS.DELIVEROOCOLOR}
                        size={40}
                        />
                    </TouchableOpacity>
          </View>
        </View>
    )}

   
    </>

  )
}

export default DishCard