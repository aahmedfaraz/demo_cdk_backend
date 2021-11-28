import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';

export class DemoCdkBackendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Created a DynamoDB Table
    const myDynamoDbProductTable = new dynamodb.Table(this, 'myDynamoDBTable', {
      tableName: 'My_DynamoDB_TABLE_FOR_CICD',
      partitionKey: {
        name: 'id',
        type: dynamodb.AttributeType.STRING
      }
    })
    const myDynamoDbProductTable2 = new dynamodb.Table(this, 'myDynamoDBTable', {
      tableName: 'My_DynamoDB_TABLE_FOR_CICD_2',
      partitionKey: {
        name: 'id',
        type: dynamodb.AttributeType.STRING
      }
    })
  }
}
