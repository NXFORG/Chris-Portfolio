const getGithubUserData = async (username) => {
    try {
        let resp = await fetch(`https://api.github.com/users/${username}`);
        let data = await resp.json();
        console.log(data)
        if(data){
            document.getElementById('githubAvatar').src = data.avatar_url;
            document.getElementById('githubUsername').textContent = data.login;
            document.getElementById('githubRepositories').textContent = data.public_repos;
            document.getElementById('githubMemberYear').textContent = data.created_at.substring(0,4);
        }else {
            console.log('no data found');
        }
    } catch (err){
        console.error(`${err}`);
    }
}
getGithubUserData('nxforg');