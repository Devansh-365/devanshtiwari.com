import { DynamoDBClient } from '@aws-sdk/client-dynamodb'

// Credentials are resolved via the standard AWS provider chain:
// 1. AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY env vars (Vercel/CI)
// 2. IAM role attached to the execution environment
// Never hard-wire credentials — missing env vars would crash at module load.
export const dynamo = new DynamoDBClient({
  region: process.env.AWS_REGION ?? 'ap-south-1',
})
