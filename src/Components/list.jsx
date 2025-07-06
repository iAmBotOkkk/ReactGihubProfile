
export const GitHubList = (props) => {
  return (
    <div className="profile-card">
      <h4 className="username">{props.name}</h4>
      <p className="repo-count">Public Repos: {props.public_repos}</p>
    </div>
  );
};