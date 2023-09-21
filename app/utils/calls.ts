import axios from "axios";

export const fetchProjects = async () => {
    const query = {
        "operationName": "AllProjects",
        "query": `query AllProjects { 
            projects {
                blurb
                heading
                src
                deployed
                github
            }
        }`,
        "variables": {}
    };
    const response = await axios({
        url: `http://localhost:4000/`, 
        method: 'post',
        headers: { "content-type": "application/json"},
        data: query
    })
    return response.data;
};