import { Add, Delete } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormGroup,
  IconButton,
  TextField,
  MenuItem,
  InputAdornment,
  InputLabel,
  Select,
  Typography,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';

function Teacher({ teachers, setTeachers }) {
  useEffect(() => {
    console.log(teachers);
  });

  const handleAddTeacher = () => {
    setTeachers([
      ...teachers,
      {
        firstName: '',
        lastName: '',
        hasUnavailable: false,
        unavailable: [{ day: '', startSlot: '', endSlot: '' }],
      },
    ]);
  };

  const handleDeleteTeacher = (index) => {
    const newTeachers = [...teachers];
    newTeachers.splice(index, 1);
    setTeachers(newTeachers);
  };

  const handleTeacherChange = (event, index, key) => {
    const newTeachers = [...teachers];
    newTeachers[index][key] = event.target.value;
    setTeachers(newTeachers);
  };

  const handleCheckbox = (event, index) => {
    const newTeachers = [...teachers];
    newTeachers[index].hasUnavailable = event.target.checked;
    setTeachers(newTeachers);
  };

  const handleChangeDay = (event, index, periodIndex) => {
    const newTeachers = [...teachers];
    newTeachers[index].unavailable[periodIndex].day = event.target.value;
    setTeachers(newTeachers);
  };

  const handleChangeStartSlot = (event, index, periodIndex) => {
    const newTeachers = [...teachers];
    newTeachers[index].unavailable[periodIndex].startSlot = parseInt(
      event.target.value
    );
    setTeachers(newTeachers);
  };

  const handleChangeEndSlot = (event, index, periodIndex) => {
    const newTeachers = [...teachers];
    newTeachers[index].unavailable[periodIndex].endSlot = parseInt(
      event.target.value
    );
    setTeachers(newTeachers);
  };

  const handleAddPeriod = (index) => {
    const newTeachers = [...teachers];
    newTeachers[index].unavailable.push({
      day: '',
      startSlot: '',
      endSlot: '',
    });
    setTeachers(newTeachers);
  };

  const handleDeletePeriod = (index, periodIndex) => {
    const newTeachers = [...teachers];
    newTeachers[index].unavailable.splice(periodIndex, 1);
    setTeachers(newTeachers);
  };

  return (
    <Box p={4}>
      <Typography variant="subtitle" color="common.black">
        Müsait olunmayan saatler girilirken sadece saat girilmeli. (14.00 yerine
        14)
      </Typography>
      {teachers.map((teacher, index) => (
        <Box key={index} mt={3} mb={2}>
          <Box display="flex" alignItems="center" mb={2}>
            <Typography variant="h5" mr={2} color="common.black">
              {index + 1}:
            </Typography>
            <TextField
              label="Ad"
              sx={{ marginRight: 2 }}
              variant="outlined"
              value={teacher.firstName}
              onChange={(event) =>
                handleTeacherChange(event, index, 'firstName')
              }
            />
            <TextField
              label="Soyad"
              sx={{ marginRight: 2 }}
              variant="outlined"
              value={teacher.lastName}
              onChange={(event) =>
                handleTeacherChange(event, index, 'lastName')
              }
            />

            <IconButton onClick={() => handleDeleteTeacher(index)}>
              <Delete />
            </IconButton>
          </Box>
          <Box>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                checked={teacher.hasUnavailable}
                onChange={(event) => handleCheckbox(event, index)}
                color="common.black"
                sx={{
                  color: 'black',
                }}
                label="Müsait olmadığı saatler var"
              />
            </FormGroup>
            {teacher.hasUnavailable &&
              teacher.unavailable.map((period, periodIndex) => (
                <Box my={2} display="flex" justifyContent="center">
                  <FormControl>
                    <InputLabel>Gün</InputLabel>
                    <Select
                      sx={{ mr: 2, width: '130px' }}
                      value={period.day}
                      label="Age"
                      onChange={(event) =>
                        handleChangeDay(event, index, periodIndex)
                      }
                    >
                      <MenuItem value={0}>Pazartesi</MenuItem>
                      <MenuItem value={1}>Salı</MenuItem>
                      <MenuItem value={2}>Çarşamba</MenuItem>
                      <MenuItem value={3}>Perşembe</MenuItem>
                      <MenuItem value={4}>Cuma</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="Başlangıç Saati"
                    value={period.startSlot}
                    onChange={(event) =>
                      handleChangeStartSlot(event, index, periodIndex)
                    }
                    sx={{ width: '120px', mr: 2 }}
                    type="number"
                    InputProps={{
                      inputProps: {
                        max: 17,
                        min: 9,
                      },
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    label="Bitiş Saati"
                    value={period.endSlot}
                    sx={{ width: '120px', mr: 2 }}
                    type="number"
                    onChange={(event) =>
                      handleChangeEndSlot(event, index, periodIndex)
                    }
                    InputProps={{
                      inputProps: {
                        max: 18,
                        min: 10,
                      },
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <IconButton
                    onClick={() => handleDeletePeriod(index, periodIndex)}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              ))}

            {teacher.hasUnavailable && (
              <Box display="flex" justifyContent="center">
                <IconButton
                  onClick={() => handleAddPeriod(index)}
                  variant="contained"
                >
                  <AddIcon />
                </IconButton>
              </Box>
            )}
          </Box>
        </Box>
      ))}
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleAddTeacher}
        >
          Öğretmen Ekle
        </Button>
      </Box>
    </Box>
  );
}
export default Teacher;
