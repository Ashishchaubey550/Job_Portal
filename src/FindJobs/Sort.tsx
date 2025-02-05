import { useState } from 'react';
import { Button, Combobox, useCombobox } from '@mantine/core';

const opt = ['Relevance', 'Most Recent', 'Salery(Low to High', 'Salery(High to low)'];

const Sort=()=>{
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option  className='text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
       <Combobox
        store={combobox}
        width={150}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <div onClick={()=>combobox.toggleDropdown()} className=' bg-neutral-100 border border-teal-400 flex gap-1 items-center py-1 rounded-xl px-2 cursor-pointer'>
            {selectedItem} <i className=" text-xl text-green-500 ri-sound-module-fill"></i>
          </div>
        </Combobox.Target>

        <Combobox.Dropdown className=' bg-neutral-100'>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}


export default Sort;