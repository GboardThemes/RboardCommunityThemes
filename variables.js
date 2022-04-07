export const metadata = {
    format_version: 3,
    id: `web_${Date.now()}`,
    name: 'Rboard Web Theme Creator',
    prefer_key_border: true,
    lock_key_border: false,
    is_light_theme: false,
    style_sheets: [
        'variables.css',
        'style_sheet_md2.css'
    ],
    flavors: [
        {
            type: 'BORDER',
            style_sheets: [
                'style_sheet_md2_border.css'
            ]
        }
    ]
}

export const styleSheetMd = `@def color_header @web_color_bg;
@def color_base @web_color_bg;
@def color_icon_action @web_color_label;
/* This value is not used for action key background, since it is special on material theme. */
@def color_state_action_pressed @web_color_accent_pressed;
/* This value is not used for action key background, since it is special on material theme. */
@def color_state_action @web_color_accent;
@def color_state_action_popup_pressed @web_color_accent_pressed;
@def color_state_action_popup @web_color_accent;
@def color_keyboard_editing_button_background @web_color_label;
@def color_action_default @web_color_label;
@def color_icon @web_color_label;
@def color_label @web_color_label;
@def color_emoji_handwriting_hint_label @web_color_label;
@def color_label_secondary @web_color_label;
/* Undocumented */
@def color_label_dynamic @web_color_label;
@def color_label_header_active @web_color_label;
@def color_label_header_inactive @web_color_label;
/* Undocumented */
@def color_state_label_candidate_selected @web_color_bg;
/* Undocumented */
@def color_state_label_candidate @web_color_label;
@def color_popup_label @web_color_label;
@def color_state_popup_label_pressed @web_color_key_bg;
@def default_popup_item_color_pressed @color_state_popup_item_pressed;
@def color_label_left_panel @web_color_label;
@def color_label_function_key @web_color_label;
@def color_label_space_key @web_color_label;
@def color_icon_more_candidates_background @web_color_label;
@def color_state_key_pressed @web_color_bg;
@def color_state_key @web_color_bg;
@def color_state_key_dark_pressed @web_color_bg;
@def color_state_key_dark @web_color_bg;
@def color_state_key_transparent_pressed @web_color_secondary_key_bg;
@def color_state_key_transparent @web_color_bg;
@def color_state_space_bar_pressed @web_color_secondary_key_bg;
@def color_state_space_bar @web_color_key_bg;
/* Undocumented */
@def color_state_dashboard_mask_pressed @web_color_key_bg;
/* Undocumented */
@def color_state_dashboard_mask @web_color_key_bg;
@def color_keyboard_separator @web_color_bg;
@def color_keyboard_separator_numpad @web_color_bg;
@def color_keyboard_top_separator @web_color_key_bg;
/* Undocumented */
@def color_candidate_separator @web_color_label;
/* Undocumented */
@def color_candidate_panel_separator @web_color_bg;
@def color_key_paging_scrollbar @web_color_key_bg;
@def color_key_paging_scrollbar_background @web_color_bg;
/* Revisit */
@def color_state_popup_item_pressed @web_color_accent;
@def color_popup_background @web_color_key_bg;
@def color_state_access_point_item_background @web_color_key_bg;
@def color_access_points_menu_background @web_color_key_bg;
/* Revisit */
@def color_generic_extension_background_activated @web_color_secondary_key_bg;
@def color_generic_extension_background @web_color_secondary_key_bg;
@def color_access_point_panel_item_background @web_color_key_bg;
@def color_access_points_panel_background @web_color_key_bg;
@def color_background_text_editing_body @web_color_bg;
@def color_background_text_editing_separator @web_color_label;
/* Undocumented */
@def color_label_text_editing_unactivate_key @web_color_label;
@def color_keyboard_editing_overlay @web_color_key_bg;
@def color_keyboard_editing_button @web_color_key_bg;
@def color_notice_text @web_color_key_bg;
/* Override pre-defined variable definition */

@def default_background_corner_radius 8;

/* GIF rules */
@def color_state_gif_category_text_selected @web_color_accent;
@def color_state_gif_category_text @web_color_accent;
@def color_expression_category_inactive @web_color_accent;
@def color_state_gif_category_background_selected @web_color_key_bg;
@def color_state_gif_category_background @web_color_bg;
@def color_gif_search_bar_query @web_color_label;
@def color_gif_search_bar_query_hint @web_color_label;

/* Sticker */

@def color_sticker_btn_background @web_color_label;
@def color_sticker_icon @web_color_label;
@def color_sticker_accent_icon @web_color_label;
@def color_expression_footer_background @web_color_key_bg;
@def color_expression_corpus_selector_background_active @web_color_accent;
@def internal_space_branding_color @web_color_label;
/* begin of pill shaped key colors */
@def default_action_key_background_color @web_color_accent;
@def default_action_key_background_color_pressed @web_color_accent_pressed;
@def default_pill_shaped_key_color @web_color_secondary_key_bg;
@def default_pill_shaped_key_color_pressed @web_color_secondary_key_bg_pressed;
@def default_pill_shaped_key_label_color @web_color_label;
@def default_pill_shaped_key_label_color_pressed @web_color_label;
@def default_borderless_space_bar_color @web_color_key_bg;
@def default_borderless_space_bar_color_pressed @web_color_secondary_key_bg;
@def default_pill_shaped_key_icon_color @web_color_label;
@def default_pill_shaped_key_icon_color_pressed @web_color_label;


.space_bar:pressed{
	background_color: @default_borderless_space_bar_color_pressed;
	background_corner_radius: 30;

	}
.space_bar{
	background_color: @default_borderless_space_bar_color;
	background_corner_radius: 30;

	}
/* end of pill shaped key colors */
.keyboard-body-area.for-floating-keyboard-handle{
    background_color: @color_base;
 background_shape: square;
}
.keyboard-footer-area{
	background_color: @color_expression_footer_background;
    background_shape: rectangle;
}


.translate.language.header{
	color: @web_color_accent;
}
.translate.language.bg{
    background_color: @web_color_key_bg;
}
.translate.queryholder{
    background_color: @web_color_bg;
	color: @web_color_accent;
}
.translate-query{
    background_color: @web_color_label;
}
.translate.language_entry.indicator{
	color: @web_color_label;
}
.translate.language-selection.background{
    background_color: @web_color_key_bg;
}
.translate.language.separator{
    background_color: @web_color_accent;
}

.translate.language_entry{
    background_color: @web_color_accent;
	color: @web_color_label;
}

.bitmoji-logo-text{
	color: @web_color_label;
	alpha: 1;
}
.icon.clipboard-item-check-filled{
	color: @web_color_accent;
	alpha: 1;
}

.icon.clipboard-item-check-inner{
	color: @web_color_key_bg;
	alpha: 1;
}

.tooltip.positive_button{
    background_color: @web_color_accent;
	color: @web_color_bg;
	alpha: 1;
}
.keyboard-clipboard-item{
	background_color: @web_color_key_bg;
	alpha: 1;
}
.keyboard-clipboard-popup{
	background_color: @web_color_key_bg;
	alpha: 1;
}
.keyboard-clipboard-tooltip{
	background_color: @web_color_key_bg;
	alpha: 1;
}
.bitmoji-card-action-btn,
.bitmoji-card-secondary-text{
	background_color: @web_color_accent;
	color: @web_color_bg;
	alpha: 1;
}
.sticker-pack-btn.for-remove,
.error-card-btn{
	background_color: @web_color_bg;
	edge_color: @web_color_accent;
	color: @web_color_label;
	alpha: 1;
}
.sticker-pack-browse-add-btn{
	background_color: @web_color_bg;
	color: @web_color_label;
	alpha: 1;
}
.sticker-pack-browse-add-btn:selected{
	background_color: @web_color_accent;
	color: @web_color_bg;
	alpha: 1;
}
.progress-bar{
   color: @web_color_accent;
}

.icon.for-emojify-key:pressed,
.icon.for-emojify-key{
   background_color: @web_color_key_bg;
   color: @web_color_label;
}

.background.text-editing-selected-key,
.label.text-editing-selected-key{
   background_color: @web_color_accent;
   color: @web_color_bg;
   alpha: 1;
}
.icon.for-category-key.with-underline,
.icon.for-corpus-selector.deactive{
   color: @web_color_label;
   background_color: @web_color_label;
   alpha: 1;
}

.keyboard-spellchecker-text,
.keyboard-spellchecker-text.highlight,
.background-icon.inline-suggestion-tooltip-chip-ripple
{
	color: @web_color_label;
	alpha: 1;
}
.background-icon.clipboard-item-suggestion-ripple
{
	background_color: @web_color_accent;
	alpha: 1;
}
.background-icon.spellchecker-suggestion
{
	color: @web_color_key_bg;
	alpha: 1;
}
.background-icon.spellchecker-suggestion-border
{
	color: @web_color_key_bg;
	alpha: 1;
}
.background-icon.spellchecker-suggestion.highlight
{
	color: @web_color_secondary_key_bg;
	alpha: 1;
}

.background.text-editing-separator{
    color: @web_color_bg;
	alpha: 1;
}
.sticker-pack-details-add-btn,
.featured-sticker-pack-pass-btn{
	background_color: @web_color_accent;
	color: @web_color_bg;
	edge_color: @web_color_accent;
	alpha: 1;
}
.candidate-holder:activated{
	background_color: @web_color_accent;
}

.popup-item.for-action-popup:pressed,
.popup-item.for-action-popup{
	color: @web_color_bg;
}

.icon.for-floating-handle,
.icon.floating_keyboard_editing_edge,
.icon.clipboard-suggestion-paste-icon{
	background_color: @web_color_accent;
	color: @web_color_accent;
	alpha: 1;
}
.icon.for-space-branding{
    color: @internal_space_branding_color;
    alpha: 0.3;
}

.background-icon.clipboard-item-suggestion{
    background_color: @web_color_bg;
    color: @web_color_bg;
    alpha: 1;
}

.background-icon.clipboard-entry-suggestion{
    color: @web_color_bg;
    alpha: 1;
}

.icon.clipboard-suggestion-arrow-icon{
    color: @web_color_accent;
    alpha: 1;
}

.sticker-header-item:selected,
.sticker-header-item:pressed,
.icon.for-category-key.with-underline:selected,
.icon.for-category-key.with-underline:pressed,
.label.for-expression-search:selected,
.label.for-expression-search:pressed,
.expression-highlight-underline:pressed,
.expression-highlight-underline:selected
{
	background_color: @web_color_accent;
	color: @web_color_accent;
	alpha: 1;
	}
.icon.for-category-key:pressed,
.icon.for-category-key:selected{
	color: @web_color_bg;
	alpha: 1;
	}
.label.for-category-key.active,
.label.for-category-key
{
	background_color: @web_color_accent;
	color: @web_color_accent;
	alpha: 1;
	}
.label.for-candidate-key:selected
{
	color: @web_color_label;
	alpha: 1;
	}

.corpus-selector.function-key:pressed{
	background_color: @web_color_key_bg;
}
.corpus-selector:pressed,
.corpus-selector:selected{
	background_color: @web_color_accent;
}
/* begin of searchbar color*/
.expression-search-query,
.expression-search-entry-hint,
.expression-search-softkey-icon,
.expression-query-candidate-icon,
.expression-query-candidate-text,
.expression-query-autofill-icon,
.expression-search-result-icon,
.expression-search-entry-icon,
.search-highlighted-text,
.expression-search-entry-icon-frame,
.expression-search-entry-icon.for-sticker,
.expression-search-input-text,
.label.for-expression-search{
color: @color_label;
background_color: @web_color_key_bg;
hint_color: @web_color_label;
alpha: 1;
}
.expression-search-result-box,
.expression-search-box,
.search-candidate-divider,
.expression-search-container{
background_color: @web_color_key_bg;
color: @web_color_label;
hint_color: @web_color_label;
}

.search-candidate-divider{
 color: @web_color_label;
 alpha: 0.3;
}
/* end of searchbar color*/
.corpus-selector,
.icon.for-corpus-selector.deactive:pressed,
.icon.for-corpus-selector.active{
	color: @web_color_bg;
	alpha: 1;
}
/* Color common */
.keyboard-body-area{
	 background_color: @color_base;
    background_shape: rectangle;
    background_corner_radius_top_left: 0;
    background_corner_radius_top_right: 0;
}
.keyboard-base-area,
.keyboard-header-area,
.candidates-area,
.candidates-area.expanded {
 background_shape: rectangle;
    background_color: @color_header;
    color: @color_header;
}
.icon.for-access-point-icon{
	color: @web_color_label;
	alpha: 1;
}
.navbar,
.navbar.for-one-handed,
.navbar-overlay{
    background_color: @color_base;
    background_shape: rectangle;
}
.keyboard-body-area.for-preview {
    background_color: @color_base;

}
.keyboard-header-area,
.keyboard-clipboard-offoverlay,
.keyboard-header-area.for-handwriting,
.popup {
    background_color: @color_header;
}

.label,
.label.for-dashboard-key,
.label.for-dashboard-key.active,
.label.for-extension,
.label.for-prime-page-switch,
.icon,
.icon.active,
.track.for-handwriting,
.icon.header.inactive {
    color: @color_label;
   alpha: 1;
}
.icon.active.for-function-key {
color: @web_color_label;
alpha: 1;
}
.icon.active.for-shift-key {
color: @web_color_label;
alpha: 1;
}
.label.in-left-panel,
.label.for-function-key,
.icon.for-function-key {
    color: @web_color_label;
alpha: 1;
}
.icon.for-action-key:pressed,
.icon.for-action-key {
    color: @web_color_bg;
    background_color: @web_color_bg;
alpha: 1;
}
.icon.for-action-key.for-action-default-key:pressed,
.icon.for-action-key.for-action-default-key {
    color: @web_color_bg;
    background_color: @web_color_bg;
alpha: 1;
}
.label.for-emoji-handwriting-hint {
    color: @color_emoji_handwriting_hint_label;
}
.icon.action-color-bg {
    background_color: @color_action_default;
}
.keytop.for-candidates-expansion-key {
    color: @color_icon_more_candidates_background;
}

.background-icon.for-action-key:pressed {
    color: @web_color_accent_pressed;
}
.background-icon.for-action-key {
    color: @web_color_accent;
}
.popup-item.for-action-popup:pressed {
    background_color: @color_state_action_pressed;
}
.popup-item.for-action-popup {
    background_color: @color_state_action;
}
.label.secondary {
    color: @color_label_secondary;
}

.label.secondary.for-sticker-pack-author,
.label.emoji-inline-category{
	color: @web_color_label;
}
.label.dynamic {
    color: @color_label_dynamic;
}
.label.for-category-key {
    color: @color_label_header_inactive;
}
.label.for-candidate-key:pressed {
    color: @color_state_label_candidate_selected;
}
.label.for-candidate-key {
    color: @color_state_label_candidate;
}
.keytop:pressed {
    background_color: @color_state_key_pressed;
}
.keytop {
    background_color: @color_state_key;
}
.keytop.dark:pressed {
    background_color: @color_state_key_dark_pressed;
}
.keytop.dark {
    background_color: @color_state_key_dark;
}

.keytop.for-numpad-big-panel:pressed
{
	background_color@web_color_secondary_key_bg;
	}
.keytop.for-candidate-key:pressed{
	background_color: @web_color_accent;
	alpha: 1;
	 }
.keytop.transparent:pressed {
    background_color: @web_color_secondary_key_bg;
}
.keytop.for-numpad-big-panel{
	background_color: @web_color_secondary_key_bg;
}

.keytop.for-candidate-key,
.keytop.transparent,
.keytop.for-prime-header-tab {
    background_color: @web_color_bg;
}
.notice.for-notice-key {
    color: @color_notice_text;
}
.label.for-popup-item {
    color: @color_popup_label;
}
.popup-item:pressed,
.keytop.for-dashboard-key.active:pressed,
.label.for-dashboard-key.active:pressed {
    background_color: @color_state_action_pressed;
}
.popup-item {
    background_color: @web_color_key_bg;
}
.keytop.for-dashboard-key.active,
.label.for-dashboard-key.active {
    background_color: @color_state_action;
}

.label.for-prime-page-switch {
    background_color: @color_state_space_bar;
}
.label.for-category-key.for-gif-keyboard:selected {
    color: @web_color_accent;
}
.label.for-category-key.for-gif-keyboard {
    color: @color_state_gif_category_text;
}
.keytop.for-category-key.for-gif-keyboard:selected {
    background_color: @color_state_gif_category_background_selected;
}
.keytop.for-category-key.for-gif-keyboard {
    background_color: @color_state_gif_category_background;
}

.icon.for-sticker-keyboard {
    color: @color_sticker_icon;
}
.sticker-btn-background.for-sticker-keyboard {
    background_color: @color_sticker_btn_background;
}
.sticker-accent-btn.for-sticker-keyboard {
    background_color: @color_state_action;
}
.sticker-accent-btn.for-sticker-keyboard:pressed {
    background_color: @color_state_action_pressed;
}
.sticker-accent-btn.for-sticker-keyboard {
    color:@color_sticker_accent_icon;
}
.label.for-query {
    color: @color_gif_search_bar_query;
    hint_color: @color_gif_search_bar_query_hint;
}
.mask.for-dashboard-key:pressed {
    background_color: @color_state_dashboard_mask_pressed;
}
.mask.for-dashboard-key {
    background_color: @color_state_dashboard_mask;
}
.divider.vertical.for-side-panel,
.divider.for-numpad-big-panel {
    color: @color_keyboard_separator_numpad;
}
.divider.horizontal.top.for-keyboard-base-area {
    color: @color_keyboard_top_separator;
    alpha: 0;
}
.divider.vertical.for-candidate-key {
    color: @color_candidate_separator;
    alpha: 0.3;
}
.divider.vertical.for-candidate-side-panel {
    color: @color_candidate_panel_separator;
}
.scrollbar.horizontal.for-key-paging {
    color: @color_key_paging_scrollbar;
}
.scrollbar.horizontal.for-key-paging{
    background_color: @color_key_paging_scrollbar_background;
}
.icon.access-point-item {
    color: @web_color_key_bg;
    alpha: 1;
}
.background-icon.access-points-menu {
    color: @color_access_points_menu_background;
}
.background.access-point-panel-item {
    color: @web_color_key_bg;
}
.background.for-extension:activated {
    background_color: @color_generic_extension_background_activated;
}
.background.for-extension {
    background_color: @color_generic_extension_background;
}
.icon.keyboard_editing_edge {
    color: @color_keyboard_editing_edge_disabled;
}
.keyboard_editing_overlay {
    background_color: @color_keyboard_editing_overlay;
}
.icon.keyboard_editing_edge:activated {
    color: @color_keyboard_editing_button_background;
    alpha: 1;
}
.icon.keyboard_editing_button {
    color: @color_keyboard_editing_button;
    background_color: @color_keyboard_editing_button_background;
    alpha: 1;
}
.icon.access-points-panel-item {
    background_color: @color_access_point_panel_item_background;
    alpha: 1;
}
.access-points-panel {
    background_color: @color_access_points_panel_background;
    alpha: 1;
}
.background.text-editing-body {
    background_color: @color_background_text_editing_body;
}
.background.selected-key {
    background_color: @color_state_action;
}

.label.text-editing-unactivate-key {
    color: @color_label_text_editing_unactivate_key;
    alpha: 0.75;
}
.icon.extension-tab {
    color: @color_state_action;
    alpha: 1;
}
.expand-access-points-hint {
    background_color: @web_color_label;
}
.keytop.for-prime-header-tab:pressed {
    background_color: @color_state_prime_header_tab_pressed;
}

/* Material rules*/
.icon {
  color: @web_color_label;
alpha: 1;
}
.icon.active {
    color: @web_color_accent;
alpha: 1;
}
.label.for-space-key {
    color: @color_label_space_key;
}
.popup-item:pressed {
    background_color: @color_state_popup_item_pressed;
}
.popup {
    background_color: @color_popup_background;
}

/* material specific */

.keytop.for-numpad-big-panel-holder {
    background_color: @web_color_secondary_key_bg;
    padding_ratio_left: 0;
    padding_ratio_top: 0;
    padding_ratio_right: 0;
    padding_ratio_bottom: 0;
}
.track.for-gesture {
    color: @web_color_accent;
}
.label.for-popup-item:pressed {
    color: @color_state_popup_label_pressed;
}
.popup-item.for-action-popup:pressed {
    background_color: @color_state_action_popup_pressed;
}
.popup-item.for-action-popup {
    background_color: @color_state_action_popup;
}
.keytop {
    background_shape: rectangle;
    background_corner_radius: @default_background_corner_radius;
}
.keytop.for-space-bar,
.keytop.for-candidate-key,
.keytop.for-dashboard-key,
.keytop.for-category-key,
.keytop.transparent {
    background_shape: "";
}
.background-icon.for-action-key.for-preview {
    color: @web_color_accent;
}

.icon_key_del {
    image_ref: "icon_del.png";
    image_height: 16.5;
    image_scale_mode: fill_vertical;
}
.icon_key_shift_off {
    image_ref: "icon_shift_off.png";
    image_height: 30;
    image_scale_mode: fill_vertical;
}
.icon_key_shift_on {
    image_ref: "icon_shift_on.png";
    image_height: 30;
    image_scale_mode: fill_vertical;
}
.icon_key_shift_locked {
    image_ref: "icon_shift_locked.png";
    image_height: 30;
    image_scale_mode: fill_vertical;
}
.icon_key_enter {
  image_ref: "icon_enter.png";
  image_height: 12;
  image_scale_mode: fill_vertical;
}
.icon_key_ime_action_search {
    image_ref: "icon_search.png";
    image_height: 16.5;
    image_scale_mode: fill_vertical;
}
.icon_key_ime_action_send {
    image_ref: "icon_send.png";
    image_height: 12;
    image_scale_mode: fill_vertical;
}
.for-google-icon-background {
    google_icon_background_color: @web_color_accent;
}
.for-google-icon-foreground {
    color: @web_color_bg;
}
.voiceime-mic-icon{
    color: @web_color_bg;
}
.tooltip.icon{
    color: @web_color_accent;
}
.popup_v2 {
  background_color: @color_popup_background;
}

/* begin of pill shaped key */

.keytop.for-space-bar{
    background_shape: rectangle;

}
.keytop.pill-shaped > .icon.for-action-key,
.keytop.pill-shaped > .icon.for-action-key.for-action-default-key{
 color: @default_pill_shaped_key_icon_color;
  
 }
.keytop.pill-shaped > .icon.for-action-key:pressed,
.keytop.pill-shaped > .icon.for-action-key.for-action-default-key:pressed{
 color: @default_pill_shaped_key_icon_color_pressed;
 
 }


.keytop.pill-shaped > .keytop.for-space-bar,
.keytop.pill-shaped-tall{
	background_color: @default_borderless_space_bar_color;
    
}

.keytop.pill-shaped > .keytop.for-space-bar:pressed,
.keytop.pill-shaped-tall{
	background_color: @default_borderless_space_bar_color_pressed;
}

/* end of pill shaped key */
`

