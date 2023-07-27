import { SQS } from '@aws-sdk/client-sqs'

export const sqs = new SQS({
  region: 'us-east-1',
  endpoint: 'http://127.0.0.1:4566',
})

async function startup() {
  await sqs.createQueue({
    QueueName: 'queue-sns-1',
  })

  await sqs.createQueue({
    QueueName: 'queue-sns-2',
  })

  console.log('queues created')
}
startup()
