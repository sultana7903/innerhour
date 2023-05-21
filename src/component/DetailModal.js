import React from 'react'
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import {Grid} from '@mui/material';

const DetailModal = ({open, detail, setOpen}) => {
  const handleClose = () =>{
    setOpen(false)
  }
  return (
    <div>
      
        <Modal open = {open}
        onClose={handleClose}
        sx={{display:"flex", alignItems:"center", justifyContent:"center", width:"100vw", height: "100vh"}}
        >
      <Card sx={{ maxWidth: 500, minHeight: 400, margin:3}}>
           <h1 onClick={handleClose} style={{float:"right", paddingRight:"10px",cursor:"pointer"}}>x</h1>
        <Grid spacing={2}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={detail?.thumb}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         {detail?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {detail?.metadescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Grid>
    </Card>
    </Modal>
    </div>
  )
}

export default  DetailModal
