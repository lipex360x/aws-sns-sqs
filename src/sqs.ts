import { sqs } from './config'

async function startup() {
  await sqs.createQueue({
    QueueName: 'SQS_1',
    Attributes: {
      VisibilityTimeout: '5',
    },
  })

  await sqs.createQueue({
    QueueName: 'SQS_2',
    Attributes: {
      VisibilityTimeout: '5',
    },
  })

  await sqs.createQueue({
    QueueName: 'SQS_3',
    Attributes: {
      VisibilityTimeout: '5',
    },
  })

  await sqs.createQueue({
    QueueName: 'SQS_4',
    Attributes: {
      VisibilityTimeout: '5',
    },
  })

  await sqs.createQueue({
    QueueName: 'SQS_5',
    Attributes: {
      VisibilityTimeout: '5',
    },
  })

  await sqs.createQueue({
    QueueName: 'SQS_6',
    Attributes: {
      VisibilityTimeout: '5',
    },
  })

  console.log('queues created')
}
startup()
