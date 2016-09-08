import React from 'react';

const Item = ({item})=>
  <li className="animated slideInUp"><a href={'https://en.wikipedia.org/wiki/'+item}>{item}</a></li>

export default Item;
