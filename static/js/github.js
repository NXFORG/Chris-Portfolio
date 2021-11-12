const callAPI = async (route, value) => {
    try {
        let resp = await fetch(`https://api.github.com/${route}/${value}`);
        let data = [];
        data = await resp.json();
        return data;
    } catch (err){
        console.error(`${err}`);
    }
}

const getGithubUserData = async (username) => {
    try {
        let data = await callAPI('users', username);
        if(data){
            document.getElementById('githubUsername').textContent = data.login;
            document.getElementById('githubRepositories').textContent = data.public_repos;
            document.getElementById('githubMemberYear').textContent = data.created_at.substring(0,4);
        } else {
            console.log('No data found');
        }
    } catch(err) {
        console.log(`Error: ${err}`);
    }
}
getGithubUserData('nxforg');

const getGithubLanguages = async (username) => {
    try {
        let repos = await callAPI('users', `${username}/repos`);
        if(repos){
            let totalFound = 1;
            let found = 0;
            let find;
            for (let i = 0; i < repos.length; i++){
                for (let j = i; j < repos.length; j++){
                    repos[i].language === repos[j].language && found++;
                    if (totalFound < found){
                        totalFound = found; 
                        find = repos[i].language;
                    }
                }
                found = 0;
            }
            document.getElementById('languageCount').textContent = `My most used language is currently ${find}. It was the main language used in ${totalFound} of my repositories.`;
        } else {
            console.log('No data found');
        }
    } catch(err) {
        console.log(`Error: ${err}`);
    }
}

getGithubLanguages('nxforg');