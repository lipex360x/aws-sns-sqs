import { SNS, PublishCommand } from '@aws-sdk/client-sns'

export const sns = new SNS({
  region: 'us-east-1',
  endpoint: 'http://127.0.0.1:4566',
})

async function startup() {
  await sns.createTopic({ Name: 'my-sns' })

  await sns.subscribe({
    Protocol: 'sqs',
    TopicArn: 'arn:aws:sns:us-east-1:000000000000:my-sns',
    Endpoint: 'arn:aws:sqs:us-east-1:000000000000:queue-sns-1',
  })

  await sns.subscribe({
    Protocol: 'sqs',
    TopicArn: 'arn:aws:sns:us-east-1:000000000000:my-sns',
    Endpoint: 'arn:aws:sqs:us-east-1:000000000000:queue-sns-2',
  })

  const params = {
    TopicArn: 'arn:aws:sns:us-east-1:000000000000:my-sns',
    Message: 'Teste SQS via SNS',
  }

  const command = new PublishCommand(params)
  const response = await sns.send(command)

  console.log({ response })
}
startup()
