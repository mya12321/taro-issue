import { useState, useEffect } from '@tarojs/taro';
import { View, Picker, Text } from '@tarojs/components';

export default function () {
  const [pickerRange, setPickerRange] = useState([]);
  useEffect(() => {
    setPickerRange([['test1', 'test2', 'test3']]);
  }, []);
  const columnChange = e => {
    if (e.detail.column === 0 && e.detail.value === 1) {
      setPickerRange([['test1', 'test2', 'test3'], ['test21', 'test22', 'test23']]);
    }
  };

  return (
    <View className="app">
      <Picker
        mode="multiSelector"
        range={pickerRange}
        onColumnChange={columnChange}
      >
        <Text>点击弹出</Text>
      </Picker>
    </View>
  )
}
