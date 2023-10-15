# replace this
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnaConstruct <a name="DnaConstruct" id="@serverless-dna/constructs.DnaConstruct"></a>

#### Initializers <a name="Initializers" id="@serverless-dna/constructs.DnaConstruct.Initializer"></a>

```typescript
import { DnaConstruct } from '@serverless-dna/constructs'

new DnaConstruct(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.DnaConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.DnaConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@serverless-dna/constructs.DnaConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@serverless-dna/constructs.DnaConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverless-dna/constructs.DnaConstruct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@serverless-dna/constructs.DnaConstruct.addOutput">addOutput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@serverless-dna/constructs.DnaConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOutput` <a name="addOutput" id="@serverless-dna/constructs.DnaConstruct.addOutput"></a>

```typescript
public addOutput(key: string, value: string, exportName?: string): CfnOutput
```

###### `key`<sup>Required</sup> <a name="key" id="@serverless-dna/constructs.DnaConstruct.addOutput.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@serverless-dna/constructs.DnaConstruct.addOutput.parameter.value"></a>

- *Type:* string

---

###### `exportName`<sup>Optional</sup> <a name="exportName" id="@serverless-dna/constructs.DnaConstruct.addOutput.parameter.exportName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverless-dna/constructs.DnaConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@serverless-dna/constructs.DnaConstruct.isConstruct"></a>

```typescript
import { DnaConstruct } from '@serverless-dna/constructs'

DnaConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@serverless-dna/constructs.DnaConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.DnaConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@serverless-dna/constructs.DnaConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### SocketApi <a name="SocketApi" id="@serverless-dna/constructs.SocketApi"></a>

#### Initializers <a name="Initializers" id="@serverless-dna/constructs.SocketApi.Initializer"></a>

```typescript
import { SocketApi } from '@serverless-dna/constructs'

