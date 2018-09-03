import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const AlertDialog = (props) => {
  const { open, content, onClose } = props;
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary" autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

RegisterForm.propTypes = {
  open: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AlertDialog;
