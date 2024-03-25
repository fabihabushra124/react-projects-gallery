import PropTypes from 'prop-types';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

// console.log(import.meta.env);

const url = 'https://www.googleapis.com/books/v1/volumes?q=';
const apiKey = import.meta.env.VITE_API_KEY;

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('a');
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [newBooks, setNewBooks] = useState([]);
  const [populerBooks, setPopulerBooks] = useState([]);

  const fetchNewBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${url}web+intitle&key=${apiKey}&langRestrict=en&maxResults=9`
      );
      const data = await response.json();
      const booksArr = data.items;

      if (booksArr) {
        const booksInfo = booksArr.map((info) => {
          const { id, volumeInfo } = info;
          return {
            id: id,
            title: volumeInfo.title,
            img: volumeInfo.imageLinks.smallThumbnail,
            authors: volumeInfo.authors,
          };
        });
        // console.log(booksInfo);
        setNewBooks(booksInfo);
      } else {
        setNewBooks([]);
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  const fetchPopulerBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${url}dev+intitle&key=${apiKey}&langRestrict=en&maxResults=8`
      );
      const data = await response.json();
      const booksArr = data.items;
      // console.log(booksArr);

      if (booksArr) {
        const booksInfo = booksArr.map((info) => {
          const { id, volumeInfo } = info;
          return {
            id: id,
            title: volumeInfo.title,
            img: volumeInfo.imageLinks.smallThumbnail,
            authors: volumeInfo.authors,
          };
        });
        // console.log(booksInfo);
        setPopulerBooks(booksInfo);
      } else {
        setPopulerBooks([]);
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${url}${search}+intitle&key=${apiKey}&langRestrict=en&maxResults=30`
      );
      const data = await response.json();
      const booksArr = data.items;
      // console.log(booksArr);

      if (booksArr) {
        const booksInfo = booksArr.map((info) => {
          const { id, volumeInfo } = info;
          return {
            id: id,
            title: volumeInfo.title,
            img: volumeInfo.imageLinks.smallThumbnail,
            authors: volumeInfo.authors,
          };
        });
        // console.log(booksInfo);
        setSearchedBooks(booksInfo);
      } else {
        setSearchedBooks([]);
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchNewBooks();
    fetchPopulerBooks();
    fetchBooks();
  }, [fetchNewBooks, fetchPopulerBooks, fetchBooks]);

  const cardValues = useMemo(
    () => ({
      loading,
      searchedBooks,
      newBooks,
      populerBooks,
      setSearch,
    }),
    [loading, searchedBooks, newBooks, populerBooks]
  );

  return (
    <AppContext.Provider value={cardValues}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

AppProvider.propTypes = {
  children: PropTypes.object,
};
