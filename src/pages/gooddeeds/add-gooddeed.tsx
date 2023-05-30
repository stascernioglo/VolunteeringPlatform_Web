import { Grid, TextField, Button, Box, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { goodDeedcategories, GoodDeedForCreateDto } from 'shared/models/goodDeedModel';
import { addGoodDeed } from 'shared/api/goodDeed/goodDeedService';


const AddGoodDeed = () => {

  const { control, handleSubmit, formState: { errors } } = useForm<GoodDeedForCreateDto>();
  const navigate = useNavigate();
  const [file, setFile] = useState();
  
  const saveFile = (e: any) => {
    setFile(e.target.files[0]);
  }

  const onSubmit = async (form: GoodDeedForCreateDto) => {
    form.image = file;
    let result = await addGoodDeed(form);
    if (result) {
      navigate("/");
    }
  };

  return <Box margin='auto'
              justifyContent='center'
              textAlign='center'
              width='450px' >
                <h1>Ask for help</h1>
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} sx={{
        '& .MuiTextField-root': { width: '50ch' },
        '& .MuiSelect-root': { width: '50ch' },
        '.MuiFormControl-root': { margin: 0 }
      }}>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="name"
            defaultValue={''}
            rules={{
              required: 'Name is required',
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                error={errors.name !== undefined}
                helperText={error ? error.message : null}
                variant="outlined"
                margin="normal"
                required
                type="text"
                label="Name"
                autoFocus
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="category"
            defaultValue={""}
            rules={{
              required: true,
              min: 0
            }}
            render={({ field }) => (
              <TextField
                id="outlined-select-currency"
                select
                label="Category"
                required
                {...field}
                error={errors.category !== undefined}
              >
                <MenuItem value={-1} disabled><em>Select Category</em></MenuItem>
                {
                  goodDeedcategories.map(p => (
                    <MenuItem key={p} value={p}>{p}</MenuItem>
                  ))
                }
              </TextField>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="description"
            defaultValue={''}
            rules={{
              required: false,
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                error={errors.description !== undefined}
                helperText={error ? error.message : null}
                variant="outlined"
                margin="normal"
                id="outlined-multiline-flexible"
                multiline
                maxRows={10}
                type="text"
                label="Description"
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="date"
            defaultValue={new Date()}
            rules={{
              required: false
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.date !== undefined}
                variant="outlined"
                margin="normal"
                type="date"
                helperText="Date"
                label=""
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="locality"
            defaultValue={''}
            rules={{
              required: false,
              maxLength: 50,
              minLength: 3
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                error={errors.locality !== undefined}
                helperText={error ? error.message : null}
                variant="outlined"
                margin="normal"
                type="text"
                label="Locality"
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="address"
            defaultValue={''}
            rules={{
              required: false
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.address !== undefined}
                variant="outlined"
                margin="normal"
                type="text"
                label="Address"
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="phoneNumber"
            defaultValue={''}
            rules={{
              required: false,
              minLength: 5,
              maxLength: 20
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.phoneNumber !== undefined}
                variant="outlined"
                margin="normal"
                type="text"
                label="Phone Number"
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="requiredNumberOfvolunteers"
            defaultValue={undefined}
            rules={{
              required: false,
              min: 0,
              max: 999
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.requiredNumberOfvolunteers !== undefined}
                variant="outlined"
                margin="normal"
                type="number"
                label="Required number of volunteers"
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <TextField
                {...field}
                error={errors.image !== undefined}
                variant="outlined"
                helperText="Upload image"
                margin="normal"
                type="file"
                onChange={(e) => {
                  saveFile(e);
                }}
              />
          )}
        />
        </Grid>

        <Grid item xs={12}>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx ={{ width: 150 }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  </Box>
}

export default AddGoodDeed;