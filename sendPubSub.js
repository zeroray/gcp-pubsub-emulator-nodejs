const { PubSub } = require('@google-cloud/pubsub');

const projectID = "localproject"
const topicName = 'projects/localproject/topics/mytopic'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

async function callFunction() {
    const message = JSON.stringify({
        "id" : getRandomInt(0, 1000)
    })

    console.log(`Mensaje enviado : ${message}`)

    const pubsub = new PubSub({
        projectId: projectID
    });

    const dataBuffer = Buffer.from(message, 'utf-8');
    
    console.log("call sendTopic")

    const messageId = await pubsub.topic(topicName)
                                  .publish(dataBuffer)
                                  .catch(err => {
                                    console.log("error pubsub : " + err)
                                });
    
    if (messageId) {
        console.log(`Message ${messageId} published.`)
    } else {
        console.log("ERROR publishing in Topic --> no hay retorno de mensaje")
    }
}

callFunction()