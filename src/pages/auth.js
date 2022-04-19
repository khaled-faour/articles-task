import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from '@mui/material/Alert';

import {useSelector, useDispatch} from 'react-redux';
import {login} from '../redux/actions/authActions';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [disabledButton, setDisabledButton] = useState(true);
  const dispatch = useDispatch();
  const signingIn = useSelector(state=>state.auth.signingIn);
  const credentialsError = useSelector(state=>state.auth.isError);
  const credentialsErrorMesage = useSelector(state=>state.auth.error);


  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
      dispatch(login(credentials));
  };

  useEffect(() => {
    if (credentials.username.length > 0 && credentials.password.length > 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [credentials]);

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      
      <Box sx={{ mt: 1 }}>
        <Alert sx={{marginBottom: 1}} severity="info">Credentials: candidate/P@ssw0rd</Alert>
        {credentialsError && <Alert  severity="warning">{credentialsErrorMesage}</Alert>}
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="User name"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={onChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={onChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={disabledButton || signingIn}
          onClick={handleSubmit}
          sx={{ mt: 3, mb: 2 }}
        >
          {signingIn ? <> <CircularProgress sx={{marginRight: 1}} size={20}/> Signing in... </> : "Sign In"}
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
