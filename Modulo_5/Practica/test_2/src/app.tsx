import * as React from 'react';
import { SayHello } from './say-hello';
import { NameEdit as NameEdit2 } from 'name-edit-simple';
import { NameEdit } from 'name-edit';
import { NameCollection } from 'name-collection';
import { CookiesDialog } from 'cookies-dialog';

export const App: React.FunctionComponent = () => {
  return (
    <>
      <SayHello person="John" />
      <NameEdit2 />
      <NameEdit />
      <NameCollection initialNameCollection={['initial-users']} />
      <CookiesDialog
        onAgreeClick={() => {
          console.log('Click');
        }}
      />
    </>
  );
};
