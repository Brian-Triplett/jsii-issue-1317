from aws_cdk import core

from brian_triplett import jsii_issue_1137 as jsii_test

class CdkAppStack(core.Stack):

    def __init__(self, scope: core.Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        jsii_test.Bucket(self, "Test")


