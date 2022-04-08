import React from "react";
import { Admin, Resource } from "react-admin";

import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";
import { firebaseConfig } from "./backend/firebase";
import { UserCreate, UserEdit, UserList } from "./Users/Users";

const dataProvider = FirebaseDataProvider(firebaseConfig);
const authProvider = FirebaseAuthProvider(firebaseConfig);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />
  </Admin>
);

// show={UserShow} create={UserCreate}

export default App;
