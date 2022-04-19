import React, {useEffect } from "react";
import Article from './article';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'


import { useSelector, useDispatch } from "react-redux";
import { getArticles, } from "../../redux/actions/articlesActions";
import {incrementPage} from "../../redux/articles/articlesSlice";
const Articles = () => {

  const articles = useSelector((state) => state.articles.articles);
  const filteredArticles = useSelector((state) => state.articles.filteredArticles);
  const loadingArticles = useSelector((state)=>state.articles.loadingArticles);
  const error = useSelector((state)=>state.articles.error);
  const page = useSelector((state)=>state.articles.page);
  const searchText = useSelector((state)=>state.articles.q);
  const dispatch = useDispatch();


  
  useEffect(() => {
    dispatch(getArticles({ page: page }));
  }, []);

  window.onscroll=()=>{
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      dispatch(incrementPage())
      console.log("SCROLLER TO END")
    }
    
  }

  return <Box>
      {error?.length > 0 && <Box sx={{textAlign: 'center', marginBottom: 2}}>{error} </Box>}
  <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" >
      {searchText.length > 0 ?
        (filteredArticles.length > 0?
          filteredArticles.map(article=>
                <Grid item >
                  <Article article={article}/>
                </Grid>) 
          :<Button onClick={()=>dispatch(incrementPage())}>
            Load More...
          </Button>)
        :(articles.map(article=>
            <Grid item >
              <Article article={article}/>
            </Grid>)
        )
      }
  </Grid>
    {loadingArticles ? <Box sx={{textAlign: 'center', marginTop: 2}}><CircularProgress/></Box> : null}
  </Box>;
};

export default Articles;
