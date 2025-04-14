import { FC } from "react";
import { Button, Typography, Modal, Backdrop, Fade } from "@mui/material";

import { useStyles } from "./ConfirmModal.styles";
import { WarningOrangeCircleIcon } from "../../../assets/icons";


type Props = {
    text: string;
    isOpenModal: boolean;
    onCloseModal: () => void;
    handlerDelete: () => void;
};

const ConfirmModal: FC<Props> = ({
  text,
  isOpenModal,
  onCloseModal,
  handlerDelete,
}) => {
  const { classes } = useStyles();

  if (isOpenModal) {
    return (
      <Modal
        open={true}
        onClose={onCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
          <div className={classes.modal}>
            <div>
              <WarningOrangeCircleIcon className={classes.warningIcon} />
            </div>
            <div className={classes.header}>
              <Typography
                className={classes.warningHeaderText}
              >
                Внимание!
              </Typography>
            </div>
            <div className={classes.warningText}>
              {text}
            </div>
            <div className={classes.footer}>
              <Button className={classes.cancelBtn} onClick={onCloseModal}>
                <Typography>Отменить</Typography>
              </Button>
              <Button
                className={classes.applyBtn}
                onClick={handlerDelete}
              >
                Удалить
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    );
  }

  return null;
};

export { ConfirmModal };
