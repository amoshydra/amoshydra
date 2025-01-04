export interface CollectionResponse<T> {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
}

export interface Repository {
  /**
   * @example 122550114
   */
  id: number;
  /**
   * @example 'MDEwOlJlcG9zaXRvcnkxMjI1NTAxMTQ='
   */
  node_id: string;
  /**
   * @example 'tasker-js-runner'
   */
  name: string;
  /**
   * @example 'amoshydra/tasker-js-runner'
   */
  full_name: string;
  /**
   * @example false
   */
  private: boolean;
  /**
   * @example
   */
  owner: User;
  /**
   * @example 'https://github.com/amoshydra/tasker-js-runner'
   */
  html_url: string;
  /**
   * @example null
   */
  description: string | null
  /**
   * @example false
   */
  fork: boolean;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner'
   */
  url: string | null;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/forks'
   */
  forks_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/keys{/key_id}'
   */
  keys_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/collaborators{/collaborator}'
   */
  collaborators_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/teams'
   */
  teams_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/hooks'
   */
  hooks_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/issues/events{/number}'
   */
  issue_events_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/events'
   */
  events_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/assignees{/user}'
   */
  assignees_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/branches{/branch}'
   */
  branches_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/tags'
   */
  tags_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/git/blobs{/sha}'
   */
  blobs_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/git/tags{/sha}'
   */
  git_tags_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/git/refs{/sha}'
   */
  git_refs_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/git/trees{/sha}'
   */
  trees_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/statuses/{sha}'
   */
  statuses_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/languages'
   */
  languages_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/stargazers'
   */
  stargazers_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/contributors'
   */
  contributors_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/subscribers'
   */
  subscribers_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/subscription'
   */
  subscription_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/commits{/sha}'
   */
  commits_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/git/commits{/sha}'
   */
  git_commits_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/comments{/number}'
   */
  comments_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/issues/comments{/number}'
   */
  issue_comment_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/contents/{+path}'
   */
  contents_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/compare/{base}...{head}'
   */
  compare_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/merges'
   */
  merges_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/{archive_format}{/ref}'
   */
  archive_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/downloads'
   */
  downloads_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/issues{/number}'
   */
  issues_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/pulls{/number}'
   */
  pulls_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/milestones{/number}'
   */
  milestones_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/notifications{?since,all,participating}'
   */
  notifications_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/labels{/name}'
   */
  labels_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/releases{/id}'
   */
  releases_url: string;
  /**
   * @example 'https://api.github.com/repos/amoshydra/tasker-js-runner/deployments'
   */
  deployments_url: string;
  /**
   * @example '2018-02-22T23:56:32Z'
   */
  created_at: string;
  /**
   * @example '2024-11-13T05:40:24Z'
   */
  updated_at: string;
  /**
   * @example '2023-01-03T22:41:19Z'
   */
  pushed_at: string;
  /**
   * @example 'git://github.com/amoshydra/tasker-js-runner.git'
   */
  git_url: string;
  /**
   * @example 'git@github.com:amoshydra/tasker-js-runner.git'
   */
  ssh_url: string;
  /**
   * @example 'https://github.com/amoshydra/tasker-js-runner.git'
   */
  clone_url: string;
  /**
   * @example 'https://github.com/amoshydra/tasker-js-runner'
   */
  svn_url: string;
  /**
   * @example null
   */
  homepage: string | null
  /**
   * @example 2173
   */
  size: number
  /**
   * @example 14
   */
  stargazers_count: number
  /**
   * @example 14
   */
  watchers_count: number
  /**
   * @example 'JavaScript'
   */
  language: string;
  /**
   * @example true
   */
  has_issues: boolean
  /**
   * @example true
   */
  has_projects: boolean
  /**
   * @example true
   */
  has_downloads: boolean
  /**
   * @example true
   */
  has_wiki: boolean
  /**
   * @example false
   */
  has_pages: boolean;
  /**
   * @example false
   */
  has_discussions: boolean;
  /**
   * @example 3
   */
  forks_count: number
  /**
   * @example null
   */
  mirror_url: string | null
  /**
   * @example false
   */
  archived: boolean;
  /**
   * @example false
   */
  disabled: boolean;
  /**
   * @example 19
   */
  open_issues_count: number
  /**
   * @example
   */
  license: License | null
  /**
   * @example true
   */
  allow_forking: boolean
  /**
   * @example false
   */
  is_template: boolean;
  /**
   * @example false
   */
  web_commit_signoff_required: boolean;
  /**
   * @example ["pet-project"]
   */
  topics: string[]
  /**
   * @example 'public'
   */
  visibility: string;
  /**
   * @example 3
   */
  forks: number
  /**
   * @example 19
   */
  open_issues: number
  /**
   * @example 14
   */
  watchers: number
  /**
   * @example 'master'
   */
  default_branch: string;
  /**
   * @example 1
   */
  score: number
}


interface User {
  /**
   * @example "amoshydra"
   */
  login: string;
  /**
   * @example 8733840
   */
  id: number;
  /**
   * @example "MDQ6VXNlcjg3MzM4NDA="
   */
  node_id: string;
  /**
   * @example "https://avatars.githubusercontent.com/u/8733840?v=4"
   */
  avatar_url: string;
  /**
   * @example ""
   */
  gravatar_id: string;
  /**
   * @example "https://api.github.com/users/amoshydra"
   */
  url: string | null;
  /**
   * @example "https://github.com/amoshydra"
   */
  html_url: string;
  /**
   * @example "https://api.github.com/users/amoshydra/followers"
   */
  followers_url: string;
  /**
   * @example "https://api.github.com/users/amoshydra/following{/other_user}"
   */
  following_url: string;
  /**
   * @example "https://api.github.com/users/amoshydra/gists{/gist_id}"
   */
  gists_url: string;
  /**
   * @example "https://api.github.com/users/amoshydra/starred{/owner}{/repo}"
   */
  starred_url: string;
  /**
   * @example "https://api.github.com/users/amoshydra/subscriptions"
   */
  subscriptions_url: string;
  /**
   * @example "https://api.github.com/users/amoshydra/orgs"
   */
  organizations_url: string;
  /**
   * @example "https://api.github.com/users/amoshydra/repos"
   */
  repos_url: string;
  /**
   * @example "https://api.github.com/users/amoshydra/events{/privacy}"
   */
  events_url: string;
  /**
   * @example "https://api.github.com/users/amoshydra/received_events"
   */
  received_events_url: string;
  /**
   * @example "User"
   */
  type: string;
  /**
   * @example "public"
   */
  user_view_type: string;
  /**
   * @example false
   */
  site_admin: boolean;
}

interface License {
  /**
   * @example "mit"
   */
  key: string
  /**
   * @example "MIT License"
   */
  name: string
  /**
   * @example "MIT"
   */
  spdx_id: string
  /**
   * @example "https://api.github.com/licenses/mit"
   */
  url: string
  /**
   * @example "MDc6TGljZW5zZTEz"
   */
  node_id: string
}
