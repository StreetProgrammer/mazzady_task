'use client';
import { useEffect } from 'react';
import type { RootState } from '../../service/state/store';
import SDropdown from '../../components/SearchableDropdown';
import {
  getCategories,
  getSubCategories,
  getOptionOptions,
} from '../../service/API';
import { useSelector, useDispatch } from 'react-redux';
import {
  setMainCategories,
  setselectedCategory,
  setselectedSubCategory,
  updateSelectedProperties,
  update,
} from '../../service/state/features/form/formSlice';

import { findInNasted } from '../../service/helpers';

export default function Form() {
  const {
    categories,
    selectedCategory,
    selectedSubCategory,
    selectedProperties,
  } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  useEffect(() => {
    getCategories().then((res) => {
      dispatch(setMainCategories(res.data.data.categories));
    });
  }, []);

  const selectCategory = (cat: any) => {
    dispatch(setselectedCategory(cat.id));
  };

  const selectSubCategory = (subCat: any) => {
    getSubCategories(subCat.id).then((res) => {
      dispatch(
        setselectedSubCategory({ subCatId: subCat.id, data: res.data.data })
      );
    });
  };

  const setOption = (option: any) => {
    // let parent = findInNasted(selectedSubCategory?.options, option.id);
    console.log('OPTION => ', option);

    if (!option.value) {
      getOptionOptions(option.id).then((res) => {
        dispatch(
          updateSelectedProperties({
            optionId: option.id,
            name: option.name,
            value: option.value,
            parent: option.parent,
            data: res.data.data,
          })
        );
        // dispatch(
        //   update({
        //     optionId,
        //     parent,
        //     data: res.data.data,
        //   })
        // );
      });
    } else {
      dispatch(
        updateSelectedProperties({
          optionId: option.id,
          name: option.name,
          value: option.value,
          parent: option.parent,
          data: [],
        })
      );
      // dispatch(
      //   update({
      //     optionId,
      //     parent,
      //     data: res.data.data,
      //   })
      // );
    }
  };

  const setChildOptionLvl_1 = (option: any) => {
    let parent: any;
    let parentParentIdx: any;
    for (let i = 0; i < selectedProperties.length; i++) {
      if (selectedProperties[i].selected) {
        parent = findInNasted(
          selectedProperties[i].selected.options,
          option.id
        );
        parentParentIdx = i;
      }
    }
    console.log('setChildOption => ', parentParentIdx, parent, option.id);

    if (!option.value) {
      getOptionOptions(option.id).then((res) => {
        dispatch(
          update({
            optionId: option.id,
            name: option.name,
            value: option.value,
            parentParentIdx,
            parent,
            data: res.data.data,
          })
        );
      });
    } else {
      // dispatch(
      //   updateInnerPropertiesLvl_1({
      //     optionId,
      //     parentParentIdx,
      //     parent,
      //     data: res.data.data,
      //   })
      // );
      dispatch(
        update({
          optionId: option.id,
          name: option.name,
          value: option.value,
          parentParentIdx,
          parent,
          data: [],
        })
      );
    }
    // getOptionOptions(option.id).then((res) => {
    //   // dispatch(
    //   //   updateInnerPropertiesLvl_1({
    //   //     optionId,
    //   //     parentParentIdx,
    //   //     parent,
    //   //     data: res.data.data,
    //   //   })
    //   // );
    //   dispatch(
    //     update({
    //       optionId: option.id,
    //       name: option.name,
    //       value: option.value,
    //       parentParentIdx,
    //       parent,
    //       data: res.data.data,
    //     })
    //   );
    // });
  };

  const setChildOptionLvl_2 = (option: any) => {
    let parent: any;
    let parentParentIdx: any;
    console.log('setChildOption => ', parentParentIdx, parent, option.id);
    if (!option.value) {
      getOptionOptions(option.id).then((res) => {
        dispatch(
          update({
            optionId: option.id,
            name: option.name,
            value: option.value,
            parentParentIdx,
            parent,
            data: res.data.data,
          })
        );
      });
    } else {
      dispatch(
        update({
          optionId: option.id,
          name: option.name,
          value: option.value,
          parentParentIdx,
          parent,
          data: [],
        })
      );
    }
  };

  return (
    <>
      <div className="">
        <SDropdown
          title="Select Category"
          options={categories}
          setSelected={selectCategory}
          selectedOptionName={selectedCategory?.name}
        />
      </div>
      <div className="ml-4">
        <SDropdown
          title="Select SubCategory"
          options={selectedCategory?.children || []}
          setSelected={selectSubCategory}
          selectedOptionName={selectedSubCategory?.name}
        />
      </div>

      <div className="ml-8">
        {selectedProperties?.length > 0 &&
          selectedProperties.map((Property: any) => (
            <>
              <SDropdown
                title={Property.name}
                options={Property?.options || []}
                setSelected={setOption}
                selectedOptionName={Property.selected?.name}
              />

              <div className="ml-4">
                {Property.selected &&
                  Property.selected.options.length > 0 &&
                  Property.selected.options.map((innerOptionLvl_1: any) => (
                    <>
                      <SDropdown
                        title={innerOptionLvl_1.name}
                        options={innerOptionLvl_1?.options || []}
                        setSelected={setChildOptionLvl_1}
                        selectedOptionName={innerOptionLvl_1?.selected?.name}
                      />
                      <div className="ml-4">
                        {innerOptionLvl_1 &&
                          innerOptionLvl_1.selected &&
                          innerOptionLvl_1.selected.options.length > 0 &&
                          innerOptionLvl_1.selected.options.map(
                            (innerOptionLvl_2: any) => (
                              <SDropdown
                                title={innerOptionLvl_2.name}
                                options={innerOptionLvl_2?.options || []}
                                setSelected={setChildOptionLvl_2}
                                selectedOptionName={
                                  innerOptionLvl_2?.selected?.name
                                }
                              />
                            )
                          )}
                      </div>
                    </>
                  ))}
              </div>
            </>
          ))}
      </div>
    </>
  );
}
