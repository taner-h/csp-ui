import { Box, Button, Typography } from '@mui/material';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Stepper from '@mui/material/Stepper';
import * as React from 'react';
import Config from './Config';
import Constraints from './Constraints';
import Course from './Course';
import Session from './Session';
import Teacher from './Teacher';

const steps = [
  'Öğretmen Ekleme',
  'Ders Ekleme',
  'Seans Ekleme',
  'Genel Ayarlar',
  'Kısıtlar',
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
  multiTeachers: [],
};

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [teachers, setTeachers] = React.useState([defaultTeacher]);
  const [courses, setCourses] = React.useState([defaultCourse]);
  const [sessions, setSessions] = React.useState([]);
  const [config, setConfig] = React.useState([]);
  const [constraints, setConstraints] = React.useState([]);

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
        return <Course courses={courses} setCourses={setCourses} />;
      case 2:
        return <Session />;
      case 3:
        return <Config />;
      case 4:
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
        sx={{ position: 'fixed', left: 30, top: '50%' }}
      >
        GERİ
      </Button>
      <Button
        sx={{ width: '100%' }}
        variant="contained"
        onClick={handleNext}
        disabled={activeStep === steps.length - 1}
        sx={{ position: 'fixed', right: 30, top: '50%' }}
      >
        İLERİ
      </Button>
    </>
  );
}
