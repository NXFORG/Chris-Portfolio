//Call the porfolio API with a provided route and argument
const callAPI = async (route, value) => {
    try {
        let resp = await fetch(`${API_URL}/${route}/${value}`);
        let data = {}
        data = await resp.json();
        if(data){
            return data;
        } else {
            console.log('No data found')
        }
    } catch (err){
        console.error(`Error: ${err}`);
    }
}

//Get values from API
const getGithubUserData = async (username) => await callAPI('github', username);

const getWelcomeText = async () => await callAPI('welcome', '');

const getFact = async (index) => await callAPI('facts', index + 1);