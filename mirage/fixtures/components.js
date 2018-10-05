export default [
	{
		"id": "grid",
		"hierarchy": "architecture",
		"name": "Grid",
		"description": "A grid structure based on flex. This system is meant to be used\n in generic formatting cases where we don't want to add flex mixins to existing elements.\n A flex grid can be nested indefinitely,\n and a div can be both a flex container AND a flex item.\n The flex magic works only on a container's (using .grid-row or .grid-column,\n or the flex-group mixin) direct children (.flex-item).\n If a direct child to a flex container doesn't have a .flex-item class of\n some sort, it will behave with defaults and maintain its natural width/height\n (see flex documentation on the web for more).\n Note that this system is very basic and will be fleshed out more.",
		"blocks": [
			{
				"section": "Rows",
				"description": "Use the .grid-row class to create a row of flex items. All direct children will automatically line up next to each other.",
				"markup": {
					"example": "   <div class=\"grid-row\">\n     <div class=\"demo-box\"></div>\n     <div class=\"demo-box\"></div>\n     <div class=\"demo-box\"></div>\n   </div>",
					"escaped": "   &lt;div class=\"grid-row\"&gt;\n     &lt;div class=\"demo-box\"&gt;&lt;/div&gt;\n     &lt;div class=\"demo-box\"&gt;&lt;/div&gt;\n     &lt;div class=\"demo-box\"&gt;&lt;/div&gt;\n   &lt;/div&gt;"
				}
			},
			{
				"section": "Columns",
				"description": "Use the .grid-column class to create a column of flex items.\n All direct children will automatically stack on top of each other.",
				"markup": {
					"example": "   <div class=\"grid-column\">\n     <div class=\"demo-box\"></div>\n     <div class=\"demo-box\"></div>\n     <div class=\"demo-box\"></div>\n   </div>",
					"escaped": "   &lt;div class=\"grid-column\"&gt;\n     &lt;div class=\"demo-box\"&gt;&lt;/div&gt;\n     &lt;div class=\"demo-box\"&gt;&lt;/div&gt;\n     &lt;div class=\"demo-box\"&gt;&lt;/div&gt;\n   &lt;/div&gt;"
				}
			},
			{
				"section": "Items",
				"description": "For finer control over how the flex children should behave,\n use the .grid-item-{#} classes. The number denotes how much space the item\n should fill compared to other items. Currently we have classes for up to .grid-item-12.\n Items without these classes will keep their natural size.",
				"markup": {
					"example": "   <p>Example Row with even items</p>\n   <div class=\"grid-row\">\n     <div class=\"grid-item-1 demo-box\"></div>\n     <div class=\"grid-item-1 demo-box\"></div>\n     <div class=\"grid-item-1 demo-box\"></div>\n   </div>\n   <p>Example Row with uneven items</p>\n   <div class=\"grid-row\">\n     <div class=\"grid-item-1 demo-box\"></div>\n     <div class=\"grid-item-3 demo-box\"></div>\n     <div class=\"grid-item-2 demo-box\"></div>\n   </div>",
					"escaped": "   &lt;p&gt;Example Row with even items&lt;/p&gt;\n   &lt;div class=\"grid-row\"&gt;\n     &lt;div class=\"grid-item-1 demo-box\"&gt;&lt;/div&gt;\n     &lt;div class=\"grid-item-1 demo-box\"&gt;&lt;/div&gt;\n     &lt;div class=\"grid-item-1 demo-box\"&gt;&lt;/div&gt;\n   &lt;/div&gt;\n   &lt;p&gt;Example Row with uneven items&lt;/p&gt;\n   &lt;div class=\"grid-row\"&gt;\n     &lt;div class=\"grid-item-1 demo-box\"&gt;&lt;/div&gt;\n     &lt;div class=\"grid-item-3 demo-box\"&gt;&lt;/div&gt;\n     &lt;div class=\"grid-item-2 demo-box\"&gt;&lt;/div&gt;\n   &lt;/div&gt;"
				}
			}
		]
	},
	{
		"id": "buttons",
		"hierarchy": "elements",
		"name": "Button",
		"description": "The various buttons used by the demo component library.",
		"blocks": [
			{
				"section": "Button Types",
				"description": "We have several types of buttons for different use cases.",
				"state": [
					{
						"name": ".button-default",
						"escaped": "button-default",
						"description": "The most basic button to be used in most cases"
					},
					{
						"name": ".button-primary",
						"escaped": "button-primary",
						"description": "Button to be used to indicate a primary action."
					},
					{
						"name": ".button-danger",
						"escaped": "button-danger",
						"description": "Button to indicate a potentially dangerous action"
					},
					{
						"name": ".button-link",
						"escaped": "button-link",
						"description": "A button styled as a regular text link. (Used semantically for actions instead of links)"
					}
				],
				"markup": {
					"example": "   <button class=\"button-default\">Default</button>\n   <button class=\"button-primary\">Primary</button>\n   <button class=\"button-danger\">Danger</button>\n   <p>Here is a <button class=\"button-link\">button link</button> that blends in with content like a normal anchor tag.</p>",
					"escaped": "   &lt;button class=\"button-default\"&gt;Default&lt;/button&gt;\n   &lt;button class=\"button-primary\"&gt;Primary&lt;/button&gt;\n   &lt;button class=\"button-danger\"&gt;Danger&lt;/button&gt;\n   &lt;p&gt;Here is a &lt;button class=\"button-link\"&gt;button link&lt;/button&gt; that blends in with content like a normal anchor tag.&lt;/p&gt;"
				}
			},
			{
				"section": "Button Sizes",
				"description": "Different button sizes that can be applied to any type of button.",
				"state": [
					{
						"name": ".button-sm",
						"escaped": "button-sm",
						"description": "small"
					},
					{
						"name": ".button-lg",
						"escaped": "button-lg",
						"description": "large"
					}
				],
				"markup": {
					"example": "   <div class=\"button-default button-sm\">Small</div>\n   <div class=\"button-default\">Default</div>\n   <div class=\"button-default button-lg\">Large</div>",
					"escaped": "   &lt;div class=\"button-default button-sm\"&gt;Small&lt;/div&gt;\n   &lt;div class=\"button-default\"&gt;Default&lt;/div&gt;\n   &lt;div class=\"button-default button-lg\"&gt;Large&lt;/div&gt;"
				}
			},
			{
				"section": "Button Utilties",
				"description": "Sometimes we need extra states for the buttons.",
				"state": [
					{
						"name": ".button-dotted",
						"escaped": "button-dotted",
						"description": "Indicates a temporary button"
					},
					{
						"name": ".button-dashed",
						"escaped": "button-dashed",
						"description": "Indicates a temporary button"
					}
				],
				"markup": {
					"example": "   <div class=\"button-default button-dotted\">Dotted</div>\n   <div class=\"button-default button-dashed\">Dashed</div>",
					"escaped": "   &lt;div class=\"button-default button-dotted\"&gt;Dotted&lt;/div&gt;\n   &lt;div class=\"button-default button-dashed\"&gt;Dashed&lt;/div&gt;"
				}
			}
		]
	},
	{
		"id": "inputs",
		"hierarchy": "elements",
		"name": "Inputs",
		"description": "Different types of inputs.",
		"blocks": [
			{
				"section": "Text Input",
				"description": "Plain text input. ",
				"state": [
					{
						"name": ".text-input",
						"escaped": "text-input",
						"description": "default"
					},
					{
						"name": ".is-invalid (:invalid)",
						"escaped": "is-invalid ( pseudo-class-invalid)",
						"description": "invalid state"
					}
				],
				"markup": {
					"example": "   <input type=\"text\" class=\"text-input\" value=\"text input\">\n   <input type=\"text\" class=\"text-input is-invalid\" value=\"text input invalid\">",
					"escaped": "   &lt;input type=\"text\" class=\"text-input\" value=\"text input\"&gt;\n   &lt;input type=\"text\" class=\"text-input is-invalid\" value=\"text input invalid\"&gt;"
				}
			}
		]
	},
	{
		"id": "alert",
		"hierarchy": "widgets",
		"name": "Alert",
		"description": "Alert system used to communicate certain app states to the user.",
		"blocks": [
			{
				"section": "Alert Types",
				"description": "Alert system used to communicate certain app states to the user.",
				"state": [
					{
						"name": ".alert-success",
						"escaped": "alert-success",
						"description": "Green bar to be triggered when an action is successful"
					},
					{
						"name": ".alert-warning",
						"escaped": "alert-warning",
						"description": "Yellow bar to be triggered when an action is unsuccessful, or the user tries an action that is not allowed"
					},
					{
						"name": ".alert-error",
						"escaped": "alert-error",
						"description": "Red bar to be triggered when something goes wrong in the app, we should never purposefully trigger a redbar"
					}
				],
				"markup": {
					"example": "   <div class=\"alert-success\">Your action was successful!</div>\n   <div class=\"alert-success\">Your action was successful! (dismissable)\n    <a href=\"#\" class=\"alert-close\">×</a>\n   </div>\n   <div class=\"alert-warning\">Your action was unsuccessful.</div>\n   <div class=\"alert-warning\">Your action was unsuccessful. (dismissable)\n    <a href=\"#\" class=\"alert-close\">×</a>\n   </div>\n   <div class=\"alert-error\">Something went wrong, please reload.</div>\n   <div class=\"alert-error\">Something went wrong, please reload. (dismissable)\n    <a href=\"#\" class=\"alert-close\">×</a>\n   </div>",
					"escaped": "   &lt;div class=\"alert-success\"&gt;Your action was successful!&lt;/div&gt;\n   &lt;div class=\"alert-success\"&gt;Your action was successful! (dismissable)\n    &lt;a href=\"#\" class=\"alert-close\"&gt;×&lt;/a&gt;\n   &lt;/div&gt;\n   &lt;div class=\"alert-warning\"&gt;Your action was unsuccessful.&lt;/div&gt;\n   &lt;div class=\"alert-warning\"&gt;Your action was unsuccessful. (dismissable)\n    &lt;a href=\"#\" class=\"alert-close\"&gt;×&lt;/a&gt;\n   &lt;/div&gt;\n   &lt;div class=\"alert-error\"&gt;Something went wrong, please reload.&lt;/div&gt;\n   &lt;div class=\"alert-error\"&gt;Something went wrong, please reload. (dismissable)\n    &lt;a href=\"#\" class=\"alert-close\"&gt;×&lt;/a&gt;\n   &lt;/div&gt;"
				}
			}
		]
	}
];