import { f000CheckTmp } from "./flows/000-check-tmp.mjs";
import { f001FetchData } from "./flows/001-fetch-data.mjs";
import { f002UpdateProjectReadme } from "./flows/002-update-project-readme.mjs";
import { run } from "./libs/flow.mjs";

const user = "amoshydra";

// Create a grid of items:
const topics = [
  { topic: "amoshydra-profile-category-npm",
    heading: "NPM",
    overview: "A list of NPM packages I publish",
  },
  { topic: "amoshydra-profile-category-web-app",
    heading: "Web App",
    overview: "Web Application that you can launch in your browser",
  },
  { topic: "amoshydra-profile-category-app",
    heading: "App",
    overview: "Desktop made with electron",
  },
  { topic: "amoshydra-profile-category-tool",
    heading: "Tool",
    overview: "",
  },
  { topic: "amoshydra-profile-category-reference",
    heading: "References",
    overview: "",
  },
  { topic: "amoshydra-profile-category-archived",
    heading: "Archived",
    overview: "A list of projects I used to worked on. They includes school projects or projects related to hardware that I no longer use",
  },
  { topic: "amoshydra-profile-category-tasker",
    heading: "Tasker",
    overview: "",
  },
];

await run([f000CheckTmp, undefined]);
const topicRepositories = await run([f001FetchData, { user, topics }]);
await run([f002UpdateProjectReadme, { topicRepositories, topics }]);
