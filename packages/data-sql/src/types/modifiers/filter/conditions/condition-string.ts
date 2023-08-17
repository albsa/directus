import type { AbstractSqlQueryNode, AbstractSqlQuerySelectNode, ValueNode } from '../../../index.js';

/**
 * Condition to filter rows where a string column value contains, starts with, ends with, or is equal to another given string.
 */
export interface SqlConditionStringNode extends AbstractSqlQueryNode {
	type: 'condition-string';

	/* The column in question. */
	target: AbstractSqlQuerySelectNode;

	/* The valid operators for a comparison against strings. */
	operation: 'contains' | 'starts_with' | 'ends_with' | 'eq';

	/*
	 * The string to compare the column value with.
	 * Specifies a reference to the list of parameters.
	 */
	compareTo: ValueNode;
}