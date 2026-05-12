import * as cdk from 'aws-cdk-lib'
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import * as iam from 'aws-cdk-lib/aws-iam'
import { Construct } from 'constructs'

export class ViewCounterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // Single table for both counter rows and dedup rows
    const table = new dynamodb.Table(this, 'ViewsTable', {
      tableName: 'portfolio-views',
      partitionKey: { name: 'pk', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      timeToLiveAttribute: 'ttl',
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    })

    // IAM user scoped to this table — use for Vercel / local dev credentials
    const deployUser = new iam.User(this, 'ViewsDeployUser', {
      userName: 'portfolio-views-deploy',
    })

    table.grantReadWriteData(deployUser)

    // Also grant Scan (not included in grantReadWriteData)
    deployUser.addToPolicy(
      new iam.PolicyStatement({
        actions: ['dynamodb:Scan'],
        resources: [table.tableArn],
      })
    )

    new cdk.CfnOutput(this, 'TableName', {
      value: table.tableName,
      description: 'DynamoDB table name for blog view counts',
      exportName: 'PortolioViewsTableName',
    })

    new cdk.CfnOutput(this, 'TableArn', {
      value: table.tableArn,
      description: 'DynamoDB table ARN',
      exportName: 'PortolioViewsTableArn',
    })

    new cdk.CfnOutput(this, 'DeployUserName', {
      value: deployUser.userName,
      description: 'IAM user for Vercel / local dev — generate access keys with: aws iam create-access-key --user-name portfolio-views-deploy',
    })
  }
}
