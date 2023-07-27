import 'dotenv/config'

import { SNS } from '@aws-sdk/client-sns'
import { SQS } from '@aws-sdk/client-sqs'

const config = {
  region: process.env.AWS_REGION,
  endpoint: process.env.AWS_ENDPOINT,
}

export const sns = new SNS(config)

export const sqs = new SQS(config)
