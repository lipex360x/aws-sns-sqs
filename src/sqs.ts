import { sqs } from './config'

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
