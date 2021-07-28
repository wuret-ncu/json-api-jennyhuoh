import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../store';
import { SET_NAV } from '../utils/constants';

export default function Nav({buttons}) {
  const { state: { clicked }, dispatch } = useContext(StoreContext);
  const onClickNav = (id) => {
    dispatch({
      type: SET_NAV,
      payload: id
    })
  }
    return(
        <div>
          {
            buttons.map(b => 
              <button 
                key={b.id}
                onClick={() => onClickNav(b.id)}
                className={b.id === clicked ? "nav-clicked" : "nav-unclick"}
              >
                {b.label}
              </button>
            )
          }
        </div>
    );
}