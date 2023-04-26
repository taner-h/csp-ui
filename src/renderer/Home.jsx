import { Box, Button, Typography, Snackbar, Alert } from '@mui/material';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Stepper from '@mui/material/Stepper';
import * as React from 'react';
import Config from './Config';
import Constraints from './Constraints';
import Course from './Course';
import Teacher from './Teacher';
import { exportData } from 'utils/export';

const steps = ['Öğretmen Ekleme', 'Ders Ekleme', 'Genel Ayarlar', 'Kısıtlar'];

const savedTeachers = [
  {
    firstName: 'Marie',
    lastName: 'Peroueme',
    hasUnavailable: false,
    unavailable: [{ day: 4, startSlot: 9, endSlot: 11 }],
  },
  {
    firstName: 'Damien',
    lastName: 'Berthet',
    hasUnavailable: false,
    unavailable: [
      { day: 1, startSlot: 11, endSlot: 13 },
      { day: 3, startSlot: 9, endSlot: 10 },
      { day: 4, startSlot: 16, endSlot: 18 },
    ],
  },
  {
    firstName: 'Erden',
    lastName: 'Tuğcu',
    hasUnavailable: true,
    unavailable: [
      { day: 1, startSlot: 9, endSlot: 12 },
      { day: 2, startSlot: 15, endSlot: 18 },
    ],
  },
  {
    firstName: 'Uzay',
    lastName: 'Çetin',
    hasUnavailable: true,
    unavailable: [{ day: 2, startSlot: 15, endSlot: 17 }],
  },
  {
    firstName: 'Burak',
    lastName: 'Parlak',
    hasUnavailable: true,
    unavailable: [{ day: 4, startSlot: 16, endSlot: 18 }],
  },
];

