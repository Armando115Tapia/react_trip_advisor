import React, { useState, useEffect } from 'react';
import { firebaseApp } from '../../util/firebase';

import { UserLogged } from './UserLogged';
import { UserGuest } from './UserGuest';
import { Loading } from '../../components/Loading';

export const Account = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) {
    return <Loading isVisible={true} text="Cargando..."></Loading>;
  }

  return login ? <UserLogged /> : <UserGuest />;
};
