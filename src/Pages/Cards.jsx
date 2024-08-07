import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Grid, Container } from '@mui/material';

export default function Cards({ title, img, desc, id }) {
  const navigate = useNavigate();

  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
          <Grid  xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia image={img} sx={{ height: 140 }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  onClick={() => navigate('/product', { state: { title, img, desc, id } })} 
                  size="small"
                >
                  Add
                </Button>
              </CardActions>
            </Card>
          </Grid>
            </Grid>
    </Container>
  );
}
