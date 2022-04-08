import React from "react";
import {
  Datagrid,
  Edit,
  EmailField,
  List,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick={"edit"}>
        <TextField source="uid" />
        <EmailField source="email" />
        <TextField source="password" />
        <TextField source="usdBalance" />
      </Datagrid>
    </List>
  );
};

export const UserEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="uid" reference="users">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <TextInput source="uid" />
        <TextInput source="email" />
        <TextInput source="password" />
        <TextInput source="usdBalance" />
      </SimpleForm>
    </Edit>
  );
};

export const UserCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="uid" reference="users">
          <SelectInput optionText={"id"} />
        </ReferenceInput>
        <TextInput source="email" />
        <TextInput source="password" />
        <TextInput source="usdBalance" />
      </SimpleForm>
    </Create>
  );
};
