# Identifying and Closing Pull Requests with Malicious URLs

This workflow uses  GitHub actions created by Pangea to analyze any URLs in the diff for a PR and if any are detected to be malicious, close the PR.  

To use this action, a Pangea account is required.  To get a Pangea account you can [sign up for free](https://pangea.cloud/signup).

## How it works

Pangea is a collection of security services, all API-based, that can quickly and easily be added to any cloud application, embedded in the runtime code. 
Pangea provides app builders with a wide selection of security services to enable easily embedding security into their applications. 
Similar in nature to AWS for Compute APIs, Twilio for Communications APIs, or Stripe for Billing APIs, now there is Pangea for Security APIs.

In this example we are using the Pangea url-intel/reputation service and the pangea audit/log service to analyze URLs, determine if they are malicious, and store the results.  
Once this workflow is added to your GitHub repo, any pull requests that are newly opened will automatically have new URLs analyzed, improving the security of your repo.

# Configuing your repo and workflow
To use this workflow, follow the steps below:

## Set up Pangea
1. Create a new account (or login to your existing account) on [Pangea.cloud](https://pangea.cloud/signup)
   1.  If it is a new account, [Create a new Pangea Organization and Project](https://pangea.cloud/docs/getting-started/create-account/#create-your-first-organization-and-project)
2. Configure Pangea services for both ["Secure Audit Log"](https://pangea.cloud/docs/getting-started/configure-services/audit/) and ["URL Intel"](https://pangea.cloud/docs/getting-started/configure-services/url-intel/) 
   1. When you create your token in the guide, make sure it has access to both services by using the "Extend an existing token" option
3. Save your Pangea domain and token

## Set up GitHub
1. Create a .github/workflows directory in your repo and copy the "pr_url_reputation.yml" file to the new directory
2. Take your previously saved Pangea token and Pangea domain and add them as secrets in your github repo by navigating to the [/settings/secrets/actions page and ading each one as a "New repository secret"](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
   1. The Pangea domain must be named "PANGEA_DOMAIN"
   2. The Pangea token must be named "PANGEA_TOKEN"

## Review Results
Once these steps are completed, any new pull request should trigger a new workflow run on your GitHub repo.   
To view the progress or results of any action, visit the /actions page in your repo.  Check the [GitHub documentation on actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) to learn more.

## License

[MIT](LICENSE)