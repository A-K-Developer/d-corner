import React from "react";
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Link, } from 'react-router-dom';
import {buttons} from '../utils/constants';
import "../components/style.css"; // Assuming you have a separate CSS file for styling

const ButtonComp = (props) => {
  let specClass;
  let specTo;
  let text;
  if(props.type === 'Service'){
    specClass = 'btn serviceBtn';
    specTo = '/Service'
    text = buttons.checkOut;
  }else
  if(props.type === 'About'){
    specClass = 'btn aboutBtn';
    specTo = '/About-us'
    text = buttons.getToKnow;
  }else
  if(props.type === 'Work'){
    specClass = 'btn gallery-btn';
    specTo = '/Work'
    text = buttons.explore;
  }else
  if(props.type === 'Contact'){
    specClass = 'btn contactBtn';
    specTo = '';
    text = buttons.contact;
  }else
  if(props.type === 'storyBehaindBtn'){
    specClass = 'btn storyBehaindBtn';
    specTo = '';
    text = buttons.aboutUs;
  }
  return (
    <Link className={specClass} to={specTo}>
      {text}
      <AiOutlineDoubleRight style={{ marginLeft: '5px' }} />
    </Link>
  );
};

export default ButtonComp;
