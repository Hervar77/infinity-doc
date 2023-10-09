# infinity.ui

Provides functionality for building graphical user interfaces using the integrated Dear ImGui UI library.

Module: `infinity.ui`

<div class="doc-toc" markdown="1">

<div class="doc-toc-heading">Classes:</div>

- [color](#infinity.ui.color_class)
- [vec2](#infinity.ui.vec2_class)
- [vec3](#infinity.ui.vec3_class)
- [vec4](#infinity.ui.vec4_class)

<div class="doc-toc-heading">Interfaces:</div>

- [numberArray](#infinity.ui.numberArray_interface)
- [stringArray](#infinity.ui.stringArray_interface)
- [vec2Array](#infinity.ui.vec2Array_interface)

<div class="doc-toc-heading">Properties:</div>

- [backgroundColor](#infinity.ui.backgroundColor_property)
- [framePos](#infinity.ui.framePos_property)
- [frameSize](#infinity.ui.frameSize_property)
- [iniFilename](#infinity.ui.iniFilename_property)
- [scrollX](#infinity.ui.scrollX_property)
- [scrollY](#infinity.ui.scrollY_property)
- [style](#infinity.ui.style_property)
- [title](#infinity.ui.title_property)
- [displaySize](#infinity.ui.displaySize_property)
- [scrollMaxX](#infinity.ui.scrollMaxX_property)
- [scrollMaxY](#infinity.ui.scrollMaxY_property)
- [version](#infinity.ui.version_property)

<div class="doc-toc-heading">Functions:</div>

- [addBezierCubic](#infinity.ui.addBezierCubic_function)
- [addBezierQuadratic](#infinity.ui.addBezierQuadratic_function)
- [addCircle](#infinity.ui.addCircle_function)
- [addCircleFilled](#infinity.ui.addCircleFilled_function)
- [addConvexPolyFilled](#infinity.ui.addConvexPolyFilled_function)
- [addFontFromFile](#infinity.ui.addFontFromFile_function)
- [addImage](#infinity.ui.addImage_function)
- [addImageQuad](#infinity.ui.addImageQuad_function)
- [addImageRounded](#infinity.ui.addImageRounded_function)
- [addLine](#infinity.ui.addLine_function)
- [addNgon](#infinity.ui.addNgon_function)
- [addNgonFilled](#infinity.ui.addNgonFilled_function)
- [addPolyline](#infinity.ui.addPolyline_function)
- [addQuad](#infinity.ui.addQuad_function)
- [addQuadFilled](#infinity.ui.addQuadFilled_function)
- [addRect](#infinity.ui.addRect_function)
- [addRectFilled](#infinity.ui.addRectFilled_function)
- [addRectFilledMultiColor](#infinity.ui.addRectFilledMultiColor_function)
- [addText](#infinity.ui.addText_function)
- [addText](#infinity.ui.addText_function)
- [addTriangle](#infinity.ui.addTriangle_function)
- [addTriangleFilled](#infinity.ui.addTriangleFilled_function)
- [alignTextToFramePadding](#infinity.ui.alignTextToFramePadding_function)
- [arrowButton](#infinity.ui.arrowButton_function)
- [begin](#infinity.ui.begin_function)
- [beginChild](#infinity.ui.beginChild_function)
- [beginChild](#infinity.ui.beginChild_function)
- [beginChildFrame](#infinity.ui.beginChildFrame_function)
- [beginCombo](#infinity.ui.beginCombo_function)
- [beginDisabled](#infinity.ui.beginDisabled_function)
- [beginGroup](#infinity.ui.beginGroup_function)
- [beginListBox](#infinity.ui.beginListBox_function)
- [beginMainMenuBar](#infinity.ui.beginMainMenuBar_function)
- [beginMenu](#infinity.ui.beginMenu_function)
- [beginMenuBar](#infinity.ui.beginMenuBar_function)
- [beginPopup](#infinity.ui.beginPopup_function)
- [beginPopupContextItem](#infinity.ui.beginPopupContextItem_function)
- [beginPopupContextVoid](#infinity.ui.beginPopupContextVoid_function)
- [beginPopupContextWindow](#infinity.ui.beginPopupContextWindow_function)
- [beginPopupModal](#infinity.ui.beginPopupModal_function)
- [beginTabBar](#infinity.ui.beginTabBar_function)
- [beginTabItem](#infinity.ui.beginTabItem_function)
- [beginTable](#infinity.ui.beginTable_function)
- [beginTooltip](#infinity.ui.beginTooltip_function)
- [bullet](#infinity.ui.bullet_function)
- [bulletText](#infinity.ui.bulletText_function)
- [button](#infinity.ui.button_function)
- [calcItemWidth](#infinity.ui.calcItemWidth_function)
- [calcTextSize](#infinity.ui.calcTextSize_function)
- [checkbox](#infinity.ui.checkbox_function)
- [closeCurrentPopup](#infinity.ui.closeCurrentPopup_function)
- [collapsingHeader](#infinity.ui.collapsingHeader_function)
- [collapsingHeader](#infinity.ui.collapsingHeader_function)
- [colorButton](#infinity.ui.colorButton_function)
- [colorConvertFloat4ToU32](#infinity.ui.colorConvertFloat4ToU32_function)
- [colorConvertU32ToFloat4](#infinity.ui.colorConvertU32ToFloat4_function)
- [colorEdit](#infinity.ui.colorEdit_function)
- [colorPicker](#infinity.ui.colorPicker_function)
- [combo](#infinity.ui.combo_function)
- [dragFloat](#infinity.ui.dragFloat_function)
- [dragInt](#infinity.ui.dragInt_function)
- [dummy](#infinity.ui.dummy_function)
- [end](#infinity.ui.end_function)
- [endChild](#infinity.ui.endChild_function)
- [endChildFrame](#infinity.ui.endChildFrame_function)
- [endCombo](#infinity.ui.endCombo_function)
- [endDisabled](#infinity.ui.endDisabled_function)
- [endGroup](#infinity.ui.endGroup_function)
- [endListBox](#infinity.ui.endListBox_function)
- [endMainMenuBar](#infinity.ui.endMainMenuBar_function)
- [endMenu](#infinity.ui.endMenu_function)
- [endMenuBar](#infinity.ui.endMenuBar_function)
- [endPopup](#infinity.ui.endPopup_function)
- [endTabBar](#infinity.ui.endTabBar_function)
- [endTabItem](#infinity.ui.endTabItem_function)
- [endTable](#infinity.ui.endTable_function)
- [endTooltip](#infinity.ui.endTooltip_function)
- [freeTexture](#infinity.ui.freeTexture_function)
- [getClipboardText](#infinity.ui.getClipboardText_function)
- [getColor](#infinity.ui.getColor_function)
- [getColor](#infinity.ui.getColor_function)
- [getColor](#infinity.ui.getColor_function)
- [getContentRegionAvail](#infinity.ui.getContentRegionAvail_function)
- [getContentRegionMax](#infinity.ui.getContentRegionMax_function)
- [getCursorPos](#infinity.ui.getCursorPos_function)
- [getCursorPosX](#infinity.ui.getCursorPosX_function)
- [getCursorPosY](#infinity.ui.getCursorPosY_function)
- [getCursorScreenPos](#infinity.ui.getCursorScreenPos_function)
- [getCursorStartPos](#infinity.ui.getCursorStartPos_function)
- [getFont](#infinity.ui.getFont_function)
- [getFontSize](#infinity.ui.getFontSize_function)
- [getFontTexUvWhitePixel](#infinity.ui.getFontTexUvWhitePixel_function)
- [getFrameCount](#infinity.ui.getFrameCount_function)
- [getFrameHeight](#infinity.ui.getFrameHeight_function)
- [getFrameHeightWithSpacing](#infinity.ui.getFrameHeightWithSpacing_function)
- [getId](#infinity.ui.getId_function)
- [getId](#infinity.ui.getId_function)
- [getItemRectMax](#infinity.ui.getItemRectMax_function)
- [getItemRectMin](#infinity.ui.getItemRectMin_function)
- [getItemRectSize](#infinity.ui.getItemRectSize_function)
- [getKeyName](#infinity.ui.getKeyName_function)
- [getKeyPressedAmount](#infinity.ui.getKeyPressedAmount_function)
- [getMouseClickedCount](#infinity.ui.getMouseClickedCount_function)
- [getMouseCursor](#infinity.ui.getMouseCursor_function)
- [getMouseDragDelta](#infinity.ui.getMouseDragDelta_function)
- [getMousePos](#infinity.ui.getMousePos_function)
- [getMousePosOnOpeningCurrentPopup](#infinity.ui.getMousePosOnOpeningCurrentPopup_function)
- [getStyleColor](#infinity.ui.getStyleColor_function)
- [getStyleColorName](#infinity.ui.getStyleColorName_function)
- [getTextLineHeight](#infinity.ui.getTextLineHeight_function)
- [getTextLineHeightWithSpacing](#infinity.ui.getTextLineHeightWithSpacing_function)
- [getTime](#infinity.ui.getTime_function)
- [getTreeNodeToLabelSpacing](#infinity.ui.getTreeNodeToLabelSpacing_function)
- [getWindowContentRegionMax](#infinity.ui.getWindowContentRegionMax_function)
- [getWindowContentRegionMin](#infinity.ui.getWindowContentRegionMin_function)
- [getWindowHeight](#infinity.ui.getWindowHeight_function)
- [getWindowPos](#infinity.ui.getWindowPos_function)
- [getWindowSize](#infinity.ui.getWindowSize_function)
- [getWindowWidth](#infinity.ui.getWindowWidth_function)
- [image](#infinity.ui.image_function)
- [imageButton](#infinity.ui.imageButton_function)
- [indent](#infinity.ui.indent_function)
- [init](#infinity.ui.init_function)
- [inputFloat](#infinity.ui.inputFloat_function)
- [inputInt](#infinity.ui.inputInt_function)
- [inputText](#infinity.ui.inputText_function)
- [inputTextMultiline](#infinity.ui.inputTextMultiline_function)
- [inputTextWithHint](#infinity.ui.inputTextWithHint_function)
- [invisibleButton](#infinity.ui.invisibleButton_function)
- [isAnyItemActive](#infinity.ui.isAnyItemActive_function)
- [isAnyItemFocused](#infinity.ui.isAnyItemFocused_function)
- [isAnyItemHovered](#infinity.ui.isAnyItemHovered_function)
- [isAnyMouseDown](#infinity.ui.isAnyMouseDown_function)
- [isItemActivated](#infinity.ui.isItemActivated_function)
- [isItemActive](#infinity.ui.isItemActive_function)
- [isItemClicked](#infinity.ui.isItemClicked_function)
- [isItemDeactivated](#infinity.ui.isItemDeactivated_function)
- [isItemDeactivatedAfterEdit](#infinity.ui.isItemDeactivatedAfterEdit_function)
- [isItemEdited](#infinity.ui.isItemEdited_function)
- [isItemFocused](#infinity.ui.isItemFocused_function)
- [isItemHovered](#infinity.ui.isItemHovered_function)
- [isItemToggledOpen](#infinity.ui.isItemToggledOpen_function)
- [isItemVisible](#infinity.ui.isItemVisible_function)
- [isKeyDown](#infinity.ui.isKeyDown_function)
- [isKeyPressed](#infinity.ui.isKeyPressed_function)
- [isKeyReleased](#infinity.ui.isKeyReleased_function)
- [isMouseClicked](#infinity.ui.isMouseClicked_function)
- [isMouseDoubleClicked](#infinity.ui.isMouseDoubleClicked_function)
- [isMouseDown](#infinity.ui.isMouseDown_function)
- [isMouseDragging](#infinity.ui.isMouseDragging_function)
- [isMouseHoveringRect](#infinity.ui.isMouseHoveringRect_function)
- [isMousePosValid](#infinity.ui.isMousePosValid_function)
- [isMouseReleased](#infinity.ui.isMouseReleased_function)
- [isPopupOpen](#infinity.ui.isPopupOpen_function)
- [isRectVisible](#infinity.ui.isRectVisible_function)
- [isWindowAppearing](#infinity.ui.isWindowAppearing_function)
- [isWindowCollapsed](#infinity.ui.isWindowCollapsed_function)
- [isWindowFocused](#infinity.ui.isWindowFocused_function)
- [isWindowHovered](#infinity.ui.isWindowHovered_function)
- [labelText](#infinity.ui.labelText_function)
- [listBox](#infinity.ui.listBox_function)
- [loadTextureFromFile](#infinity.ui.loadTextureFromFile_function)
- [loadTextureFromImage](#infinity.ui.loadTextureFromImage_function)
- [menuItem](#infinity.ui.menuItem_function)
- [mergeFontFromFile](#infinity.ui.mergeFontFromFile_function)
- [messageBox](#infinity.ui.messageBox_function)
- [newFrame](#infinity.ui.newFrame_function)
- [newLine](#infinity.ui.newLine_function)
- [notifyPopup](#infinity.ui.notifyPopup_function)
- [openFileDialog](#infinity.ui.openFileDialog_function)
- [openPopup](#infinity.ui.openPopup_function)
- [plotHistogram](#infinity.ui.plotHistogram_function)
- [plotLines](#infinity.ui.plotLines_function)
- [popAllowKeyboardFocus](#infinity.ui.popAllowKeyboardFocus_function)
- [popButtonRepeat](#infinity.ui.popButtonRepeat_function)
- [popClipRect](#infinity.ui.popClipRect_function)
- [popClipRectRender](#infinity.ui.popClipRectRender_function)
- [popFont](#infinity.ui.popFont_function)
- [popId](#infinity.ui.popId_function)
- [popItemWidth](#infinity.ui.popItemWidth_function)
- [popStyleColor](#infinity.ui.popStyleColor_function)
- [popStyleVar](#infinity.ui.popStyleVar_function)
- [popTextWrapPos](#infinity.ui.popTextWrapPos_function)
- [popTextureId](#infinity.ui.popTextureId_function)
- [processEvents](#infinity.ui.processEvents_function)
- [progressBar](#infinity.ui.progressBar_function)
- [pushAllowKeyboardFocus](#infinity.ui.pushAllowKeyboardFocus_function)
- [pushButtonRepeat](#infinity.ui.pushButtonRepeat_function)
- [pushClipRect](#infinity.ui.pushClipRect_function)
- [pushClipRectFullScreen](#infinity.ui.pushClipRectFullScreen_function)
- [pushClipRectRender](#infinity.ui.pushClipRectRender_function)
- [pushFont](#infinity.ui.pushFont_function)
- [pushId](#infinity.ui.pushId_function)
- [pushId](#infinity.ui.pushId_function)
- [pushId](#infinity.ui.pushId_function)
- [pushItemWidth](#infinity.ui.pushItemWidth_function)
- [pushStyleColor](#infinity.ui.pushStyleColor_function)
- [pushStyleColor](#infinity.ui.pushStyleColor_function)
- [pushStyleVar](#infinity.ui.pushStyleVar_function)
- [pushStyleVar](#infinity.ui.pushStyleVar_function)
- [pushTextWrapPos](#infinity.ui.pushTextWrapPos_function)
- [pushTextureId](#infinity.ui.pushTextureId_function)
- [radioButton](#infinity.ui.radioButton_function)
- [render](#infinity.ui.render_function)
- [resetMouseDragDelta](#infinity.ui.resetMouseDragDelta_function)
- [sameLine](#infinity.ui.sameLine_function)
- [saveFileDialog](#infinity.ui.saveFileDialog_function)
- [selectFolderDialog](#infinity.ui.selectFolderDialog_function)
- [selectable](#infinity.ui.selectable_function)
- [separator](#infinity.ui.separator_function)
- [setClipboardText](#infinity.ui.setClipboardText_function)
- [setColorEditOptions](#infinity.ui.setColorEditOptions_function)
- [setCursorPos](#infinity.ui.setCursorPos_function)
- [setCursorPosX](#infinity.ui.setCursorPosX_function)
- [setCursorPosY](#infinity.ui.setCursorPosY_function)
- [setCursorScreenPos](#infinity.ui.setCursorScreenPos_function)
- [setDefaultFont](#infinity.ui.setDefaultFont_function)
- [setItemAllowOverlap](#infinity.ui.setItemAllowOverlap_function)
- [setItemDefaultFocus](#infinity.ui.setItemDefaultFocus_function)
- [setKeyboardFocusHere](#infinity.ui.setKeyboardFocusHere_function)
- [setMouseCursor](#infinity.ui.setMouseCursor_function)
- [setNextFrameWantCaptureKeyboard](#infinity.ui.setNextFrameWantCaptureKeyboard_function)
- [setNextFrameWantCaptureMouse](#infinity.ui.setNextFrameWantCaptureMouse_function)
- [setNextItemOpen](#infinity.ui.setNextItemOpen_function)
- [setNextItemWidth](#infinity.ui.setNextItemWidth_function)
- [setNextWindowBgAlpha](#infinity.ui.setNextWindowBgAlpha_function)
- [setNextWindowCollapsed](#infinity.ui.setNextWindowCollapsed_function)
- [setNextWindowContentSize](#infinity.ui.setNextWindowContentSize_function)
- [setNextWindowFocus](#infinity.ui.setNextWindowFocus_function)
- [setNextWindowPos](#infinity.ui.setNextWindowPos_function)
- [setNextWindowScroll](#infinity.ui.setNextWindowScroll_function)
- [setNextWindowSize](#infinity.ui.setNextWindowSize_function)
- [setNextWindowSizeConstraints](#infinity.ui.setNextWindowSizeConstraints_function)
- [setScrollFromPosX](#infinity.ui.setScrollFromPosX_function)
- [setScrollFromPosY](#infinity.ui.setScrollFromPosY_function)
- [setScrollHereX](#infinity.ui.setScrollHereX_function)
- [setScrollHereY](#infinity.ui.setScrollHereY_function)
- [setTabItemClosed](#infinity.ui.setTabItemClosed_function)
- [setTooltip](#infinity.ui.setTooltip_function)
- [showDebugLogWindow](#infinity.ui.showDebugLogWindow_function)
- [showDemoWindow](#infinity.ui.showDemoWindow_function)
- [showFontSelector](#infinity.ui.showFontSelector_function)
- [showMetricsWindow](#infinity.ui.showMetricsWindow_function)
- [showStackToolWindow](#infinity.ui.showStackToolWindow_function)
- [showStyleEditor](#infinity.ui.showStyleEditor_function)
- [showStyleSelector](#infinity.ui.showStyleSelector_function)
- [shutdown](#infinity.ui.shutdown_function)
- [sliderFloat](#infinity.ui.sliderFloat_function)
- [sliderInt](#infinity.ui.sliderInt_function)
- [smallButton](#infinity.ui.smallButton_function)
- [spacing](#infinity.ui.spacing_function)
- [tabItemButton](#infinity.ui.tabItemButton_function)
- [tableGetColumnCount](#infinity.ui.tableGetColumnCount_function)
- [tableGetColumnFlags](#infinity.ui.tableGetColumnFlags_function)
- [tableGetColumnIndex](#infinity.ui.tableGetColumnIndex_function)
- [tableGetColumnName](#infinity.ui.tableGetColumnName_function)
- [tableGetRowIndex](#infinity.ui.tableGetRowIndex_function)
- [tableHeader](#infinity.ui.tableHeader_function)
- [tableHeadersRow](#infinity.ui.tableHeadersRow_function)
- [tableNextColumn](#infinity.ui.tableNextColumn_function)
- [tableNextRow](#infinity.ui.tableNextRow_function)
- [tableSetBgColor](#infinity.ui.tableSetBgColor_function)
- [tableSetColumnEnabled](#infinity.ui.tableSetColumnEnabled_function)
- [tableSetColumnIndex](#infinity.ui.tableSetColumnIndex_function)
- [tableSetupColumn](#infinity.ui.tableSetupColumn_function)
- [tableSetupScrollFreeze](#infinity.ui.tableSetupScrollFreeze_function)
- [text](#infinity.ui.text_function)
- [textColored](#infinity.ui.textColored_function)
- [textDisabled](#infinity.ui.textDisabled_function)
- [textWrapped](#infinity.ui.textWrapped_function)
- [treeNode](#infinity.ui.treeNode_function)
- [treeNode](#infinity.ui.treeNode_function)
- [treeNodeEx](#infinity.ui.treeNodeEx_function)
- [treeNodeEx](#infinity.ui.treeNodeEx_function)
- [treePop](#infinity.ui.treePop_function)
- [treePush](#infinity.ui.treePush_function)
- [unindent](#infinity.ui.unindent_function)

<div class="doc-toc-heading">Enums:</div>

- [buttonFlags](#infinity.ui.buttonFlags_enum)
- [collapsingHeaderStates](#infinity.ui.collapsingHeaderStates_enum)
- [colorEditFlags](#infinity.ui.colorEditFlags_enum)
- [colorTypes](#infinity.ui.colorTypes_enum)
- [comboFlags](#infinity.ui.comboFlags_enum)
- [conditions](#infinity.ui.conditions_enum)
- [dialogTypes](#infinity.ui.dialogTypes_enum)
- [directions](#infinity.ui.directions_enum)
- [drawFlags](#infinity.ui.drawFlags_enum)
- [focusedFlags](#infinity.ui.focusedFlags_enum)
- [hoveredFlags](#infinity.ui.hoveredFlags_enum)
- [iconTypes](#infinity.ui.iconTypes_enum)
- [initFlags](#infinity.ui.initFlags_enum)
- [inputTextFlags](#infinity.ui.inputTextFlags_enum)
- [keys](#infinity.ui.keys_enum)
- [mouseButtons](#infinity.ui.mouseButtons_enum)
- [mouseCursors](#infinity.ui.mouseCursors_enum)
- [popupFlags](#infinity.ui.popupFlags_enum)
- [selectableFlags](#infinity.ui.selectableFlags_enum)
- [sliderFlags](#infinity.ui.sliderFlags_enum)
- [styleVars](#infinity.ui.styleVars_enum)
- [styles](#infinity.ui.styles_enum)
- [tabBarFlags](#infinity.ui.tabBarFlags_enum)
- [tabItemFlags](#infinity.ui.tabItemFlags_enum)
- [tableBgTargets](#infinity.ui.tableBgTargets_enum)
- [tableColumnFlags](#infinity.ui.tableColumnFlags_enum)
- [tableFlags](#infinity.ui.tableFlags_enum)
- [tableRowFlags](#infinity.ui.tableRowFlags_enum)
- [treeNodeFlags](#infinity.ui.treeNodeFlags_enum)
- [windowFlags](#infinity.ui.windowFlags_enum)
- [windowPositions](#infinity.ui.windowPositions_enum)
- [windowStates](#infinity.ui.windowStates_enum)

</div>

---

<div class="doc-heading">Classes</div>

---

## color {: #infinity.ui.color_class .doc-class}

This class represents a color, expressed in RGBA format.

<div class="doc-toc" markdown="1">

**Properties:**

- [a](#infinity.ui.color.a_property)
- [b](#infinity.ui.color.b_property)
- [g](#infinity.ui.color.g_property)
- [r](#infinity.ui.color.r_property)

**Methods:**

- [constructor()](#infinity.ui.color.constructor_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.ui');
let myColor = new infinity.ui.color(r, g, b, a);
```

---

**Properties**

---

### a {: #infinity.ui.color.a_property .doc-property}

Type: `number`

A number representing the alpha (opacity) component.

---

### b {: #infinity.ui.color.b_property .doc-property}

Type: `number`

A number representing the green component.

---

### g {: #infinity.ui.color.g_property .doc-property}

Type: `number`

A number representing the blue component.

---

### r {: #infinity.ui.color.r_property .doc-property}

Type: `number`

A number representing the red component.

---

**Methods**

---

### constructor() {: #infinity.ui.color.constructor_function .doc-function}

Creates a new color object with the specified `r`, `g`, `b`, and `a` values. The parameters can be omitted altogether to create the object with `r`, `g`, `b`, and `a` set to 0.

Signature:
```typescript
constructor( r: number, g: number, b: number, a: number )
```

Parameters:

- r: `number`
  >A number representing the red component.

- g: `number`
  >A number representing the green component.

- b: `number`
  >A number representing the blue component.

- a: `number`
  >A number representing the alpha (opacity) component.


Example:

```typescript
infinity.loadModule('infinity.ui');
let myColor = new infinity.ui.color(r, g, b, a);
```

---

## vec2 {: #infinity.ui.vec2_class .doc-class}

This class represents a 2D vector.

<div class="doc-toc" markdown="1">

**Properties:**

- [x](#infinity.ui.vec2.x_property)
- [y](#infinity.ui.vec2.y_property)

**Methods:**

- [constructor()](#infinity.ui.vec2.constructor_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.ui');
let myVec2 = new infinity.ui.vec2(x, y);
```

---

**Properties**

---

### x {: #infinity.ui.vec2.x_property .doc-property}

Type: `number`

A number representing the x-coordinate.

---

### y {: #infinity.ui.vec2.y_property .doc-property}

Type: `number`

A number representing the y-coordinate.

---

**Methods**

---

### constructor() {: #infinity.ui.vec2.constructor_function .doc-function}

Creates a new vec2 object with the specified `x` and `y` values. The parameters can be omitted altogether to create the object with `x` and `y` set to 0.

Signature:
```typescript
constructor( x: number, y: number )
```

Parameters:

- x: `number`
  >A number representing the x-coordinate.

- y: `number`
  >A number representing the y-coordinate.


Example:

```typescript
infinity.loadModule('infinity.ui');
let myVec2 = new infinity.ui.vec2(x, y);
```




---

## vec3 {: #infinity.ui.vec3_class .doc-class}

This class represents a 3D vector.

<div class="doc-toc" markdown="1">

**Properties:**

- [x](#infinity.ui.vec3.x_property)
- [y](#infinity.ui.vec3.y_property)
- [z](#infinity.ui.vec3.z_property)

**Methods:**

- [constructor()](#infinity.ui.vec3.constructor_function)

</div>

Example:

```typescript
infinity.loadModule('infinity.ui');
let myVec3 = new infinity.ui.vec3(x, y, z);
```

---

**Properties**

---

### x {: #infinity.ui.vec3.x_property .doc-property}

Type: `number`

A number representing the x-coordinate.

---

### y {: #infinity.ui.vec3.y_property .doc-property}

Type: `number`

A number representing the y-coordinate.

---

### z {: #infinity.ui.vec3.z_property .doc-property}

Type: `number`

A number representing the z-coordinate.

---

**Methods**

---

### constructor() {: #infinity.ui.vec3.constructor_function .doc-function}

Creates a new vec3 object with the specified `x`, `y`, and `z` values. The parameters can be omitted altogether to create the object with `x`, `y`, and `z` set to 0.

Signature:
```typescript
constructor( x: number, y: number, z: number )
```

Parameters:

- x: `number`
  >A number representing the x-coordinate.

- y: `number`
  >A number representing the y-coordinate.

- z: `number`
  >A number representing the z-coordinate.


Example:

```typescript
infinity.loadModule('infinity.ui');
let myVec3 = new infinity.ui.vec3(x, y, z);
```


---

## vec4 {: #infinity.ui.vec4_class .doc-class}

<div class="doc-toc" markdown="1">

**Properties:**

- [w](#infinity.ui.vec4.w_property)
- [x](#infinity.ui.vec4.x_property)
- [y](#infinity.ui.vec4.y_property)
- [z](#infinity.ui.vec4.z_property)

**Methods:**

- [constructor()](#infinity.ui.vec4.constructor_function)

</div>


Example:

```typescript
infinity.loadModule('infinity.ui');
let myVec4 = new infinity.ui.vec4(x, y, z, w);
```

---

**Properties**

---

### w {: #infinity.ui.vec4.w_property .doc-property}

Type: `number`

A number representing the w-coordinate.

---

### x {: #infinity.ui.vec4.x_property .doc-property}

Type: `number`

A number representing the x-coordinate.

---

### y {: #infinity.ui.vec4.y_property .doc-property}

Type: `number`

A number representing the y-coordinate.

---

### z {: #infinity.ui.vec4.z_property .doc-property}

Type: `number`

A number representing the z-coordinate.

---

**Methods**

---

### constructor() {: #infinity.ui.vec4.constructor_function .doc-function}

Creates a new vec4 object with the specified x, y, z, and w values. The parameters can be omitted altogether to create the object with x, y, z, and w set to 0.

Signature:
```typescript
constructor( x: number, y: number, z: number, w: number )
```

Parameters:

- x: `number`
  >A number representing the x-coordinate.

- y: `number`
  >A number representing the y-coordinate.

- z: `number`
  >A number representing the z-coordinate.

- w: `number`
  >A number representing the w-coordinate.


Example:

```typescript
infinity.loadModule('infinity.ui');
let myVec4 = new infinity.ui.vec4(x, y, z, w);
```



---

<div class="doc-heading">Interfaces</div>

---

## numberArray {: #infinity.ui.numberArray_interface .doc-interface}

Extends: `Array<number>`

An array containing number elements.

---

## stringArray {: #infinity.ui.stringArray_interface .doc-interface}

Extends: `Array<string>`

An array containing string elements.

---

## vec2Array {: #infinity.ui.vec2Array_interface .doc-interface}

Extends: `Array<infinity.ui.vec2>`

An array containing elements of the vec2 class.



---

<div class="doc-heading">Functions</div>

---

## addBezierCubic() {: #infinity.ui.addBezierCubic_function .doc-function}

Draws a cubic Bezier curve on the UI using specified control points and styling.

Signature:
```
addBezierCubic( p1: infinity.ui.vec2, p2: infinity.ui.vec2, p3: infinity.ui.vec2, p4: infinity.ui.vec2, col: number, thickness?: number, segments?: number ): void
```

Parameters:

- p1: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The first control point of the Bezier curve, of type infinity.ui.vec2.

- p2: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The second control point of the Bezier curve, of type infinity.ui.vec2.

- p3: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The third control point of the Bezier curve, of type infinity.ui.vec2.

- p4: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The fourth control point of the Bezier curve, of type infinity.ui.vec2.

- col: `number`
  >A number representing the color of the curve.

- thickness: `number`, optional
  >A number specifying the thickness of the curve. If not provided, a default value will be used.


- segments: `number`, optional
  >A number specifying the number of segments to divide the curve into. More segments results in a smoother curve. If not provided, a default value will be used.



Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addBezierCubic(p1, p2, p3, p4, col);
```

---

## addBezierQuadratic() {: #infinity.ui.addBezierQuadratic_function .doc-function}

Draws a quadratic Bezier curve on the UI using specified control points and styling.

Signature:
```
addBezierQuadratic( p1: infinity.ui.vec2, p2: infinity.ui.vec2, p3: infinity.ui.vec2, col: number, thickness?: number, segments?: number ): void
```

Parameters:

- p1: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The first control point of the Bezier curve, of type infinity.ui.vec2.

- p2: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The second control point of the Bezier curve, of type infinity.ui.vec2.

- p3: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The third control point of the Bezier curve, of type infinity.ui.vec2.

- col: `number`
  >A number representing the color of the curve.

- thickness: `number`, optional
  >A number specifying the thickness of the curve. If not provided, a default value will be used.


- segments: `number`, optional
  >A number specifying the number of segments to divide the curve into. More segments results in a smoother curve. If not provided, a default value will be used.



Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addBezierQuadratic(p1, p2, p3, col);
```

---

## addCircle() {: #infinity.ui.addCircle_function .doc-function}

Draws a circle on the UI using the specified center point, radius, and styling.

Signature:
```
addCircle( center: infinity.ui.vec2, radius: number, col: number, segments?: number, thickness?: number ): void
```

Parameters:

- center: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The center point of the circle, of type infinity.ui.vec2.

- radius: `number`
  >A number representing the radius of the circle.

- col: `number`
  >A number representing the color of the circle.

- segments: `number`, optional
  >A number specifying the number of segments to divide the circle into. More segments results in a smoother circle. If not provided, a default value will be used.


- thickness: `number`, optional
  >A number specifying the thickness of the circle. If not provided, a default value will be used.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addCircle(center, radius, col);
```

---

## addCircleFilled() {: #infinity.ui.addCircleFilled_function .doc-function}

Draws a filled circle on the UI using the specified center point, radius, and styling.

Signature:
```
addCircleFilled( center: infinity.ui.vec2, radius: number, col: number, segments?: number ): void
```

Parameters:

- center: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The center point of the circle, of type infinity.ui.vec2.

- radius: `number`
  >A number representing the radius of the circle.

- col: `number`
  >A number representing the color of the circle.

- segments: `number`, optional
  >A number specifying the number of segments to divide the circle into. More segments results in a smoother circle. If not provided, a default value will be used.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addCircleFilled(center, radius, col);
```

---

## addConvexPolyFilled() {: #infinity.ui.addConvexPolyFilled_function .doc-function}

Draws a filled convex polygon on the UI, using the specified points and color.

Signature:
```
addConvexPolyFilled( points: infinity.ui.vec2Array, col: number ): void
```

Parameters:

- points: `infinity.ui.vec2Array`
  >An array of infinity.ui.vec2 objects, representing the vertices of the convex polygon in order. The order should form a convex shape.

- col: `number`
  >A number representing the color of the polygon.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addConvexPolyFilled(points, col);
```

---

## addFontFromFile() {: #infinity.ui.addFontFromFile_function .doc-function}

Adds a new font from a file to the UI and returns a unique ID associated with the loaded font. Returns an identifier that can be used to reference the added font

Signature:
```
addFontFromFile( fileName: string, size: number ): number
```

Parameters:

- fileName: `string`
  >The name of the file that contains the font. This should include the file's path if it's not located in the program's default directory.

- size: `number`
  >The desired size of the font.



Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.addFontFromFile(fileName, size);
```

---

## addImage() {: #infinity.ui.addImage_function .doc-function}

Adds an image to the UI, using the specified texture, position points, optional UV coordinates, and color.

Signature:
```
addImage( texture: number, p1: infinity.ui.vec2, p2: infinity.ui.vec2, uv1?: infinity.ui.vec2, uv2?: infinity.ui.vec2, col?: number ): void
```

Parameters:

- texture: `number`
  >The identifier for the texture to be used.

- p1: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The bottom-left position point of the image in 2D space.

- p2: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The top-right position point of the image in 2D space.

- uv1: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >The bottom-left UV coordinate for the image. Determines the part of the texture to be used. Defaults to (0,0) if not provided.

- uv2: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >The top-right UV coordinate for the image. Determines the part of the texture to be used. Defaults to (1,1) if not provided.

- col: `number`, optional
  >The color modifier for the image. Defaults to white (no color modification) if not provided.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addImage(texture, p1, p2);
```

---

## addImageQuad() {: #infinity.ui.addImageQuad_function .doc-function}

Adds an image to the UI as a quadrilateral, using the specified texture, position points, optional UV coordinates, and color.

Signature:
```
addImageQuad( texture: number, p1: infinity.ui.vec2, p2: infinity.ui.vec2, p3: infinity.ui.vec2, p4: infinity.ui.vec2, uv1?: infinity.ui.vec2, uv2?: infinity.ui.vec2, uv3?: infinity.ui.vec2, uv4?: infinity.ui.vec2, col?: number ): void
```

Parameters:

- texture: `number`
  >This is the identifier for the texture to be used.

- p1: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The first position point of the image quadrilateral in 2D space.

- p2: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The second position point of the image quadrilateral in 2D space.

- p3: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The third position point of the image quadrilateral in 2D space.

- p4: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The fourth position point of the image quadrilateral in 2D space.

- uv1: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >The first UV coordinate for the image. It determines the part of the texture to be used for the first position point.

- uv2: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >The second UV coordinate for the image. It determines the part of the texture to be used for the second position point.

- uv3: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >The third UV coordinate for the image. It determines the part of the texture to be used for the third position point.

- uv4: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >The fourth UV coordinate for the image. It determines the part of the texture to be used for the fourth position point.

- col: `number`, optional
  >The color modifier for the image.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addImageQuad(texture, p1, p2, p3, p4);
```

---

## addImageRounded() {: #infinity.ui.addImageRounded_function .doc-function}

Adds an image with rounded corners to the UI, using the specified texture, position points, optional UV coordinates, color, rounding radius, and drawing flags.

Signature:
```
addImageRounded( texture: number, p1: infinity.ui.vec2, p2: infinity.ui.vec2, uv1?: infinity.ui.vec2, uv2?: infinity.ui.vec2, col?: number, rounding?: number, flags?: infinity.ui.drawFlags ): void
```

Parameters:

- texture: `number`
  >The identifier for the texture to be used.

- p1: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The bottom-left position point of the image in 2D space.

- p2: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The top-right position point of the image in 2D space.

- uv1: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >The bottom-left UV coordinate for the image. It determines the part of the texture to be used.

- uv2: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >The top-right UV coordinate for the image. It determines the part of the texture to be used.

- col: `number`, optional
  >The color modifier for the image.

- rounding: `number`, optional
  >The radius of the rounding for the corners of the image.

- flags: [`infinity.ui.drawFlags`](#infinity.ui.drawFlags_enum), optional
  >These are flags to customize the image drawing behavior.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addImageRounded(texture, p1, p2);
```

---

## addLine() {: #infinity.ui.addLine_function .doc-function}

Adds a line to the UI, using the specified start and end points, color, and optional thickness.

Signature:
```
addLine( p1: infinity.ui.vec2, p2: infinity.ui.vec2, col: number, thickness?: number ): void
```

Parameters:

- p1: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The start position point of the line in 2D space.

- p2: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The end position point of the line in 2D space.

- col: `number`
  >The color of the line.

- thickness: `number`, optional
  >The thickness of the line.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addLine(p1, p2, col);
```

---

## addNgon() {: #infinity.ui.addNgon_function .doc-function}

Adds an n-gon (a polygon with "n" sides) to the UI, using the specified center point, radius, color, number of segments, and optional thickness.

Signature:
```
addNgon( center: infinity.ui.vec2, radius: number, col: number, segments: number, thickness?: number ): void
```

Parameters:

- center: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The center point of the n-gon in 2D space.

- radius: `number`
  >The radius of the n-gon.

- col: `number`
  >The color of the n-gon.

- segments: `number`
  >The number of sides or segments of the n-gon.

- thickness: `number`, optional
  >The thickness of the n-gon.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addNgon(center, radius, col, segments);
```

---

## addNgonFilled() {: #infinity.ui.addNgonFilled_function .doc-function}

Adds a filled n-gon (a polygon with "n" sides) to the UI, using the specified center point, radius, color, and number of segments.

Signature:
```
addNgonFilled( center: infinity.ui.vec2, radius: number, col: number, segments: number ): void
```

Parameters:

- center: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The center point of the n-gon in 2D space.

- radius: `number`
  >The radius of the n-gon.

- col: `number`
  >The color of the n-gon.

- segments: `number`
  >The number of sides or segments of the n-gon.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addNgonFilled(center, radius, col, segments);
```

---

## addPolyline() {: #infinity.ui.addPolyline_function .doc-function}

Adds a polyline (a line made up of several segments) to the UI, using the specified points array, color, optional drawing flags, and optional thickness.

Signature:
```
addPolyline( points: infinity.ui.vec2Array, col: number, flags?: infinity.ui.drawFlags, thickness?: number ): void
```

Parameters:

- points: [`infinity.ui.vec2Array`](#infinity.ui.vec2Array_interface)
  >The array of points defining the segments of the polyline in 2D space.

- col: `number`
  >The color of the polyline.

- flags: [`infinity.ui.drawFlags`](#infinity.ui.drawFlags_enum), optional
  >Flags to customize the polyline drawing behavior.

- thickness: `number`, optional
  >The thickness of the polyline.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addPolyline(points, col);
```

---

## addQuad() {: #infinity.ui.addQuad_function .doc-function}

Adds a quadrilateral (a polygon with four sides) to the UI, using the specified four points, color, and optional thickness.

Signature:
```
addQuad( p1: infinity.ui.vec2, p2: infinity.ui.vec2, p3: infinity.ui.vec2, p4: infinity.ui.vec2, col: number, thickness?: number ): void
```

Parameters:

- p1: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The first point of the quadrilateral in 2D space.

- p2: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The second point of the quadrilateral in 2D space.

- p3: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The third point of the quadrilateral in 2D space.

- p4: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The fourth point of the quadrilateral in 2D space.

- col: `number`
  >The color of the quadrilateral.

- thickness: `number`, optional
  >The thickness of the quadrilateral.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addQuad(p1, p2, p3, p4, col);
```

---

## addQuadFilled() {: #infinity.ui.addQuadFilled_function .doc-function}

Adds a filled quadrilateral (a polygon with four sides) to the UI, using the specified four points and color.

Signature:
```
addQuadFilled( p1: infinity.ui.vec2, p2: infinity.ui.vec2, p3: infinity.ui.vec2, p4: infinity.ui.vec2, col: number ): void
```

Parameters:

- p1: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The first point of the quadrilateral in 2D space.

- p2: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The second point of the quadrilateral in 2D space.

- p3: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The third point of the quadrilateral in 2D space.

- p4: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The fourth point of the quadrilateral in 2D space.

- col: `number`
  >The color of the quadrilateral.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addQuadFilled(p1, p2, p3, p4, col);
```

---

## addRect() {: #infinity.ui.addRect_function .doc-function}

Adds a rectangle to the UI, using the specified two points (representing opposite corners), color, optional rounding for the corners, optional drawing flags, and optional thickness.

Signature:
```
addRect( p1: infinity.ui.vec2, p2: infinity.ui.vec2, col: number, rounding?: number, flags?: infinity.ui.drawFlags, thickness?: number ): void
```

Parameters:

- p1: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >One corner point of the rectangle in 2D space.

- p2: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The diagonally opposite corner point of the rectangle in 2D space.

- col: `number`
  >The color of the rectangle.

- rounding: `number`, optional
  >The radius of rounding for the corners of the rectangle.

- flags: [`infinity.ui.drawFlags`](#infinity.ui.drawFlags_enum), optional
  >Flags to customize the rectangle drawing behavior.

- thickness: `number`, optional
  >The thickness of the rectangle's outline.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addRect(p1, p2, col);
```

---

## addRectFilled() {: #infinity.ui.addRectFilled_function .doc-function}

Adds a filled rectangle to the UI, using the specified two points (representing opposite corners), color, and optional rounding for the corners, and optional drawing flags.

Signature:
```
addRectFilled( p1: infinity.ui.vec2, p2: infinity.ui.vec2, col: number, rounding?: number, flags?: infinity.ui.drawFlags ): void
```

Parameters:

- p1: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >One corner point of the rectangle in 2D space.

- p2: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The diagonally opposite corner point of the rectangle in 2D space.

- col: `number`
  >The color of the rectangle.

- rounding: `number`, optional
  >The radius of rounding for the corners of the rectangle.

- flags: [`infinity.ui.drawFlags`](#infinity.ui.drawFlags_enum), optional
  >Flags to customize the rectangle drawing behavior.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addRectFilled(p1, p2, col);
```

---

## addRectFilledMultiColor() {: #infinity.ui.addRectFilledMultiColor_function .doc-function}

Adds a filled rectangle with multiple colors to the UI. The rectangle is defined by the specified two points (representing opposite corners). Each corner has its own color, allowing for a gradient effect.

Signature:
```
addRectFilledMultiColor( p1: infinity.ui.vec2, p2: infinity.ui.vec2, col1: number, col2: number, col3: number, col4: number ): void
```

Parameters:

- p1: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >One corner point of the rectangle in 2D space.

- p2: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The diagonally opposite corner point of the rectangle in 2D space.

- col1: `number`
  >The color of the first corner of the rectangle.

- col2: `number`
  >The color of the second corner of the rectangle.

- col3: `number`
  >The color of the third corner of the rectangle.

- col4: `number`
  >The color of the fourth corner of the rectangle.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addRectFilledMultiColor(p1, p2, col1, col2, col3, col4);
```
---

## addText() {: #infinity.ui.addText_function .doc-function}

Adds a piece of text to the UI at the specified position and with the given color.

Signature:
```
addText( pos: infinity.ui.vec2, col: number, text: string ): void
```

Parameters:

- pos: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The position on the UI where the text should be placed.

- col: `number`
  >The color to be used for the text.

- text: `string`
  >The string of text to be added to the UI.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addText(pos, col, text);
```

---

## addText() {: #infinity.ui.addText_function .doc-function}

Adds a piece of text to the UI at the specified position and with the given style.

Signature:
```
addText( font: number, size: number, pos: infinity.ui.vec2, col: number, text: string, wrapWidth?: number ): void
```

Parameters:

- font: `number`
  >The font to be used for the text.

- size: `number`
  >The size of the font to be used.

- pos: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The position on the UI where the text should be placed.

- col: `number`
  >The color to be used for the text.

- text: `string`
  >The string of text to be added to the UI.

- wrapWidth: `number`, optional
  >The width at which the text should wrap onto a new line.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addText(font, size, pos, col, text);
```

---

## addTriangle() {: #infinity.ui.addTriangle_function .doc-function}

Draws a triangle to the UI using the specified points and color.

Signature:
```
addTriangle( p1: infinity.ui.vec2, p2: infinity.ui.vec2, p3: infinity.ui.vec2, col: number, thickness?: number ): void
```

Parameters:

- p1: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The first point of the triangle in 2D space.

- p2: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The second point of the triangle in 2D space.

- p3: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The third point of the triangle in 2D space.

- col: `number`
  >The color of the triangle.

- thickness: `number`, optional
  >The thickness of the triangle's outline.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addTriangle(p1, p2, p3, col);
```

---

## addTriangleFilled() {: #infinity.ui.addTriangleFilled_function .doc-function}

Draws a filled triangle on the UI using the specified points and color.

Signature:
```
addTriangleFilled( p1: infinity.ui.vec2, p2: infinity.ui.vec2, p3: infinity.ui.vec2, col: number ): void
```

Parameters:

- p1: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The first point of the triangle in 2D space.

- p2: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The second point of the triangle in 2D space.

- p3: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The third point of the triangle in 2D space.

- col: `number`
  >The color of the triangle.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addTriangleFilled(p1, p2, p3, col);
```

---

## alignTextToFramePadding() {: #infinity.ui.alignTextToFramePadding_function .doc-function}

Aligns the text within the UI's frame padding.

Signature:
```
alignTextToFramePadding(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.alignTextToFramePadding();
```

---

## arrowButton() {: #infinity.ui.arrowButton_function .doc-function}

Creates an arrow button on the UI with the specified id and direction. Returns a boolean indicating whether the button was clicked or not.

Signature:
```
arrowButton( id: string, direction: infinity.ui.directions ): boolean
```

Parameters:

- id: `string`
  >The unique identifier for the arrow button.

- direction: [`infinity.ui.directions`](#infinity.ui.directions_enum)
  >The direction the arrow on the button is pointing.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.arrowButton(id, direction) ) {}
```

---

## begin() {: #infinity.ui.begin_function .doc-function}

Begins a new window with the specified name and optional show close button flag and window flags. The window state, represented by `infinity.ui.windowStates`, is returned after the function call.

Signature:
```
begin( name: string, showCloseButton?: boolean, flags?: infinity.ui.windowFlags ): infinity.ui.windowStates
```

Parameters:

- name: `string`
  >The name for the new window.

- showCloseButton: `boolean`, optional
  >A boolean value indicating whether to display a close button in the new window.

- flags: [`infinity.ui.windowFlags`](#infinity.ui.windowFlags_enum), optional
  >Optional flags that control the behavior of the new window.


Return type: `infinity.ui.windowStates`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.begin(name);
```

---

## beginChild() {: #infinity.ui.beginChild_function .doc-function}

Begins a new child window with the specified id, size, border, and window flags. Returns a boolean indicating whether the child window was successfully created.

Signature:
```
beginChild( id: string | number, size?: infinity.ui.vec2, border?: boolean, flags?: infinity.ui.windowFlags ): boolean
```

Parameters:

- id: `string | number`
  >The unique identifier for the child window.

- size: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >The size of the child window in 2D space.

- border: `boolean`, optional
  >A boolean value indicating whether to display a border around the child window.

- flags: [`infinity.ui.windowFlags`](#infinity.ui.windowFlags_enum), optional
  >Optional flags that control the behavior of the child window.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginChild(id) ) {}
```

---

## beginChildFrame() {: #infinity.ui.beginChildFrame_function .doc-function}

Begins a new child frame with the specified id, size, and window flags. Returns a boolean indicating whether the child frame was successfully created.

Signature:
```
beginChildFrame( id: number, size: infinity.ui.vec2, flags?: infinity.ui.windowFlags ): boolean
```

Parameters:

- id: `number`
  >The unique identifier for the child frame.

- size: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The size of the child frame in 2D space.

- flags: [`infinity.ui.windowFlags`](#infinity.ui.windowFlags_enum), optional
  >Optional flags that control the behavior of the child frame.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginChildFrame(id, size) ) {}
```

---

## beginCombo() {: #infinity.ui.beginCombo_function .doc-function}

Begins a new combo box with the specified label, preview value, and combo flags. Returns a boolean indicating whether the combo box was successfully created.






Signature:
```
beginCombo( label: string, previewValue: string, flags?: infinity.ui.comboFlags ): boolean
```

Parameters:

- label: `string`
  >The text that appears as the combo box label.

- previewValue: `string`
  >The text displayed as the preview value in the combo box.

- flags: [`infinity.ui.comboFlags`](#infinity.ui.comboFlags_enum), optional
  >Optional flags that control the behavior of the combo box.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginCombo(label, previewValue) ) {}
```

---

## beginDisabled() {: #infinity.ui.beginDisabled_function .doc-function}

Starts a new disabled block in the UI, based on the specified disabled state.

Signature:
```
beginDisabled( disabled: boolean ): void
```

Parameters:

- disabled: `boolean`
  >A boolean indicating whether the block should be disabled.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.beginDisabled(disabled);
```

---

## beginGroup() {: #infinity.ui.beginGroup_function .doc-function}

Initiates a new group in the UI.

Signature:
```
beginGroup(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.beginGroup();
```

---

## beginListBox() {: #infinity.ui.beginListBox_function .doc-function}

Initiates a new list box with a specific label and optional size. Returns a boolean indicating whether the main menu bar was successfully created.

Signature:
```
beginListBox( label: string, size?: infinity.ui.vec2 ): boolean
```

Parameters:

- label: `string`
  >The text that appears as the list box label.

- size: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >The 2D dimensions of the list box, if specified.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginListBox(label) ) {}
```

---

## beginMainMenuBar() {: #infinity.ui.beginMainMenuBar_function .doc-function}

Initiates a new main menu bar in the UI. Returns a boolean indicating whether the main menu bar was successfully created.

Signature:
```
beginMainMenuBar(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginMainMenuBar() ) {}
```

---

## beginMenu() {: #infinity.ui.beginMenu_function .doc-function}

Initiates a new menu in the UI with the provided label. Returns a boolean indicating whether the menu was successfully created.

Signature:
```
beginMenu( label: string, enabled?: boolean ): boolean
```

Parameters:

- label: `string`
  >The text that appears as the menu label.

- enabled: `boolean`, optional
  >Indicates whether the menu is enabled or disabled.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginMenu(label) ) {}
```

---

## beginMenuBar() {: #infinity.ui.beginMenuBar_function .doc-function}

Initiates a new menu bar in the UI. Returns a boolean indicating whether the menu bar was successfully created.

Signature:
```
beginMenuBar(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginMenuBar() ) {}
```

---

## beginPopup() {: #infinity.ui.beginPopup_function .doc-function}

Initiates a new popup in the UI with the provided identifier. Returns a boolean indicating whether the popup was successfully created.

Signature:
```
beginPopup( id: string, flags?: infinity.ui.windowFlags ): boolean
```

Parameters:

- id: `string`
  >A unique identifier for the popup.

- flags: [`infinity.ui.windowFlags`](#infinity.ui.windowFlags_enum), optional
  >Specifies optional flags for the popup window.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginPopup(id) ) {}
```

---

## beginPopupContextItem() {: #infinity.ui.beginPopupContextItem_function .doc-function}

Initiates a new context-specific popup in the UI. Returns a boolean indicating whether the popup was successfully created.

Signature:
```
beginPopupContextItem( id?: string, flags?: infinity.ui.popupFlags ): boolean
```

Parameters:

- id: `string`, optional
  >A unique identifier for the context-specific popup.

- flags: [`infinity.ui.popupFlags`](#infinity.ui.popupFlags_enum), optional
  >Specifies optional flags for the popup.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginPopupContextItem() ) {}
```

---

## beginPopupContextVoid() {: #infinity.ui.beginPopupContextVoid_function .doc-function}

Initiates a new context-agnostic popup in the UI. Returns a boolean indicating whether the popup was successfully created.

Signature:
```
beginPopupContextVoid( id?: string, flags?: infinity.ui.popupFlags ): boolean
```

Parameters:

- id: `string`, optional
  >A unique identifier for the context-agnostic popup.

- flags: [`infinity.ui.popupFlags`](#infinity.ui.popupFlags_enum), optional
  >Specifies optional flags for the popup.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginPopupContextVoid() ) {}
```

---

## beginPopupContextWindow() {: #infinity.ui.beginPopupContextWindow_function .doc-function}

Initiates a new window-specific popup in the UI. Returns a boolean indicating whether the popup was successfully created.

Signature:
```
beginPopupContextWindow( id?: string, flags?: infinity.ui.popupFlags ): boolean
```

Parameters:

- id: `string`, optional
  >A unique identifier for the window-specific popup.

- flags: [`infinity.ui.popupFlags`](#infinity.ui.popupFlags_enum), optional
  >Specifies optional flags for the popup.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginPopupContextWindow() ) {}
```

---

## beginPopupModal() {: #infinity.ui.beginPopupModal_function .doc-function}

Initiates a new modal popup with the specified name. Returns a boolean indicating whether the modal popup was successfully created.

Signature:
```
beginPopupModal( name: string, open?: boolean, flags?: infinity.ui.windowFlags ): boolean
```

Parameters:

- name: `string`
  >The name of the modal popup.

- open: `boolean`, optional
  >Specifies whether the modal popup should be open upon creation.

- flags: [`infinity.ui.windowFlags`](#infinity.ui.windowFlags_enum), optional
  >Specifies optional flags for the modal popup.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginPopupModal(name) ) {}
```

---

## beginTabBar() {: #infinity.ui.beginTabBar_function .doc-function}

Initiates a new tab bar with the given ID. Returns a boolean indicating whether the tab bar was successfully created.

Signature:
```
beginTabBar( id: string, flags?: infinity.ui.tabBarFlags ): boolean
```

Parameters:

- id: `string`
  >The ID for the tab bar.

- flags: [`infinity.ui.tabBarFlags`](#infinity.ui.tabBarFlags_enum), optional
  >Specifies optional flags for the tab bar.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginTabBar(id) ) {}
```

---

## beginTabItem() {: #infinity.ui.beginTabItem_function .doc-function}

Initiates a new tab item with the given label. Returns a boolean indicating whether the tab item was successfully created.

Signature:
```
beginTabItem( label: string, open?: boolean, flags?: infinity.ui.tabItemFlags ): boolean
```

Parameters:

- label: `string`
  >The label for the tab item.

- open: `boolean`, optional
  >Specifies whether the tab item is open.

- flags: [`infinity.ui.tabItemFlags`](#infinity.ui.tabItemFlags_enum), optional
  >Specifies optional flags for the tab item.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginTabItem(label) ) {}
```

---

## beginTable() {: #infinity.ui.beginTable_function .doc-function}

Begins a new table with the specified ID and number of columns. Returns a boolean indicating whether the table was successfully created.

Signature:
```
beginTable( id: string, column: number, flags?: infinity.ui.tableFlags, outerSize?: infinity.ui.vec2, innerWidth?: number ): boolean
```

Parameters:

- id: `string`
  >The ID for the table.

- column: `number`
  >The number of columns in the table.

- flags: [`infinity.ui.tableFlags`](#infinity.ui.tableFlags_enum), optional
  >Specifies optional flags for the table.

- outerSize: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >Specifies the outer size of the table.

- innerWidth: `number`, optional
  >Specifies the inner width of the table.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginTable(id, column) ) {}
```

---

## beginTooltip() {: #infinity.ui.beginTooltip_function .doc-function}

Commences the creation of a new tooltip. A tooltip is a contextual element that displays information about other interface elements when the user hovers over them. The tooltip can include text or other UI components. After calling this function, you can add components to the tooltip. To finish and display the tooltip, use the corresponding [`endTooltip`](#infinity.ui.endTooltip_function) function.

Signature:
```
beginTooltip(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.beginTooltip();
```

---

## bullet() {: #infinity.ui.bullet_function .doc-function}

Draws a small circular bullet point in the current layout context.

Signature:
```
bullet(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.bullet();
```

---

## bulletText() {: #infinity.ui.bulletText_function .doc-function}

Renders a bullet point marker followed by the provided text.

Signature:
```
bulletText( text: string ): void
```

Parameters:

- text: `string`
  >Text to be displayed next to the bullet point.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.bulletText(text);
```

---

## button() {: #infinity.ui.button_function .doc-function}

Creates a button with a label and optional size. Returns true when the button is clicked.

Signature:
```
button( label: string, size?: infinity.ui.vec2 ): boolean
```

Parameters:

- label: `string`
  >Label displayed on the button.

- size: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >Vector specifying the width and height of the button in pixels.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.button(label) ) {}
```

---

## calcItemWidth() {: #infinity.ui.calcItemWidth_function .doc-function}

Calculates the width of an item in the current context. Returns the width of the item in the current context. Used typically when determining the appropriate size for the next item or widget in the layout.

Signature:
```
calcItemWidth(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.calcItemWidth();
```

---

## calcTextSize() {: #infinity.ui.calcTextSize_function .doc-function}

Calculates the size of a given text string. Returns an infinity.ui.vec2 object, where the x value is the width of the text and the y value is the height. The size takes into account potential text wrapping at the specified wrapWidth.

Signature:
```
calcTextSize( text: string, wrapWidth?: number ): infinity.ui.vec2
```

Parameters:

- text: `string`
  >The text string for which the size should be calculated.

- wrapWidth: `number`, optional
  >The width at which the text string should wrap.


Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.calcTextSize(text);
```

---

## checkbox() {: #infinity.ui.checkbox_function .doc-function}

Creates a checkbox with the specified label. Returns a boolean indicating whether the state of the checkbox has changed after the function call.


Signature:
```
checkbox( label: string, checked: boolean ): boolean
```

Parameters:

- label: `string`
  >The label to be displayed next to the checkbox.

- checked: `boolean`
  >The current state of the checkbox.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.checkbox(label, checked) ) {}
```

---

## closeCurrentPopup() {: #infinity.ui.closeCurrentPopup_function .doc-function}

Closes the currently active popup.

Signature:
```
closeCurrentPopup(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.closeCurrentPopup();
```

---

## collapsingHeader() {: #infinity.ui.collapsingHeader_function .doc-function}

Creates a collapsible header section in the user interface. Returns the current state of the header.

Signature:
```
collapsingHeader( label: string, visible: boolean, flags?: infinity.ui.treeNodeFlags ): infinity.ui.collapsingHeaderStates
```

Parameters:

- label: `string`
  >The displayed name of the collapsible header.

- visible: `boolean`
  >A flag determining if the header starts in an expanded or collapsed state.

- flags: [`infinity.ui.treeNodeFlags`](#infinity.ui.treeNodeFlags_enum), optional
  >Flags that further customize the behavior or appearance of the collapsible header.


Return type: `infinity.ui.collapsingHeaderStates`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.collapsingHeader(label, visible);
```

---

## collapsingHeader() {: #infinity.ui.collapsingHeader_function .doc-function}

Creates a collapsible header section in the user interface. Returns the current state of the header.

Signature:
```
collapsingHeader( label: string, flags?: infinity.ui.treeNodeFlags ): infinity.ui.collapsingHeaderStates
```

Parameters:

- label: `string`
  >The displayed name of the collapsible header.

- flags: [`infinity.ui.treeNodeFlags`](#infinity.ui.treeNodeFlags_enum), optional
  >Flags that further customize the behavior or appearance of the collapsible header.


Return type: `infinity.ui.collapsingHeaderStates`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.collapsingHeader(label);
```

---

## colorButton() {: #infinity.ui.colorButton_function .doc-function}

Displays a color button in the user interface. Returns true if the button is pressed, otherwise false.

Signature:
```
colorButton( id: string, color: infinity.ui.color, flags?: infinity.ui.colorEditFlags, size?: infinity.ui.vec2 ): boolean
```

Parameters:

- id: `string`
  >The identifier for the color button.

- color: [`infinity.ui.color`](#infinity.ui.color_class)
  >The initial color value displayed by the button.

- flags: [`infinity.ui.colorEditFlags`](#infinity.ui.colorEditFlags_enum), optional
  >Flags that dictate how the color editing behaves or appears.

- size: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >Specifies the size of the color button.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.colorButton(id, color) ) {}
```

---

## colorConvertFloat4ToU32() {: #infinity.ui.colorConvertFloat4ToU32_function .doc-function}

Converts a color from the [`infinity.ui.color`](#infinity.ui.color_class) format to a 32-bit unsigned integer format. Returns the color value as a 32-bit unsigned integer.

Signature:
```
colorConvertFloat4ToU32( color: infinity.ui.color ): number
```

Parameters:

- color: [`infinity.ui.color`](#infinity.ui.color_class)
  >The color value that needs to be converted.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.colorConvertFloat4ToU32(color);
```

---

## colorConvertU32ToFloat4() {: #infinity.ui.colorConvertU32ToFloat4_function .doc-function}

Converts a color from a 32-bit unsigned integer format to the infinity.ui.color format. Returns the color value in the infinity.ui.color format.

Signature:
```
colorConvertU32ToFloat4( color: number ): infinity.ui.color
```

Parameters:

- color: `number`
  >The 32-bit unsigned integer representing the color that needs to be converted.


Return type: [`infinity.ui.color`](#infinity.ui.color_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.colorConvertU32ToFloat4(color);
```

---

## colorEdit() {: #infinity.ui.colorEdit_function .doc-function}

Creates a color edit UI widget that allows modification of an [`infinity.ui.color`](#infinity.ui.color_class) value. Returns the modified color value in the [`infinity.ui.color`](#infinity.ui.color_class) format.

Signature:
```
colorEdit( label: string, color: infinity.ui.color, flags?: infinity.ui.colorEditFlags ): infinity.ui.color
```

Parameters:

- label: `string`
  >The label displayed next to the color edit widget.

- color: [`infinity.ui.color`](#infinity.ui.color_class)
  >The initial or default color value presented in the widget.

- flags: [`infinity.ui.colorEditFlags`](#infinity.ui.colorEditFlags_enum), optional
  >Flags to customize the behavior and appearance of the color edit widget.


Return type: [`infinity.ui.color`](#infinity.ui.color_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.colorEdit(label, color);
```

---

## colorPicker() {: #infinity.ui.colorPicker_function .doc-function}

Creates a color picker UI widget that allows selection and modification of an [`infinity.ui.color`](#infinity.ui.color_class) value. Returns the chosen color in the [`infinity.ui.color`](#infinity.ui.color_class) format.

Signature:
```
colorPicker( label: string, color: infinity.ui.color, flags?: infinity.ui.colorEditFlags ): infinity.ui.color
```

Parameters:

- label: `string`
  >The label displayed above the color picker widget.

- color: [`infinity.ui.color`](#infinity.ui.color_class)
  >The initial or default color value presented in the picker.

- flags: [`infinity.ui.colorEditFlags`](#infinity.ui.colorEditFlags_enum), optional
  >Flags to adjust the behavior and appearance of the color picker widget.


Return type: [`infinity.ui.color`](#infinity.ui.color_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.colorPicker(label, color);
```

---

## combo() {: #infinity.ui.combo_function .doc-function}

Creates a combo box UI widget that allows users to select from a drop-down list of items. Returns the index of the currently selected item.

Signature:
```
combo( label: string, currentItem: number, items: infinity.ui.stringArray, heightInItems?: number ): number
```

Parameters:

- label: `string`
  >The label displayed next to the combo box.

- currentItem: `number`
  >The index of the currently selected item from the items array.

- items: [`infinity.ui.stringArray`](#infinity.ui.stringArray_interface)
  >An array of strings that represent the items in the drop-down list.

- heightInItems: `number`, optional
  >The number of items to display in the combo's drop-down list before needing to scroll.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.combo(label, currentItem, items);
```

---

## dragFloat() {: #infinity.ui.dragFloat_function .doc-function}

Creates a draggable float slider UI widget. Returns the modified value after user interaction.

Signature:
```
dragFloat( label: string, v: number, speed?: number, vmin?: number, vmax?: number, format?: string, flags?: infinity.ui.sliderFlags ): number
```

Parameters:

- label: `string`
  >The label displayed next to the float slider.

- v: `number`
  >The current value of the float.

- speed: `number`, optional
  >The increment/decrement speed when dragging.

- vmin: `number`, optional
  >The minimum allowable value for the float.

- vmax: `number`, optional
  >The maximum allowable value for the float.

- format: `string`, optional
  >The format string used to display the float value. For example, "%.2f" will display the float with two decimal places.

- flags: [`infinity.ui.sliderFlags`](#infinity.ui.sliderFlags_enum), optional
  >Flags that customize the behavior of the slider.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.dragFloat(label, v);
```

---

## dragInt() {: #infinity.ui.dragInt_function .doc-function}

Creates a draggable integer slider UI widget. Returns the modified value after user interaction.

Signature:
```
dragInt( label: string, v: number, speed?: number, vmin?: number, vmax?: number, format?: string, flags?: infinity.ui.sliderFlags ): number
```

Parameters:

- label: `string`
  >The label displayed next to the integer slider.

- v: `number`
  >The current value of the integer.

- speed: `number`, optional
  >The increment/decrement speed when dragging.

- vmin: `number`, optional
  >The minimum allowable value for the integer.

- vmax: `number`, optional
  >The maximum allowable value for the integer.

- format: `string`, optional
  >The format string used to display the integer value. For instance, "%d" would display the integer in decimal form.

- flags: [`infinity.ui.sliderFlags`](#infinity.ui.sliderFlags_enum), optional
  >Flags that customize the behavior of the slider.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.dragInt(label, v);
```

---

## dummy() {: #infinity.ui.dummy_function .doc-function}

Creates a blank space in the UI with specified dimensions.

Signature:
```
dummy( size: infinity.ui.vec2 ): void
```

Parameters:

- size: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >Specifies the width and height of the blank space.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.dummy(size);
```

---

## end() {: #infinity.ui.end_function .doc-function}

Closes the previously started window or container. Should be called after creating a window or a container (like [`begin`](#infinity.ui.begin_function), [`beginChild`](#infinity.ui.beginChild_function), etc.) to indicate its end.

Signature:
```
end(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.end();
```

---

## endChild() {: #infinity.ui.endChild_function .doc-function}

Closes the previously started child window or container. Should be called after creating a child window or a container using [`beginChild`](#infinity.ui.beginChild_function).

Signature:
```
endChild(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.endChild();
```

---

## endChildFrame() {: #infinity.ui.endChildFrame_function .doc-function}

Concludes the child frame initiated with [`beginChildFrame`](#infinity.ui.beginChildFrame_function). Following the start of a child frame using [`beginChildFrame`](#infinity.ui.beginChildFrame_function), use this function to properly terminate it.

Signature:
```
endChildFrame(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.endChildFrame();
```

---

## endCombo() {: #infinity.ui.endCombo_function .doc-function}

Concludes the combo box started with [`beginCombo`](#infinity.ui.beginCombo_function).

Signature:
```
endCombo(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.endCombo();
```

---

## endDisabled() {: #infinity.ui.endDisabled_function .doc-function}

Concludes the disabled UI state started with [`beginDisabled`](#infinity.ui.beginDisabled_function).

Signature:
```
endDisabled(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.endDisabled();
```

---

## endGroup() {: #infinity.ui.endGroup_function .doc-function}

Concludes the UI grouping started with [`beginGroup`](#infinity.ui.beginGroup_function).

Signature:
```
endGroup(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.endGroup();
```

---

## endListBox() {: #infinity.ui.endListBox_function .doc-function}

Terminates the list box UI component started with [`beginListBox`](#infinity.ui.beginListBox_function).

Signature:
```
endListBox(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.endListBox();
```

---

## endMainMenuBar() {: #infinity.ui.endMainMenuBar_function .doc-function}

Terminates the main menu bar UI component started with [`beginMainMenuBar`](#infinity.ui.beginMainMenuBar_function).

Signature:
```
endMainMenuBar(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.endMainMenuBar();
```

---

## endMenu() {: #infinity.ui.endMenu_function .doc-function}

Terminates a menu UI component started with [`beginMenu`](#infinity.ui.beginMenu_function).

Signature:
```
endMenu(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.endMenu();
```

---

## endMenuBar() {: #infinity.ui.endMenuBar_function .doc-function}

Terminates a menu bar UI component started with [`beginMenuBar`](#infinity.ui.beginMenuBar_function).

Signature:
```
endMenuBar(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.endMenuBar();
```

---

## endPopup() {: #infinity.ui.endPopup_function .doc-function}

Terminates a popup UI component started with any of the [`beginPopup`](#infinity.ui.beginPopup_function) functions.

Signature:
```
endPopup(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.endPopup();
```

---

## endTabBar() {: #infinity.ui.endTabBar_function .doc-function}

Closes an ongoing Tab Bar UI element initiated with [`beginTabBar`](#infinity.ui.beginTabBar_function).

Signature:
```
endTabBar(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.endTabBar();
```

---

## endTabItem() {: #infinity.ui.endTabItem_function .doc-function}

Concludes an active Tab Item UI element initiated with [`beginTabItem`](#infinity.ui.beginTabItem_function).

Signature:
```
endTabItem(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.endTabItem();
```

---

## endTable() {: #infinity.ui.endTable_function .doc-function}

Concludes an active Table UI element initiated with [`beginTable`](#infinity.ui.beginTable_function).

Signature:
```
endTable(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.endTable();
```

---

## endTooltip() {: #infinity.ui.endTooltip_function .doc-function}

Concludes an active Tooltip UI element initiated with [`beginTooltip`](#infinity.ui.beginTooltip_function).

Signature:
```
endTooltip(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.endTooltip();
```

---

## freeTexture() {: #infinity.ui.freeTexture_function .doc-function}

Releases a previously loaded texture from memory.

Signature:
```
freeTexture( texture: number ): boolean
```

Parameters:

- texture: `number`
  >Specifies the unique identifier for the texture to be released.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.freeTexture(texture) ) {}
```

---

## getClipboardText() {: #infinity.ui.getClipboardText_function .doc-function}

Retrieves the current text content from the system clipboard.

Signature:
```
getClipboardText(): string
```

Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.getClipboardText();
```

---

## getColor() {: #infinity.ui.getColor_function .doc-function}

Fetches a color from the current style by index and multiplies its alpha by the provided factor.

Signature:
```
getColor( idx: infinity.ui.colorTypes, alphaMul: number ): number
```

Parameters:

- idx: [`infinity.ui.colorTypes`](#infinity.ui.colorTypes_enum)
  >A predefined color type that you want to use.

- alphaMul: `number`
  >Factor by which the alpha value of the color is multiplied.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getColor(idx, alphaMul);
```

---

## getColor() {: #infinity.ui.getColor_function .doc-function}

Fetches a color based on its numeric representation.

Signature:
```
getColor( col: number ): number
```

Parameters:

- col: `number`
  >Numeric representation of the color you want to fetch.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getColor(col);
```

---

## getColor() {: #infinity.ui.getColor_function .doc-function}

Fetches a color based on its RGBA representation.

Signature:
```
getColor( col: infinity.ui.color ): number
```

Parameters:

- col: [`infinity.ui.color`](#infinity.ui.color_class)
  >The color you want to fetch, expressed in RGBA format.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getColor(col);
```

---

## getContentRegionAvail() {: #infinity.ui.getContentRegionAvail_function .doc-function}

Retrieves the size of the available content region within the current window or widget as an infinity.ui.vec2 object.

Signature:
```
getContentRegionAvail(): infinity.ui.vec2
```

Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getContentRegionAvail();
```

---

## getContentRegionMax() {: #infinity.ui.getContentRegionMax_function .doc-function}

Retrieves the maximum size of the content region within the current window or widget as an infinity.ui.vec2 object.

Signature:
```
getContentRegionMax(): infinity.ui.vec2
```

Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getContentRegionMax();
```

---

## getCursorPos() {: #infinity.ui.getCursorPos_function .doc-function}

Determines the current cursor position within the active window or widget and returns an infinity.ui.vec2 object representing the coordinates.

Signature:
```
getCursorPos(): infinity.ui.vec2
```

Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getCursorPos();
```

---

## getCursorPosX() {: #infinity.ui.getCursorPosX_function .doc-function}

Determines the current cursor's X-coordinate within the active window or widget. Returns a number representing this X-coordinate.

Signature:
```
getCursorPosX(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getCursorPosX();
```

---

## getCursorPosY() {: #infinity.ui.getCursorPosY_function .doc-function}

Determines the current cursor's Y-coordinate within the active window or widget. Returns a number representing this Y-coordinate.

Signature:
```
getCursorPosY(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getCursorPosY();
```

---

## getCursorScreenPos() {: #infinity.ui.getCursorScreenPos_function .doc-function}

Determines the current cursor's Y-coordinate within the active window. Returns an [`infinity.ui.vec2`](#infinity.ui.vec2_class) object representing this position.

Signature:
```
getCursorScreenPos(): infinity.ui.vec2
```

Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getCursorScreenPos();
```

---

## getCursorStartPos() {: #infinity.ui.getCursorStartPos_function .doc-function}

Retrieves the starting position of the cursor within the current window or widget. Returns an [`infinity.ui.vec2`](#infinity.ui.vec2_class) object representing this position.

Signature:
```
getCursorStartPos(): infinity.ui.vec2
```

Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getCursorStartPos();
```

---

## getFont() {: #infinity.ui.getFont_function .doc-function}

Retrieves the current font being used by the interface. Returns a numerical ID representing the font.

Signature:
```
getFont(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getFont();
```

---

## getFontSize() {: #infinity.ui.getFontSize_function .doc-function}

Retrieves the size of the current font being used by the interface. Returns a numerical value representing the font size in points.

Signature:
```
getFontSize(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getFontSize();
```

---

## getFontTexUvWhitePixel() {: #infinity.ui.getFontTexUvWhitePixel_function .doc-function}

Obtains the UV coordinates of a white pixel. Returns an  [`infinity.ui.vec2`](#infinity.ui.vec2_class) object representing the UV coordinates.

Signature:
```
getFontTexUvWhitePixel(): infinity.ui.vec2
```

Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getFontTexUvWhitePixel();
```

---

## getFrameCount() {: #infinity.ui.getFrameCount_function .doc-function}

Returns the current frame count since the start of the application.

Signature:
```
getFrameCount(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getFrameCount();
```

---

## getFrameHeight() {: #infinity.ui.getFrameHeight_function .doc-function}

Retrieves the height of a standard frame, commonly used in many widgets within the user interface. Returns a number indicating the height in pixels.

Signature:
```
getFrameHeight(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getFrameHeight();
```

---

## getFrameHeightWithSpacing() {: #infinity.ui.getFrameHeightWithSpacing_function .doc-function}

Retrieves the height of a standard frame, including the default spacing applied after it. Returns a number indicating the combined height in pixels.

Signature:
```
getFrameHeightWithSpacing(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getFrameHeightWithSpacing();
```

---

## getId() {: #infinity.ui.getId_function .doc-function}

Generates a unique identifier for a UI element based on the provided string. Returns a number representing the generated ID.

Signature:
```
getId( id: string ): number
```

Parameters:

- id: `string`
  >The name or label from which the unique ID will be generated.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getId(id);
```

---

## getId() {: #infinity.ui.getId_function .doc-function}

Generates a unique identifier for a UI element based on a range denoted by two provided strings. Returns a number representing the generated ID.

Signature:
```
getId( idBegin: string, idEnd: string ): number
```

Parameters:

- idBegin: `string`
  >The starting name or label of the range from which the unique ID will begin.

- idEnd: `string`
  >The ending name or label of the range up to which the unique ID will be generated.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getId(idBegin, idEnd);
```

---

## getItemRectMax() {: #infinity.ui.getItemRectMax_function .doc-function}

Retrieves the maximum coordinate (bottom-right corner) of the last item that was drawn. Returns an  [`infinity.ui.vec2`](#infinity.ui.vec2_class) object representing the position of the bottom-right corner.

Signature:
```
getItemRectMax(): infinity.ui.vec2
```

Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getItemRectMax();
```

---

## getItemRectMin() {: #infinity.ui.getItemRectMin_function .doc-function}

Retrieves the minimum coordinate (top-left corner) of the last item that was drawn. Returns an  [`infinity.ui.vec2`](#infinity.ui.vec2_class) object representing the position of the top-left corner.
Signature:
```
getItemRectMin(): infinity.ui.vec2
```

Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getItemRectMin();
```

---

## getItemRectSize() {: #infinity.ui.getItemRectSize_function .doc-function}

Retrieves the size of the last item that was drawn. Returns an  [`infinity.ui.vec2`](#infinity.ui.vec2_class) object representing the dimensions of the item.

Signature:
```
getItemRectSize(): infinity.ui.vec2
```

Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getItemRectSize();
```

---

## getKeyName() {: #infinity.ui.getKeyName_function .doc-function}

Retrieves the human-readable name of the given key enumeration. Returns a string representing the key's name.

Signature:
```
getKeyName( key: infinity.ui.keys ): string
```

Parameters:

- key: [`infinity.ui.keys`](#infinity.ui.keys_enum)
  >The keyboard key enumeration value for which the name is to be retrieved.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.getKeyName(key);
```

---

## getKeyPressedAmount() {: #infinity.ui.getKeyPressedAmount_function .doc-function}

Determines how many times a specific key has been pressed in succession within a defined time interval. Returns the count of key presses.

Signature:
```
getKeyPressedAmount( key: infinity.ui.keys, delay: number, rate: number ): number
```

Parameters:

- key: [`infinity.ui.keys`](#infinity.ui.keys_enum)
  >The keyboard key enumeration value for which the pressed count is to be determined.

- delay: `number`
  >The initial time delay (in seconds) before the key press repetition starts.

- rate: `number`
  >The frequency (presses per second) at which the key repetition occurs after the initial delay.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getKeyPressedAmount(key, delay, rate);
```

---

## getMouseClickedCount() {: #infinity.ui.getMouseClickedCount_function .doc-function}

Retrieves the count of consecutive clicks for a specified mouse button within a short time frame. Returns the number of clicks registered.

Signature:
```
getMouseClickedCount( button: infinity.ui.mouseButtons ): number
```

Parameters:

- button: [`infinity.ui.mouseButtons`](#infinity.ui.mouseButtons_enum)
  >The mouse button enumeration value for which the clicked count is to be determined.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getMouseClickedCount(button);
```

---

## getMouseCursor() {: #infinity.ui.getMouseCursor_function .doc-function}

Retrieves the current mouse cursor type. Returns the cursor type as one of the enumeration values from infinity.ui.mouseCursors

Signature:
```
getMouseCursor(): infinity.ui.mouseCursors
```

Return type: [`infinity.ui.mouseCursors`](#infinity.ui.mouseCursors_enum)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getMouseCursor();
```

---

## getMouseDragDelta() {: #infinity.ui.getMouseDragDelta_function .doc-function}

Retrieves the delta distance the mouse has been dragged since the last call, given an optional specific button. The result is an infinity.ui.vec2 object representing the drag delta, where the x and y components indicate the horizontal and vertical distances, respectively.

Signature:
```
getMouseDragDelta( button?: infinity.ui.mouseButtons, lockThreshold?: number ): infinity.ui.vec2
```

Parameters:

- button: [`infinity.ui.mouseButtons`](#infinity.ui.mouseButtons_enum), optional
  >The specific mouse button to check. If not provided, it defaults to the left mouse button. This allows developers to determine the drag delta for any specific mouse button, be it left, right, or middle.

- lockThreshold: `number`, optional
  >A threshold below which the mouse movement will be disregarded. It can be used to filter out minor jitters in mouse input.


Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getMouseDragDelta();
```

---

## getMousePos() {: #infinity.ui.getMousePos_function .doc-function}

Retrieves the current position of the mouse cursor. The result is an infinity.ui.vec2 object representing the mouse's x and y coordinates on the screen.

Signature:
```
getMousePos(): infinity.ui.vec2
```

Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getMousePos();
```

---

## getMousePosOnOpeningCurrentPopup() {: #infinity.ui.getMousePosOnOpeningCurrentPopup_function .doc-function}

Retrieves the position of the mouse cursor when the current popup was opened. The returned value is an infinity.ui.vec2 object indicating the mouse's x and y coordinates at that moment.

Signature:
```
getMousePosOnOpeningCurrentPopup(): infinity.ui.vec2
```

Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getMousePosOnOpeningCurrentPopup();
```

---

## getStyleColor() {: #infinity.ui.getStyleColor_function .doc-function}

Retrieves the color value associated with a given style color type. The returned value is an infinity.ui.color object representing the RGBA color.

Signature:
```
getStyleColor( idx: infinity.ui.colorTypes ): infinity.ui.color
```

Parameters:

- idx: [`infinity.ui.colorTypes`](#infinity.ui.colorTypes_enum)
  >The style color type for which the value is being queried. This is an enumeration of various GUI elements and states (e.g., text, windowBg, buttonHovered) that have predefined color values in the UI's current theme.


Return type: [`infinity.ui.color`](#infinity.ui.color_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getStyleColor(idx);
```

---

## getStyleColorName() {: #infinity.ui.getStyleColorName_function .doc-function}

Retrieves the name of a specified style color type as a string.

Signature:
```
getStyleColorName( index: infinity.ui.colorTypes ): string
```

Parameters:

- index: [`infinity.ui.colorTypes`](#infinity.ui.colorTypes_enum)
  >The style color type for which the name is being queried. This represents an enumeration of various GUI elements and states (e.g., text, windowBg, buttonHovered).


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.getStyleColorName(index);
```

---

## getTextLineHeight() {: #infinity.ui.getTextLineHeight_function .doc-function}

Retrieves the height, in pixels, of a line of text for the current font.

Signature:
```
getTextLineHeight(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getTextLineHeight();
```

---

## getTextLineHeightWithSpacing() {: #infinity.ui.getTextLineHeightWithSpacing_function .doc-function}

Retrieves and returns the height, in pixels, of a single line of text using the currently active font, along with any additional spacing.

Signature:
```
getTextLineHeightWithSpacing(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getTextLineHeightWithSpacing();
```

---

## getTime() {: #infinity.ui.getTime_function .doc-function}

Fetches and returns the time elapsed since the start of the application, in seconds.

Signature:
```
getTime(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getTime();
```

---

## getTreeNodeToLabelSpacing() {: #infinity.ui.getTreeNodeToLabelSpacing_function .doc-function}

Retrieves the horizontal spacing (in pixels) between a tree node and its label, allowing for precise placement of elements relative to tree node labels in user interface design.

Signature:
```
getTreeNodeToLabelSpacing(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getTreeNodeToLabelSpacing();
```

---

## getWindowContentRegionMax() {: #infinity.ui.getWindowContentRegionMax_function .doc-function}

Retrieves the maximum coordinates of the content region of the current window, returning an infinity.ui.vec2 object where the x and y components represent the maximum width and height, respectively.

Signature:
```
getWindowContentRegionMax(): infinity.ui.vec2
```

Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getWindowContentRegionMax();
```

---

## getWindowContentRegionMin() {: #infinity.ui.getWindowContentRegionMin_function .doc-function}

Retrieves the minimum coordinates of the content region of the current window, returning an infinity.ui.vec2 object where the x and y components represent the minimum width and height, respectively.

Signature:
```
getWindowContentRegionMin(): infinity.ui.vec2
```

Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getWindowContentRegionMin();
```

---

## getWindowHeight() {: #infinity.ui.getWindowHeight_function .doc-function}

Retrieves the height of the current window.

Signature:
```
getWindowHeight(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getWindowHeight();
```

---

## getWindowPos() {: #infinity.ui.getWindowPos_function .doc-function}

Retrieves the position of the top-left corner of the current window, returning an object that represents its coordinates in pixels.

Signature:
```
getWindowPos(): infinity.ui.vec2
```

Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getWindowPos();
```

---

## getWindowSize() {: #infinity.ui.getWindowSize_function .doc-function}

Retrieves the size of the current window, returning an object containing its width and height in pixels.

Signature:
```
getWindowSize(): infinity.ui.vec2
```

Return type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getWindowSize();
```

---

## getWindowWidth() {: #infinity.ui.getWindowWidth_function .doc-function}

Retrieves the width of the current window in pixels.

Signature:
```
getWindowWidth(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getWindowWidth();
```

---

## image() {: #infinity.ui.image_function .doc-function}

Displays an image in the current UI context using the provided texture handle and size.

Signature:
```
image( texture: number, size: infinity.ui.vec2, uv1?: infinity.ui.vec2, uv2?: infinity.ui.vec2, tintCol?: infinity.ui.color, borderCol?: infinity.ui.color ): void
```

Parameters:

- texture: `number`
  >A handle to the texture that you wish to display.

- size: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >An object specifying the width and height of the image to be displayed in pixels.

- uv1: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >An object that denotes the top-left UV coordinate for texture mapping.

- uv2: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >An object that denotes the bottom-right UV coordinate for texture mapping.

- tintCol: [`infinity.ui.color`](#infinity.ui.color_class), optional
  >An object representing the color to tint or modulate the image with.

- borderCol: [`infinity.ui.color`](#infinity.ui.color_class), optional
  >An object representing the color of the border.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.image(texture, size);
```

---

## imageButton() {: #infinity.ui.imageButton_function .doc-function}

Renders an interactive image button in the current UI context using the provided texture handle and size. This button is clickable and returns a boolean value indicating if the button was pressed.

Signature:
```
imageButton( texture: number, size: infinity.ui.vec2, uv1?: infinity.ui.vec2, uv2?: infinity.ui.vec2, padding?: number, bgCol?: infinity.ui.color, tintCol?: infinity.ui.color ): boolean
```

Parameters:

- texture: `number`
  >A handle to the texture that you wish to display on the button.

- size: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >An object specifying the width and height of the button to be displayed in pixels.

- uv1: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >An object that denotes the top-left UV coordinate for texture mapping.

- uv2: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >An object that denotes the bottom-right UV coordinate for texture mapping.

- padding: `number`, optional
  >The amount of padding (in pixels) to be added around the image inside the button.

- bgCol: [`infinity.ui.color`](#infinity.ui.color_class), optional
  >An object representing the background color of the button.

- tintCol: [`infinity.ui.color`](#infinity.ui.color_class), optional
  >An object representing the color to tint or modulate the image with.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.imageButton(texture, size) ) {}
```

---

## indent() {: #infinity.ui.indent_function .doc-function}

Shifts the current UI layout position to the right by a specified width, effectively creating an indentation.

Signature:
```
indent( width?: number ): void
```

Parameters:

- width: `number`, optional
  >The amount of space (in pixels) to indent the content.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.indent();
```

---

## init() {: #infinity.ui.init_function .doc-function}

Initializes a new UI window or element with the specified properties and position on the screen. The initialization can be controlled further using optional flags.

Signature:
```
init( caption: string, x: number, y: number, width: number, height: number, flags?: infinity.ui.initFlags ): boolean
```

Parameters:

- caption: `string`
  >The title or label that will be displayed at the top of the window or element.

- x: `number`
  >The horizontal position (in pixels) on the screen where the window's or element's left edge will be placed.

- y: `number`
  >The vertical position (in pixels) on the screen where the window's or element's top edge will be placed.

- width: `number`
  >The width (in pixels) of the window or element.

- height: `number`
  >The height (in pixels) of the window or element.

- flags: [`infinity.ui.initFlags`](#infinity.ui.initFlags_enum), optional
  >Flags that control various initialization behaviors and properties for the window or element.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.init(caption, x, y, width, height) ) {}
```

---

## inputFloat() {: #infinity.ui.inputFloat_function .doc-function}

Displays an input box for floating-point values, allowing users to increment or enter a numerical value. The appearance and behavior of the input box can be further customized with optional parameters. Returns a boolean value indicating whether the initialization was successful.

Signature:
```
inputFloat( label: string, v: number, step?: number, stepFast?: number, format?: string, flags?: infinity.ui.inputTextFlags ): number
```

Parameters:

- label: `string`
  >The text label associated with the input box.

- v: `number`
  >The initial value displayed in the input box.

- step: `number`, optional
  >The amount by which the value will increase or decrease when using the default stepping buttons.

- stepFast: `number`, optional
  >The amount by which the value will quickly increase or decrease, typically when a modifier key is held down.

- format: `string`, optional
  >A string that dictates how the number will be formatted within the input box (e.g., "%.2f" for two decimal places).

- flags: [`infinity.ui.inputTextFlags`](#infinity.ui.inputTextFlags_enum), optional
  >Flags that modify the behavior or appearance of the input box. If not specified, default behaviors are applied.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.inputFloat(label, v);
```

---

## inputInt() {: #infinity.ui.inputInt_function .doc-function}

Displays an input box for floating-point values, allowing users to increment or enter a numerical value. The appearance and behavior of the input box can be further customized with optional parameters. Returns the modified value entered by the user or the initial value if no changes were made. Returns the updated value input by the user, or the original value if no changes occurred.

Signature:
```
inputInt( label: string, v: number, step?: number, stepFast?: number, flags?: infinity.ui.inputTextFlags ): number
```

Parameters:

- label: `string`
  >The text label that accompanies the input box.

- v: `number`
  >The initial whole number presented in the input box.

- step: `number`, optional
  >The amount the value will change when using the default increment and decrement buttons.

- stepFast: `number`, optional
  >The larger increment or decrement amount typically activated when a modifier key is held down.

- flags: [`infinity.ui.inputTextFlags`](#infinity.ui.inputTextFlags_enum), optional
  >Flags to alter the behavior or visual presentation of the input box.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.inputInt(label, v);
```

---

## inputText() {: #infinity.ui.inputText_function .doc-function}

Displays an input box for text values, allowing users to type or edit a string. The behavior and appearance of the input box can be adjusted using the optional parameters. Returns the updated string input by the user, or the original string if no changes occurred.

Signature:
```
inputText( label: string, text: string, flags?: infinity.ui.inputTextFlags ): string
```

Parameters:

- label: `string`
  >The text label that accompanies the input box.

- text: `string`
  >The initial string presented in the input box.

- flags: [`infinity.ui.inputTextFlags`](#infinity.ui.inputTextFlags_enum), optional
  >Flags that modify the behavior or visual presentation of the input box.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.inputText(label, text);
```

---

## inputTextMultiline() {: #infinity.ui.inputTextMultiline_function .doc-function}

Displays a multi-line input box for text values, offering an expanded area for users to type or edit a string across multiple lines. The behavior and appearance of this input box can be further customized using the optional parameters. Returns the revised multi-line string input by the user, or the original string if there were no changes.

Signature:
```
inputTextMultiline( label: string, text: string, size?: infinity.ui.vec2, flags?: infinity.ui.inputTextFlags ): string
```

Parameters:

- label: `string`
  >The text label displayed alongside the multi-line input box.

- text: `string`
  >The initial string presented within the multi-line input space.

- size: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >Specifies the dimensions of the input box as an object with x (width) and y (height) components.

- flags: [`infinity.ui.inputTextFlags`](#infinity.ui.inputTextFlags_enum), optional
  >Flags influencing the behavior or visual style of the input box.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.inputTextMultiline(label, text);
```

---

## inputTextWithHint() {: #infinity.ui.inputTextWithHint_function .doc-function}

Displays an input box for text values, featuring a hint that provides guidance or context to the user about the expected input. The hint disappears when the user starts typing and the actual value of the input box becomes the main focus. Additional characteristics of the input box can be modified using the optional flags.

Signature:
```
inputTextWithHint( label: string, hint: string, text: string, flags?: infinity.ui.inputTextFlags ): string
```

Parameters:

- label: `string`
  >The text label displayed alongside the input box.

- hint: `string`
  >The subtle text displayed within the input box to guide the user on the expected input.

- text: `string`
  >The initial string shown within the input space.

- flags: [`infinity.ui.inputTextFlags`](#infinity.ui.inputTextFlags_enum), optional
  >Flags that adjust the behavior or visual representation of the input box.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.inputTextWithHint(label, hint, text);
```

---

## invisibleButton() {: #infinity.ui.invisibleButton_function .doc-function}

Creates an invisible button, occupying space as defined by the size parameter but without any visual representation, making it useful for custom behavior or layouts. It's often used for custom hit detection areas or to override standard UI behaviors. The button's state can be identified through the return value.

Signature:
```
invisibleButton( id: string, size: infinity.ui.vec2, flags?: infinity.ui.buttonFlags ): boolean
```

Parameters:

- id: `string`
  >The unique identifier for this button, ensuring interactions with it are distinct from other UI elements.

- size: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >An object representing the width and height of the button in pixels.

- flags: [`infinity.ui.buttonFlags`](#infinity.ui.buttonFlags_enum), optional
  >Flags that adjust the behavior or visual representation of the button.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.invisibleButton(id, size) ) {}
```

---

## isAnyItemActive() {: #infinity.ui.isAnyItemActive_function .doc-function}

Determines and returns `true` if any user interface (UI) item is currently active or in focus. This is useful to check if there's ongoing interaction with any part of the UI.

Signature:
```
isAnyItemActive(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isAnyItemActive() ) {}
```

---

## isAnyItemFocused() {: #infinity.ui.isAnyItemFocused_function .doc-function}

Determines and returns `true` if any user interface (UI) item currently has input focus. This can be used to ascertain if any part of the UI is awaiting or actively processing user input.

Signature:
```
isAnyItemFocused(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isAnyItemFocused() ) {}
```

---

## isAnyItemHovered() {: #infinity.ui.isAnyItemHovered_function .doc-function}

Determines whether the mouse cursor is currently hovering over any user interface (UI) item.

Signature:
```
isAnyItemHovered(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isAnyItemHovered() ) {}
```

---

## isAnyMouseDown() {: #infinity.ui.isAnyMouseDown_function .doc-function}

Checks and returns `true` if any mouse button is currently being pressed.

Signature:
```
isAnyMouseDown(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isAnyMouseDown() ) {}
```

---

## isItemActivated() {: #infinity.ui.isItemActivated_function .doc-function}

Determines  and returns `true` if the last item was activated, typically by a mouse click or a key equivalent.

Signature:
```
isItemActivated(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isItemActivated() ) {}
```

---

## isItemActive() {: #infinity.ui.isItemActive_function .doc-function}

Checks if the last item is currently active.

Signature:
```
isItemActive(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isItemActive() ) {}
```

---

## isItemClicked() {: #infinity.ui.isItemClicked_function .doc-function}

Determines if the last item was clicked with the specified mouse button.

Signature:
```
isItemClicked( button?: infinity.ui.mouseButtons ): boolean
```

Parameters:

- button: [`infinity.ui.mouseButtons`](#infinity.ui.mouseButtons_enum), optional
  >Specifies the mouse button to check.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isItemClicked() ) {}
```

---

## isItemDeactivated() {: #infinity.ui.isItemDeactivated_function .doc-function}

Determines if the last active item has just been deactivated.

Signature:
```
isItemDeactivated(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isItemDeactivated() ) {}
```

---

## isItemDeactivatedAfterEdit() {: #infinity.ui.isItemDeactivatedAfterEdit_function .doc-function}

Determines if the currently processed item was deactivated after a value edit.

Signature:
```
isItemDeactivatedAfterEdit(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isItemDeactivatedAfterEdit() ) {}
```

---

## isItemEdited() {: #infinity.ui.isItemEdited_function .doc-function}

Checks if the currently processed item's value has been modified.

Signature:
```
isItemEdited(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isItemEdited() ) {}
```

---

## isItemFocused() {: #infinity.ui.isItemFocused_function .doc-function}

Checks whether the currently processed item has input focus.

Signature:
```
isItemFocused(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isItemFocused() ) {}
```

---

## isItemHovered() {: #infinity.ui.isItemHovered_function .doc-function}

Determines whether the currently processed item is being hovered over, taking optional hoveredFlags into account.

Signature:
```
isItemHovered( flags?: infinity.ui.hoveredFlags ): boolean
```

Parameters:

- flags: [`infinity.ui.hoveredFlags`](#infinity.ui.hoveredFlags_enum), optional
  >Specific conditions to consider when checking for hovering, using the infinity.ui.hoveredFlags enumeration.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isItemHovered() ) {}
```

---

## isItemToggledOpen() {: #infinity.ui.isItemToggledOpen_function .doc-function}

Checks if the currently processed item, typically a tree node, has been toggled open or expanded.

Signature:
```
isItemToggledOpen(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isItemToggledOpen() ) {}
```

---

## isItemVisible() {: #infinity.ui.isItemVisible_function .doc-function}

Determines whether the currently processed item is visible on the screen.

Signature:
```
isItemVisible(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isItemVisible() ) {}
```

---

## isKeyDown() {: #infinity.ui.isKeyDown_function .doc-function}

Checks if the specified key is currently being pressed down.

Signature:
```
isKeyDown( key: infinity.ui.keys ): boolean
```

Parameters:

- key: [`infinity.ui.keys`](#infinity.ui.keys_enum)
  >The key to check for its press state.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isKeyDown(key) ) {}
```

---

## isKeyPressed() {: #infinity.ui.isKeyPressed_function .doc-function}

Determines whether the specified key was pressed during the current frame, optionally considering key repetition.

Signature:
```
isKeyPressed( key: infinity.ui.keys, repeat?: boolean ): boolean
```

Parameters:

- key: [`infinity.ui.keys`](#infinity.ui.keys_enum)
  >The key to check for its press state.

- repeat: `boolean`, optional
  >Whether to consider the key repetition.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isKeyPressed(key) ) {}
```

---

## isKeyReleased() {: #infinity.ui.isKeyReleased_function .doc-function}

Determines if the specified key was released during the current frame.

Signature:
```
isKeyReleased( key: infinity.ui.keys ): boolean
```

Parameters:

- key: [`infinity.ui.keys`](#infinity.ui.keys_enum)
  >The key to check for its release state.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isKeyReleased(key) ) {}
```

---

## isMouseClicked() {: #infinity.ui.isMouseClicked_function .doc-function}

Checks whether the specified mouse button was clicked during the current frame.

Signature:
```
isMouseClicked( button: infinity.ui.mouseButtons, repeat?: boolean ): boolean
```

Parameters:

- button: [`infinity.ui.mouseButtons`](#infinity.ui.mouseButtons_enum)
  >The mouse button to verify for its click state.

- repeat: `boolean`, optional
  >Whether to consider the key repetition.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isMouseClicked(button) ) {}
```

---

## isMouseDoubleClicked() {: #infinity.ui.isMouseDoubleClicked_function .doc-function}

Determines if the specified mouse button was double-clicked during the current frame.

Signature:
```
isMouseDoubleClicked( button: infinity.ui.mouseButtons ): boolean
```

Parameters:

- button: [`infinity.ui.mouseButtons`](#infinity.ui.mouseButtons_enum)
  >The mouse button to verify for its double-click state.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isMouseDoubleClicked(button) ) {}
```

---

## isMouseDown() {: #infinity.ui.isMouseDown_function .doc-function}

Checks if the specified mouse button is currently being pressed.

Signature:
```
isMouseDown( button: infinity.ui.mouseButtons ): boolean
```

Parameters:

- button: [`infinity.ui.mouseButtons`](#infinity.ui.mouseButtons_enum)
  >The mouse button to check for its pressed state.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isMouseDown(button) ) {}
```

---

## isMouseDragging() {: #infinity.ui.isMouseDragging_function .doc-function}

Determines whether the specified mouse button is currently being dragged beyond an optional threshold.

Signature:
```
isMouseDragging( button: infinity.ui.mouseButtons, lockThreshold?: number ): boolean
```

Parameters:

- button: [`infinity.ui.mouseButtons`](#infinity.ui.mouseButtons_enum)
  >The mouse button to check for its dragging state.

- lockThreshold: `number`, optional
  >The distance in pixels the mouse must move while being pressed to start considering it a drag action.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isMouseDragging(button) ) {}
```

---

## isMouseHoveringRect() {: #infinity.ui.isMouseHoveringRect_function .doc-function}

Determines if the mouse cursor is currently hovering within a specified rectangular area.

Signature:
```
isMouseHoveringRect( topLeft: infinity.ui.vec2, bottomRight: infinity.ui.vec2, clip?: boolean ): boolean
```

Parameters:

- topLeft: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The top-left corner coordinates of the rectangle.

- bottomRight: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The bottom-right corner coordinates of the rectangle.

- clip: `boolean`, optional
  >If set to true, considers only the visible portion of the rectangle (affected by current clipping regions).


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isMouseHoveringRect(topLeft, bottomRight) ) {}
```

---

## isMousePosValid() {: #infinity.ui.isMousePosValid_function .doc-function}

Determines if a given mouse position, or the current mouse position if none is specified, is valid within the user interface context.

Signature:
```
isMousePosValid( position?: infinity.ui.vec2 ): boolean
```

Parameters:

- position: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >The mouse position to check. If omitted, the function evaluates the current mouse position.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isMousePosValid() ) {}
```

---

## isMouseReleased() {: #infinity.ui.isMouseReleased_function .doc-function}

Checks if a specific mouse button has been released.

Signature:
```
isMouseReleased( button: infinity.ui.mouseButtons ): boolean
```

Parameters:

- button: [`infinity.ui.mouseButtons`](#infinity.ui.mouseButtons_enum)
  > The mouse button to check.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isMouseReleased(button) ) {}
```

---

## isPopupOpen() {: #infinity.ui.isPopupOpen_function .doc-function}

Determines whether a specific popup identified by its ID is currently open.

Signature:
```
isPopupOpen( id: string, flags?: infinity.ui.popupFlags ): boolean
```

Parameters:

- id: `string`
  >The identifier of the popup to check.

- flags: [`infinity.ui.popupFlags`](#infinity.ui.popupFlags_enum), optional
  >Flags to specify particular conditions or checks for the popup state.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isPopupOpen(id) ) {}
```

---

## isRectVisible() {: #infinity.ui.isRectVisible_function .doc-function}

Determines if a specified rectangular region is currently visible within the UI viewport.

Signature:
```
isRectVisible( topLeft: infinity.ui.vec2, bottomRight: infinity.ui.vec2 ): boolean
```

Parameters:

- topLeft: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The top-left coordinate of the rectangle.

- bottomRight: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The bottom-right coordinate of the rectangle.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isRectVisible(topLeft, bottomRight) ) {}
```

---

## isWindowAppearing() {: #infinity.ui.isWindowAppearing_function .doc-function}

Checks if the current window is appearing after being hidden or freshly created.

Signature:
```
isWindowAppearing(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isWindowAppearing() ) {}
```

---

## isWindowCollapsed() {: #infinity.ui.isWindowCollapsed_function .doc-function}

Determines if the current window is in a collapsed state.

Signature:
```
isWindowCollapsed(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isWindowCollapsed() ) {}
```

---

## isWindowFocused() {: #infinity.ui.isWindowFocused_function .doc-function}

Checks if the current window is focused, considering optional flags to specify the type of focus to check for.

Signature:
```
isWindowFocused( flags?: infinity.ui.focusedFlags ): boolean
```

Parameters:

- flags: [`infinity.ui.focusedFlags`](#infinity.ui.focusedFlags_enum), optional
  >A set of flags from [`infinity.ui.focusedFlags`](#infinity.ui.focusedFlags_enum) that determine the specific type of window focus to check.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isWindowFocused() ) {}
```

---

## isWindowHovered() {: #infinity.ui.isWindowHovered_function .doc-function}

Determines if the current window is hovered over, with the ability to specify optional flags to further refine the hover conditions.

Signature:
```
isWindowHovered( flags?: infinity.ui.hoveredFlags ): boolean
```

Parameters:

- flags: [`infinity.ui.hoveredFlags`](#infinity.ui.hoveredFlags_enum), optional
  >A set of flags from [`infinity.ui.hoveredFlags`](#infinity.ui.hoveredFlags_enum) that refines the hover conditions to check for.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isWindowHovered() ) {}
```

---

## labelText() {: #infinity.ui.labelText_function .doc-function}

Displays text (usually a value) next to a given label within the UI.

Signature:
```
labelText( label: string, text: string ): void
```

Parameters:

- label: `string`
  >The identifying text displayed before the main content.

- text: `string`
  >The main content text to display next to the label.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.labelText(label, text);
```

---

## listBox() {: #infinity.ui.listBox_function .doc-function}

Presents a list of selectable items in a box format, allowing users to pick one from the list.

Signature:
```
listBox( label: string, currentItem: number, items: infinity.ui.stringArray, heightInItems?: number ): number
```

Parameters:

- label: `string`
  >The name or title associated with the list box.

- currentItem: `number`
  >The index of the currently selected item in the list.

- items: [`infinity.ui.stringArray`](#infinity.ui.stringArray_interface)
  >An array of strings representing the list items available for selection.

- heightInItems: `number`, optional
  >The maximum number of items to be displayed at once within the list box. If more items are present, scrolling will be enabled.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.listBox(label, currentItem, items);
```

---

## loadTextureFromFile() {: #infinity.ui.loadTextureFromFile_function .doc-function}

Loads a texture from a specified file, making it available for rendering in the UI.

Signature:
```
loadTextureFromFile( fileName: string ): number
```

Parameters:

- fileName: `string`
  >The name or path of the file from which the texture will be loaded.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.loadTextureFromFile(fileName);
```

---

## loadTextureFromImage() {: #infinity.ui.loadTextureFromImage_function .doc-function}

Loads a texture directly from an `infinity.image` object, making it available for rendering within the UI.

Signature:
```
loadTextureFromImage( image: infinity.image ): number
```

Parameters:

- image: `infinity.image`
  >The `infinity.image` object containing the image data to be used as a texture.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.loadTextureFromImage(image);
```

---

## menuItem() {: #infinity.ui.menuItem_function .doc-function}

Creates an interactive menu item within a drop-down or context menu.

Signature:
```
menuItem( label: string, shortCut?: string, selected?: boolean, enabled?: boolean ): boolean
```

Parameters:

- label: `string`
  >The text to be displayed as the name of the menu item.

- shortCut: `string`, optional
  >Represents the keyboard shortcut associated with this menu item, e.g., "Ctrl+S".

- selected: `boolean`, optional
  >Indicates if the menu item is currently selected or checked.

- enabled: `boolean`, optional
  >Determines whether the menu item is enabled.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.menuItem(label) ) {}
```

---

## mergeFontFromFile() {: #infinity.ui.mergeFontFromFile_function .doc-function}

Merges a font from the specified file into the current font atlas. Returns an ID for the merged font.

Signature:
```
mergeFontFromFile( fileName: string, size: number, monoSpace?: boolean, opacity?: number, range?: infinity.ui.numberArray ): number
```

Parameters:

- fileName: `string`
  >Specifies the path and name of the font file to merge.

- size: `number`
  >Defines the size of the font in pixels.

- monoSpace: `boolean`, optional
  >Indicates whether the font should be treated as monospace.

- opacity: `number`, optional
  >Sets the opacity of the font.

- range: [`infinity.ui.numberArray`](#infinity.ui.numberArray_interface), optional
  >An array representing the starting and ending Unicode code points, defining a specific range of characters to import from the font file.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.mergeFontFromFile(fileName, size);
```

---

## messageBox() {: #infinity.ui.messageBox_function .doc-function}

Displays a modal message box with the specified title, message, and optional settings, returning an integer representing the button pressed by the user in response to the dialog.

Signature:
```
messageBox( title: string, message: string, dialogType?: infinity.ui.dialogTypes, iconType?: infinity.ui.iconTypes, defaultButton?: number ): number
```

Parameters:

- title: `string`
  >Specifies the title of the message box.

- message: `string`
  >Contains the main message or content to display within the box.

- dialogType: [`infinity.ui.dialogTypes`](#infinity.ui.dialogTypes_enum), optional
  >Indicates the type of dialog, which can be error, warning, information, etc., as defined in the [`infinity.ui.dialogTypes`](#infinity.ui.dialogTypes_enum) enumeration.

- iconType: [`infinity.ui.iconTypes`](#infinity.ui.iconTypes_enum), optional
  >Specifies the type of icon to display, such as error or information icons, based on the [`infinity.ui.iconTypes`](#infinity.ui.iconTypes_enum) enumeration.

- defaultButton: `number`, optional
  >Designates which button (by its numeric order) should be highlighted by default when the dialog opens.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.messageBox(title, message);
```

---

## newFrame() {: #infinity.ui.newFrame_function .doc-function}

Initializes a new frame for the user interface, preparing it for rendering and interaction. Call this at the beginning of your frame loop before any other UI interactions.

Signature:
```
newFrame(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.newFrame();
```

---

## newLine() {: #infinity.ui.newLine_function .doc-function}

Inserts a new line in the user interface layout, moving the drawing cursor to the beginning of the next line. This is useful for creating separations between UI elements or ensuring vertical spacing.

Signature:
```
newLine(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.newLine();
```

---

## notifyPopup() {: #infinity.ui.notifyPopup_function .doc-function}

Displays a notification popup with the given title and message. The optional iconType parameter determines the icon displayed in the popup. Returns a unique identifier for the created popup.

Signature:
```
notifyPopup( title: string, message: string, iconType?: infinity.ui.iconTypes ): number
```

Parameters:

- title: `string`
  >The title of the notification popup.

- message: `string`
  >The main message to be displayed in the popup.

- iconType: [`infinity.ui.iconTypes`](#infinity.ui.iconTypes_enum), optional
  >Specifies the type of icon to be shown with the message. If not provided, a default icon is used.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.notifyPopup(title, message);
```

---

## openFileDialog() {: #infinity.ui.openFileDialog_function .doc-function}

Opens a file dialog with the provided title, allowing the user to select a file or files. Returns the selected file path or paths as a concatenated string.

Signature:
```
openFileDialog( title: string, fileName?: string, filter?: infinity.ui.stringArray, filterDescription?: string, allowMultipleSelected?: boolean ): string
```

Parameters:

- title: `string`
  >The title of the file dialog.

- fileName: `string`, optional
  >Prefills the file name field in the dialog.

- filter: [`infinity.ui.stringArray`](#infinity.ui.stringArray_interface), optional
  >An array of file extensions to filter by, e.g., [".jpg", ".png"].

- filterDescription: `string`, optional
  >A description for the provided file extensions filter, e.g., "Image files".

- allowMultipleSelected: `boolean`, optional
  >If set to true, allows multiple file selection.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.openFileDialog(title);
```

---

## openPopup() {: #infinity.ui.openPopup_function .doc-function}

Opens a popup with the specified identifier, optionally applying certain behaviors defined by the flags.

Signature:
```
openPopup( id: string, flags?: infinity.ui.popupFlags ): void
```

Parameters:

- id: `string`
  >The unique identifier for the popup.

- flags: [`infinity.ui.popupFlags`](#infinity.ui.popupFlags_enum), optional
  >Modifies popup behavior based on the provided flags.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.openPopup(id);
```

---

## plotHistogram() {: #infinity.ui.plotHistogram_function .doc-function}

Displays a histogram plot using the provided array of values, with optional parameters for visual adjustments and annotations.

Signature:
```
plotHistogram( label: string, values: infinity.ui.numberArray, offset?: number, overlayText?: string, scaleMin?: number, scaleMax?: number, size?: infinity.ui.vec2 ): void
```

Parameters:

- label: `string`
  >The name or label to give to the histogram.

- values: [`infinity.ui.numberArray`](#infinity.ui.numberArray_interface)
  >An array of numerical values that will be plotted.

- offset: `number`, optional
  >The starting index in the values array to plot from.

- overlayText: `string`, optional
  >Text that can be overlaid onto the histogram, typically for additional context or annotations.

- scaleMin: `number`, optional
  >The minimum value for the vertical scaling of the plot.

- scaleMax: `number`, optional
  >The maximum value for the vertical scaling of the plot.

- size: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >The dimensions of the histogram display area.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.plotHistogram(label, values);
```

---

## plotLines() {: #infinity.ui.plotLines_function .doc-function}

Displays a line plot using the provided array of values, with optional parameters for visual adjustments and annotations.

Signature:
```
plotLines( label: string, values: infinity.ui.numberArray, offset?: number, overlayText?: string, scaleMin?: number, scaleMax?: number, size?: infinity.ui.vec2 ): void
```

Parameters:

- label: `string`
  >The name or label to give to the line plot.

- values: [`infinity.ui.numberArray`](#infinity.ui.numberArray_interface)
  >An array of numerical values that will be plotted.

- offset: `number`, optional
  >The starting index in the values array to plot from.

- overlayText: `string`, optional
  >Text that can be overlaid onto the line plot, typically for additional context or annotations.

- scaleMin: `number`, optional
  >The minimum value for the vertical scaling of the plot.

- scaleMax: `number`, optional
  >The maximum value for the vertical scaling of the plot.

- size: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >The dimensions of the line plot display area.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.plotLines(label, values);
```

---

## popAllowKeyboardFocus() {: #infinity.ui.popAllowKeyboardFocus_function .doc-function}

Reverts the effect of the preceding [`pushAllowKeyboardFocus`](#infinity.ui.pushAllowKeyboardFocus_function) function, resetting the allowance for keyboard focus behavior to its prior state.

Signature:
```
popAllowKeyboardFocus(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.popAllowKeyboardFocus();
```

---

## popButtonRepeat() {: #infinity.ui.popButtonRepeat_function .doc-function}

Restores the button repeat behavior to the state before the most recent call to [`pushButtonRepeat`](#infinity.ui.pushButtonRepeat_function).

Signature:
```
popButtonRepeat(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.popButtonRepeat();
```

---

## popClipRect() {: #infinity.ui.popClipRect_function .doc-function}

Restores the clipping rectangle to its state before the most recent call to [`pushClipRect`](#infinity.ui.pushClipRect_function).

Signature:
```
popClipRect(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.popClipRect();
```

---

## popClipRectRender() {: #infinity.ui.popClipRectRender_function .doc-function}

Restores the rendering clip rectangle to the state before the most recent call to [`pushClipRectRender`](#infinity.ui.pushClipRectRender_function).

Signature:
```
popClipRectRender(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.popClipRectRender();
```

---

## popFont() {: #infinity.ui.popFont_function .doc-function}

Restores the font setting to the state before the most recent call to [`pushFont`](#infinity.ui.pushFont_function).

Signature:
```
popFont(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.popFont();
```

---

## popId() {: #infinity.ui.popId_function .doc-function}

Removes the last pushed identifier from the stack, reverting to the previous ID for subsequent UI operations, thereby restoring the previous UI identifier context. Often used in conjunction with [`pushId()`](#infinity.ui.pushId_function).

Signature:
```
popId(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.popId();
```

---

## popItemWidth() {: #infinity.ui.popItemWidth_function .doc-function}

Restores the item width to the value before the last [`pushItemWidth()`](#infinity.ui.pushItemWidth_function) call, affecting layout and alignment of subsequent UI elements.

Signature:
```
popItemWidth(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.popItemWidth();
```

---

## popStyleColor() {: #infinity.ui.popStyleColor_function .doc-function}

Restores the color(s) to the value(s) before the last [`pushStyleColor()`](#infinity.ui.pushStyleColor_function) call(s), affecting the appearance of subsequent UI elements. If a count parameter is specified, it pops that many style colors off the stack.

Signature:
```
popStyleColor( count?: number ): void
```

Parameters:

- count: `number`, optional
  >Specifies the number of style color changes to undo, allowing for batch restoration of previously pushed colors.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.popStyleColor();
```

---

## popStyleVar() {: #infinity.ui.popStyleVar_function .doc-function}

Restores style variable(s) to their previous values before the last [`pushStyleVar()`](#infinity.ui.pushStyleVar_function) call(s), affecting the layout and appearance of subsequent UI elements. If a count parameter is specified, it pops that many style variables off the stack.

Signature:
```
popStyleVar( count?: number ): void
```

Parameters:

- count: `number`, optional
  >Specifies the number of style variable changes to undo, allowing for batch restoration of previously pushed variables.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.popStyleVar();
```

---

## popTextWrapPos() {: #infinity.ui.popTextWrapPos_function .doc-function}

Reverts the text wrapping position to its previous state, before the most recent [`pushTextWrapPos()`](#infinity.ui.pushTextWrapPos_function) call, affecting how text content will be wrapped in subsequent UI elements.

Signature:
```
popTextWrapPos(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.popTextWrapPos();
```

---

## popTextureId() {: #infinity.ui.popTextureId_function .doc-function}

Restores the previously active texture ID, reverting the effect of the last [`pushTextureId()`](#infinity.ui.pushTextureId_function) call, and affecting the texture used in subsequent UI rendering.

Signature:
```
popTextureId(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.popTextureId();
```

---

## processEvents() {: #infinity.ui.processEvents_function .doc-function}

Handles any pending user input events in the event queue, returning a boolean to indicate if any events were processed.

Signature:
```
processEvents(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.processEvents() ) {}
```

---

## progressBar() {: #infinity.ui.progressBar_function .doc-function}

Renders a progress bar with the given fraction completed, optional dimensions, and an optional overlay text.

Signature:
```
progressBar( fraction: number, size?: infinity.ui.vec2, overlay?: string ): void
```

Parameters:

- fraction: `number`
  >Specifies the current progress as a fraction between 0.0 and 1.0.

- size: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >Defines the dimensions of the progress bar as a vector of width and height.

- overlay: `string`, optional
  >Provides additional text to be displayed on the progress bar, such as the percentage complete.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.progressBar(fraction);
```

---

## pushAllowKeyboardFocus() {: #infinity.ui.pushAllowKeyboardFocus_function .doc-function}

Sets whether the UI elements within the current scope should accept keyboard focus or not.

Signature:
```
pushAllowKeyboardFocus( allowKeyboardFocus: boolean ): void
```

Parameters:

- allowKeyboardFocus: `boolean`
  >Determines whether UI elements can gain keyboard focus. If set to `false`, elements will not be able to receive keyboard input.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushAllowKeyboardFocus(allowKeyboardFocus);
```

---

## pushButtonRepeat() {: #infinity.ui.pushButtonRepeat_function .doc-function}

Sets whether buttons within the current scope will register repeated clicks when held down.

Signature:
```
pushButtonRepeat( repeat: boolean ): void
```

Parameters:

- repeat: `boolean`
  >Determines if a button will fire repeatedly while being held down. If set to `true`, button clicks are registered continuously; otherwise, only the initial click is registered.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushButtonRepeat(repeat);
```

---

## pushClipRect() {: #infinity.ui.pushClipRect_function .doc-function}

Defines a clipping rectangle for rendering within the current scope, based on specified top-left and bottom-right coordinates.  Often used in conjunction with [`popClipRect()`](#infinity.ui.popClipRect_function).

Signature:
```
pushClipRect( topLeft: infinity.ui.vec2, bottomRight: infinity.ui.vec2, intersectWithCurrentClipRect: boolean ): void
```

Parameters:

- topLeft: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >Specifies the top-left corner of the clipping rectangle.

- bottomRight: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >Determines the bottom-right corner of the clipping rectangle.

- intersectWithCurrentClipRect: `boolean`
  >If set to `true`, the new clip rectangle will intersect with the currently active clip rectangle, effectively reducing the drawable area to the overlap of the two rectangles.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushClipRect(topLeft, bottomRight, intersectWithCurrentClipRect);
```

---

## pushClipRectFullScreen() {: #infinity.ui.pushClipRectFullScreen_function .doc-function}

Sets the clipping rectangle to cover the entire screen for rendering within the current scope.

Signature:
```
pushClipRectFullScreen(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushClipRectFullScreen();
```

---

## pushClipRectRender() {: #infinity.ui.pushClipRectRender_function .doc-function}

Sets a specific clipping rectangle for the rendering area, affecting all rendered items within the current scope, based on the coordinates and intersection options provided.  Often used in conjunction with [`popClipRectRender()`](#infinity.ui.popClipRectRender_function).

Signature:
```
pushClipRectRender( p1: infinity.ui.vec2, p2: infinity.ui.vec2, intersectWithCurrentClipRect: boolean ): void
```

Parameters:

- p1: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >Specifies the top-left corner coordinates of the clipping rectangle.

- p2: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >Specifies the bottom-right corner coordinates of the clipping rectangle.

- intersectWithCurrentClipRect: `boolean`
  >Determines whether the new clipping rectangle should intersect with the currently active one.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushClipRectRender(p1, p2, intersectWithCurrentClipRect);
```

---

## pushFont() {: #infinity.ui.pushFont_function .doc-function}

Sets the current font for rendering text, based on a font identifier, affecting all subsequent text rendering within the current scope. Often used in conjunction with [`popFont()`](#infinity.ui.popFont_function).

Signature:
```
pushFont( font: number ): void
```

Parameters:

- font: `number`
  >Specifies the unique identifier of the font to be used for text rendering.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushFont(font);
```

---

## pushId() {: #infinity.ui.pushId_function .doc-function}

Pushes a unique identifier onto the ID stac for subsequent UI operations. Often used in conjunction with [`popId()`](#infinity.ui.popId_function).

Signature:
```
pushId( id: number ): void
```

Parameters:

- id: `number`
  >Specifies the unique identifier to be pushed onto the stack.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushId(id);
```

---

## pushId() {: #infinity.ui.pushId_function .doc-function}

Pushes a unique string-based identifier range onto the ID stack for subsequent UI operations. Often used in conjunction with [`popId()`](#infinity.ui.popId_function).

Signature:
```
pushId( idBegin: string, idEnd: string ): void
```

Parameters:

- idBegin: `string`
  >Specifies the starting point of the string-based identifier range.

- idEnd: `string`
  >Specifies the ending point of the string-based identifier range.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushId(idBegin, idEnd);
```

---

## pushId() {: #infinity.ui.pushId_function .doc-function}

Pushes a unique string-based identifier onto the ID stack for subsequent UI operations. Often used in conjunction with [`popId()`](#infinity.ui.popId_function).

Signature:
```
pushId( id: string ): void
```

Parameters:

- id: `string`
  >Specifies the string-based identifier to be pushed onto the stack.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushId(id);
```

---

## pushItemWidth() {: #infinity.ui.pushItemWidth_function .doc-function}

Sets the width of subsequent UI items within the current layout scope. Often used in conjunction with [`popItemWidth()`](#infinity.ui.popItemWidth_function).

Signature:
```
pushItemWidth( width: number ): void
```

Parameters:

- width: `number`
  >Specifies the width in pixels for the UI items that follow.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushItemWidth(width);
```

---

## pushStyleColor() {: #infinity.ui.pushStyleColor_function .doc-function}

Modifies the color for a particular UI element type within the current styling scope, pushing the specified color onto the stack. Often used in conjunction with [`popStyleColor()`](#infinity.ui.popStyleColor_function).

Signature:
```
pushStyleColor( idx: infinity.ui.colorTypes, col: number ): void
```

Parameters:

- idx: [`infinity.ui.colorTypes`](#infinity.ui.colorTypes_enum)
  >Specifies which UI element type's color will be changed, based on the [`infinity.ui.colorTypes`](#infinity.ui.colorTypes_enum) enumeration.

- col: `number` | [`infinity.ui.color`](#infinity.ui.color_class)
  >Sets the new color value for the specified UI element type, either as a number or based on the [`infinity.ui.color`](#infinity.ui.color_class) structure


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushStyleColor(idx, col);
```

---

## pushStyleVar() {: #infinity.ui.pushStyleVar_function .doc-function}

Modifies the style variable for a particular UI element type within the current styling scope, pushing the specified numerical value onto the stack. Often used in conjunction with [`popStyleVar()`](#infinity.ui.popStyleVar_function).

Signature:
```
pushStyleVar( idx: infinity.ui.styleVars, val: number ): void
```

Parameters:

- idx: [`infinity.ui.styleVars`](#infinity.ui.styleVars_enum)
  >Identifies the UI element type that the style change will apply to, as defined in the [`infinity.ui.styleVars`](#infinity.ui.styleVars_enum) enumeration.

- val: `number` | [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >Specifies the value to be pushed onto the stack, either numerical or as a [`infinity.ui.vec2`](#infinity.ui.vec2_class) vector object


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushStyleVar(idx, val);
```

---

## pushTextWrapPos() {: #infinity.ui.pushTextWrapPos_function .doc-function}

Sets the wrap position for text within UI components and pushes it onto the stack, ensuring that text wraps at the specified pixel width, until popped with [`popTextWrapPos()`](#infinity.ui.popTextWrapPos_function). If no value is provided, the wrap position is reset to its default behavior.

Signature:
```
pushTextWrapPos( wrapPos?: number ): void
```

Parameters:

- wrapPos: `number`, optional
  >The pixel width at which the text should wrap. Omitting this parameter will reset text wrapping to default.



Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushTextWrapPos();
```

---

## pushTextureId() {: #infinity.ui.pushTextureId_function .doc-function}

Sets a specific texture ID as the active texture and pushes it onto the stack, allowing subsequent UI components to use this texture until popped with [`popTextureId()`](#infinity.ui.popTextureId_function).

Signature:
```
pushTextureId( texture: number ): void
```

Parameters:

- texture: `number`
  >The unique identifier of the texture to set as active.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushTextureId(texture);
```

---

## radioButton() {: #infinity.ui.radioButton_function .doc-function}

Creates a new radio button UI element with a specified label and active state. Returns a boolean value indicating whether the radio button was clicked by the user.

Signature:
```
radioButton( label: string, active: boolean ): boolean
```

Parameters:

- label: `string`
  >The text that appears next to the radio button, serving as its label.

- active: `boolean`
  >Indicates the initial active (checked) state of the radio button.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.radioButton(label, active) ) {}
```

---

## render() {: #infinity.ui.render_function .doc-function}

Renders all the UI elements that have been initiated but not yet displayed. This function is typically called once per frame, at the end of your application's UI logic, to ensure that all UI components are drawn onto the screen.

Signature:
```
render(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.render();
```

---

## resetMouseDragDelta() {: #infinity.ui.resetMouseDragDelta_function .doc-function}

Resets the drag delta of the specified mouse button to zero, effectively nullifying any existing drag motion.

Signature:
```
resetMouseDragDelta( button?: infinity.ui.mouseButtons ): void
```

Parameters:

- button: [`infinity.ui.mouseButtons`](#infinity.ui.mouseButtons_enum), optional
  >The mouse button for which the drag delta will be reset.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.resetMouseDragDelta();
```

---

## sameLine() {: #infinity.ui.sameLine_function .doc-function}

Positions the next UI element on the same line as the preceding one, with an optional horizontal offset and spacing.

Signature:
```
sameLine( offset?: number, spacing?: number ): void
```

Parameters:

- offset: `number`, optional
  >The horizontal offset in pixels from the starting point of the current line.

- spacing: `number`, optional
  >The spacing in pixels between the previous element and the next. If not specified, the default spacing is used.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.sameLine();
```

---

## saveFileDialog() {: #infinity.ui.saveFileDialog_function .doc-function}

Displays a file save dialog with a specified title, default file name, file type filter, and filter description. The dialog allows the user to choose a location and name for saving a file. Returns the selected file path as a string.

Signature:
```
saveFileDialog( title: string, fileName?: string, filter?: infinity.ui.stringArray, filterDescription?: string ): string
```

Parameters:

- title: `string`
  >The title displayed at the top of the save file dialog.

- fileName: `string`, optional
  >The default file name suggested in the dialog. If not specified, no default name is provided.
- filter: [`infinity.ui.stringArray`](#infinity.ui.stringArray_interface), optional
  >An array of strings specifying the file types that can be selected. Each string should represent a file extension.

- filterDescription: `string`, optional
  >A textual description that appears next to the file type filter dropdown.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.saveFileDialog(title);
```

---

## selectFolderDialog() {: #infinity.ui.selectFolderDialog_function .doc-function}

Presents a folder selection dialog to the user with a specified title and an optional default path. The dialog enables users to navigate the file system and select a folder. The function returns the selected folder's path as a string.

Signature:
```
selectFolderDialog( title: string, path?: string ): string
```

Parameters:

- title: `string`
  >The title displayed at the top of the folder selection dialog.

- path: `string`, optional
  >The default folder path displayed when the dialog opens. If not specified, the dialog starts at the root or last visited directory.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.selectFolderDialog(title);
```

---

## selectable() {: #infinity.ui.selectable_function .doc-function}

Creates a clickable selection item within the UI, which can be toggled on or off. The function returns a boolean value indicating whether the selection state has changed. The selectable item can have optional flags and dimensions.

Signature:
```
selectable( label: string, selected?: boolean, flags?: infinity.ui.selectableFlags, size?: infinity.ui.vec2 ): boolean
```

Parameters:

- label: `string`
  >The text displayed next to the selectable item.

- selected: `boolean`, optional
  >The initial state of the selectable item. If true, the item starts in a selected state.

- flags: [`infinity.ui.selectableFlags`](#infinity.ui.selectableFlags_enum), optional
  >Optional flags to customize the behavior and appearance of the selectable item.

- size: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >The 2D dimensions of the selectable item.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.selectable(label) ) {}
```

---

## separator() {: #infinity.ui.separator_function .doc-function}

Inserts a horizontal line to visually separate content within the UI. This is often used to distinguish sections, groups, or logical blocks of related UI elements.

Signature:
```
separator(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.separator();
```

---

## setClipboardText() {: #infinity.ui.setClipboardText_function .doc-function}

Sets the system clipboard to the specified text. This function is useful for copying text to the clipboard so it can be pasted elsewhere.

Signature:
```
setClipboardText( text: string ): void
```

Parameters:

- text: `string`
  >The text to be set on the clipboard.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setClipboardText(text);
```

---

## setColorEditOptions() {: #infinity.ui.setColorEditOptions_function .doc-function}

Configures the behavior of color edit controls. The flags passed as a parameter determine various aspects of the control.

Signature:
```
setColorEditOptions( flags: infinity.ui.colorEditFlags ): void
```

Parameters:

- flags: [`infinity.ui.colorEditFlags`](#infinity.ui.colorEditFlags_enum)
  >Flags that specify the behavior of the color edit control.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setColorEditOptions(flags);
```

---

## setCursorPos() {: #infinity.ui.setCursorPos_function .doc-function}

Sets the cursor's position within the current window to the specified 2D coordinates.

Signature:
```
setCursorPos( position: infinity.ui.vec2 ): void
```

Parameters:

- position: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >A vector object containing the coordinates specifying the new cursor position, relative to the top-left corner of the window.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setCursorPos(position);
```

---

## setCursorPosX() {: #infinity.ui.setCursorPosX_function .doc-function}

Sets the cursor's horizontal position within the current window to the specified x-coordinate.

Signature:
```
setCursorPosX( x: number ): void
```

Parameters:

- x: `number`
  >The x-coordinate specifying the new horizontal position of the cursor, relative to the left edge of the window.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setCursorPosX(x);
```

---

## setCursorPosY() {: #infinity.ui.setCursorPosY_function .doc-function}

Sets the cursor's vertical position within the current window to the specified y-coordinate.

Signature:
```
setCursorPosY( y: number ): void
```

Parameters:

- y: `number`
  >The y-coordinate specifying the new vertical position of the cursor, relative to the top edge of the window.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setCursorPosY(y);
```

---

## setCursorScreenPos() {: #infinity.ui.setCursorScreenPos_function .doc-function}

Sets the cursor's position on the screen to the specified 2D coordinates. Unlike setCursorPos, this function adjusts the cursor's absolute screen position, affecting its location across the entire UI.

Signature:
```
setCursorScreenPos( position: infinity.ui.vec2 ): void
```

Parameters:

- position: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The vector object specifying the new screen coordinates for the cursor, relative to the top-left corner of the screen.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setCursorScreenPos(position);
```

---

## setDefaultFont() {: #infinity.ui.setDefaultFont_function .doc-function}

Updates the default font used in the UI to the specified font resource.

Signature:
```
setDefaultFont( font: number ): void
```

Parameters:

- font: `number`
  >The identifier for the font resource to be set as the new default.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setDefaultFont(font);
```

---

## setItemAllowOverlap() {: #infinity.ui.setItemAllowOverlap_function .doc-function}

Enables the overlapping of subsequent UI items.

Signature:
```
setItemAllowOverlap(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setItemAllowOverlap();
```

---

## setItemDefaultFocus() {: #infinity.ui.setItemDefaultFocus_function .doc-function}

Sets the focus on the most recently created UI item, making it the default focus target.

Signature:
```
setItemDefaultFocus(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setItemDefaultFocus();
```

---

## setKeyboardFocusHere() {: #infinity.ui.setKeyboardFocusHere_function .doc-function}

Sets the keyboard focus to the next UI element. Positive offset can be used to access sub components of a multiple component widget or -1 to access the previous widget.

Signature:
```
setKeyboardFocusHere( offset?: number ): void
```

Parameters:

- offset: `number`, optional
  >The offset of the UI element from the current one to which the focus should be set.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setKeyboardFocusHere();
```

---

## setMouseCursor() {: #infinity.ui.setMouseCursor_function .doc-function}

Changes the appearance of the mouse cursor to the specified type.

Signature:
```
setMouseCursor( cursor: infinity.ui.mouseCursors ): void
```

Parameters:

- cursor: [`infinity.ui.mouseCursors`](#infinity.ui.mouseCursors_enum)
  >The type of cursor to display.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setMouseCursor(cursor);
```

---

## setNextFrameWantCaptureKeyboard() {: #infinity.ui.setNextFrameWantCaptureKeyboard_function .doc-function}

Sets whether the UI should capture keyboard input in the next frame.

Signature:
```
setNextFrameWantCaptureKeyboard( capture: boolean ): void
```

Parameters:

- capture: `boolean`
  >Indicates whether the UI should capture keyboard input during the next frame.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextFrameWantCaptureKeyboard(capture);
```

---

## setNextFrameWantCaptureMouse() {: #infinity.ui.setNextFrameWantCaptureMouse_function .doc-function}

Specifies whether the UI should capture mouse input in the next frame.

Signature:
```
setNextFrameWantCaptureMouse( capture: boolean ): void
```

Parameters:

- capture: `boolean`
  >Indicates whether the UI should capture mouse input during the next frame.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextFrameWantCaptureMouse(capture);
```

---

## setNextItemOpen() {: #infinity.ui.setNextItemOpen_function .doc-function}

Sets the initial open state of the next collapsible UI item like a tree node or a collapsible header.

Signature:
```
setNextItemOpen( open: boolean, condition?: infinity.ui.conditions ): void
```

Parameters:

- open: `boolean`
  >Indicates whether the next collapsible UI item should start in an open (`true`) or closed (`false`) state.

- condition: [`infinity.ui.conditions`](#infinity.ui.conditions_enum), optional
  >Specifies the condition under which the open state should be applied.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextItemOpen(open);
```

---

## setNextItemWidth() {: #infinity.ui.setNextItemWidth_function .doc-function}

Sets the width for the next UI item, such as a button or a text input.

Signature:
```
setNextItemWidth( width: number ): void
```

Parameters:

- width: `number`
  >Specifies the width that the next UI item should have, in pixels.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextItemWidth(width);
```

---

## setNextWindowBgAlpha() {: #infinity.ui.setNextWindowBgAlpha_function .doc-function}

Sets the alpha (transparency) value for the background of the next window to be created.

Signature:
```
setNextWindowBgAlpha( alpha: number ): void
```

Parameters:

- alpha: `number`
  >The alpha value for the next window's background.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextWindowBgAlpha(alpha);
```

---

## setNextWindowCollapsed() {: #infinity.ui.setNextWindowCollapsed_function .doc-function}

Sets the initial collapsed state of the next window to be created.

Signature:
```
setNextWindowCollapsed( collapsed: boolean, condition?: infinity.ui.conditions ): void
```

Parameters:

- collapsed: `boolean`
  >Specifies whether the next window should be collapsed (`true`) or expanded (`false`).

- condition: [`infinity.ui.conditions`](#infinity.ui.conditions_enum), optional
  >The condition under which the setting will be applied.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextWindowCollapsed(collapsed);
```

---

## setNextWindowContentSize() {: #infinity.ui.setNextWindowContentSize_function .doc-function}

Sets the content size for the next window to be created.

Signature:
```
setNextWindowContentSize( size: infinity.ui.vec2 ): void
```

Parameters:

- size: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >A vector object specifying the width and height for the content area of the next window.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextWindowContentSize(size);
```

---

## setNextWindowFocus() {: #infinity.ui.setNextWindowFocus_function .doc-function}

Sets the next window to be focused when it is created.

Signature:
```
setNextWindowFocus(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextWindowFocus();
```

---

## setNextWindowPos() {: #infinity.ui.setNextWindowPos_function .doc-function}

Sets the position of the next window that is created.

Signature:
```
setNextWindowPos( pos: infinity.ui.vec2, condition?: infinity.ui.conditions, pivot?: infinity.ui.vec2 ): void
```

Parameters:

- pos: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The vector object representing the desired position for the next window.

- condition: [`infinity.ui.conditions`](#infinity.ui.conditions_enum), optional
  >Specifies under what conditions the position should be set.

- pivot: [`infinity.ui.vec2`](#infinity.ui.vec2_class), optional
  >The vector object representing the pivot point for window positioning.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextWindowPos(pos);
```

---

## setNextWindowScroll() {: #infinity.ui.setNextWindowScroll_function .doc-function}

Defines the scroll offset for the next window that will be created.

Signature:
```
setNextWindowScroll( scroll: infinity.ui.vec2 ): void
```

Parameters:

- scroll: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The vector object representing the desired scroll offset for the next window.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextWindowScroll(scroll);
```

---

## setNextWindowSize() {: #infinity.ui.setNextWindowSize_function .doc-function}

Specifies the size for the next window that will be created.

Signature:
```
setNextWindowSize( size: infinity.ui.vec2, condition?: infinity.ui.conditions ): void
```

Parameters:

- size: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The vector object representing the desired dimensions for the next window.

- condition: [`infinity.ui.conditions`](#infinity.ui.conditions_enum), optional
  >Specifies under what conditions the size setting should be applied.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextWindowSize(size);
```

---

## setNextWindowSizeConstraints() {: #infinity.ui.setNextWindowSizeConstraints_function .doc-function}

Predefines the minimum and maximum dimensions for the next window that will be created.

Signature:
```
setNextWindowSizeConstraints( size_min: infinity.ui.vec2, size_max: infinity.ui.vec2 ): void
```

Parameters:

- size_min: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The vector object representing the minimum allowable dimensions for the next window.

- size_max: [`infinity.ui.vec2`](#infinity.ui.vec2_class)
  >The vector object representing the maximum allowable dimensions for the next window.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextWindowSizeConstraints(size_min, size_max);
```

---

## setScrollFromPosX() {: #infinity.ui.setScrollFromPosX_function .doc-function}

Sets the horizontal scroll position in the current window based on the specified local X coordinate and an optional centering ratio.

Signature:
```
setScrollFromPosX( localX: number, centerXRatio?: number ): void
```

Parameters:

- localX: `number`
  >The local X coordinate within the window whose horizontal position will set the scroll position.

- centerXRatio: `number`, optional
  >A value between 0.0 and 1.0 indicating how the local X coordinate should be centered within the visible area. A value of 0.0 aligns the item to the left, a value of 1.0 aligns it to the right, and a value of 0.5 centers it.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setScrollFromPosX(localX);
```

---

## setScrollFromPosY() {: #infinity.ui.setScrollFromPosY_function .doc-function}

Adjusts the vertical scroll position in the current window based on a local Y coordinate, with an optional centering ratio.

Signature:
```
setScrollFromPosY( localY: number, centerYRatio?: number ): void
```

Parameters:

- localY: `number`
  >The local Y coordinate to set the scroll position from.

- centerYRatio: `number`, optional
  >A ratio to define how the centering is performed. It ranges from 0.0 to 1.0, with 0.0 aligning the top and 1.0 aligning the bottom. Defaults to 0.5, which centers the element in the view.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setScrollFromPosY(localY);
```

---

## setScrollHereX() {: #infinity.ui.setScrollHereX_function .doc-function}

Adjusts the horizontal scroll position in the current window based on the current item, with an optional centering ratio.

Signature:
```
setScrollHereX( centerXRatio?: number ): void
```

Parameters:

- centerXRatio: `number`, optional
  >A ratio to define how the centering is performed horizontally. It ranges from 0.0 to 1.0, with 0.0 aligning to the left and 1.0 aligning to the right. Defaults to 0.5, which centers the element in the view.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setScrollHereX();
```

---

## setScrollHereY() {: #infinity.ui.setScrollHereY_function .doc-function}

Adjusts the vertical scroll position in the current window based on the current item, with an optional centering ratio.

Signature:
```
setScrollHereY( centerYRatio?: number ): void
```

Parameters:

- centerYRatio: `number`, optional
  >A ratio to define how the centering is performed vertically. It ranges from 0.0 to 1.0, with 0.0 aligning to the top and 1.0 aligning to the bottom. Defaults to 0.5, which centers the element in the view.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setScrollHereY();
```

---

## setTabItemClosed() {: #infinity.ui.setTabItemClosed_function .doc-function}

Closes a tab item within a tab bar, identified by its label.

Signature:
```
setTabItemClosed( label: string ): void
```

Parameters:

- label: `string`
  >The label text of the tab item to be closed.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setTabItemClosed(label);
```

---

## setTooltip() {: #infinity.ui.setTooltip_function .doc-function}

Displays a tooltip with the specified text, usually appearing when hovering over a UI element.

Signature:
```
setTooltip( text: string ): void
```

Parameters:

- text: `string`
  >The text to be displayed in the tooltip.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setTooltip(text);
```

---

## showDebugLogWindow() {: #infinity.ui.showDebugLogWindow_function .doc-function}

Opens a debug log window in the UI, allowing users to view and diagnose internal logs. Returns a boolean indicating whether the debug log window was successfully shown.

Signature:
```
showDebugLogWindow(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.showDebugLogWindow() ) {}
```

---

## showDemoWindow() {: #infinity.ui.showDemoWindow_function .doc-function}

Displays a demo window in the UI, showcasing the features and capabilities of the Infinity UI framework. Returns a boolean indicating whether the demo window was successfully displayed.

Signature:
```
showDemoWindow(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.showDemoWindow() ) {}
```

---

## showFontSelector() {: #infinity.ui.showFontSelector_function .doc-function}

Opens a font selector dialog with the specified label, allowing users to choose from a range of fonts.

Signature:
```
showFontSelector( label: string ): void
```

Parameters:

- label: `string`
  >The text that appears as the font selector dialog label.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.showFontSelector(label);
```

---

## showMetricsWindow() {: #infinity.ui.showMetricsWindow_function .doc-function}

Displays a metrics window that provides detailed information about the current state and performance of the UI. Returns a boolean indicating whether the metrics window was successfully displayed.

Signature:
```
showMetricsWindow(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.showMetricsWindow() ) {}
```

---

## showStackToolWindow() {: #infinity.ui.showStackToolWindow_function .doc-function}

Opens a stack tool window that provides insights into the layout stack and various other technical aspects of the UI components. Returns a boolean indicating whether the stack tool window was successfully displayed.

Signature:
```
showStackToolWindow(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.showStackToolWindow() ) {}
```

---

## showStyleEditor() {: #infinity.ui.showStyleEditor_function .doc-function}

Invokes the style editor interface, a comprehensive tool for live editing and customization of the UI styles and elements.

Signature:
```
showStyleEditor(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.showStyleEditor();
```

---

## showStyleSelector() {: #infinity.ui.showStyleSelector_function .doc-function}

Displays a style selector dialog that lets the user pick from available UI styles. Returns a boolean indicating whether a style has been selected.

Signature:
```
showStyleSelector( label: string ): boolean
```

Parameters:

- label: `string`
  >The text that appears as the style selector dialog label.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.showStyleSelector(label) ) {}
```

---

## shutdown() {: #infinity.ui.shutdown_function .doc-function}

Terminates all UI-related processes and deallocates any resources used by the Infinity UI module.

Signature:
```
shutdown(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.shutdown();
```

---

## sliderFloat() {: #infinity.ui.sliderFloat_function .doc-function}

Creates a floating-point slider UI element with a specified label, value, and value range. The function returns the updated value of the slider after user interaction.

Signature:
```
sliderFloat( label: string, v: number, vmin: number, vmax: number, format?: string, flags?: infinity.ui.sliderFlags ): number
```

Parameters:

- label: `string`
  >The text that appears as the label for the slider.

- v: `number`
  >The current value of the slider.

- vmin: `number`
  >The minimum allowable value for the slider.

- vmax: `number`
  >The maximum allowable value for the slider.

- format: `string`, optional
  >A format string that determines how the slider value is displayed.

- flags: [`infinity.ui.sliderFlags`](#infinity.ui.sliderFlags_enum), optional
  >Specifies optional flags that control the slider's behavior.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.sliderFloat(label, v, vmin, vmax);
```

---

## sliderInt() {: #infinity.ui.sliderInt_function .doc-function}

Creates an integer slider UI element with a specified label, value, and value range. Returns the updated value of the slider after user interaction.

Signature:
```
sliderInt( label: string, v: number, vmin: number, vmax: number, format?: string, flags?: infinity.ui.sliderFlags ): number
```

Parameters:

- label: `string`
  >The text that appears as the label for the slider.

- v: `number`
  >The current value of the slider.

- vmin: `number`
  >The minimum allowable value for the slider.

- vmax: `number`
  >The maximum allowable value for the slider.

- format: `string`, optional
  >A format string that determines how the slider value is displayed.

- flags: [`infinity.ui.sliderFlags`](#infinity.ui.sliderFlags_enum), optional
  >Specifies optional flags that control the slider's behavior.


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.sliderInt(label, v, vmin, vmax);
```

---

## smallButton() {: #infinity.ui.smallButton_function .doc-function}

Creates a compact button in the UI with a specified label. Returns a boolean value indicating whether the button was clicked by the user.

Signature:
```
smallButton( label: string ): boolean
```

Parameters:

- label: `string`
  >The text that appears on the button.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.smallButton(label) ) {}
```

---

## spacing() {: #infinity.ui.spacing_function .doc-function}

Adds a vertical spacing element in the UI layout to help with visual separation of components or groups.

Signature:
```
spacing(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.spacing();
```

---

## tabItemButton() {: #infinity.ui.tabItemButton_function .doc-function}

Creates a clickable tab item button within a tab bar, with the specified label and optional flags. Returns a boolean value that indicates whether the button was clicked.

Signature:
```
tabItemButton( label: string, flags?: infinity.ui.tabItemFlags ): boolean
```

Parameters:

- label: `string`
  >The text that appears on the tab item button.

- flags: [`infinity.ui.tabItemFlags`](#infinity.ui.tabItemFlags_enum), optional
  >Flags to configure the tab item button's behavior and appearance.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.tabItemButton(label) ) {}
```

---

## tableGetColumnCount() {: #infinity.ui.tableGetColumnCount_function .doc-function}

Retrieves the number of columns in the currently active table. Returns an integer representing the column count.

Signature:
```
tableGetColumnCount(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.tableGetColumnCount();
```

---

## tableGetColumnFlags() {: #infinity.ui.tableGetColumnFlags_function .doc-function}

Retrieves the flags associated with a specific table column or the currently active column if none is specified. Returns a set of flags of type [`infinity.ui.tableColumnFlags`](#infinity.ui.tableColumnFlags_enum).

Signature:
```
tableGetColumnFlags( column?: number ): infinity.ui.tableColumnFlags
```

Parameters:

- column: `number`, optional
  >The index of the column for which to get the flags.


Return type: [`infinity.ui.tableColumnFlags`](#infinity.ui.tableColumnFlags_enum)

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.tableGetColumnFlags();
```

---

## tableGetColumnIndex() {: #infinity.ui.tableGetColumnIndex_function .doc-function}

Retrieves the index of the currently active table column. Returns an integer representing the index.

Signature:
```
tableGetColumnIndex(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.tableGetColumnIndex();
```

---

## tableGetColumnName() {: #infinity.ui.tableGetColumnName_function .doc-function}

Returns the name of the currently active column based on its index.

Signature:
```
tableGetColumnName( column?: number ): string
```

Parameters:

- column: `number`, optional
  >The index of the column whose name you want to retrieve.


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.tableGetColumnName();
```

---

## tableGetRowIndex() {: #infinity.ui.tableGetRowIndex_function .doc-function}

Returns the index of the currently active row in a table.

Signature:
```
tableGetRowIndex(): number
```

Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.tableGetRowIndex();
```

---

## tableHeader() {: #infinity.ui.tableHeader_function .doc-function}

Sets the header label for a table column, providing a visual label that describes the content or purpose of the column.

Signature:
```
tableHeader( label: string ): void
```

Parameters:

- label: `string`
  >The text label for the table column header.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.tableHeader(label);
```

---

## tableHeadersRow() {: #infinity.ui.tableHeadersRow_function .doc-function}

Generates a row dedicated to displaying the headers for all the columns in the table.

Signature:
```
tableHeadersRow(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.tableHeadersRow();
```

---

## tableNextColumn() {: #infinity.ui.tableNextColumn_function .doc-function}

Advances the cursor to the next table column within the current table row. Returns `true` if the cursor successfully moved to the next column, returns `false` otherwise, usually indicating the end of the row.

Signature:
```
tableNextColumn(): boolean
```

Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.tableNextColumn() ) {}
```

---

## tableNextRow() {: #infinity.ui.tableNextRow_function .doc-function}

Advances the cursor to the next table row while constructing a table.

Signature:
```
tableNextRow( flags?: infinity.ui.tableRowFlags, minRowHeight?: number ): void
```

Parameters:

- flags: [`infinity.ui.tableRowFlags`](#infinity.ui.tableRowFlags_enum), optional
  >Flags to customize row behavior.

- minRowHeight: `number`, optional
  >The minimum height for the row in pixels.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.tableNextRow();
```

---

## tableSetBgColor() {: #infinity.ui.tableSetBgColor_function .doc-function}

Sets the background color for a specific part of a table, such as a cell, row, or the entire table.

Signature:
```
tableSetBgColor( target: infinity.ui.tableBgTargets, color: number, column?: number ): void
```

Parameters:

- target: [`infinity.ui.tableBgTargets`](#infinity.ui.tableBgTargets_enum)
  >Specifies the table part to change the background color of.

- color: `number`
  >The color to set as the background.

- column: `number`, optional
  >The column index for which the background color is to be set.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.tableSetBgColor(target, color);
```

---

## tableSetColumnEnabled() {: #infinity.ui.tableSetColumnEnabled_function .doc-function}

Enables or disables a specific table column dynamically. This function provides you with the flexibility to show or hide columns based on conditions or user interactions.

Signature:
```
tableSetColumnEnabled( column: number, enabled: boolean ): void
```

Parameters:

- column: `number`
  >The index of the column that you want to enable or disable.

- enabled: `boolean`
  >Indicates whether the column should be enabled.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.tableSetColumnEnabled(column, enabled);
```

---

## tableSetColumnIndex() {: #infinity.ui.tableSetColumnIndex_function .doc-function}

Sets the focus to a specified table column by index, allowing you to perform operations on that column specifically. Returns a boolean value indicating whether the operation was successful.

Signature:
```
tableSetColumnIndex( column: number ): boolean
```

Parameters:

- column: `number`
  >The index of the column to which you want to set the focus.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.tableSetColumnIndex(column) ) {}
```

---

## tableSetupColumn() {: #infinity.ui.tableSetupColumn_function .doc-function}

Configures a new column within an existing table layout by specifying various attributes such as label, flags, initial width or weight, and a unique user identifier.

Signature:
```
tableSetupColumn( label: string, flags?: infinity.ui.tableColumnFlags, initWidthOrWeight?: number, userId?: number ): void
```

Parameters:

- label: `string`
  >The name of the column to be displayed in the header row.

- flags: [`infinity.ui.tableColumnFlags`](#infinity.ui.tableColumnFlags_enum), optional
  >Optional flags that control the behavior and layout of the column.

- initWidthOrWeight: `number`, optional
  >Optional initial width or weight of the column. This can be used to specify how much space a column should initially take up relative to the other columns.

- userId: `number`, optional
  >Optional unique identifier for the column that can be used for look-up later.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.tableSetupColumn(label);
```

---

## tableSetupScrollFreeze() {: #infinity.ui.tableSetupScrollFreeze_function .doc-function}

Configures the scroll behavior of the table to freeze a certain number of columns and rows while scrolling. he specified columns will be fixed on the left side, and the rows will be fixed at the top of the table.

Signature:
```
tableSetupScrollFreeze( cols: number, rows: number ): void
```

Parameters:

- cols: `number`
  >The number of columns to freeze on the left side of the table while scrolling horizontally.

- rows: `number`
  >The number of rows to freeze at the top of the table while scrolling vertically.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.tableSetupScrollFreeze(cols, rows);
```

---

## text() {: #infinity.ui.text_function .doc-function}

Renders a simple text string in the user interface, serving as the most basic form of output for text-based data or information.

Signature:
```
text( text: string ): void
```

Parameters:

- text: `string`
  >The text string to be displayed.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.text(text);
```

---

## textColored() {: #infinity.ui.textColored_function .doc-function}

Displays a text string in the user interface with a specific color.

Signature:
```
textColored( color: infinity.ui.color, text: string ): void
```

Parameters:

- color: [`infinity.ui.color`](#infinity.ui.color_class)
  >An object representing the color values for the text.

- text: `string`
  >The text string to be displayed with the specified color.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.textColored(color, text);
```

---

## textDisabled() {: #infinity.ui.textDisabled_function .doc-function}

Renders a text string in a disabled or "grayed-out" style.

Signature:
```
textDisabled( text: string ): void
```

Parameters:

- text: `string`
  >The text string to be displayed in a disabled style.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.textDisabled(text);
```

---

## textWrapped() {: #infinity.ui.textWrapped_function .doc-function}

Renders a text string with automatic line wrapping based on the current container's width.

Signature:
```
textWrapped( text: string ): void
```

Parameters:

- text: `string`
  >The text string to be displayed with automatic line wrapping.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.textWrapped(text);
```

---

## treeNode() {: #infinity.ui.treeNode_function .doc-function}

Creates a collapsible tree node within the user interface, allowing the user to expand or collapse nested items.

Signature:
```
treeNode( id: string, label: string ): boolean
```

Parameters:

- id: `string`
  >A unique identifier for the tree node.

- label: `string`
  >The display label of the tree node, visible to the user.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.treeNode(id, label) ) {}
```

---

## treeNode() {: #infinity.ui.treeNode_function .doc-function}

Generates a collapsible tree node in the user interface with the provided label.

Signature:
```
treeNode( label: string ): boolean
```

Parameters:

- label: `string`
  >Both the unique identifier and the display label for the tree node.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.treeNode(label) ) {}
```

---

## treeNodeEx() {: #infinity.ui.treeNodeEx_function .doc-function}

Generates a expandable tree node in the user interface with additional customization options such as specifying the node's unique identifier and various flags for behavior and appearance.

Signature:
```
treeNodeEx( id: string, label: string, flags?: infinity.ui.treeNodeFlags ): boolean
```

Parameters:

- id: `string`
  >The unique identifier for the tree node.

- label: `string`
  >The display label for the tree node.

- flags: [`infinity.ui.treeNodeFlags`](#infinity.ui.treeNodeFlags_enum), optional
  >Optional flags to customize the behavior and appearance of the tree node.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.treeNodeEx(id, label) ) {}
```

---

## treeNodeEx() {: #infinity.ui.treeNodeEx_function .doc-function}

Creates an expandable tree node in the user interface with customizable behavior and appearance options.

Signature:
```
treeNodeEx( label: string, flags?: infinity.ui.treeNodeFlags ): boolean
```

Parameters:

- label: `string`
  >The display label for the tree node, which also serves as the automatically generated unique identifier.

- flags: [`infinity.ui.treeNodeFlags`](#infinity.ui.treeNodeFlags_enum), optional
  >Optional flags to specify the tree node's behavior and appearance.


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.treeNodeEx(label) ) {}
```

---

## treePop() {: #infinity.ui.treePop_function .doc-function}

Closes a previously opened tree node, effectively ending its scope within the user interface.

Signature:
```
treePop(): void
```

Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.treePop();
```

---

## treePush() {: #infinity.ui.treePush_function .doc-function}

This function works similarly to treeNode but doesn't render a label or an expand/collapse button by default. Instead, it directly sets the scope for nested elements. The function should be paired with a call to [`treePop`](#infinity.ui.treePop_function) to correctly end the scope.

Signature:
```
treePush( id: string ): void
```

Parameters:

- id: `string`
  >A unique identifier for the tree node scope.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.treePush(id);
```

---

## unindent() {: #infinity.ui.unindent_function .doc-function}

Reduces the left-side indent of the subsequent UI elements within the same scope, effectively moving them closer to the left edge of the containing layout.

Signature:
```
unindent( width?: number ): void
```

Parameters:

- width: `number`, optional
  >Specifies the amount of indentation to remove.


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.unindent();
```



---

<div class="doc-heading">Properties</div>

---

## backgroundColor {: #infinity.ui.backgroundColor_property .doc-property}

Type: [`infinity.ui.color`](#infinity.ui.color_class)

Specifies the background color of the UI window or component.

---

## framePos {: #infinity.ui.framePos_property .doc-property}

Type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Contains the position of the frame in a 2D vector format. The values are based on the top-left corner of the frame.

---

## frameSize {: #infinity.ui.frameSize_property .doc-property}

Type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Specifies the dimensions (width and height) of the frame or window in a 2D vector format.

---

## iniFilename {: #infinity.ui.iniFilename_property .doc-property}

Type: `string`

The filename where the UI's settings will be saved. This is typically in INI file format.

---

## scrollX {: #infinity.ui.scrollX_property .doc-property}

Type: `number`

Indicates the horizontal scroll position within a scrollable component.

---

## scrollY {: #infinity.ui.scrollY_property .doc-property}

Type: `number`

Indicates the vertical scroll position within a scrollable component.

---

## style {: #infinity.ui.style_property .doc-property}

Type: `infinity.ui.styles`

Contains the UI styles being used.

---

## title {: #infinity.ui.title_property .doc-property}

Type: `string`

Specifies the title displayed in the title bar of a window.

---

## displaySize {: #infinity.ui.displaySize_property .doc-property}

Type: [`infinity.ui.vec2`](#infinity.ui.vec2_class)

Holds the dimensions of the display screen in which the UI resides, in a 2D vector format.

---

## scrollMaxX {: #infinity.ui.scrollMaxX_property .doc-property}

Type: `number`

Specifies the maximum horizontal scroll position that a scrollable component can reach.

---

## scrollMaxY {: #infinity.ui.scrollMaxY_property .doc-property}

Type: `number`

Specifies the maximum vertical scroll position that a scrollable component can reach.

---

## version {: #infinity.ui.version_property .doc-property}

Type: `string`

Holds the version information of the infinity.ui module.



---

<div class="doc-heading">Enums</div>

---

## infinity.ui.buttonFlags {: #infinity.ui.buttonFlags_enum .doc-enum}

Values:

- none: `0`
  >Indicates that no special button behavior is enabled.

- mouseButtonLeft: `1`
  >Indicates that the left mouse button triggers the button action.

- mouseButtonRight: `2`
  >Indicates that the right mouse button triggers the button action.

- mouseButtonMiddle: `4`
  >Indicates that the middle mouse button triggers the button action.

Example:

```typescript
infinity.loadModule('infinity.ui');
let buttonFlags = infinity.ui.buttonFlags.none;
```



---

## infinity.ui.collapsingHeaderStates {: #infinity.ui.collapsingHeaderStates_enum .doc-enum}

Values:

- closed: `0`
  >Indicates that the header is collapsed and the content beneath it is hidden.

- open: `1`
  >Indicates that the header is expanded and the content beneath it is displayed.

- closeButtonClicked: `2`
  >Indicates that the close button on the header has been clicked.

Example:

```typescript
infinity.loadModule('infinity.ui');
let collapsingHeaderStates = infinity.ui.collapsingHeaderStates.closed;
```



---

## infinity.ui.colorEditFlags {: #infinity.ui.colorEditFlags_enum .doc-enum}

Values:

- none: `0`
  >No flags set, default behavior.

- noAlpha: `2`
  >Disables the alpha channel for editing.

- noPicker: `4`
  >Disables the color picker.

- noOptions: `8`
  >Disables additional options menu.

- noSmallPreview: `16`
  >Disables the small color preview next to the color edit.

- noInputs: `32`
  >Disables the input boxes for color values.

- noTooltip: `64`
  >Disables tooltip when hovering over the color edit.

- noLabel: `128`
  >Disables the label displayed next to the color edit.

- noSidePreview: `256`
  >Disables the side preview of the color.

- noDragDrop: `512`
  >Disables drag and drop functionality for the color edit.

- noBorder: `1024`
  >Disables the border around the color edit.

- alphaBar: `65536`
  >Enables an alpha bar for alpha channel editing.

- alphaPreview: `131072`
  >Enables an alpha preview on the side preview or the small preview.

- alphaPreviewHalf: `262144`
  >Enables an alpha preview that is half of the total area.

- hdr: `524288`
  >Enables high-dynamic range for the color edit.

- displayRGB: `1048576`
  >Enables RGB format for display.

- displayHSV: `2097152`
  >Enables HSV format for display.

- displayHex: `4194304`
  >Enables HEX format for display.

- uint8: `8388608`
  >Enables 8-bit unsigned integer format for the color edit.

- float: `16777216`
  >Enables float format for the color edit.

- pickerHueBar: `33554432`
  >Enables a hue bar picker.

- pickerHueWheel: `67108864`
  >Enables a hue wheel picker.

- inputRGB: `134217728`
  >Enables RGB input for the color edit.

- inputHSV: `268435456`
  >Enables HSV input for the color edit.

Example:

```typescript
infinity.loadModule('infinity.ui');
let colorEditFlags = infinity.ui.colorEditFlags.none;
```



---

## infinity.ui.colorTypes {: #infinity.ui.colorTypes_enum .doc-enum}

Values:

- text: `0`
  >Color for regular text.

- textDisabled: `1`
  >Color for disabled text.

- windowBg: `2`
  >Background color for windows.

- childBg: `3`
  >Background color for child windows.

- popupBg: `4`
  >Background color for popups.

- border: `5`
  >Color for borders.

- borderShadow: `6`
  >Color for border shadows.

- frameBg: `7`
  >Background color for frames.

- frameBgHovered: `8`
  >Background color for hovered frames.

- frameBgActive: `9`
  >Background color for active frames.

- titleBg: `10`
  >Background color for window titles.

- titleBgActive: `11`
  >Background color for active window titles.

- titleBgCollapsed: `12`
  >Background color for collapsed window titles.

- menuBarBg: `13`
  >Background color for menu bars.

- scrollbarBg: `14`
  >Background color for scrollbars.

- scrollbarGrab: `15`
  >Color for scrollbar grabber.

- scrollbarGrabHovered: `16`
  >Color for the scrollbar grabber when hovered.

- scrollbarGrabActive: `17`
  >Color for the scrollbar grabber when active or clicked.

- checkMark: `18`
  >Color for check marks in checkboxes or other toggleable items.

- sliderGrab: `19`
  >Color for the slider grabber.

- sliderGrabActive: `20`
  >Color for the slider grabber when active or clicked.

- button: `21`
  >Background color for buttons.

- buttonHovered: `22`
  >Background color for buttons when hovered.

- buttonActive: `23`
  >Background color for buttons when active or clicked.

- header: `24`
  >Background color for headers.

- headerHovered: `25`
  >Background color for headers when hovered.

- headerActive: `26`
  >Background color for headers when active or clicked.

- separator: `27`
  >Color for separators.

- separatorHovered: `28`
  >Color for separators when hovered.

- separatorActive: `29`
  >Color for separators when active or clicked.

- resizeGrip: `30`
  >Color for resize grips.

- resizeGripHovered: `31`
  >Color for resize grips when hovered.

- resizeGripActive: `32`
  >Color for resize grips when active or clicked.

- tab: `33`
  >Background color for tabs.

- tabHovered: `34`
  >Background color for tabs when hovered.

- tabActive: `35`
  >Background color for active tabs.

- tabUnfocused: `36`
  >Background color for unfocused tabs.

- tabUnfocusedActive: `37`
  >Background color for unfocused active tabs.

- dockingPreview: `38`
  >Color for docking previews.

- dockingEmptyBg: `39`
  >Background color for empty docking spaces.

- plotLines: `40`
  >Color for plot lines in plots.

- plotLinesHovered: `41`
  >Color for plot lines in plots when hovered.

- plotHistogram: `42`
  >Color for histograms in plots.

- plotHistogramHovered: `43`
  >Color for histograms in plots when hovered.

- tableHeaderBg: `44`
  >Background color for table headers.

- tableBorderStrong: `45`
  >Color for strong table borders.

- tableBorderLight: `46`
  >Color for light table borders.

- tableRowBg: `47`
  >Background color for table rows.

- tableRowBgAlt: `48`
  >Alternate background color for table rows.

- textSelectedBg: `49`
  >Background color for selected text.

- dragDropTarget: `50`
  >Color for drag and drop targets.

- navHighlight: `51`
  >Highlight color for navigation items.

- navWindowingHighlight: `52`
  >Highlight color for windowed navigation items.

- navWindowingDimBg: `53`
  >Dim background color for windowed navigation items.

- modalWindowDimBg: `54`
  >Dim background color for modal windows.

- count: `55`
  >Count of color types.

Example:

```typescript
infinity.loadModule('infinity.ui');
let colorTypes = infinity.ui.colorTypes.text;
```



---

## infinity.ui.comboFlags {: #infinity.ui.comboFlags_enum .doc-enum}

Values:

- none: `0`
  >Default behavior of the combo box.

- popupAlignLeft: `1`
  >Align the combo box popup to the left.

- heightSmall: `2`
  >Display the combo box with a small height.

- heightRegular: `4`
  >Display the combo box with regular height.

- heightLarge: `8`
  >Display the combo box with a larger height.

- heightLargest: `16`
  >Display the combo box with the largest possible height.

- noArrowButton: `32`
  >Hide the arrow button typically shown on combo boxes.

- noPreview: `64`
  >Do not show a preview of the selected item.

Example:

```typescript
infinity.loadModule('infinity.ui');
let comboFlags = infinity.ui.comboFlags.none;
```



---

## infinity.ui.conditions {: #infinity.ui.conditions_enum .doc-enum}

Values:

- none: `0`
  >No specific condition.

- always: `1`
  >Condition is always true.

- once: `2`
  >Condition is true only once.

- firstUseEver: `4`
  >Condition is true the first time it's used.

- appearing: `8`
  >Condition is true when appearing.

Example:

```typescript
infinity.loadModule('infinity.ui');
let conditions = infinity.ui.conditions.none;
```



---

## infinity.ui.dialogTypes {: #infinity.ui.dialogTypes_enum .doc-enum}

Values:

- ok: `1`
  >Dialog with an "OK" button.

- okCancel: `2`
  >Dialog with "OK" and "Cancel" buttons.

- yesNo: `3`
  >Dialog with "Yes" and "No" buttons.

- yesNoCancel: `4`
  >Dialog with "Yes", "No", and "Cancel" buttons.

Example:

```typescript
infinity.loadModule('infinity.ui');
let dialogTypes = infinity.ui.dialogTypes.ok;
```



---

## infinity.ui.directions {: #infinity.ui.directions_enum .doc-enum}

Values:

- none: `-1`
  >No specific direction.

- left: `0`
  >Direction pointing left.

- right: `1`
  >Direction pointing right.

- up: `2`
  >Direction pointing up.

- down: `3`
  >Direction pointing down.

- count: `4`
  >Total count of directions.

Example:

```typescript
infinity.loadModule('infinity.ui');
let directions = infinity.ui.directions.none;
```



---

## infinity.ui.drawFlags {: #infinity.ui.drawFlags_enum .doc-enum}

Values:

- none: `0`
  >Default drawing behavior.

- closed: `1`
  >Indicates a closed shape.

- roundCornersTopLeft: `16`
  >Round the top-left corner of a shape.

- roundCornersTopRight: `32`
  >Round the top-right corner of a shape.

- roundCornersBottomLeft: `64`
  >Round the bottom-left corner of a shape.

- roundCornersBottomRight: `128`
  >Round the bottom-right corner of a shape.

- roundCornersNone: `256`
  >Do not round any corners.

- roundCornersTop: `48`
  >Round both top corners.

- roundCornersBottom: `192`
  >Round both bottom corners.

- roundCornersLeft: `80`
  >Round both left corners.

- roundCornersRight: `160`
  >Round both right corners.

- roundCornersAll: `240`
  >Round all corners of a shape.

Example:

```typescript
infinity.loadModule('infinity.ui');
let drawFlags = infinity.ui.drawFlags.none;
```



---

## infinity.ui.focusedFlags {: #infinity.ui.focusedFlags_enum .doc-enum}

Values:

- none: `0`
  >No focus.

- childWindows: `1`
  >Focus is on child windows.

- rootWindow: `2`
  >Focus is on the root window.

- anyWindow: `4`
  >Focus is on any window.

- noPopupHierarchy: `8`
  >Focus is outside of popup hierarchy.

- dockHierarchy: `16`
  >Focus is within a docking hierarchy.

- rootAndChildWindows: `3`
  >Focus is on root or child windows.

Example:

```typescript
infinity.loadModule('infinity.ui');
let focusedFlags = infinity.ui.focusedFlags.none;
```



---

## infinity.ui.hoveredFlags {: #infinity.ui.hoveredFlags_enum .doc-enum}

Values:

- none: `0`
  >Default state, no specific hover flag applied.

- childWindows: `1`
  >Indicates hovering over child windows.

- rootWindow: `2`
  >Indicates hovering over the root window.

- anyWindow: `4`
  >Hovering over any window.

- noPopupHierarchy: `8`
  >Hover state is not affected by popup hierarchy.

- dockHierarchy: `16`
  >Indicates hovering within a docking hierarchy.

- allowWhenBlockedByPopup: `32`
  >Allows hover status even when blocked by a popup.

- allowWhenBlockedByActiveItem: `128`
  >Allows hover status even when blocked by an active item.

- allowWhenOverlapped: `256`
  >Hover state is maintained even when the item is overlapped by another.

- allowWhenDisabled: `512`
  >Allows hover status even for disabled items.

- noNavOverride: `1024`
  >Navigation doesn't override hover status.

- rectOnly: `416`
  >Only rectangle areas are considered for hover checks.

- rootAndChildWindows: `3`
  >Hovering over root or child windows.

Example:

```typescript
infinity.loadModule('infinity.ui');
let hoveredFlags = infinity.ui.hoveredFlags.none;
```



---

## infinity.ui.iconTypes {: #infinity.ui.iconTypes_enum .doc-enum}

Values:

- info: `1`
  >Indicates an informational message or notification.

- warning: `2`
  >Indicates a warning message or notification.

- error: `3`
  >Indicates an error message or notification.

- question: `4`
  >Indicates a question or prompt.

Example:

```typescript
infinity.loadModule('infinity.ui');
let iconTypes = infinity.ui.iconTypes.info;
```



---

## infinity.ui.initFlags {: #infinity.ui.initFlags_enum .doc-enum}

Values:

- fullscreen: `1`
  >Opens in fullscreen mode.

- borderless: `16`
  >Opens without window borders.

- resizeable: `32`
  >Window is resizable by the user.

- minimized: `64`
  >Starts in minimized state.

- maximized: `128`
  >Starts in maximized state.

- fullscreenDesktop: `4097`
  >Uses the desktop resolution for fullscreen.

- allowHighDpi: `8192`
  >Supports high DPI displays.

- alwaysOnTop: `32768`
  >Window remains always on top of others.

- skipTaskBar: `65536`
  >Doesn't appear in the taskbar.

- utility: `131072`
  >Opens as a utility window.

- toolTip: `262144`
  >Opens as a tooltip window.

Example:

```typescript
infinity.loadModule('infinity.ui');
let initFlags = infinity.ui.initFlags.fullscreen;
```



---

## infinity.ui.inputTextFlags {: #infinity.ui.inputTextFlags_enum .doc-enum}

Values:

- none: `0`
  >Default behavior for text input.

- charsDecimal: `1`
  >Allows decimal characters.

- charsHexadecimal: `2`
  >Allows hexadecimal characters.

- charsUppercase: `4`
  >Forces characters to be uppercase.

- charsNoBlank: `8`
  >Doesn't allow blank spaces.

- autoSelectAll: `16`
  >Automatically selects all text upon focus.

- enterReturnsTrue: `32`
  >Pressing Enter returns a true value.

- callbackCompletion: `64`
  >Calls a callback upon completion.

- callbackHistory: `128`
  >Calls a callback to access history.

- callbackAlways: `256`
  >Calls a callback for every input event.

- callbackCharFilter: `512`
  >Uses a callback for character filtering.

- allowTabInput: `1024`
  >Allows TAB as valid input.

- ctrlEnterForNewLine: `2048`
  >CTRL + Enter creates a new line.

- noHorizontalScroll: `4096`
  >Disables horizontal scrolling.

- alwaysOverwrite: `8192`
  >Overwrites existing text.

- readOnly: `16384`
  >Makes the text read-only.

- password: `32768`
  >Masks the text for password entry.

- noUndoRedo: `65536`
  >Disables undo/redo functionality.

- charsScientific: `131072`
  >Allows characters used in scientific notation.

- callbackResize: `262144`
  >Calls a callback when resizing.

- callbackEdit: `524288`
  >Calls a callback during editing.

Example:

```typescript
infinity.loadModule('infinity.ui');
let inputTextFlags = infinity.ui.inputTextFlags.none;
```



---

## infinity.ui.keys {: #infinity.ui.keys_enum .doc-enum}

Values:

- none: `0`
  >Represents the absence of any key press.

- tab: `512`
  >Represents the 'Tab' key, commonly used for navigating between fields or items.

- leftArrow: `513`
  >Represents the left arrow key, typically used for cursor movement or item selection.

- rightArrow: `514`
  >Represents the right arrow key.

- upArrow: `515`
  >Represents the up arrow key.

- downArrow: `516`
  >Represents the down arrow key.

- pageUp: `517`
  >The 'Page Up' key, often used for scrolling or moving up in lists.

- pageDown: `518`
  >The 'Page Down' key, often used for scrolling or moving down in lists.

- home: `519`
  >Represents the 'Home' key, which often moves the cursor to the beginning or top of content.

- end: `520`
  >Represents the 'End' key, which often moves the cursor to the end or bottom of content.

- insert: `521`
  >The 'Insert' key, used to toggle between insert and overwrite mode in some applications.

- delete: `522`
  >Represents the 'Delete' key, which is used to delete characters or items.

- backspace: `523`
  >The 'Backspace' key, commonly used to delete the character before the cursor.

- space: `524`
  >Represents the spacebar.

- enter: `525`
  >The 'Enter' or 'Return' key, often used to submit forms or execute commands.

- escape: `526`
  >The 'Escape' key, often used to cancel operations or close windows.

- leftCtrl: `527`
  >Represents the left 'Control' key.

- leftShift: `528`
  >Represents the left 'Shift' key.

- leftAlt: `529`
  >Represents the left 'Alt' key.

- leftSuper: `530`
  >Represents the left 'Super' or 'Windows' key.

- rightCtrl: `531`
  >Represents the right 'Control' key.

- rightShift: `532`
  >Represents the right 'Shift' key.

- rightAlt: `533`
  >Represents the right 'Alt' key.

- rightSuper: `534`
  >Represents the right 'Super' or 'Windows' key.

- menu: `535`
  >The 'Menu' key, typically located between the right 'Alt' and 'Control' keys.

- key0: `536`
  >Represents the '0' number key.

- key1: `537`
  >Represents the '1' number key.

- key2: `538`
  >Represents the '2' number key.

- key3: `539`
  >Represents the '3' number key.

- key4: `540`
  >Represents the '4' number key.

- key5: `541`
  >Represents the '5' number key.

- key6: `542`
  >Represents the '6' number key.

- key7: `543`
  >Represents the '7' number key.

- key8: `544`
  >Represents the '8' number key.

- key9: `545`
  >Represents the '9' number key.

- keyA: `546`
  >Represents the alphabetical key "A".

- keyB: `547`
  >Represents the alphabetical key "B".

- keyC: `548`
  >Represents the alphabetical key "C".

- keyD: `549`
  >Represents the alphabetical key "D".

- keyE: `550`
  >Represents the alphabetical key "E".

- keyF: `551`
  >Represents the alphabetical key "F".

- keyG: `552`
  >Represents the alphabetical key "G".

- keyH: `553`
  >Represents the alphabetical key "H".

- keyI: `554`
  >Represents the alphabetical key "I".

- keyJ: `555`
  >Represents the alphabetical key "J".

- keyK: `556`
  >Represents the alphabetical key "K".

- keyL: `557`
  >Represents the alphabetical key "L".

- keyM: `558`
  >Represents the alphabetical key "M".

- keyN: `559`
  >Represents the alphabetical key "N".

- keyO: `560`
  >Represents the alphabetical key "O".

- keyP: `561`
  >Represents the alphabetical key "P".

- keyQ: `562`
  >Represents the alphabetical key "Q".

- keyR: `563`
  >Represents the alphabetical key "R".

- keyS: `564`
  >Represents the alphabetical key "S".

- keyT: `565`
  >Represents the alphabetical key "T".

- keyU: `566`
  >Represents the alphabetical key "U".

- keyV: `567`
  >Represents the alphabetical key "V".

- keyW: `568`
  >Represents the alphabetical key "W".

- keyX: `569`
  >Represents the alphabetical key "X".

- keyY: `570`
  >Represents the alphabetical key "Y".

- keyZ: `571`
  >Represents the alphabetical key "Z".

- keyF1: `572`
  >Represents the "F1" function key.

- keyF2: `573`
  >Represents the "F2" function key.

- keyF3: `574`
  >Represents the "F3" function key.

- keyF4: `575`
  >Represents the "F4" function key.

- keyF5: `576`
  >Represents the "F5" function key.

- keyF6: `577`
  >Represents the "F6" function key.

- keyF7: `578`
  >Represents the "F7" function key.

- keyF8: `579`
  >Represents the "F8" function key.

- keyF9: `580`
  >Represents the "F9" function key.

- keyF10: `581`
  >Represents the "F10" function key.

- keyF11: `582`
  >Represents the "F11" function key.

- keyF12: `583`
  >Represents the "F12" function key.

- apostrophe: `584`
  >Represents the apostrophe (`'`) key.

- comma: `585`
  >Represents the comma (`,`) key.

- minus: `586`
  >Represents the minus (`-`) key.

- period: `587`
  >Represents the period (`.`) key.

- slash: `588`
  >Represents the forward slash (`/`) key.

- semicolon: `589`
  >Represents the semicolon (`;`) key.

- equal: `590`
  >Represents the equal (`=`) key.

- leftBracket: `591`
  >Represents the left bracket (`[`) key.

- backslash: `592`
  >Represents the backslash (`\` key.

- rightBracket: `593`
  >Represents the right bracket (`]`) key.

- graveAccent: `594`
  >Represents the grave accent or backtick (`) key.

- capsLock: `595`
  >Represents the 'Caps Lock' key.

- scrollLock: `596`
  >The 'Scroll Lock' key.

- numLock: `597`
  >The 'Num Lock' key.

- printScreen: `598`
  >The 'Print Screen' or 'PrtScn' key.

- pause: `599`
  >The 'Pause' or 'Break' key.

- keypad0: `600`
  >Represents the '0' number pad key.

- keypad1: `601`
  >Represents the '1' number pad key.

- keypad2: `602`
  >Represents the '2' number pad key.

- keypad3: `603`
  >Represents the '3' number pad key.

- keypad4: `604`
  >Represents the '4' number pad key.

- keypad5: `605`
  >Represents the '5' number pad key.

- keypad6: `606`
  >Represents the '6' number pad key.

- keypad7: `607`
  >Represents the '7' number pad key.

- keypad8: `608`
  >Represents the '8' number pad key.

- keypad9: `609`
  >Represents the '9' number pad key.

- keypadDecimal: `610`
  >Represents the decimal point (`.`) key on the number pad.

- keypadDivide: `611`
  >Represents the division (`/`) key on the number pad.

- keypadMultiply: `612`
  >Represents the multiplication (`*`) key on the number pad.

- keypadSubtract: `613`
  >Represents the subtraction (`-`) key on the number pad.

- keypadAdd: `614`
  >Represents the addition (`+`) key on the number pad.

- keypadEnter: `615`
  >The 'Enter' key specifically on the number pad.

- keypadEqual: `616`
  >Represents the equal (`=`) key on the number pad.

- modCtrl: `641`
  >Modifier for the 'Control' key.

- modShift: `642`
  >Modifier for the 'Shift' key.

- modAlt: `643`
  >Modifier for the 'Alt' key.

- modSuper: `644`
  >Modifier for the 'Super' or 'Windows' key.

- count: `646`
  >Represents the total count of key enumerations.

Example:

```typescript
infinity.loadModule('infinity.ui');
let keys = infinity.ui.keys.none;
```



---

## infinity.ui.mouseButtons {: #infinity.ui.mouseButtons_enum .doc-enum}

Values:

- left: `0`
  >Represents the left mouse button, often used for primary interactions.

- right: `1`
  >Represents the right mouse button, often associated with context menus or secondary interactions.

- middle: `2`
  >Represents the middle mouse button, commonly used for panning or scrolling.

- count: `5`
  >Indicates the total number of mouse button types supported by the system.

Example:

```typescript
infinity.loadModule('infinity.ui');
let mouseButtons = infinity.ui.mouseButtons.left;
```



---

## infinity.ui.mouseCursors {: #infinity.ui.mouseCursors_enum .doc-enum}

Values:

- none: `-1`
  >No specific cursor is assigned, which may lead to a default cursor being used.

- arrow: `0`
  >A standard arrow cursor, typically used for general interactions.

- textInput: `1`
  >Represents a text input cursor, typically an I-beam, to signify areas where textual input can occur.

- resizeAll: `2`
  >A cursor indicating that resizing can occur in any direction.

- resizeNS: `3`
  >A cursor indicating vertical resizing, either up or down.

- resizeEW: `4`
  >A cursor indicating horizontal resizing, either left or right.

- resizeNESW: `5`
  >Indicates diagonal resizing from the top-right to bottom-left or vice versa.

- resizeNWSE: `6`
  >Indicates diagonal resizing from the top-left to bottom-right or vice versa.

- hand: `7`
  >A hand cursor, often used for dragging or indicating clickable links.

- notAllowed: `8`
  >Indicates that a particular action is not permitted.

- count: `9`
  >Represents the total number of distinct cursor styles supported.

Example:

```typescript
infinity.loadModule('infinity.ui');
let mouseCursors = infinity.ui.mouseCursors.none;
```



---

## infinity.ui.popupFlags {: #infinity.ui.popupFlags_enum .doc-enum}

Values:

- none: `0`
  >No specific flags are set.

- mouseButtonLeft: `0`
  >Indicates that the left mouse button activates the popup.

- mouseButtonRight: `1`
  >Specifies the right mouse button for popup activation.

- mouseButtonMiddle: `2`
  >The middle mouse button triggers the popup.

- noOpenOverExistingPopup: `32`
  >Ensures the popup doesn't open over an existing popup.

- noOpenOverItems: `64`
  >The popup won't open over other UI items, preventing obstruction.

- anyPopupId: `128`
  >Doesn't restrict the popup activation to specific identifiers.

- anyPopupLevel: `256`
  >Doesn't limit the popup activation to a particular UI depth or layer.

- anyPopup: `384`
  >A combination of both anyPopupId and anyPopupLevel.

Example:

```typescript
infinity.loadModule('infinity.ui');
let popupFlags = infinity.ui.popupFlags.none;
```



---

## infinity.ui.selectableFlags {: #infinity.ui.selectableFlags_enum .doc-enum}

Values:

- none: `0`
  >No specific behavior modifiers for the selectable item.

- dontClosePopups: `1`
  >Choosing the selectable item won't close any open popups.

- spanAllColumns: `2`
  >The selectable item will span across all columns in multi-column layouts.

- allowDoubleClick: `4`
  >Double-clicking the item is allowed and may trigger specific interactions.

- disabled: `8`
  >The selectable item is currently disabled and can't be interacted with.

- allowItemOverlap: `16`
  >Allows other items to overlap with the selectable item, which might be useful in certain layered UI scenarios.

Example:

```typescript
infinity.loadModule('infinity.ui');
let selectableFlags = infinity.ui.selectableFlags.none;
```



---

## infinity.ui.sliderFlags {: #infinity.ui.sliderFlags_enum .doc-enum}

Values:

- none: `0`
  >No specific attributes are applied to the slider.

- alwaysClamp: `16`
  >Ensures the slider's value always remains within the specified minimum and maximum range.

- logarithmic: `32`
  >The slider uses a logarithmic scale, which can be useful for values that change exponentially.

- noRoundToFormat: `64`
  >The slider's value won't be rounded according to its format, providing more exact values.

- noInput: `128`
  >Disables input for the slider, turning it into a display-only component.

Example:

```typescript
infinity.loadModule('infinity.ui');
let sliderFlags = infinity.ui.sliderFlags.none;
```



---

## infinity.ui.styleVars {: #infinity.ui.styleVars_enum .doc-enum}

Values:

- alpha: `0`
  >Refers to the opacity of the UI element.

- disabledAlpha: `1`
  >The opacity level for UI elements that are disabled or inactive.

- windowPadding: `2`
  >The padding space inside the window, separating the content from the window's borders.

- windowRounding: `3`
  >Defines the curvature radius of window corners.

- windowBorderSize: `4`
  >Thickness of the window's border.

- windowMinSize: `5`
  >Specifies the minimum dimensions that a window can be resized to.

- windowTitleAlign: `6`
  >Alignment of the window's title. Can be left, center, or right.

- childRounding: `7`
  >Radius of curvature for child window corners.

- childBorderSize: `8`
  >Thickness of the border around child windows.

- popupRounding: `9`
  >Radius of curvature for popup window corners.

- popupBorderSize: `10`
  >Thickness of the border around popup windows.

- framePadding: `11`
  >Padding inside a frame, separating content from the frame's borders.

- frameRounding: `12`
  >Defines the curvature radius of frame corners.

- frameBorderSize: `13`
  >Thickness of the frame's border.

- itemSpacing: `14`
  >Spacing between consecutive items in a list or layout.

- itemInnerSpacing: `15`
  >Internal spacing between an item's content and its boundary.

- indentSpacing: `16`
  >Space used for indentation, typically for hierarchical structures or nested items.

- cellPadding: `17`
  >Padding inside table cells.

- scrollbarSize: `18`
  >Width or height of the scrollbar, depending on its orientation.

- scrollbarRounding: `19`
  >Defines the curvature radius of scrollbar corners.

- grabMinSize: `20`
  >Minimum dimension of the grabbable area, typically used in sliders.

- grabRounding: `21`
  >Defines the curvature radius of the grabbable area's corners.

- tabRounding: `22`
  >Radius of curvature for tab corners in a tab bar.

- buttonTextAlign: `23`
  >Alignment of the text within a button. Can be left, center, or right.

- selectableTextAlign: `24`
  >Alignment of the text within selectable items.

- count: `25`
  >Represents the total number of style variables available.

Example:

```typescript
infinity.loadModule('infinity.ui');
let styleVars = infinity.ui.styleVars.alpha;
```



---

## infinity.ui.styles {: #infinity.ui.styles_enum .doc-enum}

Values:

- dark: `1`
  >A style theme with dark colors, typically composed of deep grays and blacks. Ideal for low-light environments or to reduce eye strain.

- light: `2`
  >A brighter theme with light backgrounds, usually white or light grays. Suitable for well-lit environments.

- classic: `3`
  >A traditional or old-school theme, often reminiscent of classic GUI designs.

Example:

```typescript
infinity.loadModule('infinity.ui');
let styles = infinity.ui.styles.dark;
```



---

## infinity.ui.tabBarFlags {: #infinity.ui.tabBarFlags_enum .doc-enum}

Values:

- none: `0`
  >No specific behavior; default state of a tab bar.

- reorderable: `1`
  >Tabs within the tab bar can be reordered by dragging.

- autoSelectNewTabs: `2`
  >Newly added tabs will automatically be made active or brought to the front.

- tabListPopupButton: `4`
  >Displays a button that shows a pop-up list of all tabs, useful for navigating when many tabs are open.

- noCloseWithMiddleMouseButton: `8`
  >Prevents tabs from closing when clicked with the middle mouse button.

- noTabListScrollingButtons: `16`
  >Disables the scrolling buttons that appear when there are too many tabs to fit the available space.

- noTooltip: `32`
  >Disables tooltips for tabs.

- fittingPolicyResizeDown: `64`
  >If tabs don’t fit, they will be resized to fit within the available space.

- fittingPolicyScroll: `128`
  >If tabs don’t fit, scrolling buttons will appear to navigate through them.

Example:

```typescript
infinity.loadModule('infinity.ui');
let tabBarFlags = infinity.ui.tabBarFlags.none;
```



---

## infinity.ui.tabItemFlags {: #infinity.ui.tabItemFlags_enum .doc-enum}

Values:

- none: `0`
  >Default state for a tab with no specific behavior.

- unsavedDocument: `1`
  >Indicates that the document or content in this tab has unsaved changes, usually visualized by an asterisk or other marker.

- setSelected: `2`
  >Programmatically sets this tab as the active or selected one.

- noCloseWithMiddleMouseButton: `4`
  >Prevents this specific tab from closing when clicked with the middle mouse button.

- noPushId: `8`
  >Disables the internal stacking ID, usually used when creating tabs in a loop or dynamic context.

- noTooltip: `16`
  >Disables tooltips for this specific tab.

- noReorder: `32`
  >This tab cannot be reordered by dragging, even if the tabBar has the reorderable flag.

- leading: `64`
  >Positions the tab at the front of the tab bar, before other tabs.

- trailing: `128`
  >Positions the tab at the end of the tab bar, after other tabs.

Example:

```typescript
infinity.loadModule('infinity.ui');
let tabItemFlags = infinity.ui.tabItemFlags.none;
```



---

## infinity.ui.tableBgTargets {: #infinity.ui.tableBgTargets_enum .doc-enum}

Values:

- none: `0`
  >No specific background target, default state for a table cell.

- rowBg0: `1`
  >Targets the background of even-numbered rows.

- rowBg1: `2`
  >Targets the background of odd-numbered rows.

- cellBg: `3`
  >Targets the background of individual cells, regardless of row parity.

Example:

```typescript
infinity.loadModule('infinity.ui');
let tableBgTargets = infinity.ui.tableBgTargets.none;
```



---

## infinity.ui.tableColumnFlags {: #infinity.ui.tableColumnFlags_enum .doc-enum}

Values:

- none: `0`
  >Default state for a table column with no specific behavior.

- disabled: `1`
  >The column is disabled and won't respond to user interaction.

- defaultHide: `2`
  >The column is hidden by default but can be shown by the user.

- defaultSort: `4`
  >The column is used for sorting by default when the table is displayed.

- widthStretch: `8`
  >Column width will stretch to take up available space.

- widthFixed: `16`
  >Column width is fixed and won't change regardless of the table or content size.

- noResize: `32`
  >Disables the ability to resize the column.

- noReorder: `64`
  >Disables the ability to reorder the column.

- noHide: `128`
  >Disables the ability to hide the column.

- noClip: `256`
  >Content that exceeds the column width will not be clipped.

- noSort: `512`
  >Disables the ability to sort using this column.

- noSortAscending: `1024`
  >Disables ascending sorting for this column.

- noSortDescending: `2048`
  >Disables descending sorting for this column.

- noHeaderLabel: `4096`
  >Hides the column header label.

- noHeaderWidth: `8192`
  >Disables header width, making it invisible.

- preferSortAscending: `16384`
  >When sorting is enabled, it will prefer ascending order by default.

- preferSortDescending: `32768`
  >When sorting is enabled, it will prefer descending order by default.

- indentEnable: `65536`
  >Enables indentation for this column.

- indentDisable: `131072`
  >Disables indentation for this column.

- isEnabled: `16777216`
  >Indicates if the column is currently enabled.

- isVisible: `33554432`
  >Indicates if the column is currently visible.

- isSorted: `67108864`
  >Indicates if the column is currently being used for sorting.

- isHovered: `134217728`
  >Indicates if the column is currently hovered by the cursor.

Example:

```typescript
infinity.loadModule('infinity.ui');
let tableColumnFlags = infinity.ui.tableColumnFlags.none;
```



---

## infinity.ui.tableFlags {: #infinity.ui.tableFlags_enum .doc-enum}

Values:

- none: `0`
  >Default behavior for a table without specific modifications.

- resizable: `1`
  >Allows the columns in the table to be resized.

- reorderable: `2`
  >Allows the columns in the table to be reordered.

- hideable: `4`
  >Allows specific columns in the table to be hidden or shown.

- sortable: `8`
  >Enables sorting functionality for the table.

- noSavedSettings: `16`
  >Disables saving table settings like column order and visibility.

- contextMenuInBody: `32`
  >Enables a context menu when right-clicking in the table body.

- rowBg: `64`
  >Applies alternating row background colors for better readability.

- bordersInnerH: `128`
  >Draws horizontal borders between rows.

- bordersOuterH: `256`
  >Draws a horizontal border at the top and bottom of the table.

- bordersInnerV: `512`
  >Draws vertical borders between columns.

- bordersOuterV: `1024`
  >Draws a vertical border on the left and right sides of the table.

- bordersH: `384`
  >Combination of bordersInnerH and bordersOuterH.

- bordersV: `1536`
  >Combination of bordersInnerV and bordersOuterV.

- bordersInner: `640`
  >Draws borders between rows and columns but not on the outer edges.

- bordersOuter: `1280`
  >Draws borders only on the outer edges of the table.

- borders: `1920`
  >Draws all inner and outer borders.

- noBordersInBody: `2048`
  >Disables drawing of borders within the table body.

- noBordersInBodyUntilResize: `4096`
  >Borders in the body will only appear after resizing.

- sizingFixedFit: `8192`
  >Adjusts column sizes to fit content, but maintains consistent total table width.

- sizingFixedSame: `16384`
  >All columns have the same fixed width.

- sizingStretchProp: `24576`
  >Columns stretch to fill available space, but maintain proportionality based on content.

- sizingStretchSame: `32768`
  >All columns stretch equally to fill available space.

- noHostExtendX: `65536`
  >Prevents the table from expanding horizontally beyond its container.

- noHostExtendY: `131072`
  >Prevents the table from expanding vertically beyond its container.

- noKeepColumnsVisible: `262144`
  >Allows columns to be hidden even if it makes the table less informative.

- preciseWidths: `524288`
  >Column widths are determined with higher precision.

- noClip: `1048576`
  >Content exceeding the table or column bounds will not be clipped.

- padOuterX: `2097152`
  >Adds horizontal padding to the outer edges of the table.

- noPadOuterX: `4194304`
  >Removes horizontal padding from the outer edges of the table.

- noPadInnerX: `8388608`
  >Removes horizontal padding between columns.

- scrollX: `16777216`
  >Enables horizontal scrolling for the table.

- scrollY: `33554432`
  >Enables vertical scrolling for the table.

- sortMulti: `67108864`
  >Allows multiple columns to be used for sorting.

- sortTristate: `134217728`
  >Sorting can have three states: ascending, descending, and default (no sort).

Example:

```typescript
infinity.loadModule('infinity.ui');
let tableFlags = infinity.ui.tableFlags.none;
```



---

## infinity.ui.tableRowFlags {: #infinity.ui.tableRowFlags_enum .doc-enum}

Values:

- none: `0`
  >Represents the default behavior for table rows, without any special properties or modifications.

- headers: `1`
  >Indicates that the row is a header row. Header rows typically display column titles or labels.
Example:

```typescript
infinity.loadModule('infinity.ui');
let tableRowFlags = infinity.ui.tableRowFlags.none;
```



---

## infinity.ui.treeNodeFlags {: #infinity.ui.treeNodeFlags_enum .doc-enum}

Values:

- none: `0`
  >Represents the default behavior for tree nodes, with no special properties or modifications.

- selected: `1`
  >Marks the tree node as currently selected or highlighted.

- framed: `2`
  >Provides a visual frame around the tree node.

- allowItemOverlap: `4`
  >Allows items within the tree node to overlap.

- noTreePushOnOpen: `8`
  >Prevents the tree from expanding or pushing out other tree nodes when this node is opened.

- noAutoOpenOnLog: `16`
  >Prevents the tree node from automatically opening when logged or interacted with.

- defaultOpen: `32`
  >The tree node will be open by default when first displayed.

- openOnDoubleClick: `64`
  >Requires a double-click action to open the tree node.

- openOnArrow: `128`
  >Allows opening of the tree node using an arrow (typically right arrow for opening, left arrow for closing).

- leaf: `256`
  >Indicates that the tree node is a leaf (i.e., it has no child nodes).

- bullet: `512`
  >Uses a bullet point for the tree node instead of the typical arrow or other indicators.

- framePadding: `1024`
  >Adjusts padding within the frame of the tree node.

- spanAvailWidth: `2048`
  >Allows the tree node to span the available width, filling the space.

- spanFullWidth: `4096`
  >Forces the tree node to span the full width of the container or display.

- navLeftJumpsBackHere: `8192`
  >Sets the behavior such that navigating left (typically in a tree structure) jumps back to this particular node.

- collapsingHeader: `26`
  >Indicates that the tree node acts as a collapsing header.

Example:

```typescript
infinity.loadModule('infinity.ui');
let treeNodeFlags = infinity.ui.treeNodeFlags.none;
```



---

## infinity.ui.windowFlags {: #infinity.ui.windowFlags_enum .doc-enum}

Values:

- none: `0`
  >Represents the default behavior for windows, without any special properties or modifications.

- noTitleBar: `1`
  >Removes the title bar from the window.

- noResize: `2`
  >Disables the ability to resize the window.

- noMove: `4`
  >Prevents the window from being moved.

- noScrollbar: `8`
  >Hides scrollbars in the window.

- noScrollWithMouse: `16`
  >Disables scrolling within the window using the mouse.

- noCollapse: `32`
  >Prevents the window from being collapsed into a minimized state.

- alwaysAutoResize: `64`
  >The window will automatically resize based on the content it contains. This ensures that there are no unnecessary empty spaces or content cut-offs.

- noBackground: `128`
  >Removes the window's background, making it transparent.

- noSavedSettings: `256`
  >Any window settings, positions, sizes, etc., won't be saved between sessions.

- noMouseInputs: `512`
  >The window won't respond to any mouse input events.

- menuBar: `1024`
  >Adds a menu bar at the top of the window.

- horizontalScrollbar: `2048`
  >Adds a horizontal scrollbar to the window.

- noFocusOnAppearing: `4096`
  >The window won't automatically gain focus when it appears.

- noBringToFrontOnFocus: `8192`
  >When the window gains focus, it won't be brought to the front of other windows.

- alwaysVerticalScrollbar: `16384`
  >Ensures a vertical scrollbar is always present, regardless of the content height.

- alwaysHorizontalScrollbar: `32768`
  >Ensures a horizontal scrollbar is always present, regardless of the content width.

- alwaysUseWindowPadding: `65536`
  >The window will always apply padding, ensuring content doesn't touch the window's edges.

- noNavInputs: `262144`
  >Disables navigation inputs for the window.

- noNavFocus: `524288`
  >The window can't be focused using navigation methods.

- unsavedDocument: `1048576`
  >Indicates that the window contains an unsaved document.

- noDocking: `2097152`
  >Prevents the window from being docked with others.

- noNav: `786432`
  >Disables all navigation functionality for the window.

- noDecoration: `43`
  >Removes all standard window decorations.

- noInputs: `786944`
  >The window won't accept any form of input.

- navFlattened: `8388608`
  >Navigation within the window will be flattened.

- childWindow: `16777216`
  >Marks the window as a child window, meaning it's a secondary or subordinate window.

- toolTip: `33554432`
  >The window acts as a tooltip.

- popup: `67108864`
  >The window functions as a popup, appearing above other windows.

- modal: `134217728`
  >The window is modal, meaning it requires user interaction before anything else can be done in the underlying application.

- childMenu: `268435456`
  >The window acts as a child menu, typically popping out from a main menu.

- dockNodeHost: `536870912`
  >Marks the window as a host for docking nodes, allowing other windows to dock within it.

Example:

```typescript
infinity.loadModule('infinity.ui');
let windowFlags = infinity.ui.windowFlags.none;
```



---

## infinity.ui.windowPositions {: #infinity.ui.windowPositions_enum .doc-enum}

Values:

- undefined: `536805376`
  >The position of the window is not explicitly set, allowing the framework or system default behaviors to decide where the window appears.

- centered: `805240832`
  >The window will be positioned at the center of its parent container or screen.

Example:

```typescript
infinity.loadModule('infinity.ui');
let windowPositions = infinity.ui.windowPositions.undefined;
```



---

## infinity.ui.windowStates {: #infinity.ui.windowStates_enum .doc-enum}

Values:

- open: `0`
  >The window is currently in an open state.

- closed: `1`
  >The window is closed and not visible to the user.

- collapsed: `2`
  >The window is minimized or collapsed.

Example:

```typescript
infinity.loadModule('infinity.ui');
let windowStates = infinity.ui.windowStates.open;
```