new SocketApi(scope: Construct, id: string, config?: SocketApiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketApi.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketApi.Initializer.parameter.config">config</a></code> | <code><a href="#@serverless-dna/constructs.SocketApiConfig">SocketApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@serverless-dna/constructs.SocketApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@serverless-dna/constructs.SocketApi.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Optional</sup> <a name="config" id="@serverless-dna/constructs.SocketApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@serverless-dna/constructs.SocketApiConfig">SocketApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@serverless-dna/constructs.SocketApi.addOutput">addOutput</a></code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketApi.addFunctionRoute">addFunctionRoute</a></code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketApi.arnForExecuteApi">arnForExecuteApi</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@serverless-dna/constructs.SocketApi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOutput` <a name="addOutput" id="@serverless-dna/constructs.SocketApi.addOutput"></a>

```typescript
public addOutput(key: string, value: string, exportName?: string): CfnOutput
```

###### `key`<sup>Required</sup> <a name="key" id="@serverless-dna/constructs.SocketApi.addOutput.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@serverless-dna/constructs.SocketApi.addOutput.parameter.value"></a>

- *Type:* string

---

###### `exportName`<sup>Optional</sup> <a name="exportName" id="@serverless-dna/constructs.SocketApi.addOutput.parameter.exportName"></a>

- *Type:* string

---

##### `addFunctionRoute` <a name="addFunctionRoute" id="@serverless-dna/constructs.SocketApi.addFunctionRoute"></a>

```typescript
public addFunctionRoute(route: string, integrationFunction: Function, returnResponse?: boolean): void
```

###### `route`<sup>Required</sup> <a name="route" id="@serverless-dna/constructs.SocketApi.addFunctionRoute.parameter.route"></a>

- *Type:* string

---

###### `integrationFunction`<sup>Required</sup> <a name="integrationFunction" id="@serverless-dna/constructs.SocketApi.addFunctionRoute.parameter.integrationFunction"></a>

- *Type:* aws-cdk-lib.aws_lambda.Function

optional, will default to locally named default integration function for routes: $connect, $default and $disconnect.

---

###### `returnResponse`<sup>Optional</sup> <a name="returnResponse" id="@serverless-dna/constructs.SocketApi.addFunctionRoute.parameter.returnResponse"></a>

- *Type:* boolean

optional, must be true if a response payload is to be returned by the route.

Defaults to false.

---

##### `arnForExecuteApi` <a name="arnForExecuteApi" id="@serverless-dna/constructs.SocketApi.arnForExecuteApi"></a>

```typescript
public arnForExecuteApi(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@serverless-dna/constructs.SocketApi.isConstruct"></a>

```typescript
import { SocketApi } from '@serverless-dna/constructs'

SocketApi.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@serverless-dna/constructs.SocketApi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@serverless-dna/constructs.SocketApi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### SocketTasks <a name="SocketTasks" id="@serverless-dna/constructs.SocketTasks"></a>

#### Initializers <a name="Initializers" id="@serverless-dna/constructs.SocketTasks.Initializer"></a>

```typescript
import { SocketTasks } from '@serverless-dna/constructs'

new SocketTasks(scope: Construct, id: string, config: SocketTasksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketTasks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketTasks.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketTasks.Initializer.parameter.config">config</a></code> | <code><a href="#@serverless-dna/constructs.SocketTasksConfig">SocketTasksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@serverless-dna/constructs.SocketTasks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@serverless-dna/constructs.SocketTasks.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@serverless-dna/constructs.SocketTasks.Initializer.parameter.config"></a>

- *Type:* <a href="#@serverless-dna/constructs.SocketTasksConfig">SocketTasksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketTasks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@serverless-dna/constructs.SocketTasks.addOutput">addOutput</a></code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketTasks.addFunctionRoute">addFunctionRoute</a></code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketTasks.arnForExecuteApi">arnForExecuteApi</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@serverless-dna/constructs.SocketTasks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOutput` <a name="addOutput" id="@serverless-dna/constructs.SocketTasks.addOutput"></a>

```typescript
public addOutput(key: string, value: string, exportName?: string): CfnOutput
```

###### `key`<sup>Required</sup> <a name="key" id="@serverless-dna/constructs.SocketTasks.addOutput.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@serverless-dna/constructs.SocketTasks.addOutput.parameter.value"></a>

- *Type:* string

---

###### `exportName`<sup>Optional</sup> <a name="exportName" id="@serverless-dna/constructs.SocketTasks.addOutput.parameter.exportName"></a>

- *Type:* string

---

##### `addFunctionRoute` <a name="addFunctionRoute" id="@serverless-dna/constructs.SocketTasks.addFunctionRoute"></a>

```typescript
public addFunctionRoute(route: string, integrationFunction: Function, returnResponse?: boolean): void
```

###### `route`<sup>Required</sup> <a name="route" id="@serverless-dna/constructs.SocketTasks.addFunctionRoute.parameter.route"></a>

- *Type:* string

---

###### `integrationFunction`<sup>Required</sup> <a name="integrationFunction" id="@serverless-dna/constructs.SocketTasks.addFunctionRoute.parameter.integrationFunction"></a>

- *Type:* aws-cdk-lib.aws_lambda.Function

optional, will default to locally named default integration function for routes: $connect, $default and $disconnect.

---

###### `returnResponse`<sup>Optional</sup> <a name="returnResponse" id="@serverless-dna/constructs.SocketTasks.addFunctionRoute.parameter.returnResponse"></a>

- *Type:* boolean

optional, must be true if a response payload is to be returned by the route.

Defaults to false.

---

##### `arnForExecuteApi` <a name="arnForExecuteApi" id="@serverless-dna/constructs.SocketTasks.arnForExecuteApi"></a>

```typescript
public arnForExecuteApi(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketTasks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@serverless-dna/constructs.SocketTasks.isConstruct"></a>

```typescript
import { SocketTasks } from '@serverless-dna/constructs'

SocketTasks.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@serverless-dna/constructs.SocketTasks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketTasks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@serverless-dna/constructs.SocketTasks.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@serverless-dna/constructs.SocketTasks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `eventBus`<sup>Required</sup> <a name="eventBus" id="@serverless-dna/constructs.SocketTasks.property.eventBus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus

---


## Structs <a name="Structs" id="Structs"></a>

### SocketApiConfig <a name="SocketApiConfig" id="@serverless-dna/constructs.SocketApiConfig"></a>

#### Initializer <a name="Initializer" id="@serverless-dna/constructs.SocketApiConfig.Initializer"></a>

```typescript
import { SocketApiConfig } from '@serverless-dna/constructs'

const socketApiConfig: SocketApiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketApiConfig.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketApiConfig.property.routes">routes</a></code> | <code><a href="#@serverless-dna/constructs.SocketFunction">SocketFunction</a>[]</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketApiConfig.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketApiConfig.property.websocketConfig">websocketConfig</a></code> | <code>@aws-cdk/aws-apigatewayv2-alpha.WebSocketApiProps</code> | *No description.* |

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@serverless-dna/constructs.SocketApiConfig.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `routes`<sup>Optional</sup> <a name="routes" id="@serverless-dna/constructs.SocketApiConfig.property.routes"></a>

```typescript
public readonly routes: SocketFunction[];
```

- *Type:* <a href="#@serverless-dna/constructs.SocketFunction">SocketFunction</a>[]

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@serverless-dna/constructs.SocketApiConfig.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `websocketConfig`<sup>Optional</sup> <a name="websocketConfig" id="@serverless-dna/constructs.SocketApiConfig.property.websocketConfig"></a>

```typescript
public readonly websocketConfig: WebSocketApiProps;
```

- *Type:* @aws-cdk/aws-apigatewayv2-alpha.WebSocketApiProps

---

### SocketFunction <a name="SocketFunction" id="@serverless-dna/constructs.SocketFunction"></a>

#### Initializer <a name="Initializer" id="@serverless-dna/constructs.SocketFunction.Initializer"></a>

```typescript
import { SocketFunction } from '@serverless-dna/constructs'

const socketFunction: SocketFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketFunction.property.integration">integration</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketFunction.property.route">route</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketFunction.property.returnResponse">returnResponse</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketFunction.property.type">type</a></code> | <code><a href="#@serverless-dna/constructs.SocketApiIntegrationType">SocketApiIntegrationType</a></code> | *No description.* |

---

##### `integration`<sup>Required</sup> <a name="integration" id="@serverless-dna/constructs.SocketFunction.property.integration"></a>

```typescript
public readonly integration: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---

##### `route`<sup>Required</sup> <a name="route" id="@serverless-dna/constructs.SocketFunction.property.route"></a>

```typescript
public readonly route: string;
```

- *Type:* string

---

##### `returnResponse`<sup>Optional</sup> <a name="returnResponse" id="@serverless-dna/constructs.SocketFunction.property.returnResponse"></a>

```typescript
public readonly returnResponse: boolean;
```

- *Type:* boolean

---

##### `type`<sup>Optional</sup> <a name="type" id="@serverless-dna/constructs.SocketFunction.property.type"></a>

```typescript
public readonly type: SocketApiIntegrationType;
```

- *Type:* <a href="#@serverless-dna/constructs.SocketApiIntegrationType">SocketApiIntegrationType</a>

---

### SocketTasksConfig <a name="SocketTasksConfig" id="@serverless-dna/constructs.SocketTasksConfig"></a>

#### Initializer <a name="Initializer" id="@serverless-dna/constructs.SocketTasksConfig.Initializer"></a>

```typescript
import { SocketTasksConfig } from '@serverless-dna/constructs'

const socketTasksConfig: SocketTasksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketTasksConfig.property.taskFunctions">taskFunctions</a></code> | <code><a href="#@serverless-dna/constructs.TaskFunctionConfig">TaskFunctionConfig</a>[]</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketTasksConfig.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketTasksConfig.property.socketApiConfig">socketApiConfig</a></code> | <code><a href="#@serverless-dna/constructs.SocketApiConfig">SocketApiConfig</a></code> | *No description.* |

---

##### `taskFunctions`<sup>Required</sup> <a name="taskFunctions" id="@serverless-dna/constructs.SocketTasksConfig.property.taskFunctions"></a>

```typescript
public readonly taskFunctions: TaskFunctionConfig[];
```

- *Type:* <a href="#@serverless-dna/constructs.TaskFunctionConfig">TaskFunctionConfig</a>[]

---

##### `eventBus`<sup>Optional</sup> <a name="eventBus" id="@serverless-dna/constructs.SocketTasksConfig.property.eventBus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus

---

##### `socketApiConfig`<sup>Optional</sup> <a name="socketApiConfig" id="@serverless-dna/constructs.SocketTasksConfig.property.socketApiConfig"></a>

```typescript
public readonly socketApiConfig: SocketApiConfig;
```

- *Type:* <a href="#@serverless-dna/constructs.SocketApiConfig">SocketApiConfig</a>

---

### TaskFunctionConfig <a name="TaskFunctionConfig" id="@serverless-dna/constructs.TaskFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@serverless-dna/constructs.TaskFunctionConfig.Initializer"></a>

```typescript
import { TaskFunctionConfig } from '@serverless-dna/constructs'

const taskFunctionConfig: TaskFunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.TaskFunctionConfig.property.func">func</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.TaskFunctionConfig.property.type">type</a></code> | <code>string[]</code> | *No description.* |

---

##### `func`<sup>Required</sup> <a name="func" id="@serverless-dna/constructs.TaskFunctionConfig.property.func"></a>

```typescript
public readonly func: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---

##### `type`<sup>Required</sup> <a name="type" id="@serverless-dna/constructs.TaskFunctionConfig.property.type"></a>

```typescript
public readonly type: string[];
```

- *Type:* string[]

---



## Enums <a name="Enums" id="Enums"></a>

### SocketApiIntegrationType <a name="SocketApiIntegrationType" id="@serverless-dna/constructs.SocketApiIntegrationType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketApiIntegrationType.LAMBDA">LAMBDA</a></code> | *No description.* |

---

##### `LAMBDA` <a name="LAMBDA" id="@serverless-dna/constructs.SocketApiIntegrationType.LAMBDA"></a>

---

