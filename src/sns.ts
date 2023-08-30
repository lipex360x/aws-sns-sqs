import 'dotenv/config'
import { PublishCommand } from '@aws-sdk/client-sns'

import { sns } from './config'
import supplier from './supplier'

const config = {
  Protocol: 'sqs',
  TopicArn: process.env.SNS_TOPIC_ARN,
}

async function startup() {
  await sns.createTopic({ Name: 'SNS_ENTITIES_ARN' })

  await sns.subscribe({
    ...config,
    Attributes: {
      FilterPolicy: JSON.stringify({ recipients: ['docusign'] }),
      FilterPolicyScope: 'MessageAttributes',
      RawMessageDelivery: 'true',
    },
    Endpoint: 'arn:aws:sqs:us-east-1:000000000000:SQS_DOCUSIGN_ENTITIES',
  })

  const message = {
    Message: JSON.stringify({
      entityType: 'supplier',
      action: 'approved',
      payload: supplier,
    }),

    MessageAttributes: {
      recipients: {
        DataType: 'String.Array',
        StringValue: JSON.stringify(['docusign']),
      },
      entityType: { DataType: 'String', StringValue: 'supplier' },
      action: { DataType: 'String', StringValue: 'approved' },
    },

    TopicArn: process.env.SNS_TOPIC_ARN,
  }

  const command1 = new PublishCommand(message)
  await sns.send(command1)

  console.log({ command1 })
}

startup()