export const styleSheetMdBorder = `;.keytop {
    elevation: 0;
    shadow_color: @web_color_key_bg;
    
}
.keytop.for-candidate-key,
.keytop.for-dashboard-key,
.keytop.for-category-key{
    elevation: 0;
    shadow_color: @web_color_key_bg;
    
}
.keytop.transparent {
    elevation: 0;
    shadow_color: @web_color_key_bg;
	background_color: @web_color_secondary_key_bg;
    
}

.keytop.transparent:pressed{
	background_color: @web_color_secondary_key_bg;
    shadow_color: @web_color_secondary_key_bg;
    elevation: 0;
	alpha: 0.4;
}

/* MD2 */
@def color_state_border_key_action_pressed @web_color_secondary_key_bg;
@def color_state_border_key_action @web_color_key_bg;
@def color_label_space_key @web_color_label;
@def color_state_key_pressed @web_color_secondary_key_bg;
@def color_state_key @web_color_key_bg;
/* temp */
@def color_state_key_dark_pressed @web_color_secondary_key_bg_pressed;
@def color_state_key_dark @web_color_secondary_key_bg;
@def internal_space_branding_color @web_color_label;
@def default_bordered_key_dark_color_pressed @color_state_key_dark_pressed;
@def default_bordered_key_dark_color @color_state_key_dark;
@def default_bordered_key_color_pressed @color_state_key_pressed;
@def default_bordered_key_color @color_state_key;

/* begin of pill shaped key */

@def default_pill_shaped_key_color @web_color_secondary_key_bg;
@def default_pill_shaped_key_color_pressed @web_color_secondary_key_bg_pressed;
@def default_pill_shaped_key_label_color @web_color_label;
@def default_pill_shaped_key_label_color_pressed @web_color_label;

/* end of pill shaped key colors */

.keytop,
.keytop.for-numpad-big-panel {
    elevation: 0;
    shadow_color: @web_color_key_bg;
}
.keytop.for-space-bar {
    background_corner_radius: 8;
    background_shape: rectangle;
    edge_color: @web_color_key_bg;
    shadow_color: @web_color_key_bg;
    elevation: 0;
}
.keytop.for-space-bar:pressed {
    background_shape: rectangle;
    background_corner_radius: 8;
    edge_color: @web_color_key_bg;
    shadow_color: @web_color_key_bg;
    elevation: 0;
}
.keytop {
    padding_ratio_left: 1;
    padding_ratio_top: 1;
    padding_ratio_right: 1;
    padding_ratio_bottom: 1;
    shadow_color: @web_color_key_bg;
    elevation: 0;
    edge_width: 0;
}
.keytop:pressed{
	edge_color: @web_color_key_bg;
    shadow_color: @web_color_key_bg;
    elevation: 0;
	}
.keytop.dark,
.keytop.for-action-key {
    edge_color: @web_color_secondary_key_bg;
    shadow_color: @web_color_secondary_key_bg;
    elevation: 0;
}
.keytop.for-numpad-big-panel-holder {
    alpha: 0;
    background_color: @web_color_secondary_key_bg;
    padding_ratio_left: 0;
    padding_ratio_top: 0;
    padding_ratio_right: 0;
    padding_ratio_bottom: 0;
    shadow_color: @web_color_secondary_key_bg;
    elevation: 0;
}
.divider.for-numpad-big-panel {
    visibility: gone;
}

.keytop.dark.for-numpad-big-panel,
.keytop.for-numpad-big-panel {
    shadow_color: @web_color_key_bg;
    elevation: 0;
    background_color: @color_state_key_dark;
    background_corner_radius: @default_background_corner_radius;
}

.keytop.dark.for-numpad,
.keytop.for-numpad {
    shadow_color: @web_color_key_bg;
    elevation: 0;
    padding_ratio_left: 1;
    padding_ratio_top: 1;
    padding_ratio_right: 1;
    padding_ratio_bottom: 1;
}
.icon.for-keyboard-bottom-left-key{
	color: @web_color_label;
	}
.keytop.dark.for-scrollable-key-holder.for-numpad,
.keytop.for-scrollable-key-holder.for-numpad {
    background_color: @web_color_secondary_key_bg;
    shadow_color: @web_color_secondary_key_bg;
    elevation: 0;
}
.keytop.dark.for-scrollable-key-holder.for-numpad:pressed,
.keytop.for-scrollable-key-holder.for-numpad:pressed {
    background_color: @web_color_secondary_key_bg;
    shadow_color: @web_color_secondary_key_bg;
    elevation: 0;
}
.icon.for-action-key:pressed,
.icon.for-action-key {
    color: @web_color_bg;
alpha: 1;
}
.icon.for-action-key.for-action-default-key:pressed,
.icon.for-action-key.for-action-default-key {
    color: @web_color_bg;
alpha: 1;
}
.keytop.for-action-key:pressed {
    background_color: @web_color_accent_pressed;
    shadow_color: @web_color_accent_pressed;
    elevation: 0;
}
.keytop.for-action-key {
    background_color: @web_color_accent;
    shadow_color: @web_color_accent;
    elevation: 0;
}
.keytop.for-action-key.for-action-default-key:pressed {
    background_color: @web_color_accent_pressed;
    shadow_color: @web_color_accent_pressed;
    elevation: 0;
}
.keytop.for-action-key.for-action-default-key {
    background_color:  @web_color_accent;
    shadow_color: @web_color_accent;
    elevation: 0;
}


/* begin of pill shaped key */

.keytop.pill-shaped > .keytop.for-action-key,
.keytop.pill-shaped > .keytop.for-action-key.for-action-default-key
{
	background_color: @web_color_accent;
	}

.keytop.pill-shaped >.keytop.for-action-key:pressed,
.keytop.pill-shaped > .keytop.for-action-key.for-action-default-key:pressed
{
	background_color: @web_color_accent_pressed;
	}
	
/* end of pill shaped key */`