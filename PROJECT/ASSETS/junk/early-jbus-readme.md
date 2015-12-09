# jbus
The evolution of Encapsule/onm into a bi-directional JSON processing engine, sub-system communication bus, in-memory transport, and serialization infrastructure for building marvelously decoupled, composable apps and services that talk to each other through jbus - not directly to one another using conventional in-process function or network calls.

- full support for bi-directionally modeled JSON data
  - construct data via jbus' namespace factory using a data model
  - write unmodeled data through a jbus store to derive a data model that captures base JSON semantics
  - extend the base model with higher-order jbus concepts:
    - descriptor: named JSON object that models a heterogeneous collection of namespaces
    - map: named JSON object that models an extensible, homogeneous, associative array of namespaces
    - vector: named JSON array that models an extensible, homogeneous, ordered array of namespaces
    - uvalue: named JSON value (uncontrained - any valid JSON value type)
    - svalue: named JSON value (constrained to JSON value types string and null)
    - nvalue: named JSON value (constrained to JSON value types number and null)
    - ovalue: named JSON value (constrained to JSON value types object and null)
    - avalue: named JSON value (constrained to JSON value types array and null)
    - bvalue: named JSON value (constrained to JSON value types true and false)
    - tvalue: named JSON value (constrained to JSON value types true and false and null)
- URI and LRI address resolution on and off model
- model introspection
- policy-based data write, read, merge, transform (based on new onm resolver core)
- change journaling and property-level notification system (replaces onm's observer interface)
- contrib transport modules for common protocols:
  - websocket proxy/stub for onm based on Azuqua/node-token-sockjs + token-sockjs-client
- documentation
- lots of tests

Status:
I am currently considering the scope of this effort. Several months ago this seemed out of reach. But onm's new resolver infrastructure solves so many of onm's existing issues that all that's really required is to push through and re-write onm.Address (not trivial but _way_ simpler now that Encapsule/jsgraph exists).

