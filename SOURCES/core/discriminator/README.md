# discriminator2

## Step 1 - Filter Input Spec Merge

Implementation: `discriminator2-merged-model-factory-filter.js`

The algorithm uses the input filter specification objects defined by each filter object passed via `request.filters` array
to create an @encapsule/arccore.graph.directed object that models all of the input specifications together.

## Step 2 - Identify Unique Features

Implementation: `discriminator2-feature-model-factory-filter.js`

The algorithm analyzes the merged filter specification digraph produced in step #1 to identify namespaces for which
specific data type(s) may be unambigously associated with a single filter in the input set.

## Step 3 - Prepare Runtime Features

Implementation: `discriminator2-runtime-model-factory-filter.js`

The algorithm determines if each filter in the input set has at least one unique feature identified in step 2.
And, if so then the algorithm performs additional analysis to determine the least expensive feature to use
for each filter's input specification (i.e. fewest number of runtime checks).

## Step 4 - Synthesize Discriminator Filter

Implementation: `discriminator2-factory-filter.js`

The algorithm performs steps 1, 2, and 3 and if there is no error synthesizes a new filter object that is returned to the caller.
This filter, the discriminator, accepts an arbitrary request that is traversed recursively and compared with the feature digraph
produced in step 3. When a feature in the request is matched to a feature in the feature digraph the algorithm concludes
by returning either the filter, the filter ID, or by delegating the request to the identified filter and returning its response.


