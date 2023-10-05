
import React from 'react';
import Alert from '@mui/material/Alert'; // Import the Alert component
import AlertTitle from '@mui/material/AlertTitle'; // Import the AlertTitle component

export default function AlertP(props) {
  if (!props.alert) {
    // If props.alert is null or undefined, do not render anything
    return null;
  }

  return (
    <Alert severity={props.alert.type}>
      <AlertTitle>{props.alert.type}</AlertTitle>
      <strong>{props.alert.msg}</strong>
    </Alert>
  );
}

