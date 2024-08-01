import { TextField } from "@mui/material";

export default function Input ({ label, value, onChange, sx, ...props })  {


    return (
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        sx={{sx, margin: '1rem'}}
        {...props}
      />
    );
  };