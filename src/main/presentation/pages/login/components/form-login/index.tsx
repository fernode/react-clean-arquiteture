import { Button, Grid, TextField, Typography } from '@mui/material'
import * as S from './styles'
import { useEffect, useState } from 'react'

type Props = {
  validation: Validation
}

export function FormLogin({ validation }: Props) {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormState((prevState) => ({ ...prevState, [name]: value }))
  }

  useEffect(() => {
    validation.validate('email', formState.email)
  }, [formState.email])

  useEffect(() => {
    validation.validate('password', formState.password)
  }, [formState.password])

  return (
    <Grid item xs={5}>
      <S.BoxFormContainer component="form">
        <Typography variant="h2" color="initial">
          Entrar
        </Typography>
        <TextField
          className="form__input"
          id="Email"
          label="Email"
          name="email"
          variant="standard"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <TextField
          className="form__input"
          id="Password"
          label="Password"
          name="password"
          variant="standard"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <Button className="form__button" variant="contained" type="submit">
          Login
        </Button>
      </S.BoxFormContainer>
    </Grid>
  )
}
