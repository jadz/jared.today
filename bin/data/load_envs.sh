#!/bin/bash
## Run this command as $ source load_envs.sh

export GOOGLE_AUTH_TYPE=`cat keys-local.json | jq -r '.type'`
export GOOGLE_PROJECT_ID=`cat keys-local.json | jq -r '.project_id'`
export GOOGLE_PRIVATE_KEY_ID=`cat keys-local.json | jq -r '.private_key_id'`
export GOOGLE_PRIVATE_KEY=`cat keys-local.json | jq -r '.private_key' | base64`
export GOOGLE_CLIENT_EMAIL=`cat keys-local.json | jq -r '.client_email'`
export GOOGLE_CLIENT_ID=`cat keys-local.json | jq -r '.client_id'`
export GOOGLE_AUTH_URI=`cat keys-local.json | jq -r '.auth_uri'`
export GOOGLE_TOKEN_URI=`cat keys-local.json | jq -r '.token_uri'`
export GOOGLE_AUTH_PROVIDER=`cat keys-local.json | jq -r '.auth_provider_x509_cert_url'`
export GOOGLE_CLIENT_X509=`cat keys-local.json | jq -r '.client_x509_cert_url'`