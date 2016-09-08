import React from 'react';
import Item from './Item';

const ListView = ({terms})=> {
  if(!terms) {
    return <div></div>;
  }
  return (
    <ul>
      {terms.map((item, index)=>{ return <Item item={item} key={index}/> })}
    </ul>
  );

};



export default ListView;
