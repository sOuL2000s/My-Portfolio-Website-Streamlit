// netlify/functions/github-repos.js
const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

exports.handler = async (event, context) => {
    try {
        // Dynamically import node-fetch within the async function
        const { default: fetch } = await import('node-fetch');

        // Retrieve GitHub PAT from Netlify environment variables
        const GITHUB_TOKEN = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

        if (!GITHUB_TOKEN) {
            return {
                statusCode: 500,
                body: JSON.stringify({ 
                    message: 'GitHub token not configured.',
                    error: 'CONFIG_ERROR'
                })
            };
        }

        const page = event.queryStringParameters.page || 1;
        const per_page = event.queryStringParameters.per_page || 100;
        const cacheKey = `github_repos_page_${page}_per_${per_page}`;

        // Check cache first
        const cachedData = myCache.get(cacheKey);
        if (cachedData) {
            console.log('Serving cached GitHub data');
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'X-Cache': 'HIT'
                },
                body: JSON.stringify(cachedData)
            };
        }

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
                body: JSON.stringify({ 
                    message: `GitHub API error: ${response.statusText}`,
                    details: errorData,
                    error: 'API_ERROR'
                })
            };
        }

        const repos = await response.json();

        // Store in cache
        myCache.set(cacheKey, repos);

        const origin = event.headers.origin || '*';
        const allowedOrigins = ['https://souparna-paul-portfolio.netlify.app', 'http://localhost:8888'];

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : 'https://souparna-paul-portfolio.netlify.app',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'X-Cache': 'MISS'
            },
            body: JSON.stringify(repos)
        };
    } catch (error) {
        console.error('Netlify Function error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                message: 'Internal server error', 
                details: error.message,
                error: 'SERVER_ERROR'
            })
        };
    }
};