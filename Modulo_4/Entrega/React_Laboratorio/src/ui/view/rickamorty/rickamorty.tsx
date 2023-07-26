import React from "react";
import { Header } from "@/ui/components";
import { getCharacters } from "@/core/apis/rickYMortyApi";
import { Card } from "@/common";
import classes from "./rickamorty.styles.css";
import { Pagination, Typography } from "@mui/material";
import { useDebounce } from "use-debounce";

interface MemberEntity {
  id: string;
  name: string;
  image: string;
}

export const RickAMorty: React.FC = () => {
  const [characters, setCharacters] = React.useState<MemberEntity[]>([]);
  const [name, setName] = React.useState<string>("");
  const [pagination, setPagination] = React.useState<number>(0);
  const [page, setPage] = React.useState<number>(1);

  const [debounceName] = useDebounce(name, 1000)

  React.useEffect(() => {
    getCharacters(debounceName).then((data) => {
      setCharacters(data.results);
      setPagination(data.info.pages);
    });
  }, [debounceName]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    getCharacters(name, value).then((data) =>setCharacters(data.results))
  };

  return (
    <>
      <Header title={"Rick and Morty"} logo={""} searchEntity={setName} />
      <div className={classes.container}>
        {characters.map((character) => (
          <>
            <Card
              avatar_url={character.image}
              id={character.id}
              name={character.name}
            />
          </>
        ))}
      </div>

      <div className={classes.boxPagination}>
        <Typography>Page: {page}</Typography>
        <Pagination count={pagination} page={page} onChange={handleChange} siblingCount={2}/>
      </div>
    </>
  );
};
