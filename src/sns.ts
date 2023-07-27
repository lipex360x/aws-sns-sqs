import 'dotenv/config'
import { PublishCommand } from '@aws-sdk/client-sns'

import { sns } from './config'

const config = {
  Protocol: 'sqs',
  TopicArn: process.env.SNS_TOPIC_ARN,
}

async function startup() {
  await sns.createTopic({ Name: 'my-sns' })

  await sns.subscribe({
    ...config,
    Attributes: {
      FilterPolicy: JSON.stringify({ recipients: ['operations'] }),
    },
    Endpoint: 'arn:aws:sqs:us-east-1:000000000000:queue-sns-1',
  })

  await sns.subscribe({
    ...config,
    Attributes: {
      FilterPolicy: JSON.stringify({ recipients: ['teste'] }),
    },
    Endpoint: 'arn:aws:sqs:us-east-1:000000000000:queue-sns-2',
  })

  const message1 = {
    Message: 'Teste SQS via SNS',

    MessageAttributes: {
      recipients: {
        DataType: 'String.Array',
        StringValue: JSON.stringify(['operations']),
      },
      entityType: { DataType: 'String', StringValue: 'supplier' },
      action: { DataType: 'String', StringValue: 'approved' },
    },

    TopicArn: process.env.SNS_TOPIC_ARN,
  }
  // const message2 = {
  //   ...message1,
  //   recipients: {
  //     DataType: 'String.Array',
  //     StringValue: JSON.stringify(['teste']),
  //   },
  // }

  const command1 = new PublishCommand(message1)
  await sns.send(command1)

  // const command2 = new PublishCommand(message2)
  // await sns.send(command2)

  console.log({ command1 })
}
startup()
