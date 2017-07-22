export default `

eslint-rules/__tests__/no-primitive-constructors-test.js
* !!obj
* '' + obj
* +string
* Boolean(obj)
* String(obj)
* Number(string)

eslint-rules/__tests__/warning-and-invariant-args-test.js
* warning(true, 'hello, world');
* warning(true, 'expected %s, got %s', 42, 24);
* invariant(true, 'hello, world');
* invariant(true, 'expected %s, got %s', 42, 24);
* warning('hello, world');
* warning(true, null);
* var g = 5; invariant(true, g);
* warning(true, 'expected %s, got %s');
* warning(true, 'foo is a bar under foobar', 'junk argument');
* invariant(true, 'error!');
* warning(true, 'error!');
* warning(true, '%s %s, %s %s: %s (%s)', 1, 2, 3, 4, 5, 6);

scripts/error-codes/__tests__/dev-expression-with-codes-test.js
* should replace __DEV__ in if
* should replace warning calls
* should add \`reactProdInvariant\` when it finds \`require('invariant')\`
* should replace simple invariant calls
* should only add \`reactProdInvariant\` once
* should support invariant calls with args
* should support invariant calls with a concatenated template string and args

scripts/error-codes/__tests__/invertObject-test.js
* should return an empty object for an empty input
* should invert key-values
* should take the last value when there're duplications in vals
* should preserve the original order

scripts/shared/__tests__/evalToString-test.js
* should support StringLiteral
* should support string concat (\`+\`)
* should throw when it finds other types

src/isomorphic/children/__tests__/ReactChildren-test.js
* should support identity for simple
* should treat single arrayless child as being in array
* should treat single child in array as expected
* should be called for each child
* should traverse children of different kinds
* should be called for each child in nested structure
* should retain key across two mappings
* should be called for each child in an iterable without keys
* should be called for each child in an iterable with keys
* should not enumerate enumerable numbers (#4776)
* should allow extension of native prototypes
* should pass key to returned component
* should invoke callback with the right context
* should be called for each child
* should be called for each child in nested structure
* should retain key across two mappings
* should not throw if key provided is a dupe with array key
* should use the same key for a cloned element
* should use the same key for a cloned element with key
* should return 0 for null children
* should return 0 for undefined children
* should return 1 for single child
* should count the number of children in flat structure
* should count the number of children in nested structure
* should flatten children to an array
* should escape keys
* should throw on object
* should throw on regex
* warns for keys for arrays of elements in a fragment
* does not warn when there are keys on  elements in a fragment
* warns for keys for arrays at the top level

src/isomorphic/children/__tests__/onlyChild-test.js
* should fail when passed two children
* should fail when passed nully values
* should fail when key/value objects
* should not fail when passed interpolated single child
* should return the only child

src/isomorphic/classic/__tests__/ReactContextValidator-test.js
* should filter out context not in contextTypes
* should pass next context to lifecycles
* should not pass previous context to lifecycles
* should check context types
* should check child context types
* should warn (but not error) if getChildContext method is missing
* should pass parent context if getChildContext method is missing

src/isomorphic/classic/__tests__/createReactClassIntegration-test.js
* should throw when \`render\` is not specified
* should copy prop types onto the Constructor
* should warn on invalid prop types
* should warn on invalid context types
* should throw on invalid child context types
* should warn when mispelling shouldComponentUpdate
* should warn when mispelling componentWillReceiveProps
* should throw if a reserved property is in statics
* should support statics
* should work with object getInitialState() return values
* renders based on context getInitialState
* should throw with non-object getInitialState() return values
* should work with a null getInitialState() return value
* should throw when using legacy factories
* replaceState and callback works
* isMounted works

src/isomorphic/classic/element/__tests__/ReactElement-test.js
* uses the fallback value when in an environment without Symbol
* returns a complete element according to spec
* should warn when \`key\` is being accessed on composite element
* should warn when \`key\` is being accessed on a host element
* should warn when \`ref\` is being accessed
* allows a string to be passed as the type
* returns an immutable element
* does not reuse the original config object
* does not fail if config has no prototype
* extracts key and ref from the config
* extracts null key and ref
* ignores undefined key and ref
* ignores key and ref warning getters
* coerces the key to a string
* preserves the owner on the element
* merges an additional argument onto the children prop
* does not override children if no rest args are provided
* overrides children if null is provided as an argument
* merges rest arguments onto the children prop in an array
* allows static methods to be called using the type property
* identifies valid elements
* is indistinguishable from a plain object
* should use default prop value when removing a prop
* should normalize props with default values
* throws when changing a prop (in dev) after element creation
* throws when adding a prop (in dev) after element creation
* does not warn for NaN props
* identifies elements, but not JSON, if Symbols are supported
* should scry children but cannot
* does not maintain refs
* can capture Child instantiation calls
* can properly scry children
* does not maintain refs
* can capture Child instantiation calls
* should scry children but cannot
* does not maintain refs
* can capture Child instantiation calls

src/isomorphic/classic/element/__tests__/ReactElementClone-test.js
* should clone a DOM component with new props
* should clone a composite component with new props
* does not fail if config has no prototype
* should keep the original ref if it is not overridden
* should transfer the key property
* should transfer children
* should shallow clone children
* should accept children as rest arguments
* should override children if undefined is provided as an argument
* should support keys and refs
* should steal the ref if a new ref is specified
* should overwrite props
* should normalize props with default values
* warns for keys for arrays of elements in rest args
* does not warns for arrays of elements with keys
* does not warn when the element is directly in rest args
* does not warn when the array contains a non-element
* should check declared prop types after clone
* should ignore key and ref warning getters
* should ignore undefined key and ref
* should extract null key and ref

src/isomorphic/classic/element/__tests__/ReactElementValidator-test.js
* warns for keys for arrays of elements in rest args
* warns for keys for arrays of elements with owner info
* warns for keys for arrays with no owner or parent info
* warns for keys for arrays of elements with no owner info
* warns for keys with component stack info
* does not warn for keys when passing children down
* warns for keys for iterables of elements in rest args
* does not warns for arrays of elements with keys
* does not warns for iterable elements with keys
* does not warn when the element is directly in rest args
* does not warn when the array contains a non-element
* should give context for PropType errors in nested components.
* gives a helpful error when passing invalid types
* includes the owner name when passing null, undefined, boolean, or number
* should check default prop values
* should not check the default for explicit null
* should check declared prop types
* should warn if a PropType creator is used as a PropType
* should warn when accessing .type on an element factory
* does not warn when using DOM node as children
* should not enumerate enumerable numbers (#4776)
* does not blow up with inlined children
* does not blow up on key warning with undefined type

src/isomorphic/modern/class/__tests__/ReactClassEquivalence-test.js
* tests the same thing for es6 classes and CoffeeScript
* tests the same thing for es6 classes and TypeScript

src/isomorphic/modern/class/__tests__/ReactCoffeeScriptClass-test.coffee
* preserves the name of the class for use in error messages
* throws if no render function is defined
* renders a simple stateless component with prop
* renders based on state using initial values in this.props
* renders based on state using props in the constructor
* renders based on context in the constructor
* renders only once when setting state in componentWillMount
* should throw with non-object in the initial state property
* should render with null in the initial state property
* setState through an event handler
* should not implicitly bind event handlers
* renders using forceUpdate even when there is no state
* will call all the normal life cycle methods
* warns when classic properties are defined on the instance, but does not invoke them.
* does not warn about getInitialState() on class components if state is also defined.
* should warn when misspelling shouldComponentUpdate
* should warn when misspelling componentWillReceiveProps
* should throw AND warn when trying to access classic APIs
* supports this.context passed via getChildContext
* supports classic refs
* supports drilling through to the DOM using findDOMNode

src/isomorphic/modern/class/__tests__/ReactES6Class-test.js
* preserves the name of the class for use in error messages
* throws if no render function is defined
* renders a simple stateless component with prop
* renders based on state using initial values in this.props
* renders based on state using props in the constructor
* renders based on context in the constructor
* renders only once when setting state in componentWillMount
* should throw with non-object in the initial state property
* should render with null in the initial state property
* setState through an event handler
* should not implicitly bind event handlers
* renders using forceUpdate even when there is no state
* will call all the normal life cycle methods
* warns when classic properties are defined on the instance, but does not invoke them.
* does not warn about getInitialState() on class components if state is also defined.
* should warn when misspelling shouldComponentUpdate
* should warn when misspelling componentWillReceiveProps
* should throw AND warn when trying to access classic APIs
* supports this.context passed via getChildContext
* supports classic refs
* supports drilling through to the DOM using findDOMNode

src/isomorphic/modern/class/__tests__/ReactPureComponent-test.js
* should render
* can override shouldComponentUpdate
* extends React.Component
* should warn when shouldComponentUpdate is defined on React.PureComponent

src/isomorphic/modern/class/__tests__/ReactTypeScriptClass-test.ts
* preserves the name of the class for use in error messages
* throws if no render function is defined
* renders a simple stateless component with prop
* renders based on state using initial values in this.props
* renders based on state using props in the constructor
* renders based on context in the constructor
* renders only once when setting state in componentWillMount
* should throw with non-object in the initial state property
* should render with null in the initial state property
* setState through an event handler
* should not implicitly bind event handlers
* renders using forceUpdate even when there is no state
* will call all the normal life cycle methods
* warns when classic properties are defined on the instance, but does not invoke them.
* does not warn about getInitialState() on class components if state is also defined.
* should warn when misspelling shouldComponentUpdate
* should warn when misspelling componentWillReceiveProps
* should throw AND warn when trying to access classic APIs
* supports this.context passed via getChildContext
* supports classic refs
* supports drilling through to the DOM using findDOMNode

src/isomorphic/modern/element/__tests__/ReactJSXElement-test.js
* returns a complete element according to spec
* allows a lower-case to be passed as the string type
* allows a string to be passed as the type
* returns an immutable element
* does not reuse the object that is spread into props
* extracts key and ref from the rest of the props
* coerces the key to a string
* merges JSX children onto the children prop
* does not override children if no JSX children are provided
* overrides children if null is provided as a JSX child
* overrides children if undefined is provided as an argument
* merges JSX children onto the children prop in an array
* allows static methods to be called using the type property
* identifies valid elements
* is indistinguishable from a plain object
* should use default prop value when removing a prop
* should normalize props with default values

src/isomorphic/modern/element/__tests__/ReactJSXElementValidator-test.js
* warns for keys for arrays of elements in children position
* warns for keys for arrays of elements with owner info
* warns for keys for iterables of elements in rest args
* does not warns for arrays of elements with keys
* does not warns for iterable elements with keys
* does not warn for numeric keys in entry iterable as a child
* does not warn when the element is directly as children
* does not warn when the child array contains non-elements
* should give context for PropType errors in nested components.
* should update component stack after receiving next element
* gives a helpful error when passing null, undefined, or boolean
* should check default prop values
* should not check the default for explicit null
* should check declared prop types
* should warn on invalid prop types
* should warn on invalid context types
* should warn if getDefaultProps is specificed on the class

src/renderers/__tests__/EventPluginHub-test.js
* should prevent non-function listeners, at dispatch
* should not prevent null listeners, at dispatch

src/renderers/__tests__/ReactChildReconciler-test.js
* warns for duplicated array keys
* warns for duplicated array keys with component stack info
* warns for duplicated iterable keys
* warns for duplicated iterable keys with component stack info

src/renderers/__tests__/ReactComponent-test.js
* should throw on invalid render targets
* should throw when supplying a ref outside of render method
* should warn when children are mutated during render
* should warn when children are mutated during update
* should support refs on owned components
* should not have refs on unmounted components
* should support new-style refs
* should support new-style refs with mixed-up owners
* should call refs at the correct time
* fires the callback after a component is rendered
* throws usefully when rendering badly-typed elements
* includes owner name in the error about badly-typed elements
* throws if a plain object is used as a child
* throws if a plain object even if it is in an owner

src/renderers/__tests__/ReactComponentLifeCycle-test.js
* should not reuse an instance when it has been unmounted
* it should fire onDOMReady when already in onDOMReady
* throws when accessing state in componentWillMount
* should allow update state inside of componentWillMount
* should not allow update state inside of getInitialState
* should correctly determine if a component is mounted
* should correctly determine if a null component is mounted
* isMounted should return false when unmounted
* warns if findDOMNode is used inside render
* should carry through each of the phases of setup
* should not throw when updating an auxiliary component
* should allow state updates in componentDidMount
* should call nested lifecycle methods in the right order
* calls effects on module-pattern component

src/renderers/__tests__/ReactComponentTreeHook-test.js
* gets created

src/renderers/__tests__/ReactCompositeComponent-test.js
* should support module pattern components
* should support rendering to different child types over time
* should not thrash a server rendered layout with client side one
* should react to state changes from callbacks
* should rewire refs when rendering to different child types
* should not cache old DOM nodes when switching constructors
* should use default values for undefined props
* should not mutate passed-in props object
* should warn about \`forceUpdate\` on unmounted components
* should warn about \`setState\` on unmounted components
* should silently allow \`setState\`, not call cb on unmounting components
* should warn about \`setState\` in render
* should warn about \`setState\` in getChildContext
* should cleanup even if render() fatals
* should call componentWillUnmount before unmounting
* should warn when shouldComponentUpdate() returns undefined
* should warn when componentDidUnmount method is defined
* should warn when defaultProps was defined as an instance property
* should pass context to children when not owner
* should skip update when rerendering element in container
* should pass context when re-rendered for static child
* should pass context when re-rendered for static child within a composite component
* should pass context transitively
* should pass context when re-rendered
* unmasked context propagates through updates
* should trigger componentWillReceiveProps for context changes
* should disallow nested render calls
* only renders once if updated in componentWillReceiveProps
* only renders once if updated in componentWillReceiveProps when batching
* should update refs if shouldComponentUpdate gives false
* should allow access to findDOMNode in componentWillUnmount
* context should be passed down from the parent
* should replace state
* should support objects with prototypes as state
* should not warn about unmounting during unmounting
* should warn when mutated props are passed
* should only call componentWillUnmount once
* prepares new child before unmounting old
* respects a shallow shouldComponentUpdate implementation
* does not do a deep comparison for a shallow shouldComponentUpdate implementation
* should call setState callback with no arguments

src/renderers/__tests__/ReactCompositeComponentDOMMinimalism-test.js
* should not render extra nodes for non-interpolated text
* should not render extra nodes for non-interpolated text
* should not render extra nodes for non-interpolated text

src/renderers/__tests__/ReactCompositeComponentNestedState-test.js
* should provide up to date values for props

src/renderers/__tests__/ReactCompositeComponentState-test.js
* should support setting state
* should call componentDidUpdate of children first
* should batch unmounts
* should update state when called from child cWRP
* should merge state when sCU returns false
* should treat assigning to this.state inside cWRP as a replaceState, with a warning
* should treat assigning to this.state inside cWM as a replaceState, with a warning

src/renderers/__tests__/ReactEmptyComponent-test.js
* should not produce child DOM nodes for null and false
* should still throw when rendering to undefined
* should be able to switch between rendering null and a normal tag
* should be able to switch in a list of children
* should distinguish between a script placeholder and an actual script tag
* should have findDOMNode return null when multiple layers of composite components render to the same null placeholder
* works when switching components
* can render null at the top level
* does not break when updating during mount
* preserves the dom node during updates

src/renderers/__tests__/ReactErrorBoundaries-test.js
* does not swallow exceptions on mounting without boundaries
* does not swallow exceptions on updating without boundaries
* does not swallow exceptions on unmounting without boundaries
* prevents errors from leaking into other roots
* renders an error state if child throws in render
* renders an error state if child throws in constructor
* renders an error state if child throws in componentWillMount
* renders an error state if context provider throws in componentWillMount
* renders an error state if module-style context provider throws in componentWillMount
* mounts the error message if mounting fails
* propagates errors on retry on mounting
* propagates errors inside boundary during componentWillMount
* propagates errors inside boundary while rendering error state
* does not call componentWillUnmount when aborting initial mount
* resets refs if mounting aborts
* successfully mounts if no error occurs
* catches if child throws in constructor during update
* catches if child throws in componentWillMount during update
* catches if child throws in componentWillReceiveProps during update
* catches if child throws in componentWillUpdate during update
* catches if child throws in render during update
* keeps refs up-to-date during updates
* recovers from componentWillUnmount errors on update
* recovers from nested componentWillUnmount errors on update
* picks the right boundary when handling unmounting errors
* can recover from error state
* can update multiple times in error state
* doesn't get into inconsistent state during removals
* doesn't get into inconsistent state during additions
* doesn't get into inconsistent state during reorders
* catches errors originating downstream
* catches errors in componentDidMount
* catches errors in componentDidUpdate
* propagates errors inside boundary during componentDidMount
* lets different boundaries catch their own first errors
* discards a bad root if the root component fails
* renders empty output if error boundary does not handle the error
* passes first error when two errors happen in commit

src/renderers/__tests__/ReactIdentity-test.js
* should allow key property to express identity
* should use composite identity
* should allow any character as a key, in a detached parent
* should allow any character as a key, in an attached parent
* should not allow scripts in keys to execute
* should let restructured components retain their uniqueness
* should let nested restructures retain their uniqueness
* should let text nodes retain their uniqueness
* should retain key during updates in composite components
* should not allow implicit and explicit keys to collide

src/renderers/__tests__/ReactMockedComponent-test.js
* should allow an implicitly mocked component to be rendered without warnings
* should allow an implicitly mocked component to be rendered without warnings (SSR)
* should allow an implicitly mocked component to be updated
* has custom methods on the implicitly mocked component
* should allow an explicitly mocked component to be rendered
* should allow an explicitly mocked component to be updated
* has custom methods on the explicitly mocked component

src/renderers/__tests__/ReactMultiChild-test.js
* should update children when possible
* should replace children with different constructors
* should NOT replace children with different owners
* should replace children with different keys
* should warn for duplicated array keys with component stack info
* should warn for duplicated iterable keys with component stack info
* should warn for using maps as children with owner info
* should reorder bailed-out children
* prepares new children before unmounting old

src/renderers/__tests__/ReactMultiChildReconcile-test.js
* should reset internal state if removed then readded in an array
* should reset internal state if removed then readded in an iterable
* should create unique identity
* should preserve order if children order has not changed
* should transition from zero to one children correctly
* should transition from one to zero children correctly
* should transition from one child to null children
* should transition from null children to one child
* should transition from zero children to null children
* should transition from null children to zero children
* should remove nulled out children at the beginning
* should remove nulled out children at the end
* should reverse the order of two children
* should reverse the order of more than two children
* should cycle order correctly
* should cycle order correctly in the other direction
* should remove nulled out children and ignore new null children
* should remove nulled out children and reorder remaining
* should append children to the end
* should append multiple children to the end
* should prepend children to the beginning
* should prepend multiple children to the beginning
* should not prepend an empty child to the beginning
* should not append an empty child to the end
* should not insert empty children in the middle
* should insert one new child in the middle
* should insert multiple new truthy children in the middle
* should insert non-empty children in middle where nulls were

src/renderers/__tests__/ReactMultiChildText-test.js
* should correctly handle all possible children for render and update
* should throw if rendering both HTML and children
* should render between nested components and inline children

src/renderers/__tests__/ReactStatelessComponent-test.js
* should render stateless component
* should update stateless component
* should unmount stateless component
* should pass context thru stateless component
* should warn for childContextTypes on a functional component
* should throw when stateless component returns undefined
* should throw on string refs in pure functions
* should warn when given a string ref
* should warn when given a function ref
* deduplicates ref warnings based on element or owner
* should provide a null ref
* should use correct name in key warning
* should support default props and prop types
* should receive context
* should work with arrow functions
* should allow simple functions to return null
* should allow simple functions to return false

src/renderers/__tests__/ReactTreeTraversal-test.js
* should not traverse when traversing outside DOM
* should traverse two phase across component boundary
* should traverse two phase at shallowest node
* should not traverse when enter/leaving outside DOM
* should not traverse if enter/leave the same node
* should traverse enter/leave to sibling - avoids parent
* should traverse enter/leave to parent - avoids parent
* should enter from the window
* should enter from the window to the shallowest
* should leave to the window
* should leave to the window from the shallowest
* should determine the first common ancestor correctly

src/renderers/__tests__/ReactUpdates-test.js
* should batch state when updating state twice
* should batch state when updating two different state keys
* should batch state and props together
* should batch parent/child state updates together
* should batch child/parent state updates together
* should support chained state updates
* should batch forceUpdate together
* should update children even if parent blocks updates
* should not reconcile children passed via props
* should flow updates correctly
* should queue mount-ready handlers across different roots
* should flush updates in the correct order
* should flush updates in the correct order across roots
* should queue nested updates
* should queue updates from during mount
* calls componentWillReceiveProps setState callback properly
* does not call render after a component as been deleted
* throws in setState if the update callback is not a function
* throws in forceUpdate if the update callback is not a function
* does not update one component twice in a batch (#2410)
* does not update one component twice in a batch (#6371)
* unstable_batchedUpdates should return value from a callback
* unmounts and remounts a root in the same batch
* handles reentrant mounting in synchronous mode
* mounts and unmounts are sync even in a batch
* does not re-render if state update is null
* synchronously renders hidden subtrees
* does not fall into an infinite update loop
* does not fall into an infinite error loop

src/renderers/__tests__/multiple-copies-of-react-test.js
* throws the "Refs must have owner" warning

src/renderers/__tests__/refs-destruction-test.js
* should remove refs when destroying the parent
* should remove refs when destroying the child
* should not error when destroying child with ref asynchronously

src/renderers/__tests__/refs-test.js
* Should increase refs with an increase in divs
* Should correctly get the ref
* Allow refs to hop around children correctly
* always has a value for this.refs
* ref called correctly for stateless component when __DEV__ = false
* ref called correctly for stateless component when __DEV__ = true
* coerces numbers to strings
* attaches, detaches from fiber component with stack layer
* attaches, detaches from stack component with fiber layer
* attaches and detaches root refs

src/renderers/art/__tests__/ReactART-test.js
* should have the correct lifecycle state
* should render a reasonable SVG structure in SVG mode
* should be able to reorder components
* should be able to reorder many components
* renders composite with lifecycle inside group
* resolves refs before componentDidMount
* resolves refs before componentDidUpdate
* adds and updates event handlers

src/renderers/dom/__tests__/ReactDOMProduction-test.js
* should use prod fbjs
* should use prod React
* should handle a simple flow
* should call lifecycle methods
* should throw with an error code in production
* should not crash with devtools installed
* should keep track of namespace across portals in production

src/renderers/dom/fiber/__tests__/ReactDOMFiber-test.js
* should render strings as children
* should render numbers as children
* should be called a callback argument
* should call a callback argument when the same element is re-rendered
* should render a component returning strings directly from render
* should render a component returning numbers directly from render
* finds the DOM Text node of a string child
* finds the first child when a component returns a fragment
* finds the first child even when fragment is nested
* finds the first child even when first child renders null
* should render one portal
* should render many portals
* should render nested portals
* should reconcile portal children
* should keep track of namespace across portals (simple)
* should keep track of namespace across portals (medium)
* should keep track of namespace across portals (complex)
* should unwind namespaces on uncaught errors
* should unwind namespaces on caught errors
* should unwind namespaces on caught errors in a portal
* should pass portal context when rendering subtree elsewhere
* should update portal context if it changes due to setState
* should update portal context if it changes due to re-render
* findDOMNode should find dom element after expanding a fragment
* should bubble events from the portal to the parent
* should not onMouseLeave when staying in the portal
* should not update event handlers until commit
* should not crash encountering low-priority tree
* should not warn when rendering into an empty container
* should warn when replacing a container which was manually updated outside of React
* should warn when doing an update to a container manually updated outside of React
* should warn when doing an update to a container manually cleared outside of React
* throws if non-element passed to top-level render
* throws if something other than false, null, or an element is returned from render
* treats mocked render functions as if they return null

src/renderers/dom/fiber/__tests__/ReactDOMFiberAsync-test.js
* renders synchronously by default
* renders synchronously when feature flag is disabled
* AsyncComponent at the root makes the entire tree async
* updates inside an async tree are async by default
* AsyncComponent creates an async subtree
* updates inside an async subtree are async by default
* flushSync batches sync updates and flushes them at the end of the batch
* flushSync flushes updates even if nested inside another flushSync
* flushSync throws if already performing work
* flushSync flushes updates before end of the tick

src/renderers/dom/shared/__tests__/CSSProperty-test.js
* should generate browser prefixes for its \`isUnitlessNumber\`

src/renderers/dom/shared/__tests__/CSSPropertyOperations-test.js
* should automatically append \`px\` to relevant styles
* should trim values
* should not append \`px\` to styles that might need a number
* should create vendor-prefixed markup correctly
* should set style attribute when styles exist
* should not set style attribute when no styles exist
* should warn when using hyphenated style names
* should warn when updating hyphenated style names
* warns when miscapitalizing vendored style names
* should warn about style having a trailing semicolon
* should warn about style containing a NaN value
* should not warn when setting CSS custom properties
* should warn about style containing a Infinity value
* should not add units to CSS custom properties

src/renderers/dom/shared/__tests__/DOMPropertyOperations-test.js
* should set values as properties by default
* should set values as attributes if necessary
* should set values as namespace attributes if necessary
* should set values as boolean properties
* should convert attribute values to string first
* should not remove empty attributes for special properties
* should remove for falsey boolean properties
* should remove when setting custom attr to null
* should use mutation method where applicable
* should set className to empty string instead of null
* should remove property properly for boolean properties
* should remove property properly even with different name
* should update an empty attribute to zero
* should always assign the value attribute for non-inputs
* should remove attributes for normal properties
* should not remove attributes for special properties
* should not leave all options selected when deleting multiple

src/renderers/dom/shared/__tests__/ReactBrowserEventEmitter-test.js
* should store a listener correctly
* should retrieve a listener correctly
* should clear all handlers when asked to
* should invoke a simple handler registered on a node
* should not invoke handlers if ReactBrowserEventEmitter is disabled
* should bubble simply
* should bubble to the right handler after an update
* should continue bubbling if an error is thrown
* should set currentTarget
* should support stopPropagation()
* should support overriding .isPropagationStopped()
* should stop after first dispatch if stopPropagation
* should not stopPropagation if false is returned
* should invoke handlers that were removed while bubbling
* should not invoke newly inserted handlers while bubbling
* should have mouse enter simulated by test utils
* should infer onTouchTap from a touchStart/End
* should infer onTouchTap from when dragging below threshold
* should not onTouchTap from when dragging beyond threshold
* should listen to events only once
* should work with event plugins without dependencies
* should work with event plugins with dependencies
* should bubble onTouchTap

src/renderers/dom/shared/__tests__/ReactDOM-test.js
* allows a DOM element to be used with a string
* should allow children to be passed as an argument
* should overwrite props.children with children argument
* should purge the DOM cache when removing nodes
* throws in render() if the mount callback is not a function
* throws in render() if the update callback is not a function
* preserves focus
* calls focus() on autoFocus elements after they have been mounted to the DOM

src/renderers/dom/shared/__tests__/ReactDOMComponent-test.js
* should handle className
* should gracefully handle various style value types
* should not update styles when mutating a proxy style object
* should throw when mutating style objects
* should warn for unknown prop
* should group multiple unknown prop warnings together
* should warn for onDblClick prop
* should not warn for "0" as a unitless style value
* should warn nicely about NaN in style
* should update styles if initially null
* should update styles if updated to null multiple times
* should allow named slot projection on both web components and regular DOM elements
* should skip reserved props on web components
* should skip dangerouslySetInnerHTML on web components
* should render null and undefined as empty but print other falsy values
* should remove attributes
* should remove properties
* should properly update custom attributes on custom elements
* should clear a single style prop when changing \`style\`
* should reject attribute key injection attack on markup
* should reject attribute key injection attack on update
* should update arbitrary attributes for tags containing dashes
* should clear all the styles when removing \`style\`
* should update styles when \`style\` changes from null to object
* should not reset innerHTML for when children is null
* should reset innerHTML when switching from a direct text child to an empty child
* should empty element when removing innerHTML
* should transition from string content to innerHTML
* should transition from innerHTML to string content
* should transition from innerHTML to children in nested el
* should transition from children to innerHTML in nested el
* should not incur unnecessary DOM mutations for attributes
* should not incur unnecessary DOM mutations for string properties
* should not incur unnecessary DOM mutations for boolean properties
* should ignore attribute whitelist for elements with the "is: attribute
* should not update when switching between null/undefined
* handles multiple child updates without interference
* should generate the correct markup with className
* should escape style names and values
* should handle dangerouslySetInnerHTML
* should work error event on <source> element
* should not duplicate uppercased selfclosing tags
* should warn on upper case HTML tags, not SVG nor custom tags
* should warn if the tag is unrecognized
* should warn against children for void elements
* should warn against dangerouslySetInnerHTML for void elements
* should include owner rather than parent in warnings
* should emit a warning once for a named custom component using shady DOM
* should emit a warning once for an unnamed custom component using shady DOM
* should treat menuitem as a void element but still create the closing tag
* should validate against multiple children props
* should validate against use of innerHTML
* should validate use of dangerouslySetInnerHTML
* should validate use of dangerouslySetInnerHTML
* should allow {__html: null}
* should warn about contentEditable and children
* should respect suppressContentEditableWarning
* should validate against invalid styles
* should track input values
* should track textarea values
* should warn for children on void elements
* should support custom elements which extend native elements
* should work load and error events on <image> element in SVG
* should warn against children for void elements
* should warn against dangerouslySetInnerHTML for void elements
* should validate against multiple children props
* should warn about contentEditable and children
* should validate against invalid styles
* should report component containing invalid styles
* should properly escape text content and attributes values
* unmounts children before unsetting DOM node info
* should throw when an invalid tag name is used server-side
* should throw when an attack vector is used server-side
* should throw when an invalid tag name is used
* should throw when an attack vector is used
* warns on invalid nesting
* warns on invalid nesting at root
* warns nicely for table rows
* gives useful context in warnings
* should warn about incorrect casing on properties (ssr)
* should warn about incorrect casing on event handlers (ssr)
* should warn about incorrect casing on properties
* should warn about incorrect casing on event handlers
* should warn about class
* should warn about class (ssr)
* should warn about props that are no longer supported
* should warn about props that are no longer supported (ssr)
* gives source code refs for unknown prop warning
* gives source code refs for unknown prop warning (ssr)
* gives source code refs for unknown prop warning for update render
* gives source code refs for unknown prop warning for exact elements
* gives source code refs for unknown prop warning for exact elements (ssr)
* gives source code refs for unknown prop warning for exact elements in composition
* should suggest property name if available
* should suggest property name if available (ssr)
* renders innerHTML and preserves whitespace
* render and then updates innerHTML and preserves whitespace
* gives source code refs for unknown prop warning for exact elements in composition (ssr)

src/renderers/dom/shared/__tests__/ReactDOMComponentTree-test.js
* finds nodes for instances
* finds instances for nodes

src/renderers/dom/shared/__tests__/ReactDOMEventListener-test.js
* should dispatch events from outside React tree
* should propagate events one level down
* should propagate events two levels down
* should not get confused by disappearing elements
* should batch between handlers from different roots
* should not fire duplicate events for a React DOM tree

src/renderers/dom/shared/__tests__/ReactDOMInvalidARIAHook-test.js
* should allow valid aria-* props
* should warn for one invalid aria-* prop
* should warn for many invalid aria-* props
* should warn for an improperly cased aria-* prop

src/renderers/dom/shared/__tests__/ReactDOMSVG-test.js
* creates initial namespaced markup
* creates elements with SVG namespace inside SVG tag during mount
* creates elements with SVG namespace inside SVG tag during update
* can render SVG into a non-React SVG tree
* can render HTML into a foreignObject in non-React SVG tree

src/renderers/dom/shared/__tests__/ReactDOMServerIntegration-test.js
* renders a blank div with server string render
* renders a blank div with server stream render
* renders a blank div with clean client render
* renders a blank div with client render on top of good server markup
* renders a blank div with client render on top of bad server markup
* renders a self-closing tag with server string render
* renders a self-closing tag with server stream render
* renders a self-closing tag with clean client render
* renders a self-closing tag with client render on top of good server markup
* renders a self-closing tag with client render on top of bad server markup
* renders a self-closing tag as a child with server string render
* renders a self-closing tag as a child with server stream render
* renders a self-closing tag as a child with clean client render
* renders a self-closing tag as a child with client render on top of good server markup
* renders a self-closing tag as a child with client render on top of bad server markup
* renders simple numbers with server string render
* renders simple numbers with server stream render
* renders simple numbers with clean client render
* renders simple numbers with client render on top of good server markup
* renders simple numbers with client render on top of bad server markup
* renders simple strings with server string render
* renders simple strings with server stream render
* renders simple strings with clean client render
* renders simple strings with client render on top of good server markup
* renders simple strings with client render on top of bad server markup
* renders string prop with true value with server string render
* renders string prop with true value with server stream render
* renders string prop with true value with clean client render
* renders string prop with true value with client render on top of good server markup
* renders string prop with true value with client render on top of bad server markup
* renders string prop with false value with server string render
* renders string prop with false value with server stream render
* renders string prop with false value with clean client render
* renders string prop with false value with client render on top of good server markup
* renders string prop with false value with client render on top of bad server markup
* renders no string prop with null value with server string render
* renders no string prop with null value with server stream render
* renders no string prop with null value with clean client render
* renders no string prop with null value with client render on top of good server markup
* renders no string prop with null value with client render on top of bad server markup
* renders boolean prop with true value with server string render
* renders boolean prop with true value with server stream render
* renders boolean prop with true value with clean client render
* renders boolean prop with true value with client render on top of good server markup
* renders boolean prop with true value with client render on top of bad server markup
* renders boolean prop with false value with server string render
* renders boolean prop with false value with server stream render
* renders boolean prop with false value with clean client render
* renders boolean prop with false value with client render on top of good server markup
* renders boolean prop with false value with client render on top of bad server markup
* renders boolean prop with self value with server string render
* renders boolean prop with self value with server stream render
* renders boolean prop with self value with clean client render
* renders boolean prop with self value with client render on top of good server markup
* renders boolean prop with self value with client render on top of bad server markup
* renders boolean prop with "" value with server string render
* renders boolean prop with "" value with server stream render
* renders boolean prop with "" value with clean client render
* renders boolean prop with "" value with client render on top of good server markup
* renders boolean prop with "" value with client render on top of bad server markup
* renders boolean prop with string value with server string render
* renders boolean prop with string value with server stream render
* renders boolean prop with string value with clean client render
* renders boolean prop with string value with client render on top of good server markup
* renders boolean prop with string value with client render on top of bad server markup
* renders boolean prop with array value with server string render
* renders boolean prop with array value with server stream render
* renders boolean prop with array value with clean client render
* renders boolean prop with array value with client render on top of good server markup
* renders boolean prop with array value with client render on top of bad server markup
* renders boolean prop with object value with server string render
* renders boolean prop with object value with server stream render
* renders boolean prop with object value with clean client render
* renders boolean prop with object value with client render on top of good server markup
* renders boolean prop with object value with client render on top of bad server markup
* renders boolean prop with non-zero number value with server string render
* renders boolean prop with non-zero number value with server stream render
* renders boolean prop with non-zero number value with clean client render
* renders boolean prop with non-zero number value with client render on top of good server markup
* renders boolean prop with non-zero number value with client render on top of bad server markup
* renders boolean prop with zero value with server string render
* renders boolean prop with zero value with server stream render
* renders boolean prop with zero value with clean client render
* renders boolean prop with zero value with client render on top of good server markup
* renders boolean prop with zero value with client render on top of bad server markup
* renders no boolean prop with null value with server string render
* renders no boolean prop with null value with server stream render
* renders no boolean prop with null value with clean client render
* renders no boolean prop with null value with client render on top of good server markup
* renders no boolean prop with null value with client render on top of bad server markup
* renders download prop with true value with server string render
* renders download prop with true value with server stream render
* renders download prop with true value with clean client render
* renders download prop with true value with client render on top of good server markup
* renders download prop with true value with client render on top of bad server markup
* renders download prop with false value with server string render
* renders download prop with false value with server stream render
* renders download prop with false value with clean client render
* renders download prop with false value with client render on top of good server markup
* renders download prop with false value with client render on top of bad server markup
* renders download prop with string value with server string render
* renders download prop with string value with server stream render
* renders download prop with string value with clean client render
* renders download prop with string value with client render on top of good server markup
* renders download prop with string value with client render on top of bad server markup
* renders download prop with string "false" value with server string render
* renders download prop with string "false" value with server stream render
* renders download prop with string "false" value with clean client render
* renders download prop with string "false" value with client render on top of good server markup
* renders download prop with string "false" value with client render on top of bad server markup
* renders download prop with string "true" value with server string render
* renders download prop with string "true" value with server stream render
* renders download prop with string "true" value with clean client render
* renders download prop with string "true" value with client render on top of good server markup
* renders download prop with string "true" value with client render on top of bad server markup
* renders download prop with number 0 value with server string render
* renders download prop with number 0 value with server stream render
* renders download prop with number 0 value with clean client render
* renders download prop with number 0 value with client render on top of good server markup
* renders download prop with number 0 value with client render on top of bad server markup
* renders no download prop with null value with server string render
* renders no download prop with null value with server stream render
* renders no download prop with null value with clean client render
* renders no download prop with null value with client render on top of good server markup
* renders no download prop with null value with client render on top of bad server markup
* renders no download prop with undefined value with server string render
* renders no download prop with undefined value with server stream render
* renders no download prop with undefined value with clean client render
* renders no download prop with undefined value with client render on top of good server markup
* renders no download prop with undefined value with client render on top of bad server markup
* renders className prop with string value with server string render
* renders className prop with string value with server stream render
* renders className prop with string value with clean client render
* renders className prop with string value with client render on top of good server markup
* renders className prop with string value with client render on top of bad server markup
* renders className prop with empty string value with server string render
* renders className prop with empty string value with server stream render
* renders className prop with empty string value with clean client render
* renders className prop with empty string value with client render on top of good server markup
* renders className prop with empty string value with client render on top of bad server markup
* renders className prop with true value with server string render
* renders className prop with true value with server stream render
* renders className prop with true value with clean client render
* renders className prop with true value with client render on top of good server markup
* renders className prop with true value with client render on top of bad server markup
* renders className prop with false value with server string render
* renders className prop with false value with server stream render
* renders className prop with false value with clean client render
* renders className prop with false value with client render on top of good server markup
* renders className prop with false value with client render on top of bad server markup
* renders no className prop with null value with server string render
* renders no className prop with null value with server stream render
* renders no className prop with null value with clean client render
* renders no className prop with null value with client render on top of good server markup
* renders no className prop with null value with client render on top of bad server markup
* renders htmlFor with string value with server string render
* renders htmlFor with string value with server stream render
* renders htmlFor with string value with clean client render
* renders htmlFor with string value with client render on top of good server markup
* renders htmlFor with string value with client render on top of bad server markup
* renders htmlFor with an empty string with server string render
* renders htmlFor with an empty string with server stream render
* renders htmlFor with an empty string with clean client render
* renders htmlFor with an empty string with client render on top of good server markup
* renders htmlFor with an empty string with client render on top of bad server markup
* renders htmlFor prop with true value with server string render
* renders htmlFor prop with true value with server stream render
* renders htmlFor prop with true value with clean client render
* renders htmlFor prop with true value with client render on top of good server markup
* renders htmlFor prop with true value with client render on top of bad server markup
* renders htmlFor prop with false value with server string render
* renders htmlFor prop with false value with server stream render
* renders htmlFor prop with false value with clean client render
* renders htmlFor prop with false value with client render on top of good server markup
* renders htmlFor prop with false value with client render on top of bad server markup
* renders no htmlFor prop with null value with server string render
* renders no htmlFor prop with null value with server stream render
* renders no htmlFor prop with null value with clean client render
* renders no htmlFor prop with null value with client render on top of good server markup
* renders no htmlFor prop with null value with client render on top of bad server markup
* renders positive numeric property with positive value with server string render
* renders positive numeric property with positive value with server stream render
* renders positive numeric property with positive value with clean client render
* renders positive numeric property with positive value with client render on top of good server markup
* renders positive numeric property with positive value with client render on top of bad server markup
* renders no positive numeric property with zero value with server string render
* renders no positive numeric property with zero value with server stream render
* renders no positive numeric property with zero value with clean client render
* renders no positive numeric property with zero value with client render on top of good server markup
* renders no positive numeric property with zero value with client render on top of bad server markup
* renders numeric property with zero value with server string render
* renders numeric property with zero value with server stream render
* renders numeric property with zero value with clean client render
* renders numeric property with zero value with client render on top of good server markup
* renders numeric property with zero value with client render on top of bad server markup
* renders no ref attribute with server string render
* renders no ref attribute with server stream render
* renders no ref attribute with clean client render
* renders no ref attribute with client render on top of good server markup
* renders no ref attribute with client render on top of bad server markup
* renders no children attribute with server string render
* renders no children attribute with server stream render
* renders no children attribute with clean client render
* renders no children attribute with client render on top of good server markup
* renders no children attribute with client render on top of bad server markup
* renders no key attribute with server string render
* renders no key attribute with server stream render
* renders no key attribute with clean client render
* renders no key attribute with client render on top of good server markup
* renders no key attribute with client render on top of bad server markup
* renders no dangerouslySetInnerHTML attribute with server string render
* renders no dangerouslySetInnerHTML attribute with server stream render
* renders no dangerouslySetInnerHTML attribute with clean client render
* renders no dangerouslySetInnerHTML attribute with client render on top of good server markup
* renders no dangerouslySetInnerHTML attribute with client render on top of bad server markup
* renders simple styles with server string render
* renders simple styles with server stream render
* renders simple styles with clean client render
* renders simple styles with client render on top of good server markup
* renders simple styles with client render on top of bad server markup
* renders relevant styles with px with server string render
* renders relevant styles with px with server stream render
* renders relevant styles with px with clean client render
* renders relevant styles with px with client render on top of good server markup
* renders relevant styles with px with client render on top of bad server markup
* renders custom properties with server string render
* renders custom properties with server stream render
* renders custom properties with clean client render
* renders custom properties with client render on top of good server markup
* renders custom properties with client render on top of bad server markup
* renders no undefined styles with server string render
* renders no undefined styles with server stream render
* renders no undefined styles with clean client render
* renders no undefined styles with client render on top of good server markup
* renders no undefined styles with client render on top of bad server markup
* renders no null styles with server string render
* renders no null styles with server stream render
* renders no null styles with clean client render
* renders no null styles with client render on top of good server markup
* renders no null styles with client render on top of bad server markup
* renders no empty styles with server string render
* renders no empty styles with server stream render
* renders no empty styles with clean client render
* renders no empty styles with client render on top of good server markup
* renders no empty styles with client render on top of bad server markup
* renders simple strings with server string render
* renders simple strings with server stream render
* renders simple strings with clean client render
* renders simple strings with client render on top of good server markup
* renders simple strings with client render on top of bad server markup
* renders aria string prop with false value with server string render
* renders aria string prop with false value with server stream render
* renders aria string prop with false value with clean client render
* renders aria string prop with false value with client render on top of good server markup
* renders aria string prop with false value with client render on top of bad server markup
* renders no aria prop with null value with server string render
* renders no aria prop with null value with server stream render
* renders no aria prop with null value with clean client render
* renders no aria prop with null value with client render on top of good server markup
* renders no aria prop with null value with client render on top of bad server markup
* renders no unknown attributes with server string render
* renders no unknown attributes with server stream render
* renders no unknown attributes with clean client render
* renders no unknown attributes with client render on top of good server markup
* renders no unknown attributes with client render on top of bad server markup
* renders unknown data- attributes with server string render
* renders unknown data- attributes with server stream render
* renders unknown data- attributes with clean client render
* renders unknown data- attributes with client render on top of good server markup
* renders unknown data- attributes with client render on top of bad server markup
* renders no unknown data- attributes with null value with server string render
* renders no unknown data- attributes with null value with server stream render
* renders no unknown data- attributes with null value with clean client render
* renders no unknown data- attributes with null value with client render on top of good server markup
* renders no unknown data- attributes with null value with client render on top of bad server markup
* renders no unknown attributes for non-standard elements with server string render
* renders no unknown attributes for non-standard elements with server stream render
* renders no unknown attributes for non-standard elements with clean client render
* renders no unknown attributes for non-standard elements with client render on top of good server markup
* renders no unknown attributes for non-standard elements with client render on top of bad server markup
* renders unknown attributes for custom elements with server string render
* renders unknown attributes for custom elements with server stream render
* renders unknown attributes for custom elements with clean client render
* renders unknown attributes for custom elements with client render on top of good server markup
* renders unknown attributes for custom elements with client render on top of bad server markup
* renders no unknown attributes for custom elements with null value with server string render
* renders no unknown attributes for custom elements with null value with server stream render
* renders no unknown attributes for custom elements with null value with clean client render
* renders no unknown attributes for custom elements with null value with client render on top of good server markup
* renders no unknown attributes for custom elements with null value with client render on top of bad server markup
* renders unknown attributes for custom elements using is with server string render
* renders unknown attributes for custom elements using is with server stream render
* renders unknown attributes for custom elements using is with clean client render
* renders unknown attributes for custom elements using is with client render on top of good server markup
* renders unknown attributes for custom elements using is with client render on top of bad server markup
* renders no unknown attributes for custom elements using is with null value with server string render
* renders no unknown attributes for custom elements using is with null value with server stream render
* renders no unknown attributes for custom elements using is with null value with clean client render
* renders no unknown attributes for custom elements using is with null value with client render on top of good server markup
* renders no unknown attributes for custom elements using is with null value with client render on top of bad server markup
* renders no HTML events with server string render
* renders no HTML events with server stream render
* renders no HTML events with clean client render
* renders no HTML events with client render on top of good server markup
* renders no HTML events with client render on top of bad server markup
* renders a div with text with server string render
* renders a div with text with server stream render
* renders a div with text with clean client render
* renders a div with text with client render on top of good server markup
* renders a div with text with client render on top of bad server markup
* renders a div with text with flanking whitespace with server string render
* renders a div with text with flanking whitespace with server stream render
* renders a div with text with flanking whitespace with clean client render
* renders a div with text with flanking whitespace with client render on top of good server markup
* renders a div with text with flanking whitespace with client render on top of bad server markup
* renders a div with an empty text child with server string render
* renders a div with an empty text child with server stream render
* renders a div with an empty text child with clean client render
* renders a div with an empty text child with client render on top of good server markup
* renders a div with an empty text child with client render on top of bad server markup
* renders a div with multiple empty text children with server string render
* renders a div with multiple empty text children with server stream render
* renders a div with multiple empty text children with clean client render
* renders a div with multiple empty text children with client render on top of good server markup
* renders a div with multiple empty text children with client render on top of bad server markup
* renders a div with multiple whitespace children with server string render
* renders a div with multiple whitespace children with server stream render
* renders a div with multiple whitespace children with clean client render
* renders a div with multiple whitespace children with client render on top of good server markup
* renders a div with multiple whitespace children with client render on top of bad server markup
* renders a div with text sibling to a node with server string render
* renders a div with text sibling to a node with server stream render
* renders a div with text sibling to a node with clean client render
* renders a div with text sibling to a node with client render on top of good server markup
* renders a div with text sibling to a node with client render on top of bad server markup
* renders a non-standard element with text with server string render
* renders a non-standard element with text with server stream render
* renders a non-standard element with text with clean client render
* renders a non-standard element with text with client render on top of good server markup
* renders a non-standard element with text with client render on top of bad server markup
* renders a custom element with text with server string render
* renders a custom element with text with server stream render
* renders a custom element with text with clean client render
* renders a custom element with text with client render on top of good server markup
* renders a custom element with text with client render on top of bad server markup
* renders a leading blank child with a text sibling with server string render
* renders a leading blank child with a text sibling with server stream render
* renders a leading blank child with a text sibling with clean client render
* renders a leading blank child with a text sibling with client render on top of good server markup
* renders a leading blank child with a text sibling with client render on top of bad server markup
* renders a trailing blank child with a text sibling with server string render
* renders a trailing blank child with a text sibling with server stream render
* renders a trailing blank child with a text sibling with clean client render
* renders a trailing blank child with a text sibling with client render on top of good server markup
* renders a trailing blank child with a text sibling with client render on top of bad server markup
* renders an element with two text children with server string render
* renders an element with two text children with server stream render
* renders an element with two text children with clean client render
* renders an element with two text children with client render on top of good server markup
* renders an element with two text children with client render on top of bad server markup
* renders a number as single child with server string render
* renders a number as single child with server stream render
* renders a number as single child with clean client render
* renders a number as single child with client render on top of good server markup
* renders a number as single child with client render on top of bad server markup
* renders zero as single child with server string render
* renders zero as single child with server stream render
* renders zero as single child with clean client render
* renders zero as single child with client render on top of good server markup
* renders zero as single child with client render on top of bad server markup
* renders an element with number and text children with server string render
* renders an element with number and text children with server stream render
* renders an element with number and text children with clean client render
* renders an element with number and text children with client render on top of good server markup
* renders an element with number and text children with client render on top of bad server markup
* renders null single child as blank with server string render
* renders null single child as blank with server stream render
* renders null single child as blank with clean client render
* renders null single child as blank with client render on top of good server markup
* renders null single child as blank with client render on top of bad server markup
* renders false single child as blank with server string render
* renders false single child as blank with server stream render
* renders false single child as blank with clean client render
* renders false single child as blank with client render on top of good server markup
* renders false single child as blank with client render on top of bad server markup
* renders undefined single child as blank with server string render
* renders undefined single child as blank with server stream render
* renders undefined single child as blank with clean client render
* renders undefined single child as blank with client render on top of good server markup
* renders undefined single child as blank with client render on top of bad server markup
* renders a null component children as empty with server string render
* renders a null component children as empty with server stream render
* renders a null component children as empty with clean client render
* renders a null component children as empty with client render on top of good server markup
* renders a null component children as empty with client render on top of bad server markup
* renders null children as blank with server string render
* renders null children as blank with server stream render
* renders null children as blank with clean client render
* renders null children as blank with client render on top of good server markup
* renders null children as blank with client render on top of bad server markup
* renders false children as blank with server string render
* renders false children as blank with server stream render
* renders false children as blank with clean client render
* renders false children as blank with client render on top of good server markup
* renders false children as blank with client render on top of bad server markup
* renders null and false children together as blank with server string render
* renders null and false children together as blank with server stream render
* renders null and false children together as blank with clean client render
* renders null and false children together as blank with client render on top of good server markup
* renders null and false children together as blank with client render on top of bad server markup
* renders only null and false children as blank with server string render
* renders only null and false children as blank with server stream render
* renders only null and false children as blank with clean client render
* renders only null and false children as blank with client render on top of good server markup
* renders only null and false children as blank with client render on top of bad server markup
* renders an svg element with server string render
* renders an svg element with server stream render
* renders an svg element with clean client render
* renders an svg element with client render on top of good server markup
* renders an svg element with client render on top of bad server markup
* renders svg element with an xlink with server string render
* renders svg element with an xlink with server stream render
* renders svg element with an xlink with clean client render
* renders svg element with an xlink with client render on top of good server markup
* renders svg element with an xlink with client render on top of bad server markup
* renders a math element with server string render
* renders a math element with server stream render
* renders a math element with clean client render
* renders a math element with client render on top of good server markup
* renders a math element with client render on top of bad server markup
* renders an img with server string render
* renders an img with server stream render
* renders an img with clean client render
* renders an img with client render on top of good server markup
* renders an img with client render on top of bad server markup
* renders a button with server string render
* renders a button with server stream render
* renders a button with clean client render
* renders a button with client render on top of good server markup
* renders a button with client render on top of bad server markup
* renders a div with dangerouslySetInnerHTML with server string render
* renders a div with dangerouslySetInnerHTML with server stream render
* renders a div with dangerouslySetInnerHTML with clean client render
* renders a div with dangerouslySetInnerHTML with client render on top of good server markup
* renders a div with dangerouslySetInnerHTML with client render on top of bad server markup
* renders a newline-eating tag with content not starting with \n with server string render
* renders a newline-eating tag with content not starting with \n with server stream render
* renders a newline-eating tag with content not starting with \n with clean client render
* renders a newline-eating tag with content not starting with \n with client render on top of good server markup
* renders a newline-eating tag with content not starting with \n with client render on top of bad server markup
* renders a newline-eating tag with content starting with \n with server string render
* renders a newline-eating tag with content starting with \n with server stream render
* renders a newline-eating tag with content starting with \n with clean client render
* renders a newline-eating tag with content starting with \n with client render on top of good server markup
* renders a newline-eating tag with content starting with \n with client render on top of bad server markup
* renders a normal tag with content starting with \n with server string render
* renders a normal tag with content starting with \n with server stream render
* renders a normal tag with content starting with \n with clean client render
* renders a normal tag with content starting with \n with client render on top of good server markup
* renders a normal tag with content starting with \n with client render on top of bad server markup
* renders stateless components with server string render
* renders stateless components with server stream render
* renders stateless components with clean client render
* renders stateless components with client render on top of good server markup
* renders stateless components with client render on top of bad server markup
* renders ES6 class components with server string render
* renders ES6 class components with server stream render
* renders ES6 class components with clean client render
* renders ES6 class components with client render on top of good server markup
* renders ES6 class components with client render on top of bad server markup
* renders factory components with server string render
* renders factory components with server stream render
* renders factory components with clean client render
* renders factory components with client render on top of good server markup
* renders factory components with client render on top of bad server markup
* renders single child hierarchies of components with server string render
* renders single child hierarchies of components with server stream render
* renders single child hierarchies of components with clean client render
* renders single child hierarchies of components with client render on top of good server markup
* renders single child hierarchies of components with client render on top of bad server markup
* renders multi-child hierarchies of components with server string render
* renders multi-child hierarchies of components with server stream render
* renders multi-child hierarchies of components with clean client render
* renders multi-child hierarchies of components with client render on top of good server markup
* renders multi-child hierarchies of components with client render on top of bad server markup
* renders a div with a child with server string render
* renders a div with a child with server stream render
* renders a div with a child with clean client render
* renders a div with a child with client render on top of good server markup
* renders a div with a child with client render on top of bad server markup
* renders a div with multiple children with server string render
* renders a div with multiple children with server stream render
* renders a div with multiple children with clean client render
* renders a div with multiple children with client render on top of good server markup
* renders a div with multiple children with client render on top of bad server markup
* renders a div with multiple children separated by whitespace with server string render
* renders a div with multiple children separated by whitespace with server stream render
* renders a div with multiple children separated by whitespace with clean client render
* renders a div with multiple children separated by whitespace with client render on top of good server markup
* renders a div with multiple children separated by whitespace with client render on top of bad server markup
* renders a div with a single child surrounded by whitespace with server string render
* renders a div with a single child surrounded by whitespace with server stream render
* renders a div with a single child surrounded by whitespace with clean client render
* renders a div with a single child surrounded by whitespace with client render on top of good server markup
* renders a div with a single child surrounded by whitespace with client render on top of bad server markup
* renders >,<, and & as single child with server string render
* renders >,<, and & as single child with server stream render
* renders >,<, and & as single child with clean client render
* renders >,<, and & as single child with client render on top of good server markup
* renders >,<, and & as single child with client render on top of bad server markup
* renders >,<, and & as multiple children with server string render
* renders >,<, and & as multiple children with server stream render
* renders >,<, and & as multiple children with clean client render
* renders >,<, and & as multiple children with client render on top of good server markup
* renders >,<, and & as multiple children with client render on top of bad server markup
* throws when rendering a string component with server string render
* throws when rendering a string component with clean client render
* throws when rendering a string component with client render on top of bad server markup
* throws when rendering an undefined component with server string render
* throws when rendering an undefined component with clean client render
* throws when rendering an undefined component with client render on top of bad server markup
* throws when rendering a number component with server string render
* throws when rendering a number component with clean client render
* throws when rendering a number component with client render on top of bad server markup
* throws when rendering null with server string render
* throws when rendering null with clean client render
* throws when rendering null with client render on top of bad server markup
* throws when rendering false with server string render
* throws when rendering false with clean client render
* throws when rendering false with client render on top of bad server markup
* throws when rendering undefined with server string render
* throws when rendering undefined with clean client render
* throws when rendering undefined with client render on top of bad server markup
* throws when rendering number with server string render
* throws when rendering number with clean client render
* throws when rendering number with client render on top of bad server markup
* throws when rendering string with server string render
* throws when rendering string with clean client render
* throws when rendering string with client render on top of bad server markup
* renders an input with a value and an onChange with server string render
* renders an input with a value and an onChange with server stream render
* renders an input with a value and an onChange with clean client render
* renders an input with a value and an onChange with client render on top of good server markup
* renders an input with a value and an onChange with client render on top of bad server markup
* renders an input with a value and readOnly with server string render
* renders an input with a value and readOnly with server stream render
* renders an input with a value and readOnly with clean client render
* renders an input with a value and readOnly with client render on top of good server markup
* renders an input with a value and readOnly with client render on top of bad server markup
* renders an input with a value and no onChange/readOnly with server string render
* renders an input with a value and no onChange/readOnly with server stream render
* renders an input with a value and no onChange/readOnly with clean client render
* renders an input with a value and no onChange/readOnly with client render on top of good server markup
* renders an input with a value and no onChange/readOnly with client render on top of bad server markup
* renders an input with a defaultValue with server string render
* renders an input with a defaultValue with server stream render
* renders an input with a defaultValue with clean client render
* renders an input with a defaultValue with client render on top of good server markup
* renders an input with a defaultValue with client render on top of bad server markup
* renders an input value overriding defaultValue with server string render
* renders an input value overriding defaultValue with server stream render
* renders an input value overriding defaultValue with clean client render
* renders an input value overriding defaultValue with client render on top of good server markup
* renders an input value overriding defaultValue with client render on top of bad server markup
* renders an input value overriding defaultValue no matter the prop order with server string render
* renders an input value overriding defaultValue no matter the prop order with server stream render
* renders an input value overriding defaultValue no matter the prop order with clean client render
* renders an input value overriding defaultValue no matter the prop order with client render on top of good server markup
* renders an input value overriding defaultValue no matter the prop order with client render on top of bad server markup
* renders a checkbox that is checked with an onChange with server string render
* renders a checkbox that is checked with an onChange with server stream render
* renders a checkbox that is checked with an onChange with clean client render
* renders a checkbox that is checked with an onChange with client render on top of good server markup
* renders a checkbox that is checked with an onChange with client render on top of bad server markup
* renders a checkbox that is checked with readOnly with server string render
* renders a checkbox that is checked with readOnly with server stream render
* renders a checkbox that is checked with readOnly with clean client render
* renders a checkbox that is checked with readOnly with client render on top of good server markup
* renders a checkbox that is checked with readOnly with client render on top of bad server markup
* renders a checkbox that is checked and no onChange/readOnly with server string render
* renders a checkbox that is checked and no onChange/readOnly with server stream render
* renders a checkbox that is checked and no onChange/readOnly with clean client render
* renders a checkbox that is checked and no onChange/readOnly with client render on top of good server markup
* renders a checkbox that is checked and no onChange/readOnly with client render on top of bad server markup
* renders a checkbox with defaultChecked with server string render
* renders a checkbox with defaultChecked with server stream render
* renders a checkbox with defaultChecked with clean client render
* renders a checkbox with defaultChecked with client render on top of good server markup
* renders a checkbox with defaultChecked with client render on top of bad server markup
* renders a checkbox checked overriding defaultChecked with server string render
* renders a checkbox checked overriding defaultChecked with server stream render
* renders a checkbox checked overriding defaultChecked with clean client render
* renders a checkbox checked overriding defaultChecked with client render on top of good server markup
* renders a checkbox checked overriding defaultChecked with client render on top of bad server markup
* renders a checkbox checked overriding defaultChecked no matter the prop order with server string render
* renders a checkbox checked overriding defaultChecked no matter the prop order with server stream render
* renders a checkbox checked overriding defaultChecked no matter the prop order with clean client render
* renders a checkbox checked overriding defaultChecked no matter the prop order with client render on top of good server markup
* renders a checkbox checked overriding defaultChecked no matter the prop order with client render on top of bad server markup
* renders a textarea with a value and an onChange with server string render
* renders a textarea with a value and an onChange with server stream render
* renders a textarea with a value and an onChange with clean client render
* renders a textarea with a value and an onChange with client render on top of good server markup
* renders a textarea with a value and an onChange with client render on top of bad server markup
* renders a textarea with a value and readOnly with server string render
* renders a textarea with a value and readOnly with server stream render
* renders a textarea with a value and readOnly with clean client render
* renders a textarea with a value and readOnly with client render on top of good server markup
* renders a textarea with a value and readOnly with client render on top of bad server markup
* renders a textarea with a value and no onChange/readOnly with server string render
* renders a textarea with a value and no onChange/readOnly with server stream render
* renders a textarea with a value and no onChange/readOnly with clean client render
* renders a textarea with a value and no onChange/readOnly with client render on top of good server markup
* renders a textarea with a value and no onChange/readOnly with client render on top of bad server markup
* renders a textarea with a defaultValue with server string render
* renders a textarea with a defaultValue with server stream render
* renders a textarea with a defaultValue with clean client render
* renders a textarea with a defaultValue with client render on top of good server markup
* renders a textarea with a defaultValue with client render on top of bad server markup
* renders a textarea value overriding defaultValue with server string render
* renders a textarea value overriding defaultValue with server stream render
* renders a textarea value overriding defaultValue with clean client render
* renders a textarea value overriding defaultValue with client render on top of good server markup
* renders a textarea value overriding defaultValue with client render on top of bad server markup
* renders a textarea value overriding defaultValue no matter the prop order with server string render
* renders a textarea value overriding defaultValue no matter the prop order with server stream render
* renders a textarea value overriding defaultValue no matter the prop order with clean client render
* renders a textarea value overriding defaultValue no matter the prop order with client render on top of good server markup
* renders a textarea value overriding defaultValue no matter the prop order with client render on top of bad server markup
* renders a select with a value and an onChange with server string render
* renders a select with a value and an onChange with server stream render
* renders a select with a value and an onChange with clean client render
* renders a select with a value and an onChange with client render on top of good server markup
* renders a select with a value and an onChange with client render on top of bad server markup
* renders a select with a value and readOnly with server string render
* renders a select with a value and readOnly with server stream render
* renders a select with a value and readOnly with clean client render
* renders a select with a value and readOnly with client render on top of good server markup
* renders a select with a value and readOnly with client render on top of bad server markup
* renders a select with a multiple values and an onChange with server string render
* renders a select with a multiple values and an onChange with server stream render
* renders a select with a multiple values and an onChange with clean client render
* renders a select with a multiple values and an onChange with client render on top of good server markup
* renders a select with a multiple values and an onChange with client render on top of bad server markup
* renders a select with a multiple values and readOnly with server string render
* renders a select with a multiple values and readOnly with server stream render
* renders a select with a multiple values and readOnly with clean client render
* renders a select with a multiple values and readOnly with client render on top of good server markup
* renders a select with a multiple values and readOnly with client render on top of bad server markup
* renders a select with a value and no onChange/readOnly with server string render
* renders a select with a value and no onChange/readOnly with server stream render
* renders a select with a value and no onChange/readOnly with clean client render
* renders a select with a value and no onChange/readOnly with client render on top of good server markup
* renders a select with a value and no onChange/readOnly with client render on top of bad server markup
* renders a select with a defaultValue with server string render
* renders a select with a defaultValue with server stream render
* renders a select with a defaultValue with clean client render
* renders a select with a defaultValue with client render on top of good server markup
* renders a select with a defaultValue with client render on top of bad server markup
* renders a select value overriding defaultValue with server string render
* renders a select value overriding defaultValue with server stream render
* renders a select value overriding defaultValue with clean client render
* renders a select value overriding defaultValue with client render on top of good server markup
* renders a select value overriding defaultValue with client render on top of bad server markup
* renders a select value overriding defaultValue no matter the prop order with server string render
* renders a select value overriding defaultValue no matter the prop order with server stream render
* renders a select value overriding defaultValue no matter the prop order with clean client render
* renders a select value overriding defaultValue no matter the prop order with client render on top of good server markup
* renders a select value overriding defaultValue no matter the prop order with client render on top of bad server markup
* renders a controlled text input with clean client render
* renders a controlled text input with client render on top of good server markup
* renders a controlled text input with client render on top of bad server markup
* renders a controlled textarea with clean client render
* renders a controlled textarea with client render on top of good server markup
* renders a controlled textarea with client render on top of bad server markup
* renders a controlled checkbox with clean client render
* renders a controlled checkbox with client render on top of good server markup
* renders a controlled checkbox with client render on top of bad server markup
* renders a controlled select with clean client render
* renders a controlled select with client render on top of good server markup
* renders a controlled select with client render on top of bad server markup
* should not blow away user-entered text on successful reconnect to an uncontrolled input
* should not blow away user-entered text on successful reconnect to a controlled input
* should not blow away user-entered text on successful reconnect to an uncontrolled checkbox
* should not blow away user-entered text on successful reconnect to a controlled checkbox
* should not blow away user-selected value on successful reconnect to an uncontrolled select
* should not blow away user-selected value on successful reconnect to an controlled select
* renders class child with context with server string render
* renders class child with context with server stream render
* renders class child with context with clean client render
* renders class child with context with client render on top of good server markup
* renders class child with context with client render on top of bad server markup
* renders stateless child with context with server string render
* renders stateless child with context with server stream render
* renders stateless child with context with clean client render
* renders stateless child with context with client render on top of good server markup
* renders stateless child with context with client render on top of bad server markup
* renders class child without context with server string render
* renders class child without context with server stream render
* renders class child without context with clean client render
* renders class child without context with client render on top of good server markup
* renders class child without context with client render on top of bad server markup
* renders stateless child without context with server string render
* renders stateless child without context with server stream render
* renders stateless child without context with clean client render
* renders stateless child without context with client render on top of good server markup
* renders stateless child without context with client render on top of bad server markup
* renders class child with wrong context with server string render
* renders class child with wrong context with server stream render
* renders class child with wrong context with clean client render
* renders class child with wrong context with client render on top of good server markup
* renders class child with wrong context with client render on top of bad server markup
* renders stateless child with wrong context with server string render
* renders stateless child with wrong context with server stream render
* renders stateless child with wrong context with clean client render
* renders stateless child with wrong context with client render on top of good server markup
* renders stateless child with wrong context with client render on top of bad server markup
* renders with context passed through to a grandchild with server string render
* renders with context passed through to a grandchild with server stream render
* renders with context passed through to a grandchild with clean client render
* renders with context passed through to a grandchild with client render on top of good server markup
* renders with context passed through to a grandchild with client render on top of bad server markup
* renders a child context overriding a parent context with server string render
* renders a child context overriding a parent context with server stream render
* renders a child context overriding a parent context with clean client render
* renders a child context overriding a parent context with client render on top of good server markup
* renders a child context overriding a parent context with client render on top of bad server markup
* renders a child context merged with a parent context with server string render
* renders a child context merged with a parent context with server stream render
* renders a child context merged with a parent context with clean client render
* renders a child context merged with a parent context with client render on top of good server markup
* renders a child context merged with a parent context with client render on top of bad server markup
* renders with a call to componentWillMount before getChildContext with server string render
* renders with a call to componentWillMount before getChildContext with server stream render
* renders with a call to componentWillMount before getChildContext with clean client render
* renders with a call to componentWillMount before getChildContext with client render on top of good server markup
* renders with a call to componentWillMount before getChildContext with client render on top of bad server markup
* throws when rendering if getChildContext exists without childContextTypes with server string render
* throws when rendering if getChildContext exists without childContextTypes with clean client render
* throws when rendering if getChildContext exists without childContextTypes with client render on top of bad server markup
* throws when rendering if getChildContext returns a value not in childContextTypes with server string render
* throws when rendering if getChildContext returns a value not in childContextTypes with clean client render
* throws when rendering if getChildContext returns a value not in childContextTypes with client render on top of bad server markup
* should not run ref code on server
* should run ref code on client
* should send the correct element to ref functions on client
* should have string refs on client when rendered over server markup
* should reconnect ES6 Class to ES6 Class
* should reconnect Pure Component to ES6 Class
* should reconnect Bare Element to ES6 Class
* should reconnect ES6 Class to Pure Component
* should reconnect Pure Component to Pure Component
* should reconnect Bare Element to Pure Component
* should reconnect ES6 Class to Bare Element
* should reconnect Pure Component to Bare Element
* should reconnect Bare Element to Bare Element
* should error reconnecting different element types
* should error reconnecting missing attributes
* should error reconnecting added attributes
* should error reconnecting different attribute values
* should error reconnecting missing style attribute
* should error reconnecting added style attribute
* should error reconnecting empty style attribute
* should error reconnecting added style values
* should error reconnecting different style values
* should reconnect number and string versions of a number
* should error reconnecting reordered style values
* should error reconnecting different text
* should reconnect a div with a number and string version of number
* should error reconnecting different numbers
* should error reconnecting different number from text
* should error reconnecting different text in two code blocks
* should error reconnecting missing children
* should error reconnecting added children
* should error reconnecting more children
* should error reconnecting fewer children
* should error reconnecting reordered children
* should error reconnecting a div with children separated by whitespace on the client
* should error reconnecting a div with children separated by different whitespace on the server
* should error reconnecting a div with children separated by different whitespace
* can distinguish an empty component from a dom node
* can distinguish an empty component from an empty text component
* should error reconnecting a div with different dangerouslySetInnerHTML
* renders injected attributes with server string render
* renders injected attributes with server stream render
* renders injected attributes with clean client render
* renders injected attributes with client render on top of good server markup
* renders injected attributes with client render on top of bad server markup

src/renderers/dom/shared/__tests__/ReactDOMTextComponent-test.js
* updates a mounted text component in place
* can be toggled in and out of the markup
* can reconcile text from pre-rendered markup

src/renderers/dom/shared/__tests__/ReactEventIndependence-test.js
* does not crash with other react inside
* does not crash with other react outside
* does not when event fired on unmounted tree

src/renderers/dom/shared/__tests__/ReactMount-test.js
* throws when given a non-node
* returns false on non-React containers
* returns true on React containers
* throws when given a string
* throws when given a factory
* should render different components in same root
* should unmount and remount if the key changes
* should reuse markup if rendering to the same target twice
* should warn if mounting into dirty rendered markup
* should not warn if mounting into non-empty node
* should warn when mounting into document.body
* should account for escaping on a checksum mismatch
* should warn if render removes React-rendered children
* should warn if the unmounted node was rendered by another copy of React
* passes the correct callback context
* initial mount is sync inside batchedUpdates, but task work is deferred until the end of the batch
* renders at a comment node

src/renderers/dom/shared/__tests__/ReactMountDestruction-test.js
* should destroy a react root upon request
* should warn when unmounting a non-container root node
* should warn when unmounting a non-container, non-root node

src/renderers/dom/shared/__tests__/ReactRenderDocument-test.js
* should be able to adopt server markup
* should not be able to unmount component from document node
* should not be able to switch root constructors
* should be able to mount into document
* renders over an existing text child without throwing
* should give helpful errors on state desync
* should throw on full document render w/ no markup
* supports findDOMNode on full-page components

src/renderers/dom/shared/__tests__/ReactServerRendering-test.js
* should generate simple markup
* should generate simple markup for self-closing tags
* should generate simple markup for attribute with \`>\` symbol
* should generate comment markup for component returns null
* should render composite components
* should only execute certain lifecycle methods
* should have the correct mounting behavior
* should throw with silly args
* should not put checksum and React ID on components
* should not put checksum and React ID on text components
* should not use comments for empty nodes
* should only execute certain lifecycle methods
* should throw with silly args
* allows setState in componentWillMount without using DOM
* allows setState in componentWillMount with custom constructor
* renders with props when using custom constructor
* renders with context when using custom constructor
* renders components with different batching strategies
* warns with a no-op when an async setState is triggered
* warns with a no-op when an async forceUpdate is triggered
* should warn when children are mutated during render

src/renderers/dom/shared/__tests__/escapeTextContentForBrowser-test.js
* should escape boolean to string
* should escape object to string
* should escape number to string
* should escape string

src/renderers/dom/shared/__tests__/findDOMNode-test.js
* findDOMNode should return null if passed null
* findDOMNode should find dom element
* findDOMNode should find dom element after an update from null
* findDOMNode should reject random objects
* findDOMNode should reject unmounted objects with render func
* findDOMNode should not throw an error when called within a component that is not mounted

src/renderers/dom/shared/__tests__/inputValueTracking-test.js
* should attach tracker to node
* should define \`value\` on the node instance
* should define \`checked\` on the node instance
* should initialize with the current value
* should initialize with the current \`checked\`
* should track value changes
* should tracked\`checked\` changes
* should update value manually
* should coerce value to a string
* should update value if it changed and return result
* should return true when updating untracked instance
* should return tracker from node
* should stop tracking
* does not crash for nodes with custom value property

src/renderers/dom/shared/__tests__/quoteAttributeValueForBrowser-test.js
* should escape boolean to string
* should escape object to string
* should escape number to string
* should escape string

src/renderers/dom/shared/__tests__/renderSubtreeIntoContainer-test.js
* should pass context when rendering subtree elsewhere
* should throw if parentComponent is invalid
* should update context if it changes due to setState
* should update context if it changes due to re-render
* should render portal with non-context-provider parent
* should get context through non-context-provider parent
* should get context through middle non-context-provider layer

src/renderers/dom/shared/__tests__/validateDOMNesting-test.js
* allows any tag with no context
* allows valid nestings
* prevents problematic nestings

src/renderers/dom/shared/eventPlugins/__tests__/BeforeInputEventPlugin-test.js
* extract onBeforeInput from native textinput events
* extract onBeforeInput from fallback objects

src/renderers/dom/shared/eventPlugins/__tests__/ChangeEventPlugin-test.js
* should fire change for checkbox input
* should catch setting the value programmatically
* should not fire change when setting the value programmatically
* should not fire change when setting checked programmatically
* should unmount
* should only fire change for checked radio button once
* should deduplicate input value change events
* should listen for both change and input events when supported
* should only fire events when the value changes for range inputs

src/renderers/dom/shared/eventPlugins/__tests__/EnterLeaveEventPlugin-test.js
* should set relatedTarget properly in iframe

src/renderers/dom/shared/eventPlugins/__tests__/FallbackCompositionState-test.js
* extracts value via \`getText()\`
* extracts when inserted at start of text
* extracts when inserted within text
* extracts when inserted at end of text
* extracts when inserted at start of text
* extracts when inserted within text
* extracts when inserted at end of text

src/renderers/dom/shared/eventPlugins/__tests__/SelectEventPlugin-test.js
* should skip extraction if no listeners are present
* should extract if an \`onSelect\` listener is present

src/renderers/dom/shared/eventPlugins/__tests__/SimpleEventPlugin-test.js
* A non-interactive tags click when disabled
* A non-interactive tags clicks bubble when disabled
* does not register a click when clicking a child of a disabled element
* triggers click events for children of disabled elements
* triggers parent captured click events when target is a child of a disabled elements
* triggers captured click events for children of disabled elements
* should forward clicks when it starts out not disabled
* should not forward clicks when it starts out disabled
* should forward clicks when it becomes not disabled
* should not forward clicks when it becomes disabled
* should work correctly if the listener is changed
* should forward clicks when it starts out not disabled
* should not forward clicks when it starts out disabled
* should forward clicks when it becomes not disabled
* should not forward clicks when it becomes disabled
* should work correctly if the listener is changed
* should forward clicks when it starts out not disabled
* should not forward clicks when it starts out disabled
* should forward clicks when it becomes not disabled
* should not forward clicks when it becomes disabled
* should work correctly if the listener is changed
* should forward clicks when it starts out not disabled
* should not forward clicks when it starts out disabled
* should forward clicks when it becomes not disabled
* should not forward clicks when it becomes disabled
* should work correctly if the listener is changed
* does not add a local click to interactive elements
* adds a local click listener to non-interactive elements

src/renderers/dom/shared/syntheticEvents/__tests__/SyntheticClipboardEvent-test.js
* returns event's clipboardData
* normalizes properties from the Event interface
* is able to \`preventDefault\` and \`stopPropagation\`
* is able to \`persist\`

src/renderers/dom/shared/syntheticEvents/__tests__/SyntheticEvent-test.js
* should normalize \`target\` from the nativeEvent
* should be able to \`preventDefault\`
* should be prevented if nativeEvent is prevented
* should be able to \`stopPropagation\`
* should be able to \`persist\`
* should be nullified if the synthetic event has called destructor and log warnings
* should warn when setting properties of a destructored synthetic event
* should warn if the synthetic event has been released when calling \`preventDefault\`
* should warn if the synthetic event has been released when calling \`stopPropagation\`
* should warn if Proxy is supported and the synthetic event is added a property

src/renderers/dom/shared/syntheticEvents/__tests__/SyntheticKeyboardEvent-test.js
* returns whatever getEventCharCode returns
* returns 0
* returns a passed keyCode
* returns 0
* returns whatever getEventCharCode returns
* returns a passed keyCode
* returns 0
* normalizes properties from the Event interface
* is able to \`preventDefault\` and \`stopPropagation\`
* is able to \`persist\`

src/renderers/dom/shared/syntheticEvents/__tests__/SyntheticWheelEvent-test.js
* should normalize properties from the Event interface
* should normalize properties from the MouseEvent interface
* should normalize properties from the WheelEvent interface
* should be able to \`preventDefault\` and \`stopPropagation\`
* should be able to \`persist\`

src/renderers/dom/shared/utils/__tests__/getEventCharCode-test.js
* returns 13
* returns charCode
* returns 13
* returns 0
* returns keyCode
* returns 13
* returns 0

src/renderers/dom/shared/utils/__tests__/getEventKey-test.js
* returns a normalized value
* returns a key
* returns 'Enter'
* returns a string from a charCode
* returns a translated key
* returns Unidentified
* returns an empty string

src/renderers/dom/shared/utils/__tests__/getNodeForCharacterOffset-test.js
* should handle siblings
* should handle trailing chars
* should handle trees
* should handle non-existent offset

src/renderers/dom/shared/utils/__tests__/setInnerHTML-test.js
* sets innerHTML on it

src/renderers/dom/shared/wrappers/__tests__/ReactDOMIframe-test.js
* should trigger load events

src/renderers/dom/shared/wrappers/__tests__/ReactDOMInput-test.js
* should properly control a value even if no event listener exists
* should control a value in reentrant events
* should control values in reentrant events with different targets
* does change the number 2 to "2.0" with no change handler
* does change the string "2" to "2.0" with no change handler
* changes the number 2 to "2.0" using a change handler
* does change the string ".98" to "0.98" with no change handler
* distinguishes precision for extra zeroes in string number values
* should display \`defaultValue\` of number 0
* only assigns defaultValue if it changes
* should display "true" for \`defaultValue\` of \`true\`
* should display "false" for \`defaultValue\` of \`false\`
* should update \`defaultValue\` for uncontrolled input
* should update \`defaultValue\` for uncontrolled date/time input
* should take \`defaultValue\` when changing to uncontrolled input
* should render defaultValue for SSR
* should render value for SSR
* should render name attribute if it is supplied
* should render name attribute if it is supplied for SSR
* should not render name attribute if it is not supplied
* should not render name attribute if it is not supplied for SSR
* should display "foobar" for \`defaultValue\` of \`objToString\`
* should display \`value\` of number 0
* should allow setting \`value\` to \`true\`
* should allow setting \`value\` to \`false\`
* should allow setting \`value\` to \`objToString\`
* should not incur unnecessary DOM mutations
* should not incur unnecessary DOM mutations for numeric type conversion
* should not incur unnecessary DOM mutations for the boolean type conversion
* should properly control a value of number \`0\`
* should properly control 0.0 for a text input
* should properly control 0.0 for a number input
* should properly transition from an empty value to 0
* should properly transition from 0 to an empty value
* should have the correct target value
* should not set a value for submit buttons unnecessarily
* should control radio buttons
* should control radio buttons if the tree updates during render
* should warn with value and no onChange handler and readOnly specified
* should have a this value of undefined if bind is not used
* should warn with checked and no onChange handler with readOnly specified
* should update defaultValue to empty string
* should warn if value is null
* should warn if checked and defaultChecked props are specified
* should warn if value and defaultValue props are specified
* should warn if controlled input switches to uncontrolled (value is undefined)
* should warn if controlled input switches to uncontrolled (value is null)
* should warn if controlled input switches to uncontrolled with defaultValue
* should warn if uncontrolled input (value is undefined) switches to controlled
* should warn if uncontrolled input (value is null) switches to controlled
* should warn if controlled checkbox switches to uncontrolled (checked is undefined)
* should warn if controlled checkbox switches to uncontrolled (checked is null)
* should warn if controlled checkbox switches to uncontrolled with defaultChecked
* should warn if uncontrolled checkbox (checked is undefined) switches to controlled
* should warn if uncontrolled checkbox (checked is null) switches to controlled
* should warn if controlled radio switches to uncontrolled (checked is undefined)
* should warn if controlled radio switches to uncontrolled (checked is null)
* should warn if controlled radio switches to uncontrolled with defaultChecked
* should warn if uncontrolled radio (checked is undefined) switches to controlled
* should warn if uncontrolled radio (checked is null) switches to controlled
* should not warn if radio value changes but never becomes controlled
* should not warn if radio value changes but never becomes uncontrolled
* should warn if radio checked false changes to become uncontrolled
* sets type, step, min, max before value always
* sets value properly with type coming later in props
* does not raise a validation warning when it switches types
* resets value of date/time input to fix bugs in iOS Safari
* always sets the attribute when values change on text inputs
* does not set the value attribute on number inputs if focused
* sets the value attribute on number inputs on blur
* an uncontrolled number input will not update the value attribute on blur
* an uncontrolled text input will not update the value attribute on blur

src/renderers/dom/shared/wrappers/__tests__/ReactDOMOption-test.js
* should flatten children to a string
* should ignore and warn invalid children types
* should ignore null/undefined/false children without warning
* should be able to use dangerouslySetInnerHTML on option
* should set attribute for empty value
* should allow ignoring \`value\` on option

src/renderers/dom/shared/wrappers/__tests__/ReactDOMSelect-test.js
* should allow setting \`defaultValue\`
* should not throw with \`defaultValue\` and without children
* should not control when using \`defaultValue\`
* should allow setting \`defaultValue\` with multiple
* should allow setting \`value\`
* should allow setting \`value\` to __proto__
* should not throw with \`value\` and without children
* should allow setting \`value\` with multiple
* should allow setting \`value\` to __proto__ with multiple
* should not select other options automatically
* should reset child options selected when they are changed and \`value\` is set
* should allow setting \`value\` with \`objectToString\`
* should allow switching to multiple
* should allow switching from multiple
* should remember value when switching to uncontrolled
* should remember updated value when switching to uncontrolled
* should support server-side rendering
* should support server-side rendering with defaultValue
* should support server-side rendering with multiple
* should not control defaultValue if readding options
* should warn if value is null
* should refresh state on change
* should warn if value and defaultValue props are specified
* should be able to safely remove select onChange
* should select grandchild options nested inside an optgroup

src/renderers/dom/shared/wrappers/__tests__/ReactDOMTextarea-test.js
* should allow setting \`defaultValue\`
* should display \`defaultValue\` of number 0
* should display "false" for \`defaultValue\` of \`false\`
* should display "foobar" for \`defaultValue\` of \`objToString\`
* should set defaultValue
* should not render value as an attribute
* should display \`value\` of number 0
* should update defaultValue to empty string
* should allow setting \`value\` to \`giraffe\`
* should render defaultValue for SSR
* should render value for SSR
* should allow setting \`value\` to \`true\`
* should allow setting \`value\` to \`false\`
* should allow setting \`value\` to \`objToString\`
* should take updates to \`defaultValue\` for uncontrolled textarea
* should take updates to children in lieu of \`defaultValue\` for uncontrolled textarea
* should not incur unnecessary DOM mutations
* should properly control a value of number \`0\`
* should treat children like \`defaultValue\`
* should keep value when switching to uncontrolled element if not changed
* should keep value when switching to uncontrolled element if changed
* should allow numbers as children
* should allow booleans as children
* should allow objects as children
* should throw with multiple or invalid children
* should unmount
* should warn if value is null
* should warn if value and defaultValue are specified

src/renderers/dom/test/__tests__/ReactTestUtils-test.js
* should call all of the lifecycle hooks
* should only render 1 level deep
* should have shallow rendering
* should enable shouldComponentUpdate to prevent a re-render
* should shallow render a functional component
* should throw for invalid elements
* should have shallow unmounting
* can shallow render to null
* can shallow render with a ref
* lets you update shallowly rendered components
* can access the mounted component instance
* can shallowly render components with contextTypes
* can shallowly render components with ref as function
* can setState in componentWillMount when shallow rendering
* can setState in componentWillReceiveProps when shallow rendering
* can setState with an updater function
* can setState with a callback
* can replaceState with a callback
* can forceUpdate with a callback
* can pass context when shallowly rendering
* should track context across updates
* can fail context when shallowly rendering
* should warn about propTypes (but only once)
* can scryRenderedDOMComponentsWithClass with TextComponent
* can scryRenderedDOMComponentsWithClass with className contains \n
* can scryRenderedDOMComponentsWithClass with multiple classes
* traverses children in the correct order
* should support injected wrapper components as DOM components
* should change the value of an input field
* should change the value of an input field in a component
* should throw when attempting to use ReactTestUtils.Simulate with shallow rendering
* should not warn when simulating events with extra properties
* can scry with stateless components involved
* should enable rendering of cloned element
* should set the type of the event
* should work with renderIntoDocument
* should call setState callback with no arguments

src/renderers/native/__tests__/ReactNativeAttributePayload-test.js
* should work with simple example
* should skip fields that are equal
* should remove fields
* should remove fields that are set to undefined
* should ignore invalid fields
* should use the diff attribute
* should not use the diff attribute on addition/removal
* should do deep diffs of Objects by default
* should work with undefined styles
* should work with empty styles
* should flatten nested styles and predefined styles
* should reset a value to a previous if it is removed
* should not clear removed props if they are still in another slot
* should clear a prop if a later style is explicit null/undefined
* should convert functions to booleans

src/renderers/native/__tests__/ReactNativeEvents-test.js
* handles events
* handles events on text nodes
* handles when a responder is unmounted while a touch sequence is in progress
* handles events without target

src/renderers/native/__tests__/ReactNativeMount-test.js
* should be able to create and render a native component
* should be able to create and update a native component
* returns the correct instance and calls it in the callback
* renders and reorders children
* calls setState with no arguments

src/renderers/native/__tests__/createReactNativeComponentClass-test.js
* should register viewConfigs
* should not allow viewConfigs with duplicate uiViewClassNames to be registered

src/renderers/shared/__tests__/ReactDOMFrameScheduling-test.js
* throws when requestAnimationFrame is not polyfilled in the browser
* can import findDOMNode in Node environment

src/renderers/shared/__tests__/ReactDebugTool-test.js
* should add and remove hooks
* warns once when an error is thrown in hook
* returns isProfiling state

src/renderers/shared/fiber/__tests__/ReactCoroutine-test.js
* should render a coroutine
* should update a coroutine
* should unmount a composite in a coroutine
* should handle deep updates in coroutine

src/renderers/shared/fiber/__tests__/ReactFiberHostContext-test.js
* works with null host context

src/renderers/shared/fiber/__tests__/ReactIncremental-test.js
* should render a simple component
* should render a simple component, in steps if needed
* updates a previous render
* can cancel partially rendered work and restart
* should call callbacks even if updates are aborted
* can deprioritize unfinished work and resume it later
* can deprioritize a tree from without dropping work
* memoizes work even if shouldComponentUpdate returns false
* can update in the middle of a tree using setState
* can queue multiple state updates
* can use updater form of setState
* can call setState inside update callback
* can replaceState
* can forceUpdate
* can nest batchedUpdates
* can handle if setState callback throws
* merges and masks context
* does not leak own context into context provider
* provides context when reusing work
* reads context when setState is below the provider
* reads context when setState is above the provider
* maintains the correct context when providers bail out due to low priority
* maintains the correct context when unwinding due to an error in render
* should not recreate masked context unless inputs have changed

src/renderers/shared/fiber/__tests__/ReactIncrementalErrorHandling-test.js
* catches render error in a boundary during full deferred mounting
* catches render error in a boundary during partial deferred mounting
* catches render error in a boundary during synchronous mounting
* catches render error in a boundary during batched mounting
* propagates an error from a noop error boundary during full deferred mounting
* propagates an error from a noop error boundary during partial deferred mounting
* propagates an error from a noop error boundary during synchronous mounting
* propagates an error from a noop error boundary during batched mounting
* applies batched updates regardless despite errors in scheduling
* applies nested batched updates despite errors in scheduling
* applies sync updates regardless despite errors in scheduling
* can schedule updates after uncaught error in render on mount
* can schedule updates after uncaught error in render on update
* can schedule updates after uncaught error during umounting
* continues work on other roots despite caught errors
* continues work on other roots despite uncaught errors
* unwinds the context stack correctly on error
* catches reconciler errors in a boundary during mounting
* catches reconciler errors in a boundary during update
* recovers from uncaught reconciler errors
* unmounts components with uncaught errors
* does not interrupt unmounting if detaching a ref throws
* handles error thrown by host config while working on failed root
* handles error thrown by top-level callback
* should log errors that occur during the begin phase
* should log errors that occur during the commit phase
* should ignore errors thrown in log method to prevent cycle
* should relay info about error boundary and retry attempts if applicable

src/renderers/shared/fiber/__tests__/ReactIncrementalPerf-test.js
* measures a simple reconciliation
* skips parents during setState
* warns on cascading renders from setState
* warns on cascading renders from top-level render
* does not treat setState from cWM or cWRP as cascading
* captures all lifecycles
* measures deprioritized work
* measures deferred work in chunks
* recovers from fatal errors
* recovers from caught errors
* deduplicates lifecycle names during commit to reduce overhead
* supports coroutines
* supports portals
* does not schedule an extra callback if setState is called during a synchronous commit phase

src/renderers/shared/fiber/__tests__/ReactIncrementalReflection-test.js
* handles isMounted even when the initial render is deferred
* handles isMounted when an unmount is deferred
* finds no node before insertion and correct node before deletion

src/renderers/shared/fiber/__tests__/ReactIncrementalScheduling-test.js
* schedules and flushes deferred work
* searches for work on other roots once the current root completes
* schedules top-level updates in order of priority
* schedules top-level updates with same priority in order of insertion
* works on deferred roots in the order they were scheduled
* schedules sync updates when inside componentDidMount/Update
* can opt-in to async scheduling inside componentDidMount/Update
* performs Task work even after time runs out
* can opt-out of batching using unbatchedUpdates
* nested updates are always deferred, even inside unbatchedUpdates
* updates do not schedule a new callback if already inside a callback

src/renderers/shared/fiber/__tests__/ReactIncrementalSideEffects-test.js
* can update child nodes of a host instance
* can update child nodes of a fragment
* can update child nodes rendering into text nodes
* can deletes children either components, host or text
* can delete a child that changes type - implicit keys
* can delete a child that changes type - explicit keys
* does not update child nodes if a flush is aborted
* preserves a previously rendered node when deprioritized
* can reuse side-effects after being preempted
* can reuse side-effects after being preempted, if shouldComponentUpdate is false
* can update a completed tree before it has a chance to commit
* updates a child even though the old props is empty
* deprioritizes setStates that happens within a deprioritized tree
* calls callback after update is flushed
* calls setState callback even if component bails out
* calls componentWillUnmount after a deletion, even if nested
* calls componentDidMount/Update after insertion/update
* invokes ref callbacks after insertion/update/unmount
* supports string refs

src/renderers/shared/fiber/__tests__/ReactIncrementalTriangle-test.js
* renders the triangle demo without inconsistencies
* fuzz tester

src/renderers/shared/fiber/__tests__/ReactIncrementalUpdates-test.js
* applies updates in order of priority
* applies updates with equal priority in insertion order
* only drops updates with equal or lesser priority when replaceState is called
* can abort an update, schedule additional updates, and resume
* can abort an update, schedule a replaceState, and resume
* passes accumulation of previous updates to replaceState updater function
* does not call callbacks that are scheduled by another callback until a later commit
* gives setState during reconciliation the same priority as whatever level is currently reconciling
* enqueues setState inside an updater function as if the in-progress update is progressed (and warns)

src/renderers/shared/fiber/__tests__/ReactTopLevelFragment-test.js
* should render a simple fragment at the top of a component
* should preserve state when switching from a single child
* should not preserve state when switching to a nested array
* preserves state if an implicit key slot switches from/to null
* should preserve state in a reorder

src/renderers/shared/fiber/__tests__/ReactTopLevelText-test.js
* should render a component returning strings directly from render
* should render a component returning numbers directly from render

src/renderers/shared/shared/event/__tests__/EventPluginRegistry-test.js
* should be able to inject ordering before plugins
* should be able to inject plugins before and after ordering
* should be able to inject repeated plugins and out-of-order
* should throw if plugin does not implement \`extractEvents\`
* should throw if plugin does not exist in ordering
* should throw if ordering is injected more than once
* should throw if different plugins injected using same name
* should publish registration names of injected plugins
* should throw if multiple registration names collide
* should throw if an invalid event is published

src/renderers/shared/shared/event/eventPlugins/__tests__/ResponderEventPlugin-test.js
* should do nothing when no one wants to respond
* should grant responder grandParent while capturing
* should grant responder parent while capturing
* should grant responder child while capturing
* should grant responder child while bubbling
* should grant responder parent while bubbling
* should grant responder grandParent while bubbling
* should grant responder grandParent while capturing move
* should grant responder parent while capturing move
* should grant responder child while capturing move
* should grant responder child while bubbling move
* should grant responder parent while bubbling move
* should grant responder grandParent while bubbling move
* should bubble negotiation to first common ancestor of responder
* should bubble negotiation to first common ancestor of responder then transfer
* should negotiate with deepest target on second touch if nothing is responder
* should negotiate until first common ancestor when there are siblings
* should notify of being rejected. responderStart/Move happens on current responder
* should negotiate scroll
* should cancel correctly

src/renderers/shared/stack/reconciler/__tests__/Transaction-test.js
* should invoke closers with/only-with init returns
* should invoke closers and wrapped method when inits success
* should throw when wrapped operation throws
* should throw errors in transaction close
* should allow nesting of transactions

src/renderers/shared/utils/__tests__/ReactErrorUtils-test.js
* it should rethrow caught errors (development)
* should call the callback the passed arguments (development)
* should call the callback with the provided context (development)
* should catch errors (development)
* should return false from clearCaughtError if no error was thrown (development)
* can nest with same debug name (development)
* does not return nested errors (development)
* can be shimmed (development)
* it should rethrow caught errors (production)
* should call the callback the passed arguments (production)
* should call the callback with the provided context (production)
* should catch errors (production)
* should return false from clearCaughtError if no error was thrown (production)
* can nest with same debug name (production)
* does not return nested errors (production)
* catches null values
* can be shimmed (production)

src/renderers/shared/utils/__tests__/accumulateInto-test.js
* throws if the second item is null
* returns the second item if first is null
* merges the second into the first if first item is an array
* returns a new array if first or both items are scalar

src/renderers/shared/utils/__tests__/adler32-test.js
* generates differing checksums
* generates consistent checksums
* is case sensitive
* doesn't barf on large inputs
* doesn't barf on international inputs

src/renderers/testing/__tests__/ReactTestRenderer-test.js
* renders a simple component
* renders a top-level empty component
* exposes a type flag
* can render a composite component
* renders some basics with an update
* exposes the instance
* updates types
* updates children
* does the full lifecycle
* gives a ref to native components
* warns correctly for refs on SFCs
* allows an optional createNodeMock function
* supports unmounting when using refs
* supports unmounting inner instances
* supports updates when using refs
* supports error boundaries
* can update text nodes
* toTree() renders simple components returning host components
* toTree() handles null rendering components
* root instance and createNodeMock ref return the same value
* toTree() renders complicated trees of composites and hosts
* can update text nodes when rendered as root
* can render and update root fragments

src/shared/utils/__tests__/PooledClass-test.js
* should initialize a pool correctly
* should return a new instance when the pool is empty
* should return the instance back into the pool when it gets released
* should return an old instance if available in the pool
* should call the destructor when instance gets released
* should accept poolers with different arguments
* should call a new constructor with arguments
* should call an old constructor with arguments
* should throw when the class releases an instance of a different type
* should throw if no destructor is defined

src/shared/utils/__tests__/reactProdInvariant-test.js
* should throw with the correct number of \`%s\`s in the URL
`;
