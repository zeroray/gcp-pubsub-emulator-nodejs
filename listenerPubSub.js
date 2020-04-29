const { PubSub } = require('@google-cloud/pubsub');

const subscriptionName = 'projects/localproject/subscriptions/mysubscription'

const pubsub = new PubSub();
const receiver = pubsub.subscription(subscriptionName);

const messageHandler = async(message) => {
    try {
        let messageJson = JSON.parse(message.data)
        console.log(`Complete JSON message to send: ${messageJson}`)
        console.log(messageJson)
    } catch (err) {
        console.error(`Error Processing Message : ${err}, message: ${message.data}`)
    }finally{
        message.ack();
    }
}


receiver.on('message', messageHandler)

