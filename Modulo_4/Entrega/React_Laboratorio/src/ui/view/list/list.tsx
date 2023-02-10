import { Header } from "@/ui/components";
import React from "react";
import { getAvatarEntity, getMembers } from "@/core/apis/githubApi";
import { Card } from "@/common";
import classes from "./list.styles.css";
import { Pagination, Typography } from "@mui/material";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

interface Entity {
  name: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [entity, setEntity] = React.useState<string>("Lemoncode");
  const [avatarEntity, setAvatarEntity] = React.useState<string>();

  React.useEffect(() => {
    getMembers(entity).then((data) => setMembers(data));
    getAvatarEntity(entity).then((data) => setAvatarEntity(data.avatar_url));
  }, [entity]);

  return (
    <>
      <Header
        title={"Hello from"}
        name={entity}
        logo={avatarEntity}
        searchEntity={setEntity}
      />
      <div className={classes.listContainer}>
        {members.map((member) => (
          <>
            <Card
              avatar_url={member.avatar_url}
              id={member.id}
              name={member.login}
            />
          </>
        ))}
        {/* <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange} /> */}
      </div>
    </>
  );
};
