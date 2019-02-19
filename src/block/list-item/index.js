// Import dependencies
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

import DescriptionListItemEdit from './edit';

// Register description list item
registerBlockType( 'lmt/description-list-item', {
	title: __( 'Description List Item' ),
	parent: [ 'lmt/description-list' ],
	icon: 'feedback',
	description: __( 'Description List Item.' ),
	category: 'common',
	attributes: {
		isTerm: {
			type: 'boolean',
			default: true,
		},
	},

	edit: DescriptionListItemEdit,

	save( { attributes } ) {
		const { isTerm } = attributes;

		return isTerm ?
			<dt><InnerBlocks.Content /></dt> :
			<dd><InnerBlocks.Content /></dd>;
	},
} );
