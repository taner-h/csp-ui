import { Add, Delete } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';

function Course({ courses, setCourses }) {
  useEffect(() => {
    console.log(courses);
  });

  const handleCourseChange = (index, event) => {
    const newCourses = [...courses];
    newCourses[index][event.target.name] = event.target.value;
    setCourses(newCourses);
  };

  const handleAddCourse = () => {
    setCourses([
      ...courses,
      {
        name: '',
        code: '',
        department: '',
        year: '',
        hasNoTeacher: false,
        hasCoursesToNotCollide: false,
        cannotCollideWith: [],
        hasMultipleTeachers: false,
        multiTeachers: [],
      },
    ]);
  };

  const handleDeleteCourse = (index) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
  };

  const handleCheckboxNoTeacher = (event, index) => {
    const newCourses = [...courses];
    newCourses[index].hasNoTeacher = event.target.checked;
    setCourses(newCourses);
  };

  const handleCheckboxNotCollide = (event, index) => {
    const newCourses = [...courses];
    newCourses[index].hasCoursesToNotCollide = event.target.checked;
    setCourses(newCourses);
  };

  const handleCheckboxMultiTeachers = (event, index) => {
    const newCourses = [...courses];
    newCourses[index].hasMultipleTeachers = event.target.checked;
    setCourses(newCourses);
  };

  const handleChange = (event, index) => {
    const newCourses = [...courses];
    const value = event.target.value;
    (newCourses[index].cannotCollideWith =
      typeof value === 'string' ? value.split(',') : value),
      setCourses(newCourses);

    // const {
    //   target: { value },
    // } = event;
    // setPersonName(
    //   typeof value === 'string' ? value.split(',') : value,
    // );
  };

  return (
    <Box p={4}>
      <Box display="flex" justifyContent="center">
        <Typography variant="subtitle" color="common.black">
          Çakışmaması gereken dersler, tüm dersler girildikten sonra
          seçilmelidir.
        </Typography>
      </Box>
      {courses.map((course, index) => (
        <Box key={index} mt={3} mb={4}>
          <Box
            display="flex"
            alignItems={'center'}
            justifyContent="center"
            mb={2}
          >
            <Typography variant="h5" mr={2} color="common.black">
              {index + 1}:
            </Typography>
            <TextField
              name="name"
              value={course.name}
              label="Ders Başlığı"
              onChange={(event) => handleCourseChange(index, event)}
              sx={{ mr: 2, width: '300px' }}
            />
            <TextField
              name="code"
              value={course.code}
              label="Kod"
              onChange={(event) => handleCourseChange(index, event)}
              sx={{ mr: 2, width: '100px' }}
            />

            <TextField
              name="department"
              value={course.department}
              label="Bölüm"
              onChange={(event) => handleCourseChange(index, event)}
              select
              sx={{ width: '160px', mr: 2 }}
            >
              <MenuItem key={1} value={0}>
                Bilgisayar Müh.
              </MenuItem>
              <MenuItem key={2} value={1}>
                Endüstri Müh.
              </MenuItem>
            </TextField>

            <TextField
              name="year"
              value={course.year}
              label="Sınıf"
              onChange={(event) => handleCourseChange(index, event)}
              select
              sx={{ width: '100px', mr: 2 }}
            >
              <MenuItem value={1} key={1}>
                1. Sınıf
              </MenuItem>
              <MenuItem value={2} key={2}>
                2. Sınıf
              </MenuItem>
              <MenuItem value={3} key={3}>
                3. Sınıf
              </MenuItem>
              <MenuItem value={4} key={4}>
                4. Sınıf
              </MenuItem>
            </TextField>

            <IconButton onClick={() => handleDeleteCourse(index)}>
              <Delete />
            </IconButton>
          </Box>
          <Box display="flex">
            <FormGroup sx={{ mr: 2 }}>
              <FormControlLabel
                control={<Checkbox />}
                checked={course.hasNoTeacher}
                onChange={(event) => handleCheckboxNoTeacher(event, index)}
                sx={{
                  color: 'black',
                }}
                label="Dersin öğretmeni yok"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                checked={course.hasCoursesToNotCollide}
                onChange={(event) => handleCheckboxNotCollide(event, index)}
                sx={{
                  color: 'black',
                }}
                label="Çakışmaması gereken dersler var"
              />
            </FormGroup>
            {course.department === 0 && course.year === 4 && (
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  checked={course.hasMultipleTeachers}
                  onChange={(event) =>
                    handleCheckboxMultiTeachers(event, index)
                  }
                  sx={{
                    color: 'black',
                  }}
                  label="CNT Grubu Seçmeli Dersi"
                />
              </FormGroup>
            )}
          </Box>
          <Box display="flex" justifyContent="center">
            {course.hasCoursesToNotCollide && (
              <FormControl sx={{ m: 1, width: 400 }}>
                <InputLabel>Çakışılmaması Gereken Dersler</InputLabel>
                <Select
                  multiple
                  value={course.cannotCollideWith}
                  onChange={(event) => handleChange(event, index)}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {courses
                    .filter((f) => f.name !== course.name)
                    .map((c) => (
                      <MenuItem key={c.code} value={c.name}>
                        <Checkbox
                          checked={
                            course.cannotCollideWith.indexOf(c.name) > -1
                          }
                        />
                        <ListItemText primary={c.name} />
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            )}
          </Box>
        </Box>
      ))}
      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={handleAddCourse}
        mt={2}
      >
        EKLE
      </Button>
    </Box>
  );
}

export default Course;
