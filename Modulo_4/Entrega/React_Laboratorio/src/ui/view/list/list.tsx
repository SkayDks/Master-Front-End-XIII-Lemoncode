import { Header } from "@/ui/components";
import React from "react";
import { getAvatarEntity, getMembers } from "@/core/apis/githubApi";
import { Card } from "@/common";
import classes from "./list.styles.css";
import { useDebounce } from "use-debounce";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [entity, setEntity] = React.useState<string>("Lemoncode");
  const [avatarEntity, setAvatarEntity] = React.useState<string>();

  const [debounceEntity] = useDebounce(entity, 1000)

  React.useEffect(() => {
    getMembers(debounceEntity).then((data) => setMembers(data));
    getAvatarEntity(debounceEntity).then((data) => setAvatarEntity(data.avatar_url));
  }, [debounceEntity]);

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
      </div>
    </>
  );
};
