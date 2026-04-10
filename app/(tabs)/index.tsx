import React from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  // Dữ liệu mẫu (sau này bạn sẽ gọi API qua Axios tại đây)
  const categories = ["Trái cây", "Rau củ", "Gạo", "Gia vị"];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header & Thanh tìm kiếm */}
        <View className="px-4 py-3 border-b border-gray-200">
          <Text className="text-2xl font-bold text-green-700 mb-3">Agri-Connect</Text>
          <View className="bg-gray-100 p-3 rounded-lg">
            <Text className="text-gray-500">Tìm kiếm nông sản...</Text>
          </View>
        </View>

        {/* Banner */}
        <View className="m-4 rounded-xl overflow-hidden">
          <Image 
            source={{ uri: 'https://via.placeholder.com/400x150' }} 
            className="w-full h-40" 
          />
        </View>

        {/* Danh mục */}
        <View className="px-4 mb-6">
          <Text className="text-lg font-bold mb-3 text-gray-800">Danh mục</Text>
          <FlatList
            horizontal
            data={categories}
            renderItem={({ item }) => (
              <TouchableOpacity className="px-4 py-2 bg-green-50 rounded-full mr-3">
                <Text className="text-green-800 font-medium">{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Sản phẩm gợi ý */}
        <View className="px-4 mb-6">
          <Text className="text-lg font-bold mb-3 text-gray-800">Gợi ý hôm nay</Text>
          <View className="flex-row justify-between flex-wrap">
            {/* Card Sản phẩm 1 */}
            <View className="w-[48%] bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-4">
              <Image source={{ uri: 'https://via.placeholder.com/150' }} className="w-full h-32 rounded-lg" />
              <Text className="text-sm font-medium mt-2 text-gray-800">Thanh long Bình Thuận</Text>
              <Text className="text-red-600 font-bold mt-1">30.000đ / kg</Text>
            </View>
            
            {/* Card Sản phẩm 2 */}
            <View className="w-[48%] bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-4">
              <Image source={{ uri: 'https://via.placeholder.com/150' }} className="w-full h-32 rounded-lg" />
              <Text className="text-sm font-medium mt-2 text-gray-800">Bơ sáp Đắk Lắk</Text>
              <Text className="text-red-600 font-bold mt-1">45.000đ / kg</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}