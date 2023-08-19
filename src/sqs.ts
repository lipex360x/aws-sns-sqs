import { sqs } from './config'

async function startup() {
  await sqs.createQueue({
    QueueName: 'SQS_DOCUSIGN_ENTITIES',
    Attributes: {
      VisibilityTimeout: '5',
    },
  })

  console.log('queues created')
}
startup()
