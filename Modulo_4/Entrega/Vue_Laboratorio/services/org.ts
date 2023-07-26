import { Organization } from "~~/types";

export const orgService = {
  async getOrg(org: string) {
    const result = await $fetch<Organization>(
      `https://api.github.com/orgs/${org}`
    ).catch(() => errorOrg);
    
    /*const result = (): Promise<Organization> => {
      if (org === "Lemoncode") {
        return new Promise((resolve) => {
          resolve(fakeLemoncode);
        });
      } else if (org === "microsoft") {
        return new Promise((resolve) => {
          resolve(fakeMicrosoft);
        });
      } else {
        return Promise.reject().catch();
      }
    };*/

    return result;
  },
};

const errorOrg: Organization ={
  avatar_url: "",
  blog: "",
  company: "",
  created_at: "",
  description: "",
  email: "",
  events_url: "",
  followers: 0,
  following: 0,
  has_organization_projects: false,
  has_repository_projects: false,
  hooks_url: "",
  html_url: "",
  id: -1,
  is_verified: false,
  issues_url: "",
  location: "",
  login: "",
  members_url: "",
  name: "",
  node_id: "",
  public_gists: 0,
  public_members_url:
    "",
  public_repos: 0,
  repos_url: "",
  twitter_username: "",
  type: "",
  updated_at: "",
  url: "",
}

const fakeMicrosoft: Organization = {
  avatar_url: "https://avatars.githubusercontent.com/u/7702396?v=4",
  blog: "http://www.lemoncode.net",
  company: "null",
  created_at: "2014-05-26T12:44:59Z",
  description: "Front end developers and trainers",
  email: "braulio.diez@lemoncode.net",
  events_url: "https://api.github.com/orgs/Lemoncode/events",
  followers: 87,
  following: 0,
  has_organization_projects: true,
  has_repository_projects: true,
  hooks_url: "https://api.github.com/orgs/Lemoncode/hooks",
  html_url: "https://github.com/Lemoncode",
  id: 7702396,
  is_verified: false,
  issues_url: "https://api.github.com/orgs/Lemoncode/issues",
  location: "Malaga",
  login: "microsoft",
  members_url: "https://api.github.com/orgs/Lemoncode/members{/member}",
  name: "Lemoncode",
  node_id: "MDEyOk9yZ2FuaXphdGlvbjc3MDIzOTY=",
  public_gists: 0,
  public_members_url:
    "https://api.github.com/orgs/Lemoncode/public_members{/member}",
  public_repos: 262,
  repos_url: "https://api.github.com/orgs/Lemoncode/repos",
  twitter_username: "null",
  type: "Organization",
  updated_at: "2018-09-11T09:58:05Z",
  url: "https://api.github.com/orgs/Lemoncode",
};

const fakeLemoncode: Organization = {
  avatar_url: "https://avatars.githubusercontent.com/u/7702396?v=4",
  blog: "http://www.lemoncode.net",
  company: "null",
  created_at: "2014-05-26T12:44:59Z",
  description: "Front end developers and trainers",
  email: "braulio.diez@lemoncode.net",
  events_url: "https://api.github.com/orgs/Lemoncode/events",
  followers: 87,
  following: 0,
  has_organization_projects: true,
  has_repository_projects: true,
  hooks_url: "https://api.github.com/orgs/Lemoncode/hooks",
  html_url: "https://github.com/Lemoncode",
  id: 7702396,
  is_verified: false,
  issues_url: "https://api.github.com/orgs/Lemoncode/issues",
  location: "Malaga",
  login: "Lemoncode",
  members_url: "https://api.github.com/orgs/Lemoncode/members{/member}",
  name: "Lemoncode",
  node_id: "MDEyOk9yZ2FuaXphdGlvbjc3MDIzOTY=",
  public_gists: 0,
  public_members_url:
    "https://api.github.com/orgs/Lemoncode/public_members{/member}",
  public_repos: 262,
  repos_url: "https://api.github.com/orgs/Lemoncode/repos",
  twitter_username: "null",
  type: "Organization",
  updated_at: "2018-09-11T09:58:05Z",
  url: "https://api.github.com/orgs/Lemoncode",
};
