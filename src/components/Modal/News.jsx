

import { searchNewsAboutUA, searchNewsAboutUsa, searchNewsAboutPl, searchNewsAboutKyiv } from 'api/getNews';
import { useEffect, useState } from 'react';
import css from './News.module.css';
import { ColorRing } from 'react-loader-spinner';


const News = ({ city }) => {
  // console.log(city);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {

    const fetchNews = async () => {
      if (city === 'Donetsk') {
        try {
        setLoading(true);
        const data = await searchNewsAboutUA();
        console.log(data);
        setItems(prevItems => ([...prevItems, ...data.articles]));
      } catch (error) {
        console.log(error.message);
        setError(error.message);
        } finally {
          setLoading(false);
        }
        

      } else if (city === 'Cleveland') {
        try {
        setLoading(true);
        const data = await searchNewsAboutUsa();
        console.log(data);
        setItems(prevItems => ([...prevItems, ...data.articles]));
      } catch (error) {
        // console.log(error.message);
        setError(error.message);
      } finally {
          setLoading(false);
        }

      } else if (city === 'Poland (Lodz)') {
        try {
        setLoading(true);
        const data = await searchNewsAboutPl();
        console.log(data);
        setItems(prevItems => ([...prevItems, ...data.articles]));
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
          setLoading(false);
          setError(null);
        }
      } else if (city === 'Kyiv') {
        try {
        setLoading(true);
        const data = await searchNewsAboutKyiv();
        // console.log(data);
        setItems(prevItems => ([...prevItems, ...data.articles]));
      } catch (error) {
        // console.log(error.message);
        setError(error.message);
      } finally {
          setLoading(false);
          setError(null);
        }
      }

    }

    fetchNews();

  }, [city, setItems]);


  return loading ? <div style={{marginTop: '10vh', marginLeft: '10vw'}}><ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#8c03fc', '#9d26ff', '#ac49fc', '#c175ff', '#d5a4fc']}
/></div> : <div className={css.container}>
      <p className={css.title}>News</p>
      {error ? <p>{error}</p> : <ul className={css.list}>
      {items.map(item => 
        <li key={item._id} className={css.item}>
          <p className={css.article}>{item.title}</p>
          <a href={item.link} className={css.link} target='_blank' rel="noreferrer">link to the article</a>
        </li>
      )}
    </ul>}
  </div>
}

export default News;