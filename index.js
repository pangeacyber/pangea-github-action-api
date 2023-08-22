const core = require('@actions/core');
const github = require('@actions/github');
const pangea = require('pangea-node-sdk');

const endpoint = core.getInput('endpoint').split(".");
const payload = core.getInput('payload');
const token = core.getInput('token');
const domain = core.getInput('domain');
const servicename = endpoint[0].charAt(0).toUpperCase() + endpoint[0].slice(1) + "Service";
const endpointname = endpoint[1];

const config = new pangea.PangeaConfig({ domain: domain});
const service =  eval("new pangea."+servicename+"(token, config)");
 const context = github.context;

// most @actions toolkit packages have async methods
async function run() {
  try{
     core.info('Calling Pangea API');
    const logResponse = await eval("service."+endpointname+"(payload, {verbose: true})")
     core.info('Response: '+JSON.stringify(logResponse.result));
     core.setOutput('results', logResponse.result);
  } catch (err) {
    if (err instanceof pangea.PangeaErrors.APIError) {
      core.setFailed(err.summary, err.pangeaResponse);
    } else {
      core.setFailed(err);
    }
  }
}
run();
