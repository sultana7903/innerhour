import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import {Grid} from '@mui/material';
import DetailModal from './DetailModal';

const Homepg = () => {

  const [data, setData] = useState([])

  useEffect(()=>{
    fetchData()
  },[])

 
  const fetchData = async () => {
   const result = await axios.get('https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=10')
  setData(result.data.data)
  console.log(data)
  }

  const [open, setOpen] = useState(false)
  const [detail, setDetail] = useState({})
  const [search, setSearch] = useState([])

console.log(search);
  const fetchDetail=async(val)=>{
    const resp = await axios.get(`https://api.theinnerhour.com/v1/blogdetail/${val}`)
    console.log(resp)
    setDetail(resp.data.blog)
  }

  return (
    <div>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", margin:"28px"}}>
      <Typography>All articles</Typography>
            <input type="search" name="" id="" placeholder='search articles'
             onChange={(e)=>setSearch(e.target.value)}
             />   
      </div>

      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
    {data && data.filter((value)=>{if(search === ""){
      return value  
    }else if(value.title.toLowerCase().includes(search.toString().toLowerCase())){
    return value
    } 
  }).map((el, index)=>(
      <Card sx={{ maxWidth: 400, minHeight: 300, margin:3}}
      onClick={ () => {
      setOpen(true)
      fetchDetail(el.slug)
      }}
      >
        <Grid spacing={2}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={el.thumb}
          alt="green iguana"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {el.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {el.short_description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Grid>
    </Card>
      ))}
 </Grid>
 </Grid>
 </Grid>
    <DetailModal open = {open}
     detail = {detail}
     setOpen = {setOpen}
    />
    </div>
  )
}

export default Homepg


