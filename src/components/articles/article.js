import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Article = (props)=> {
  const {article} = props;
  return (
    <Card sx={{ maxWidth: 345, marginBttom: 1 }}>
      <CardActionArea onClick={()=>window.open(article.web_url,'_blank')}>
        <CardMedia
          component="img"
          height="140"
          image={article.multimedia.length > 0 ? "https://static01.nyt.com/"+article.multimedia[0].url : "https://en.reset.org/app/themes/reset/images/no-image.jpg"}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,}}>
            {article?.abstract}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,}}>
           {article?.lead_paragraph }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Article;