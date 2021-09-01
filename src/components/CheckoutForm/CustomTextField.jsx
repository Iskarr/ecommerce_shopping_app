import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

function FormInput({ name, label }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => (
          <TextField {...field} fullWidth label={label} required />
        )}
        defaultValue=""
        as={TextField}
        name={name}
        control={control}
        label={label}
        fullWidth
        error={isError}
        required
      />
    </Grid>
  );
}

export default FormInput;
