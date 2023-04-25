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

const mutation = [
  'Random (Rastgele)',
  'Corrective (Düzeltici)',
  'Hybrid (Hibrit)',
  'Smart (Akıllı)',
];

function Config({ config, setConfig }) {
  const handleConfigChange = (event, key) => {
    setConfig({ ...config, [key]: parseFloat(event.target.value) });
  };

  console.log('config', config);

  return (
    <Box p={4}>
      <Box>
        <Typography variant="h6" color="common.black">
          Yabancı Dil Dersleri
        </Typography>
        <Divider />
      </Box>
      <Box display="flex" justifyContent="center" mt={3}>
        <FormControl>
          <InputLabel>Yabancı Dil 1. Gün</InputLabel>
          <Select
            sx={{ mr: 2, width: '200px' }}
            value={config.languageDay1}
            label="Yabancı Dil 1. Gün"
            onChange={(event) => handleConfigChange(event, 'languageDay1')}
          >
            <MenuItem value={0}>Pazartesi</MenuItem>
            <MenuItem value={1}>Salı</MenuItem>
            <MenuItem value={2}>Çarşamba</MenuItem>
            <MenuItem value={3}>Perşembe</MenuItem>
            <MenuItem value={4}>Cuma</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Yabancı Dil 2. Gün</InputLabel>
          <Select
            sx={{ mr: 2, width: '200px' }}
            value={config.languageDay2}
            label="Yabancı Dil 2. Gün"
            onChange={(event) => handleConfigChange(event, 'languageDay2')}
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
          value={config.languageHour}
          onChange={(event) => handleConfigChange(event, 'languageHour')}
          sx={{ width: '200px' }}
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
      </Box>
      <Typography variant="h6" color="common.black" mt={4}>
        Algoritma Değişkenleri
      </Typography>
      <Divider />
      <Box display="flex" justifyContent="center" mt={3}>
        <Tooltip title="Algoritmanın her jenerasyonundaki popülasyonunun birey sayısı">
          <TextField
            label="Popülasyon Nüfusu"
            value={config.SIZE}
            onChange={(event) => handleConfigChange(event, 'SIZE')}
            sx={{ width: '150px', mr: 2 }}
            type="number"
            InputProps={{
              inputProps: {
                min: 1,
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Tooltip>
        <Tooltip title="Algoritmanın kaç jenerasyon boyunca gelişmedikten sonra sonlanacağını belirtir">
          <TextField
            label="Durgunluk Limiti"
            value={config.STAGNATION_LIMIT}
            onChange={(event) => handleConfigChange(event, 'STAGNATION_LIMIT')}
            sx={{ width: '150px', mr: 2 }}
            type="number"
            InputProps={{
              inputProps: {
                min: 1,
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Tooltip>
        <Tooltip title="Bir sonraki jenerasyona doğrudan aktarılacak olan popülasyonun en iyi bireylerinin sayısını belirtir">
          <TextField
            label="Elit Sayısı"
            value={config.ELITE_SIZE}
            onChange={(event) => handleConfigChange(event, 'ELITE_SIZE')}
            sx={{ width: '150px', mr: 2 }}
            type="number"
            InputProps={{
              inputProps: {
                min: 1,
                max: config.SIZE,
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Tooltip>
        <Tooltip title="Algoritmanın eriştiğinde kesinlikle sonlanacağı jenerasyon sayısını belirtir">
          <TextField
            label="Jenerasyon Limiti"
            value={config.GENERATION_LIMIT}
            onChange={(event) => handleConfigChange(event, 'GENERATION_LIMIT')}
            sx={{ width: '150px', mr: 2 }}
            type="number"
            InputProps={{
              inputProps: {
                min: config.STAGNATION_LIMIT * 3,
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Tooltip>
        <Tooltip title="Eşleşmiş olan bir çift bireyin arasında crossover gerçekleşme olasılığı">
          <TextField
            label="Crossover Olasılığı"
            value={config.CROSSOVER_RATE}
            onChange={(event) => handleConfigChange(event, 'CROSSOVER_RATE')}
            sx={{ width: '150px', mr: 2 }}
            type="number"
            InputProps={{
              inputProps: {
                min: 0,
                max: 1,
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Tooltip>
      </Box>
      <Box display="flex" justifyContent="center" mt={3}>
        <FormControl>
          <InputLabel>Mutasyon Yöntemi</InputLabel>
          <Select
            sx={{ mr: 2, width: '240px' }}
            value={config.MUTATION_TYPE}
            renderValue={(value) => mutation[value]}
            label="Mutasyon Yöntemi"
            onChange={(event) => handleConfigChange(event, 'MUTATION_TYPE')}
          >
            <MenuItem value={0}>
              <ListItemText>Random (Rastgele)</ListItemText>
              <Tooltip
                placement="right"
                title="Mutasyonlar temel kısıtları bozmayacak şekilde rastgele yapılır"
              >
                <HelpOutlineIcon fontSize="small" />
              </Tooltip>
            </MenuItem>
            <MenuItem value={1}>
              <ListItemText>Corrective (Düzeltici)</ListItemText>
              <Tooltip
                placement="right"
                title="Mutasyonlar temel ve hafif kısıt ihlallerini azaltacak şekilde yapılır"
              >
                <HelpOutlineIcon fontSize="small" />
              </Tooltip>
            </MenuItem>
            <MenuItem value={2}>
              <ListItemText>Hybrid (Hibrit)</ListItemText>
              <Tooltip
                placement="right"
                title="Mutasyonlar hem rastgele hem de düzeltici şekilde gerçekleştirilir"
              >
                <HelpOutlineIcon fontSize="small" />
              </Tooltip>
            </MenuItem>

            <MenuItem value={3}>
              <ListItemText>Smart (Akıllı)</ListItemText>
              <Tooltip
                placement="right"
                title="Mutasyonlar temel kısıt ihlali olduğunda düzeltici, diğer durumlarda hibrit yöntem kullanırak yapılır"
              >
                <HelpOutlineIcon fontSize="small" />
              </Tooltip>
            </MenuItem>
          </Select>
        </FormControl>

        <Tooltip title="1. Eşik değerleri aşılmadan önceki mutasyon olasılığı">
          <TextField
            label="1. Mutasyon Olasılığı"
            value={config.MUTATION_RATE_1}
            onChange={(event) => handleConfigChange(event, 'MUTATION_RATE_1')}
            sx={{ width: '150px', mr: 2 }}
            type="number"
            InputProps={{
              inputProps: {
                min: 0,
                max: 1,
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Tooltip>
        <Tooltip title="1. Eşik değerlerinden biri aşıldıktan sonraki mutasyon olasılığı">
          <TextField
            label="2. Mutasyon Olasılığı"
            value={config.MUTATION_RATE_2}
            onChange={(event) => handleConfigChange(event, 'MUTATION_RATE_2')}
            sx={{ width: '150px', mr: 2 }}
            type="number"
            InputProps={{
              inputProps: {
                min: 0,
                max: 1,
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Tooltip>
        <Tooltip title="2. Eşik değerlerinden biri aşıldıktan sonraki mutasyon olasılığı">
          <TextField
            label="3. Mutasyon Olasılığı"
            value={config.MUTATION_RATE_3}
            onChange={(event) => handleConfigChange(event, 'MUTATION_RATE_3')}
            sx={{ width: '150px', mr: 2 }}
            type="number"
            InputProps={{
              inputProps: {
                min: 0,
                max: 1,
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Tooltip>
      </Box>
      <Box display="flex" justifyContent="center" mt={3}>
        <Tooltip title="Ulaşıldığında 2. Mutasyon olasılığına geçilecek olan durgunluk eşiği">
          <TextField
            label="1. Durgunluk Eşiği"
            value={config.STAGNATION_THRESHOLD_1}
            onChange={(event) =>
              handleConfigChange(event, 'STAGNATION_THRESHOLD_1')
            }
            sx={{ width: '150px', mr: 2 }}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Tooltip>
        <Tooltip title="Ulaşıldığında 3. Mutasyon olasılığına geçilecek olan durgunluk eşiği">
          <TextField
            label="2. Durgunluk Eşiği"
            value={config.STAGNATION_THRESHOLD_2}
            onChange={(event) =>
              handleConfigChange(event, 'STAGNATION_THRESHOLD_2')
            }
            sx={{ width: '150px', mr: 2 }}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Tooltip>
        <Tooltip title="Ulaşıldığında 2. Mutasyon olasılığına geçilecek olan jenerasyon eşiği">
          <TextField
            label="1. Jenerasyon Eşiği"
            value={config.GENERATION_THRESHOLD_1}
            onChange={(event) =>
              handleConfigChange(event, 'GENERATION_THRESHOLD_1')
            }
            sx={{ width: '150px', mr: 2 }}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Tooltip>
        <Tooltip title="Ulaşıldığında 3. Mutasyon olasılığına geçilecek olan jenerasyon eşiği">
          <TextField
            label="2. Jenerasyon Eşiği"
            value={config.GENERATION_THRESHOLD_2}
            onChange={(event) =>
              handleConfigChange(event, 'GENERATION_THRESHOLD_2')
            }
            sx={{ width: '150px', mr: 2 }}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Tooltip>
      </Box>
    </Box>
  );
}

export default Config;
