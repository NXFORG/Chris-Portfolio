const getGithubUserData = async (username) => {
    try {
        let resp = await fetch(`https://api.github.com/users/${username}`);
        let data = await resp.json();
        console.log(data)
        document.getElementById('githubAvatar').src = data.avatar_url;
        document.getElementById('githubUsername').textContent = data.login;
        document.getElementById('githubRepositories').textContent = data.public_repos;
        document.getElementById('githubMemberYear').textContent = data.created_at.substring(0,4);
    } catch (err){
        console.error(`${err}`);
    }
}
getGithubUserData('nxforg');