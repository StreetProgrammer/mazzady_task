'use client';
import { useEffect } from 'react';
import SDropdown from '../../components/SearchableDropdown';
import { getCategories } from '../../service/API';
import { store } from '../../service/state/store';
import { Provider } from 'react-redux';
import Form from '../Form';

export default function FormScreen() {
  return (
    <Provider store={store}>
      <main className="">
        <Form />
      </main>
    </Provider>
  );
}
