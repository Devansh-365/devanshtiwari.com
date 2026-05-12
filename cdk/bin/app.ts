#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { ViewCounterStack } from '../lib/view-counter-stack'

const app = new cdk.App()
new ViewCounterStack(app, 'PortolioViewCounter', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION ?? 'ap-south-1',
  },
})
