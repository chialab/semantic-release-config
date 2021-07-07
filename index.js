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
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/npm',
        [
            '@semantic-release/git',
            {
                message: 'release: ${nextRelease.version}',
            },
        ],
        '@semantic-release/github',
    ],
};