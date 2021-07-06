module.exports = {
    branches: [
        'main',
        'master',
    ],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'angular',
                releaseRules: [
                    {
                        type: 'fix',
                        release: 'patch',
                    },
                    {
                        type: 'style',
                        release: 'patch',
                    },
                    {
                        type: 'refactor',
                        release: 'minor',
                    },
                    {
                        type: 'feat',
                        release: 'minor',
                    },
                ],
            },
        ],
        [
            '@semantic-release/git',
            {
                message: 'release: ${nextRelease.version}'
            },
        ],
        '@semantic-release/npm',
        '@semantic-release/github',
    ],
};