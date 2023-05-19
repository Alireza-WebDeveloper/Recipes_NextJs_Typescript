import { IconButton, TextField, Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as Icons from 'react-icons/md';

const SearchBar2 = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const {
    query: { categories, q },
  } = router;
  // Update Query Search
  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  // Check Router And Push
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (categories) {
      router.push(`/recipes?q=${query}&categories=${categories}`, undefined, {
        scroll: false,
      });
    } else {
      router.push(`/recipes?q=${query}`, undefined, {
        scroll: false,
      });
    }
    setQuery('');
  };
  // View
  return (
    <Box
      onSubmit={handleSubmitForm}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        width: { lg: '90%', xs: '80%' },
        m: 'auto',
        mb: { lg: 0, xs: 2 },
        position: 'relative',
      }}
      component={'form'}
    >
      <Box position={'relative'} flexGrow={1}>
        <TextField
          color="primary"
          autoComplete="off"
          sx={{
            width: '100%',
          }}
          InputProps={{
            style: {
              fontSize: '1.3rem',
              color: 'black',
              borderRadius: '1rem',
              backgroundColor: 'white',
            },
          }}
          placeholder="جستجو..."
          onChange={updateQuery}
          value={query}
        />

        <Box>
          <IconButton
            type="submit"
            size="large"
            color="secondary"
            sx={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              transform: 'translateX(-20%)',
            }}
          >
            <Icons.MdSearch />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar2;
