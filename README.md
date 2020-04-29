# Documentation Original
https://cloud.google.com/pubsub/docs/emulator?hl=es-419#pubsub-emulator-csharp

# Example Values

> {PUBSUB_EMULATOR_HOST} = localhost:8085

> {PUBSUB_PROJECT_ID} = localproject

> {TOPIC_ID} = mytopic

> {SUBSCRIPTION_ID} = mysubscription

# Install
`npm install`

# Start emulator


    gcloud beta emulators pubsub start --project={PUBSUB_PROJECT_ID}

# Manual Config Environment Variable


    export PUBSUB_EMULATOR_HOST={PUBSUB_EMULATOR_HOST}
    export PUBSUB_PROJECT_ID={PUBSUB_PROJECT_ID}

# Clone this repo

    git clone https://github.com/GoogleCloudPlatform/python-docs-samples.git
    
    cd python-docs-samples/pubsub/cloud-client
    
    pip3 install virtualenv
    
    virtualenv env --python=python3
    
    source env/bin/activate
    
    pip install -r requirements.txt

# Create Topic
`python publisher.py {PUBSUB_PROJECT_ID} create {TOPIC_ID}`

# From NodeJS send message
If is a new terminal or console, so you need export PUBSUB_EMULATOR_HOST and PUBSUB_PROJECT_ID Environment Variables

`node sendPubSub.js`

You should see quantity message published

# Create Subscription 
`python subscriber.py {PUBSUB_PROJECT_ID} create {TOPIC_ID} {SUBSCRIPTION_ID}`

# From NodeJS listener/receive message
`node listenerPubSub.js`
