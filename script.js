const username = "jacobs-development8";
const url = `https://api.github.com/users/${username}/repos`;

const repoList = document.querySelector("#repo-list");

function createPagesUrl(repoName){
	return `https://${username}.github.io/${repoName}`;
}

function renderPageUrl(repoName, url){
	let  listItem = document.createElement("li");
	let projectLink = document.createElement("a");

	projectLink.setAttribute("href", url);
	projectLink.setAttribute("target", "_blank");
	projectLink.innerText = repoName;
	projectLink.classList.add("btn");

	listItem.appendChild(projectLink);
	repoList.appendChild(listItem);
}


async function getAllReposForUsers(){
	try {
		const response = await axios.get(url);

		response.data.forEach(item => {
			if(item.has_pages){
				let name  =item.name;

				let url = createPagesUrl(name);

				renderPageUrl(name, url);
			}
		}) 
	} catch (error) {
		console.log(error);
	}
}

document.addEventListener("DOMContentLoaded", () => {
    getAllReposForUsers();
});
