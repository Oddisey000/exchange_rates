import * as React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import './city-selector.component.css';

const marketPlace = ["Київ", "Луцьк", "Харків", "Івано-Франківськ"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Оберіть місто</DialogTitle>
      <List sx={{ pt: 0 }}>
        {marketPlace.map((market) => (
          <ListItem button onClick={() => handleListItemClick(market)} key={market}>
            <ListItemAvatar>
              <LocationOnIcon sx={{ color: blue[600] }}>
              </LocationOnIcon>
            </ListItemAvatar>
            <ListItemText primary={market} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick('Банки України')}>
          <ListItemAvatar>
            <AccountBalanceIcon>
            </AccountBalanceIcon>
          </ListItemAvatar>
          <ListItemText primary="Банки України" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function CitySelectorComponent() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(marketPlace[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <div id="app-title" className="app-title">
        <Typography variant="h5" gutterBottom component="div" style={{fontSize: "1.3rem"}}>
          <span id="header-text">Курс валют</span>
          <Link href="#" underline="none" onClick={handleClickOpen}>
            &nbsp; {selectedValue} <KeyboardDoubleArrowDownIcon />
          </Link>
        </Typography>
          <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
      </div>
    </>
  );
}
