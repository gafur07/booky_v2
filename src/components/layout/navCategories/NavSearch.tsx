import { FC } from "react";
import { InputAdornment, TextField,  } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styles from "./navCategories.module.scss"

const NavSearch: FC = () => {

  return (
    <div className={styles.search_wrapper}>
      <TextField
        className={styles.search}
        variant="standard"
        placeholder="Kitaptı izleń"
        InputProps={{
          startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{color: "#202020"}}/>
              </InputAdornment>
          ),
          disableUnderline: true
        }}

        sx={{
          background: 'white',
          borderRadius: "16px",
          p: "5px",
          pl: "25px",
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
          },
        }}
      />
      {/* {debouncedSearchValue !== '' && (
				<ul>
					{data?.map(item => (
						<li onClick={() => handleClickItem(item.slug)} key={item.slug}>
							{item.title}
						</li>
					))}
				</ul>
			)} */}
    </div>
  );
};

export { NavSearch };
