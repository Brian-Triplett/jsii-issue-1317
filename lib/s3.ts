import s3 = require('@aws-cdk/aws-s3');
import cdk = require('@aws-cdk/core');

export class Bucket extends s3.Bucket {
  /**
   *
   * @param stack The stack in which the bucket should be created.
   * @param name The bucket name
   * @param props Bucket properties.  If not provided, default properties will be used.
   * default properties include:
   */
  constructor(stack: cdk.Construct, name: string, props?: s3.BucketProps) {
    if (props) {
      super(stack, name, props);
    } else {
      super(stack, name, {
        bucketName: name,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      });
    }
  }
}
