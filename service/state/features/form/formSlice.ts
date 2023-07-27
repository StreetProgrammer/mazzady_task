import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { findValue } from '../../../helpers';

export interface FormState {
  categories: [];
  selectedCategory: any;
  selectedSubCategory: any;
  selectedProperties: any[];
}

const initialState: FormState = {
  categories: [],
  selectedCategory: null,
  selectedSubCategory: null,
  selectedProperties: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setMainCategories: (state, action) => {
      state.categories = action.payload;
    },
    setselectedCategory: (state, action) => {
      const idx = state.categories.findIndex(
        (category: any) => category.id === action.payload
      );
      state.selectedCategory = state.categories[idx];
      state.selectedSubCategory = null;
      state.selectedProperties = [];
    },
    setselectedSubCategory: (state, action) => {
      const idx = state.selectedCategory.children.findIndex(
        (subCategory: any) => subCategory.id === action.payload.subCatId
      );
      state.selectedSubCategory = state.selectedCategory.children[idx];
      state.selectedSubCategory.options = action.payload.data;
      const tempProperties = [];
      for (let i = 0; i < action.payload.data.length; i++) {
        const element = {
          name: action.payload.data[i].name,
          id: action.payload.data[i].id,
          options: [
            ...action.payload.data[i].options,
            ...[
              {
                id: action.payload.data[i].id + '000'!,
                name: 'Other',
                parent: action.payload.data[i].id,
                value: '',
              },
            ],
          ],
        };

        tempProperties.push(element);
      }
      state.selectedProperties = tempProperties;
    },
    updateSelectedProperties: (state, action) => {
      action.payload.data.map((option: any) => {
        option.options = [
          ...option.options,
          ...[
            {
              id: option.id + '000'!,
              name: 'Other',
              parent: option.id,
              value: '',
            },
          ],
        ];
      });

      const parentOptionIdx = state.selectedProperties.findIndex(
        (option: any) => option.id === action.payload.parent
      );

      const childOptionIdx = state.selectedProperties[
        parentOptionIdx
      ].options.findIndex(
        (option: any) => option.id === action.payload.optionId
      );

      state.selectedProperties[parentOptionIdx].options[
        childOptionIdx
      ].options = action.payload.data;

      state.selectedProperties[parentOptionIdx].selected = {
        id: action.payload.optionId,
        name: action.payload.value
          ? action.payload.value
          : state.selectedProperties[parentOptionIdx].options[childOptionIdx]
              .name,
        options: action.payload.data,
        parent:
          state.selectedProperties[parentOptionIdx].options[childOptionIdx]
            .parent,
      };
    },

    updateInnerPropertiesLvl_1: (state, action) => {
      const parentOptionIdx = state.selectedProperties[
        action.payload.parentParentIdx
      ].selected.options.findIndex(
        (option: any) => option.id === action.payload.parent.id
      );

      const childOptionIdx = state.selectedProperties[
        action.payload.parentParentIdx
      ].selected.options[parentOptionIdx].options.findIndex(
        (option: any) => option.id === action.payload.optionId
      );

      state.selectedProperties[action.payload.parentParentIdx].selected.options[
        parentOptionIdx
      ].selected = {
        id: action.payload.optionId,
        name: action.payload.value
          ? action.payload.value
          : state.selectedProperties[action.payload.parentParentIdx].selected
              .options[parentOptionIdx].options[childOptionIdx].name,
        options: {
          ...action.payload.data,
          ...{
            options: {
              id: action.payload.optionId + '000'!,
              name: '',
              parent: action.payload.optionId,
              value: '',
            },
          },
        },
        parent:
          state.selectedProperties[action.payload.parentParentIdx].selected
            .options[parentOptionIdx].options[childOptionIdx].parent,
      };
    },

    update: (state, action) => {
      let family: any = [];
      let hasParent = true;
      while (hasParent) {
        let element: any;
        if (family.length > 0 && family[family.length - 1].parent) {
          element = findValue(
            state.selectedProperties,
            family[family.length - 1].parent
          );
        } else {
          element = findValue(
            state.selectedProperties,
            action.payload.optionId
          );
        }

        if (element) {
          family.push({
            id: element.id,
            name: element.name,
            parent: element.parent,
          });
        }

        if ((element && !element.parent) || element === undefined) {
          hasParent = false;
        }
      }

      family = family.reverse();

      switch (family.length) {
        case 4:
          const indexLvl_4_1 = state.selectedProperties.findIndex(
            (option: any) => option.id === family[0].id
          );

          let indexLvl_4_2 = state.selectedProperties[
            indexLvl_4_1
          ].selected.options.findIndex(
            (option: any) => option.id === family[1].id
          );

          let indexLvl_4_3 = state.selectedProperties[
            indexLvl_4_1
          ].selected.options[indexLvl_4_2].selected.options.findIndex(
            (option: any) => option.id === family[2].id
          );

          state.selectedProperties[indexLvl_4_1].selected.options[
            indexLvl_4_2
          ].selected.options[indexLvl_4_3].selected = {
            id: family[3].id,
            name: action.payload.value ? action.payload.value : family[3].name,
            options: action.payload.data,
            parent: family[3].parent,
          };
          break;

        case 3:
          let indexLvl_3_1 = state.selectedProperties.findIndex(
            (option: any) => option.id === family[0].id
          );

          const indexLvl_3_2 = state.selectedProperties[
            indexLvl_3_1
          ].selected.options.findIndex(
            (option: any) => option.id === family[1].id
          );
          state.selectedProperties[indexLvl_3_1].selected.options[
            indexLvl_3_2
          ].selected = {
            id: family[2].id,
            name: action.payload.value ? action.payload.value : family[2].name,
            options: action.payload.data,
            parent: family[2].parent,
          };
          break;

        case 2:
          let indexLvl_2_1 = state.selectedProperties.findIndex(
            (option: any) => option.id === family[0].id
          );

          // const indexLvl_3_2 = state.selectedProperties[
          //   indexLvl_2_1
          // ].selected.options.findIndex(
          //   (option: any) => option.id === family[1].id
          // );
          state.selectedProperties[indexLvl_2_1].selected = {
            id: family[1].id,
            name: action.payload.value ? action.payload.value : family[1].name,
            options: action.payload.data,
            parent: family[1].parent,
          };
          break;

        default:
          break;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setMainCategories,
  setselectedCategory,
  setselectedSubCategory,
  // setSelectedProperties,
  updateSelectedProperties,
  updateInnerPropertiesLvl_1,
  update,
} = formSlice.actions;

export default formSlice.reducer;
