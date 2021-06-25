# @chialab/semantic-release-config

A [**semantic-release**](https://github.com/semantic-release/semantic-release) shareable config for Chialab projects.

## Plugins

This shareable configuration use the following plugins:

- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/npm`](https://npm.com/semantic-release/npm)
- [`@semantic-release/github`](https://github.com/semantic-release/github)
- [`@semantic-release/git`](https://github.com/semantic-release/git)

## Install

```bash
$ npm i -D semantic-release @chialab/semantic-release-config
```

## Usage

The shareable config can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "extends": "@chialab/semantic-release-config"
}
```

## Configuration

See each [plugin](#plugins) documentation for required installation and configuration steps.
