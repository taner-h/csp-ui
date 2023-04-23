import { Box, Button, Typography } from '@mui/material';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Stepper from '@mui/material/Stepper';
import * as React from 'react';
import Config from './Config';
import Constraints from './Constraints';
import Course from './Course';
import Teacher from './Teacher';

const steps = ['Öğretmen Ekleme', 'Ders Ekleme', 'Genel Ayarlar', 'Kısıtlar'];

const savedTeachers = [
  {
    firstName: 'Marie',
    lastName: 'Peroueme',
    hasUnavailable: false,
    unavailable: [{ day: '', startSlot: '', endSlot: '' }],
  },
  {
    firstName: 'Damien',
    lastName: 'Berthet',
    hasUnavailable: false,
    unavailable: [{ day: '', startSlot: '', endSlot: '' }],
  },
  {
    firstName: 'Erden',
    lastName: 'Tuğcu',
    hasUnavailable: true,
    unavailable: [{ day: 1, startSlot: 9, endSlot: 12 }],
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

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [teachers, setTeachers] = React.useState(savedTeachers);
  const [courses, setCourses] = React.useState(savedCourses);
  const [config, setConfig] = React.useState([]);
  const [constraints, setConstraints] = React.useState([]);

  // console.log(JSON.stringify(courses));

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
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
        return <Config />;
      case 3:
        return <Constraints />;
    }
  };

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

      <Button
        variant="contained"
        disabled={activeStep === 0}
        onClick={handleBack}
        sx={{ position: 'fixed', left: 20, top: '50%' }}
      >
        GERİ
      </Button>
      <Button
        sx={{ width: '100%' }}
        variant="contained"
        onClick={handleNext}
        disabled={activeStep === steps.length - 1}
        sx={{ position: 'fixed', right: 20, top: '50%' }}
      >
        İLERİ
      </Button>
    </>
  );
}
