import { Add, Delete } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  IconButton,
  InputLabel,
  ListItemText,
  Pagination,
  MenuItem,
  Radio,
  RadioGroup,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';

function Course({ courses, setCourses, teachers }) {
  const [page, setPage] = React.useState(1);
  const offset = (page - 1) * 5;
  const handleCourseChange = (index, event) => {
    const newCourses = [...courses];
    newCourses[index][event.target.name] = event.target.value;
    setCourses(newCourses);
  };
  console.log('page', page);

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
        hasLabs: false,
        hasFixed: false,
        sessions: [
          {
            suffix: null,
            isLab: false,
            isFixed: false,
            day: '',
            hour: '',
            length: '',
            teacher: { firstName: '', lastName: '' },
          },
        ],
      },
    ]);
    setPage(Math.ceil((courses.length + 1) / 5));
  };

  const handleDeleteCourse = (index) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
    if (page !== Math.ceil((courses.length - 1) / 5)) {
      setPage((page) => page - 1);
    }
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
  };

  // const handleChangeMultiTeacherCount = (event, index) => {
  //   const newCourses = [...courses];
  //   newCourses[index].multiTeacherCount = parseInt(event.target.value);
  //   newCourses[index].multiTeachers = Array(parseInt(event.target.value)).fill({
  //     course: '',
  //     teacher: '',
  //   });
  //   setCourses(newCourses);
  // };

  const handleChangeTeacher = (event, index, sessionIndex) => {
    const newCourses = [...courses];
    newCourses[index].sessions[sessionIndex].teacher = event.target.value;
    setCourses(newCourses);
  };

  const handleSessionLength = (index, sessionIndex, event) => {
    const newCourses = [...courses];
    newCourses[index].sessions[sessionIndex].length = event.target.value;
    setCourses(newCourses);
  };

  const handleAddSession = (index) => {
    const newCourses = [...courses];
    newCourses[index].sessions.push({
      suffix: null,
      isLab: false,
      isFixed: false,
      day: '',
      hour: '',
      length: '',
      teacher: { firstName: '', lastName: '' },
    });
    setCourses(newCourses);
  };

  const handleDeleteSession = (index, sessionIndex) => {
    const newCourses = [...courses];
    newCourses[index].sessions.splice(sessionIndex, 1);
    setCourses(newCourses);
  };

  const handleCheckboxhasLabs = (event, index) => {
    const newCourses = [...courses];
    newCourses[index].hasLabs = event.target.checked;
    setCourses(newCourses);
  };

  const handleCheckboxHasFixed = (event, index) => {
    const newCourses = [...courses];
    newCourses[index].hasFixed = event.target.checked;
    setCourses(newCourses);
  };

  const handleCheckboxIsLab = (event, index, sessionIndex) => {
    const newCourses = [...courses];
    newCourses[index].sessions[sessionIndex].isLab = event.target.checked;
    setCourses(newCourses);
  };

  const handleCheckboxIsFixed = (event, index, sessionIndex) => {
    const newCourses = [...courses];
    newCourses[index].sessions[sessionIndex].isFixed = event.target.checked;
    setCourses(newCourses);
  };

  const handleSessionSuffix = (index, sessionIndex, event) => {
    const newCourses = [...courses];
    newCourses[index].sessions[sessionIndex].suffix = event.target.value;
    setCourses(newCourses);
  };

  const handleChangeSessionDay = (event, index, sessionIndex) => {
    const newCourses = [...courses];
    newCourses[index].sessions[sessionIndex].day = event.target.value;
    setCourses(newCourses);
  };

  const handleChangeSessionHour = (event, index, sessionIndex) => {
    const newCourses = [...courses];
    newCourses[index].sessions[sessionIndex].hour = parseInt(
      event.target.value
    );
    setCourses(newCourses);
  };

  return (
    <Box p={4}>
      <Box display="flex" justifyContent="center">
        <Typography variant="subtitle" color="common.black">
          Çakışmaması gereken dersler, tüm dersler girildikten sonra
          seçilmelidir.
        </Typography>
      </Box>
      {courses
        .slice((page - 1) * 5, (page - 1) * 5 + 5)
        .map((course, index) => (
          <Box key={index + offset} sx={{ my: 8 }}>
            <Box
              display="flex"
              alignItems={'center'}
              justifyContent="center"
              mb={2}
            >
              <Typography variant="h5" mr={2} color="common.black">
                {index + offset + 1}:
              </Typography>
              <TextField
                name="name"
                value={course.name}
                label="Ders Başlığı"
                onChange={(event) => handleCourseChange(index + offset, event)}
                sx={{ mr: 2, width: '300px' }}
              />
              <TextField
                name="code"
                value={course.code}
                label="Kod"
                onChange={(event) => handleCourseChange(index + offset, event)}
                sx={{ mr: 2, width: '100px' }}
              />

              <TextField
                name="department"
                value={course.department}
                label="Bölüm"
                onChange={(event) => handleCourseChange(index + offset, event)}
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
                onChange={(event) => handleCourseChange(index + offset, event)}
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

              <IconButton onClick={() => handleDeleteCourse(index + offset)}>
                <Delete />
              </IconButton>
            </Box>

            <Box mt={4} ml={2}>
              {course.sessions.map((session, sessionIndex) => (
                <Box
                  display="flex"
                  justifyContent={'center'}
                  alignItems={'center'}
                  my={2}
                >
                  {!course.hasNoTeacher && (
                    <FormControl sx={{ width: 200, mr: 2 }}>
                      <InputLabel>Seansın Öğretmeni</InputLabel>
                      <Select
                        value={session.teacher}
                        label="Seansın Öğretmeni"
                        onChange={(event) =>
                          handleChangeTeacher(
                            event,
                            index + offset,
                            sessionIndex
                          )
                        }
                        renderValue={(selected) =>
                          `${selected.firstName} ${selected.lastName}`
                        }
                      >
                        {teachers.map((teacher, teacherIndex) => (
                          <MenuItem
                            key={teacherIndex}
                            value={teacher}
                          >{`${teacher.firstName} ${teacher.lastName}`}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}

                  <TextField
                    name="length"
                    value={session.length}
                    label="Uzunluk"
                    onChange={(event) =>
                      handleSessionLength(index + offset, sessionIndex, event)
                    }
                    select
                    sx={{ width: '100px', mr: 2 }}
                  >
                    <MenuItem key={0} value={2}>
                      2 Saat
                    </MenuItem>
                    <MenuItem key={1} value={3}>
                      3 Saat
                    </MenuItem>
                  </TextField>

                  {course.hasLabs && session.isLab && (
                    <TextField
                      name="length"
                      value={session.suffix}
                      label="Lab Grubu"
                      onChange={(event) =>
                        handleSessionSuffix(index + offset, sessionIndex, event)
                      }
                      select
                      sx={{ width: '120px', mr: 2 }}
                    >
                      <MenuItem key={0} value={'Lab A'}>
                        Lab A
                      </MenuItem>
                      <MenuItem key={1} value={'Lab B'}>
                        Lab B
                      </MenuItem>
                    </TextField>
                  )}

                  {course.hasFixed && session.isFixed && (
                    <FormControl>
                      <InputLabel>Gün</InputLabel>
                      <Select
                        sx={{ mr: 2, width: '130px' }}
                        value={session.day}
                        label="Gun"
                        onChange={(event) =>
                          handleChangeSessionDay(
                            event,
                            index + offset,
                            sessionIndex
                          )
                        }
                      >
                        <MenuItem value={0}>Pazartesi</MenuItem>
                        <MenuItem value={1}>Salı</MenuItem>
                        <MenuItem value={2}>Çarşamba</MenuItem>
                        <MenuItem value={3}>Perşembe</MenuItem>
                        <MenuItem value={4}>Cuma</MenuItem>
                      </Select>
                    </FormControl>
                  )}

                  {course.hasFixed && session.isFixed && (
                    <TextField
                      label="Başlangıç Saati"
                      value={session.hour}
                      onChange={(event) =>
                        handleChangeSessionHour(
                          event,
                          index + offset,
                          sessionIndex
                        )
                      }
                      sx={{ width: '120px', mr: 2 }}
                      type="number"
                      InputProps={{
                        inputProps: {
                          max: 17 - (session.length ?? 0),
                          min: 9,
                        },
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                  {course.hasLabs && (
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        checked={session.isLab}
                        onChange={(event) =>
                          handleCheckboxIsLab(
                            event,
                            index + offset,
                            sessionIndex
                          )
                        }
                        sx={{
                          color: 'black',
                        }}
                        label="Laboratuvar seansı"
                      />
                    </FormGroup>
                  )}

                  {course.hasFixed && (
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        checked={session.isFixed}
                        onChange={(event) =>
                          handleCheckboxIsFixed(
                            event,
                            index + offset,
                            sessionIndex
                          )
                        }
                        sx={{
                          color: 'black',
                        }}
                        label="Sabit zamanlı"
                      />
                    </FormGroup>
                  )}

                  <IconButton
                    onClick={() =>
                      handleDeleteSession(index + offset, sessionIndex)
                    }
                  >
                    <Delete />
                  </IconButton>
                </Box>
              ))}
              <Box display="flex" justifyContent="center" mt={2}>
                <IconButton
                  onClick={() => handleAddSession(index + offset)}
                  variant="contained"
                >
                  <AddIcon />
                </IconButton>
              </Box>
            </Box>
            <Box display="flex" justifyContent={'center'}>
              <FormGroup sx={{ mr: 2 }}>
                <FormControlLabel
                  control={<Checkbox />}
                  checked={course.hasNoTeacher}
                  onChange={(event) =>
                    handleCheckboxNoTeacher(event, index + offset)
                  }
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
                  onChange={(event) =>
                    handleCheckboxNotCollide(event, index + offset)
                  }
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
                      handleCheckboxMultiTeachers(event, index + offset)
                    }
                    sx={{
                      color: 'black',
                    }}
                    label="CNT Grubu Seçmeli Dersi"
                  />
                </FormGroup>
              )}
            </Box>
            <Box display="flex" justifyContent={'center'}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  checked={course.hasLabs}
                  onChange={(event) =>
                    handleCheckboxhasLabs(event, index + offset)
                  }
                  sx={{
                    color: 'black',
                  }}
                  label="Dersin laboratuvar seansları var"
                />
              </FormGroup>

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  checked={course.hasFixed}
                  onChange={(event) =>
                    handleCheckboxHasFixed(event, index + offset)
                  }
                  sx={{
                    color: 'black',
                  }}
                  label="Dersin sabit zamanlı seansı var"
                />
              </FormGroup>
            </Box>
            <Box sx={{ ml: '32px' }} display="flex" justifyContent={'center'}>
              {course.hasCoursesToNotCollide && (
                <FormControl sx={{ width: 400, my: 2, mr: 2 }}>
                  <InputLabel>Çakışılmaması Gereken Dersler</InputLabel>
                  <Select
                    multiple
                    value={course.cannotCollideWith}
                    onChange={(event) => handleChange(event, index + offset)}
                    input={
                      <OutlinedInput label="Çakışılmaması Gereken Dersler" />
                    }
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
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleAddCourse}
          mt={2}
        >
          DERS EKLE
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" mt={5}>
        <Pagination
          color="primary"
          // variant="outlined"
          // shape="rounded"
          count={Math.ceil(courses.length / 5)}
          page={page}
          onChange={(event, value) => setPage(value)}
        />
      </Box>
    </Box>
  );
}

export default Course;
