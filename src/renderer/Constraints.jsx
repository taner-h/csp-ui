import { Add, Delete } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  Checkbox,
  FormControlLabel,
  ListItemIcon,
  FormControl,
  FormGroup,
  Tooltip,
  IconButton,
  TextField,
  MenuItem,
  InputAdornment,
  InputLabel,
  Select,
  Typography,
  ListItemText,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useEffect } from 'react';

function Constraints({ constraints, setConstraints }) {
  const handleConstraintChange = (event, key) => {
    setConstraints({ ...constraints, [key]: parseFloat(event.target.value) });
  };

  return (
    <Box p={4}>
      <Box>
        <Typography variant="h6" color="common.black">
          Temel Kısıt Ağırlıkları
        </Typography>
        <Divider />
      </Box>
      <Box display="flex" justifyContent="center" mt={3}>
        <TextField
          label="Dönem Seansı Çakışması"
          value={constraints.semesterCollision}
          onChange={(event) =>
            handleConstraintChange(event, 'semesterCollision')
          }
          sx={{ width: '200px', mr: 2 }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Öğretmen Seansı Çakışması"
          value={constraints.teacherCollision}
          onChange={(event) =>
            handleConstraintChange(event, 'teacherCollision')
          }
          sx={{ width: '200px', mr: 2 }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Sabit Ders İhlali"
          value={constraints.fixedSessionViolation}
          onChange={(event) =>
            handleConstraintChange(event, 'fixedSessionViolation')
          }
          sx={{ width: '200px', mr: 2 }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Öğle Arası Saati İhlali"
          value={constraints.breakHourViolation}
          onChange={(event) =>
            handleConstraintChange(event, 'breakHourViolation')
          }
          sx={{ width: '200px', mr: 2 }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box mt={4}>
        <Typography variant="h6" color="common.black">
          Hafif Kısıt Ağırlıkları
        </Typography>
        <Divider />
      </Box>
      <Box display="flex" justifyContent="center" mt={3}>
        <TextField
          label="Tek Seanslı Günler"
          value={constraints.singleSessionDay}
          onChange={(event) =>
            handleConstraintChange(event, 'singleSessionDay')
          }
          sx={{ width: '180px', mr: 2 }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Öğretmen Uygunluk İhlali"
          value={constraints.teacherAvailabilityViolation}
          onChange={(event) =>
            handleConstraintChange(event, 'teacherAvailabilityViolation')
          }
          sx={{ width: '180px', mr: 2 }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Çoklu Seans Günlü Dersler"
          value={constraints.multipleCourseSession}
          onChange={(event) =>
            handleConstraintChange(event, 'multipleCourseSession')
          }
          sx={{ width: '180px', mr: 2 }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Slot Açıklığı"
          value={constraints.slotSpan}
          onChange={(event) => handleConstraintChange(event, 'slotSpan')}
          sx={{ width: '180px', mr: 2 }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box display="flex" justifyContent="center" mt={3}>
        <TextField
          label="Boş Bırakılan Ara Slotlar"
          value={constraints.emptySlot}
          onChange={(event) => handleConstraintChange(event, 'emptySlot')}
          sx={{ width: '180px', mr: 2 }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Çakışmaması Gereken Seans Çakışmaları"
          value={constraints.cannotCollideViolation}
          onChange={(event) =>
            handleConstraintChange(event, 'cannotCollideViolation')
          }
          sx={{ width: '260px', mr: 2 }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Boş Günler"
          value={constraints.freeDay}
          onChange={(event) => handleConstraintChange(event, 'freeDay')}
          sx={{ width: '180px', mr: 2 }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
    </Box>
  );
}

export default Constraints;
