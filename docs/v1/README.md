# API v1 Utility Documentation
Below are a list of all the utility methods that are available for the v1 of the API

## Query
Function|Description
:-----|:----------
**[getFulfillmentGroupedMessages](query/get_fulfillment_grouped_messages.md)** |Returns a modified `Array` of Dialogflow Message objects
**[getFulfillmentMessages](query/get_fulfillment_messages.md)** |Returns an `Array` of Dialogflow Message objects
**[getResponseContextParameters](query/get_response_context_parameters.md)** |Returns an object consisting of "parameter_name":"parameter_value" and "parameter_name.original":"original_parameter_value" pairs of  the specified `context` object
**[getResponseContext](query/get_response_context.md)** |Returns a single `context` object from the `result.contexts`
**[getResponseContexts](query/get_response_contexts.md)** |Returns some or all of `contexts` objects from the `result.contexts`
**[getResponseFulfillment](query/get_response_fulfillment.md)** |Returns the `result.fulfillment` object
**[getResponseResult](query/get_response_result.md)** |Returns the `result` object
**[getResultParameter](query/get_result_parameter.md)** |Returns the value from a "parameter_name":"parameter_value" pair
**[getResultParameters](query/get_result_parameters.md)** |Returns an object consisting of "parameter_name":"parameter_value" pairs
**[mergeContexts](query/merge_contexts.md)** |Merges two `Array`s of `context` objects
