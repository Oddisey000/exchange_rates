import * as React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { blue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import "./city-selector.component.css";

let marketPlace = [];

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
        {marketPlace.slice(1).map((market) => (
          <ListItem
            button
            onClick={() => handleListItemClick(market.name)}
            key={market.key}
          >
            <ListItemAvatar>
              <LocationOnIcon sx={{ color: blue[600] }}></LocationOnIcon>
            </ListItemAvatar>
            <ListItemText primary={market.name} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("Банки України")}
        >
          <ListItemAvatar>
            <AccountBalanceIcon></AccountBalanceIcon>
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
  selectedValue: PropTypes.string.isRequired
};

const CitySelectorComponent = (props) => {
  marketPlace = props.appData.appReducer.citiesArrayData;
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(marketPlace[1].name);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);

    marketPlace.map((el, key) => {
      if (el.name === value) console.log(marketPlace[key].key)
      return el
    });
  };

  return (
    <>
      <div id="app-title" className="app-title">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          style={{ fontSize: "medium" }}
        >
          <span id="header-text">Курс валют</span>
          <br />
          <Link href="#" underline="none" onClick={handleClickOpen}>
            <KeyboardDoubleArrowDownIcon style={{ marginBottom: "-5px" }} />
            &nbsp; {selectedValue}{" "}
            <KeyboardDoubleArrowDownIcon style={{ marginBottom: "-5px" }} />
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
};

const mapStateToProps = (state) => {
  return {
    appData: { ...state }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitySelectorComponent);