const savedCourses = [
  {
    name: 'Matematik II',
    code: 'ING107',
    department: 0,
    year: 1,
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
  {
    name: 'Fizik II',
    code: 'ING117',
    department: 0,
    year: 1,
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
  {
    name: 'Algoritma ve İleri Bilgisayar Programlama',
    code: 'ING114',
    department: 0,
    year: 1,
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
  {
    name: 'Programlama Dillerinin Prensipleri',
    code: 'ING115',
    department: 0,
    year: 1,
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
  {
    name: 'Kariyer Planlama',
    code: 'CNT120',
    department: 0,
    year: 1,
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
];

const defaultTeacher = {
  firstName: '',
  lastName: '',
  hasUnavailable: false,
  unavailable: [{ day: '', startSlot: '', endSlot: '' }],
};

const defaultCourse = {
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
};

const defaultConfig = {
  languageDay1: 1,
  languageDay2: 2,
  languageHour: 16,
  SIZE: 100,
  STAGNATION_LIMIT: 75,
  ELITE_SIZE: 12,
  GENERATION_LIMIT: 1000,
  CROSSOVER_RATE: 0.5,
  MUTATION_TYPE: 3,
  MUTATION_RATE_1: 0.1,
  MUTATION_RATE_2: 0.2,
  MUTATION_RATE_3: 0.3,
  STAGNATION_THRESHOLD_1: 15,
  STAGNATION_THRESHOLD_2: 35,
  GENERATION_THRESHOLD_1: 50,
  GENERATION_THRESHOLD_2: 100,
};

const defaultConstraints = {
  semesterCollision: 2,
  teacherCollision: 2,
  fixedSessionViolation: 2,
  breakHourViolation: 3,
  cannotCollideViolation: 0.5,
  singleSessionDay: 0.4,
  teacherAvailabilityViolation: 0.3,
  multipleCourseSession: 0.2,
  slotSpan: 0.25,
  emptySlot: 0.15,
  freeDay: 1,
};

export default function HorizontalNonLinearStepper() {
  const [started, setStarted] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [snackbarSuccess, setSnackbarSuccess] = React.useState(true);

  const [teachers, setTeachers] = React.useState([defaultTeacher]);
  const [courses, setCourses] = React.useState([defaultCourse]);
  const [config, setConfig] = React.useState(defaultConfig);
  const [constraints, setConstraints] = React.useState(defaultConstraints);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleStateTransform = () => {
    exportData([...teachers], [...courses], { ...config }, { ...constraints });
  };

  const handleSaveState = () => {
    try {
      fs.writeFileSync(
        './state/teachers.json',
        JSON.stringify(teachers, null, 2)
      );
      fs.writeFileSync(
        './state/courses.json',
        JSON.stringify(courses, null, 2)
      );
      fs.writeFileSync('./state/config.json', JSON.stringify(config, null, 2));
      fs.writeFileSync(
        './state/constraints.json',
        JSON.stringify(constraints, null, 2)
      );

      setSnackbarMessage('Bilgiler kaydedildi.');
      setSnackbarSuccess(true);
      setSnackbarOpen(true);
    } catch (error) {
      console.log(error);
      setSnackbarMessage('Bilgiler kaydedilirken bir hata ile karşılaşıldı.');
      setSnackbarSuccess(false);
      setSnackbarOpen(true);
    }
  };

  const handleLoadState = () => {
    const teachersState = JSON.parse(
      fs.readFileSync('./state/teachers.json', 'utf8')
    );
    const coursesState = JSON.parse(
      fs.readFileSync('./state/courses.json', 'utf8')
    );
    const configState = JSON.parse(
      fs.readFileSync('./state/config.json', 'utf8')
    );
    const constraintsState = JSON.parse(
      fs.readFileSync('./state/constraints.json', 'utf8')
    );

    setTeachers(teachersState);
    setCourses(coursesState);
    setConfig(configState);
    setConstraints(constraintsState);
    setStarted(true);
  };

  const getCurrentPage = () => {
    switch (activeStep) {
      case 0:
        return <Teacher teachers={teachers} setTeachers={setTeachers} />;
      case 1:
        return (
          <Course
            courses={courses}
            setCourses={setCourses}
            teachers={teachers}
          />
        );
      case 2:
        return <Config config={config} setConfig={setConfig} />;
      case 3:
        return (
          <Constraints
            constraints={constraints}
            setConstraints={setConstraints}
          />
        );
    }
  };

  if (!started) {
    return (
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{ height: '100vh' }}
      >
        <Button
          size="large"
          sx={{ mr: 2, width: '180px' }}
          variant="contained"
          onClick={handleLoadState}
        >
          SON KAYDI YÜKLE
        </Button>
        <Button
          size="large"
          variant="contained"
          sx={{ ml: 2, width: '180px' }}
          onClick={() => setStarted(true)}
        >
          YENI KAYIT
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Box display={'flex'} justifyContent={'center'}>
        <Stepper
          sx={{ width: '750px', pt: 4, pb: 4 }}
          nonLinear
          activeStep={activeStep}
          alternativeLabel
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box display={'flex'} justifyContent={'center'} px={'100px'}>
        {getCurrentPage()}
      </Box>
      {activeStep === steps.length - 1 && (
        <Box display={'flex'} justifyContent={'center'} px={'100px'}>
          <Button
            sx={{ width: '150px', mr: 2 }}
            variant="contained"
            onClick={handleSaveState}
          >
            KAYDET
          </Button>

          <Button
            sx={{ width: '150px', ml: 2 }}
            variant="contained"
            onClick={handleStateTransform}
          >
            DÖNÜŞTÜR
          </Button>
        </Box>
      )}
      {activeStep !== 0 && (
        <Button
          variant="contained"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ position: 'fixed', left: 20, top: '50%' }}
        >
          GERİ
        </Button>
      )}
      {activeStep !== steps.length - 1 && (
        <Button
          sx={{ width: '100%' }}
          variant="contained"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
          sx={{ position: 'fixed', right: 20, top: '50%' }}
        >
          İLERİ
        </Button>
      )}

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          variant="filled"
          severity={snackbarSuccess ? 'success' : 'error'}
          sx={{
            width: '100%',
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
