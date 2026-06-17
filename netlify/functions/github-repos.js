// netlify/functions/github-repos.js

exports.handler = async (event, context) => {
    try {
        // Dynamically import node-fetch within the async function
        // This makes 'fetch' directly available as the default export
        const { default: fetch } = await import('node-fetch');

        // Retrieve GitHub PAT from Netlify environment variables
        const GITHUB_TOKEN = process.env.GITHUB_PERSONAL_ACCESS_TOKEN; 

        if (!GITHUB_TOKEN) {
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'GitHub token not configured.' })
            };
        }

        const page = event.queryStringParameters.page || 1;
        const per_page = event.queryStringParameters.per_page || 100;

        const githubApiUrl = `https://api.github.com/users/sOuL2000s/repos?sort=updated&per_page=${per_page}&page=${page}`;

        // Make the authenticated request to GitHub API
        const response = await fetch(githubApiUrl, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            return {
                statusCode: response.status,
                body: JSON.stringify({ message: `GitHub API error from proxy: ${response.statusText}`, details: errorData })
            };
        }

        const repos = await response.json();

        const origin = event.headers.origin || '*';
        const allowedOrigins = ['https://souparna-paul-portfolio.netlify.app', 'http://localhost:8888'];

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : 'https://souparna-paul-portfolio.netlify.app', 
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
            body: JSON.stringify(repos)
        };
    } catch (error) {
        console.error('Netlify Function error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error', details: error.message })
        };
    }
};