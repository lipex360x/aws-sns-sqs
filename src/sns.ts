import 'dotenv/config'
import { SNS, PublishCommand } from '@aws-sdk/client-sns'

export const sns = new SNS({
  region: 'us-east-1',
  endpoint: 'http://127.0.0.1:4566',
})

async function startup() {
  await sns.createTopic({ Name: 'my-sns' })

  await sns.subscribe({
    Protocol: 'sqs',
    TopicArn: process.env.SNS_TOPIC_ARN,
    Endpoint: 'arn:aws:sqs:us-east-1:000000000000:queue-sns-1',
  })

  await sns.subscribe({
    Protocol: 'sqs',
    TopicArn: process.env.SNS_TOPIC_ARN,
    Endpoint: 'arn:aws:sqs:us-east-1:000000000000:queue-sns-2',
  })

  const command = new PublishCommand({
    Message: 'Teste SQS via SNS',
    MessageAttributes: {
      recipients: {
        DataType: 'String.Array',
        StringValue: JSON.stringify(['queue1', 'queue2']),
      },
      entityType: { DataType: 'String', StringValue: 'supplier' },
      action: { DataType: 'String', StringValue: 'approved' },
    },
    TopicArn: process.env.SNS_TOPIC_ARN,
  })

  const response = await sns.send(command)

  console.log({ response })
}
startup()
