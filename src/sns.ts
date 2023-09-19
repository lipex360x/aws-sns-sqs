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
      FilterPolicy: JSON.stringify({ recipients: ['supplier'] }),
      FilterPolicyScope: 'MessageAttributes',
      RawMessageDelivery: 'true',
    },
    Endpoint: 'arn:aws:sqs:us-east-1:000000000000:SQS_1',
  })

  await sns.subscribe({
    ...config,
    Attributes: {
      FilterPolicy: JSON.stringify({ recipients: ['supplier'] }),
      FilterPolicyScope: 'MessageAttributes',
      RawMessageDelivery: 'true',
    },
    Endpoint: 'arn:aws:sqs:us-east-1:000000000000:SQS_2',
  })

  await sns.subscribe({
    ...config,
    Attributes: {
      FilterPolicy: JSON.stringify({ recipients: ['supplier'] }),
      FilterPolicyScope: 'MessageAttributes',
      RawMessageDelivery: 'true',
    },
    Endpoint: 'arn:aws:sqs:us-east-1:000000000000:SQS_3',
  })

  await sns.subscribe({
    ...config,
    Attributes: {
      FilterPolicy: JSON.stringify({ recipients: ['supplier'] }),
      FilterPolicyScope: 'MessageAttributes',
      RawMessageDelivery: 'true',
    },
    Endpoint: 'arn:aws:sqs:us-east-1:000000000000:SQS_4',
  })

  await sns.subscribe({
    ...config,
    Attributes: {
      FilterPolicy: JSON.stringify({ recipients: ['invoices'] }),
      FilterPolicyScope: 'MessageAttributes',
      RawMessageDelivery: 'true',
    },
    Endpoint: 'arn:aws:sqs:us-east-1:000000000000:SQS_5',
  })

  await sns.subscribe({
    ...config,
    Attributes: {
      FilterPolicy: JSON.stringify({ recipients: ['invoices'] }),
      FilterPolicyScope: 'MessageAttributes',
      RawMessageDelivery: 'true',
    },
    Endpoint: 'arn:aws:sqs:us-east-1:000000000000:SQS_6',
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
        StringValue: JSON.stringify(['supplier']),
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
