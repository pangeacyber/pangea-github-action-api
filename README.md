# Call Pangea API

Use this action to call a Pangea API.
To use this action, a Pangea account is required.

To get a Pangea account [Sign up for free](https://pangea.cloud/signup)

## How it works

Pangea is a collection of security services, all API-based, that can quickly and easily be added to any cloud application, embedded in the runtime code. 
Pangea provides app builders with a wide selection of security services to enable easily embedding security into their applications. 
Similar in nature to AWS for Compute APIs, Twilio for Communications APIs, or Stripe for Billing APIs, now there is Pangea for Security APIs.

## Set up Pangea

To configure Pangea:

1. Configure Pangea services as needed following [the configuration guide](https://pangea.cloud/docs/getting-started/configure-services/).
2. When you create your token in the guide, make sure it has access to your service
3. Save your Pangea token and Pangea domain as secrets in your github repo /settings/secrets/actions

## Inputs

There are three required input parameters:
1. The Pangea api endpoint to call
2. The API payload for that endpoint
3. The Pangea token that has access to the service
4. The Pangea domain for your service

```yml
with:
  endpoint: "audit"
  payload: {message: "Test"}
  token: ${{secrets.PANGEA_TOKEN}}
  domain: ${{secrets.PANGEA_DOMAIN}}
```

## Usage

Minimal example

```yml
name: "Log Pull Request"
on:
  pull_request:
    types: [opened]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: pangeacyber/pangea-github-action-audit@1.0.1
      with:
        text: "New pull request was opened for ${{github.repository}}"
        token: ${{secrets.PANGEA_TOKEN}}
        domain: ${{secrets.PANGEA_DOMAIN}}
```

## License

[MIT](LICENSE)