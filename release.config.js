const { buildQueries } = require("@testing-library/react");

module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/tjmukurumbira/react-app.git",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "buildQueries.zip", label: "Build" },
          { path: "coverage.zip", label: "Coverage" },
        ],
      },
    ],
  ],
};
