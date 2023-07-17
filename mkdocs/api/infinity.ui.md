# infinity.ui

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

//TODO

---

<div class="doc-heading">Classes</div>

---

## color {: #infinity.ui.color_class .doc-class}

<div class="doc-toc" markdown="1">

**Properties:**

- [a](#infinity.ui.color.a_property)
- [b](#infinity.ui.color.b_property)
- [g](#infinity.ui.color.g_property)
- [r](#infinity.ui.color.r_property)

**Methods:**

- [constructor()](#infinity.ui.color.constructor_function)
- [constructor()](#infinity.ui.color.constructor_function)

</div>

//TODO

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

//TODO

---

### b {: #infinity.ui.color.b_property .doc-property}

Type: `number`

//TODO

---

### g {: #infinity.ui.color.g_property .doc-property}

Type: `number`

//TODO

---

### r {: #infinity.ui.color.r_property .doc-property}

Type: `number`

//TODO

---

**Methods**

---

### constructor() {: #infinity.ui.color.constructor_function .doc-function}

//TODO

Signature:
```typescript
constructor( r: number, g: number, b: number, a: number )
```

Parameters:

- r: `number`
  >//TODO

- g: `number`
  >//TODO

- b: `number`
  >//TODO

- a: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
let myColor = new infinity.ui.color(r, g, b, a);
```

---

### constructor() {: #infinity.ui.color.constructor_function .doc-function}

//TODO

Signature:
```typescript
constructor()
```

Example:

```typescript
infinity.loadModule('infinity.ui');
let myColor = new infinity.ui.color(r, g, b, a);
```



---

## vec2 {: #infinity.ui.vec2_class .doc-class}

<div class="doc-toc" markdown="1">

**Properties:**

- [x](#infinity.ui.vec2.x_property)
- [y](#infinity.ui.vec2.y_property)

**Methods:**

- [constructor()](#infinity.ui.vec2.constructor_function)
- [constructor()](#infinity.ui.vec2.constructor_function)

</div>

//TODO

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

//TODO

---

### y {: #infinity.ui.vec2.y_property .doc-property}

Type: `number`

//TODO

---

**Methods**

---

### constructor() {: #infinity.ui.vec2.constructor_function .doc-function}

//TODO

Signature:
```typescript
constructor( x: number, y: number )
```

Parameters:

- x: `number`
  >//TODO

- y: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
let myVec2 = new infinity.ui.vec2(x, y);
```

---

### constructor() {: #infinity.ui.vec2.constructor_function .doc-function}

//TODO

Signature:
```typescript
constructor()
```

Example:

```typescript
infinity.loadModule('infinity.ui');
let myVec2 = new infinity.ui.vec2(x, y);
```



---

## vec3 {: #infinity.ui.vec3_class .doc-class}

<div class="doc-toc" markdown="1">

**Properties:**

- [x](#infinity.ui.vec3.x_property)
- [y](#infinity.ui.vec3.y_property)
- [z](#infinity.ui.vec3.z_property)

**Methods:**

- [constructor()](#infinity.ui.vec3.constructor_function)
- [constructor()](#infinity.ui.vec3.constructor_function)

</div>

//TODO

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

//TODO

---

### y {: #infinity.ui.vec3.y_property .doc-property}

Type: `number`

//TODO

---

### z {: #infinity.ui.vec3.z_property .doc-property}

Type: `number`

//TODO

---

**Methods**

---

### constructor() {: #infinity.ui.vec3.constructor_function .doc-function}

//TODO

Signature:
```typescript
constructor( x: number, y: number, z: number )
```

Parameters:

- x: `number`
  >//TODO

- y: `number`
  >//TODO

- z: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
let myVec3 = new infinity.ui.vec3(x, y, z);
```

---

### constructor() {: #infinity.ui.vec3.constructor_function .doc-function}

//TODO

Signature:
```typescript
constructor()
```

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
- [constructor()](#infinity.ui.vec4.constructor_function)

</div>

//TODO

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

//TODO

---

### x {: #infinity.ui.vec4.x_property .doc-property}

Type: `number`

//TODO

---

### y {: #infinity.ui.vec4.y_property .doc-property}

Type: `number`

//TODO

---

### z {: #infinity.ui.vec4.z_property .doc-property}

Type: `number`

//TODO

---

**Methods**

---

### constructor() {: #infinity.ui.vec4.constructor_function .doc-function}

//TODO

Signature:
```typescript
constructor( x: number, y: number, z: number, w: number )
```

Parameters:

- x: `number`
  >//TODO

- y: `number`
  >//TODO

- z: `number`
  >//TODO

- w: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
let myVec4 = new infinity.ui.vec4(x, y, z, w);
```

---

### constructor() {: #infinity.ui.vec4.constructor_function .doc-function}

//TODO

Signature:
```typescript
constructor()
```

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

//TODO

---

## stringArray {: #infinity.ui.stringArray_interface .doc-interface}

Extends: `Array<string>`

//TODO

---

## vec2Array {: #infinity.ui.vec2Array_interface .doc-interface}

Extends: `Array<infinity.ui.vec2>`

//TODO



---

<div class="doc-heading">Functions</div>

---

## addBezierCubic() {: #infinity.ui.addBezierCubic_function .doc-function}

//TODO

Signature:
```
addBezierCubic( p1: infinity.ui.vec2, p2: infinity.ui.vec2, p3: infinity.ui.vec2, p4: infinity.ui.vec2, col: number, thickness?: number, segments?: number ): void
```

Parameters:

- p1: `infinity.ui.vec2`
  >//TODO

- p2: `infinity.ui.vec2`
  >//TODO

- p3: `infinity.ui.vec2`
  >//TODO

- p4: `infinity.ui.vec2`
  >//TODO

- col: `number`
  >//TODO

- thickness: `number`, optional
  >//TODO

- segments: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addBezierCubic(p1, p2, p3, p4, col);
```

---

## addBezierQuadratic() {: #infinity.ui.addBezierQuadratic_function .doc-function}

//TODO

Signature:
```
addBezierQuadratic( p1: infinity.ui.vec2, p2: infinity.ui.vec2, p3: infinity.ui.vec2, col: number, thickness?: number, segments?: number ): void
```

Parameters:

- p1: `infinity.ui.vec2`
  >//TODO

- p2: `infinity.ui.vec2`
  >//TODO

- p3: `infinity.ui.vec2`
  >//TODO

- col: `number`
  >//TODO

- thickness: `number`, optional
  >//TODO

- segments: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addBezierQuadratic(p1, p2, p3, col);
```

---

## addCircle() {: #infinity.ui.addCircle_function .doc-function}

//TODO

Signature:
```
addCircle( center: infinity.ui.vec2, radius: number, col: number, segments?: number, thickness?: number ): void
```

Parameters:

- center: `infinity.ui.vec2`
  >//TODO

- radius: `number`
  >//TODO

- col: `number`
  >//TODO

- segments: `number`, optional
  >//TODO

- thickness: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addCircle(center, radius, col);
```

---

## addCircleFilled() {: #infinity.ui.addCircleFilled_function .doc-function}

//TODO

Signature:
```
addCircleFilled( center: infinity.ui.vec2, radius: number, col: number, segments?: number ): void
```

Parameters:

- center: `infinity.ui.vec2`
  >//TODO

- radius: `number`
  >//TODO

- col: `number`
  >//TODO

- segments: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addCircleFilled(center, radius, col);
```

---

## addConvexPolyFilled() {: #infinity.ui.addConvexPolyFilled_function .doc-function}

//TODO

Signature:
```
addConvexPolyFilled( points: infinity.ui.vec2Array, col: number ): void
```

Parameters:

- points: `infinity.ui.vec2Array`
  >//TODO

- col: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addConvexPolyFilled(points, col);
```

---

## addFontFromFile() {: #infinity.ui.addFontFromFile_function .doc-function}

//TODO

Signature:
```
addFontFromFile( fileName: string, size: number ): number
```

Parameters:

- fileName: `string`
  >//TODO

- size: `number`
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.addFontFromFile(fileName, size);
```

---

## addImage() {: #infinity.ui.addImage_function .doc-function}

//TODO

Signature:
```
addImage( texture: number, p1: infinity.ui.vec2, p2: infinity.ui.vec2, uv1?: infinity.ui.vec2, uv2?: infinity.ui.vec2, col?: number ): void
```

Parameters:

- texture: `number`
  >//TODO

- p1: `infinity.ui.vec2`
  >//TODO

- p2: `infinity.ui.vec2`
  >//TODO

- uv1: `infinity.ui.vec2`, optional
  >//TODO

- uv2: `infinity.ui.vec2`, optional
  >//TODO

- col: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addImage(texture, p1, p2);
```

---

## addImageQuad() {: #infinity.ui.addImageQuad_function .doc-function}

//TODO

Signature:
```
addImageQuad( texture: number, p1: infinity.ui.vec2, p2: infinity.ui.vec2, p3: infinity.ui.vec2, p4: infinity.ui.vec2, uv1?: infinity.ui.vec2, uv2?: infinity.ui.vec2, uv3?: infinity.ui.vec2, uv4?: infinity.ui.vec2, col?: number ): void
```

Parameters:

- texture: `number`
  >//TODO

- p1: `infinity.ui.vec2`
  >//TODO

- p2: `infinity.ui.vec2`
  >//TODO

- p3: `infinity.ui.vec2`
  >//TODO

- p4: `infinity.ui.vec2`
  >//TODO

- uv1: `infinity.ui.vec2`, optional
  >//TODO

- uv2: `infinity.ui.vec2`, optional
  >//TODO

- uv3: `infinity.ui.vec2`, optional
  >//TODO

- uv4: `infinity.ui.vec2`, optional
  >//TODO

- col: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addImageQuad(texture, p1, p2, p3, p4);
```

---

## addImageRounded() {: #infinity.ui.addImageRounded_function .doc-function}

//TODO

Signature:
```
addImageRounded( texture: number, p1: infinity.ui.vec2, p2: infinity.ui.vec2, uv1?: infinity.ui.vec2, uv2?: infinity.ui.vec2, col?: number, rounding?: number, flags?: infinity.ui.drawFlags ): void
```

Parameters:

- texture: `number`
  >//TODO

- p1: `infinity.ui.vec2`
  >//TODO

- p2: `infinity.ui.vec2`
  >//TODO

- uv1: `infinity.ui.vec2`, optional
  >//TODO

- uv2: `infinity.ui.vec2`, optional
  >//TODO

- col: `number`, optional
  >//TODO

- rounding: `number`, optional
  >//TODO

- flags: `infinity.ui.drawFlags`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addImageRounded(texture, p1, p2);
```

---

## addLine() {: #infinity.ui.addLine_function .doc-function}

//TODO

Signature:
```
addLine( p1: infinity.ui.vec2, p2: infinity.ui.vec2, col: number, thickness?: number ): void
```

Parameters:

- p1: `infinity.ui.vec2`
  >//TODO

- p2: `infinity.ui.vec2`
  >//TODO

- col: `number`
  >//TODO

- thickness: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addLine(p1, p2, col);
```

---

## addNgon() {: #infinity.ui.addNgon_function .doc-function}

//TODO

Signature:
```
addNgon( center: infinity.ui.vec2, radius: number, col: number, segments: number, thickness?: number ): void
```

Parameters:

- center: `infinity.ui.vec2`
  >//TODO

- radius: `number`
  >//TODO

- col: `number`
  >//TODO

- segments: `number`
  >//TODO

- thickness: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addNgon(center, radius, col, segments);
```

---

## addNgonFilled() {: #infinity.ui.addNgonFilled_function .doc-function}

//TODO

Signature:
```
addNgonFilled( center: infinity.ui.vec2, radius: number, col: number, segments: number ): void
```

Parameters:

- center: `infinity.ui.vec2`
  >//TODO

- radius: `number`
  >//TODO

- col: `number`
  >//TODO

- segments: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addNgonFilled(center, radius, col, segments);
```

---

## addPolyline() {: #infinity.ui.addPolyline_function .doc-function}

//TODO

Signature:
```
addPolyline( points: infinity.ui.vec2Array, col: number, flags?: infinity.ui.drawFlags, thickness?: number ): void
```

Parameters:

- points: `infinity.ui.vec2Array`
  >//TODO

- col: `number`
  >//TODO

- flags: `infinity.ui.drawFlags`, optional
  >//TODO

- thickness: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addPolyline(points, col);
```

---

## addQuad() {: #infinity.ui.addQuad_function .doc-function}

//TODO

Signature:
```
addQuad( p1: infinity.ui.vec2, p2: infinity.ui.vec2, p3: infinity.ui.vec2, p4: infinity.ui.vec2, col: number, thickness?: number ): void
```

Parameters:

- p1: `infinity.ui.vec2`
  >//TODO

- p2: `infinity.ui.vec2`
  >//TODO

- p3: `infinity.ui.vec2`
  >//TODO

- p4: `infinity.ui.vec2`
  >//TODO

- col: `number`
  >//TODO

- thickness: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addQuad(p1, p2, p3, p4, col);
```

---

## addQuadFilled() {: #infinity.ui.addQuadFilled_function .doc-function}

//TODO

Signature:
```
addQuadFilled( p1: infinity.ui.vec2, p2: infinity.ui.vec2, p3: infinity.ui.vec2, p4: infinity.ui.vec2, col: number ): void
```

Parameters:

- p1: `infinity.ui.vec2`
  >//TODO

- p2: `infinity.ui.vec2`
  >//TODO

- p3: `infinity.ui.vec2`
  >//TODO

- p4: `infinity.ui.vec2`
  >//TODO

- col: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addQuadFilled(p1, p2, p3, p4, col);
```

---

## addRect() {: #infinity.ui.addRect_function .doc-function}

//TODO

Signature:
```
addRect( p1: infinity.ui.vec2, p2: infinity.ui.vec2, col: number, rounding?: number, flags?: infinity.ui.drawFlags, thickness?: number ): void
```

Parameters:

- p1: `infinity.ui.vec2`
  >//TODO

- p2: `infinity.ui.vec2`
  >//TODO

- col: `number`
  >//TODO

- rounding: `number`, optional
  >//TODO

- flags: `infinity.ui.drawFlags`, optional
  >//TODO

- thickness: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addRect(p1, p2, col);
```

---

## addRectFilled() {: #infinity.ui.addRectFilled_function .doc-function}

//TODO

Signature:
```
addRectFilled( p1: infinity.ui.vec2, p2: infinity.ui.vec2, col: number, rounding?: number, flags?: infinity.ui.drawFlags ): void
```

Parameters:

- p1: `infinity.ui.vec2`
  >//TODO

- p2: `infinity.ui.vec2`
  >//TODO

- col: `number`
  >//TODO

- rounding: `number`, optional
  >//TODO

- flags: `infinity.ui.drawFlags`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addRectFilled(p1, p2, col);
```

---

## addRectFilledMultiColor() {: #infinity.ui.addRectFilledMultiColor_function .doc-function}

//TODO

Signature:
```
addRectFilledMultiColor( p1: infinity.ui.vec2, p2: infinity.ui.vec2, col1: number, col2: number, col3: number, col4: number ): void
```

Parameters:

- p1: `infinity.ui.vec2`
  >//TODO

- p2: `infinity.ui.vec2`
  >//TODO

- col1: `number`
  >//TODO

- col2: `number`
  >//TODO

- col3: `number`
  >//TODO

- col4: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addRectFilledMultiColor(p1, p2, col1, col2, col3, col4);
```

---

## addText() {: #infinity.ui.addText_function .doc-function}

//TODO

Signature:
```
addText( font: number, size: number, pos: infinity.ui.vec2, col: number, text: string, wrapWidth?: number ): void
```

Parameters:

- font: `number`
  >//TODO

- size: `number`
  >//TODO

- pos: `infinity.ui.vec2`
  >//TODO

- col: `number`
  >//TODO

- text: `string`
  >//TODO

- wrapWidth: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addText(font, size, pos, col, text);
```

---

## addText() {: #infinity.ui.addText_function .doc-function}

//TODO

Signature:
```
addText( pos: infinity.ui.vec2, col: number, text: string ): void
```

Parameters:

- pos: `infinity.ui.vec2`
  >//TODO

- col: `number`
  >//TODO

- text: `string`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addText(pos, col, text);
```

---

## addTriangle() {: #infinity.ui.addTriangle_function .doc-function}

//TODO

Signature:
```
addTriangle( p1: infinity.ui.vec2, p2: infinity.ui.vec2, p3: infinity.ui.vec2, col: number, thickness?: number ): void
```

Parameters:

- p1: `infinity.ui.vec2`
  >//TODO

- p2: `infinity.ui.vec2`
  >//TODO

- p3: `infinity.ui.vec2`
  >//TODO

- col: `number`
  >//TODO

- thickness: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addTriangle(p1, p2, p3, col);
```

---

## addTriangleFilled() {: #infinity.ui.addTriangleFilled_function .doc-function}

//TODO

Signature:
```
addTriangleFilled( p1: infinity.ui.vec2, p2: infinity.ui.vec2, p3: infinity.ui.vec2, col: number ): void
```

Parameters:

- p1: `infinity.ui.vec2`
  >//TODO

- p2: `infinity.ui.vec2`
  >//TODO

- p3: `infinity.ui.vec2`
  >//TODO

- col: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.addTriangleFilled(p1, p2, p3, col);
```

---

## alignTextToFramePadding() {: #infinity.ui.alignTextToFramePadding_function .doc-function}

//TODO

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

//TODO

Signature:
```
arrowButton( id: string, direction: infinity.ui.directions ): boolean
```

Parameters:

- id: `string`
  >//TODO

- direction: `infinity.ui.directions`
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.arrowButton(id, direction) ) {}
```

---

## begin() {: #infinity.ui.begin_function .doc-function}

//TODO

Signature:
```
begin( name: string, showCloseButton?: boolean, flags?: infinity.ui.windowFlags ): infinity.ui.windowStates
```

Parameters:

- name: `string`
  >//TODO

- showCloseButton: `boolean`, optional
  >//TODO

- flags: `infinity.ui.windowFlags`, optional
  >//TODO


Return type: `infinity.ui.windowStates`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.begin(name);
```

---

## beginChild() {: #infinity.ui.beginChild_function .doc-function}

//TODO

Signature:
```
beginChild( id: string, size?: infinity.ui.vec2, border?: boolean, flags?: infinity.ui.windowFlags ): boolean
```

Parameters:

- id: `string`
  >//TODO

- size: `infinity.ui.vec2`, optional
  >//TODO

- border: `boolean`, optional
  >//TODO

- flags: `infinity.ui.windowFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginChild(id) ) {}
```

---

## beginChild() {: #infinity.ui.beginChild_function .doc-function}

//TODO

Signature:
```
beginChild( id: number, size?: infinity.ui.vec2, border?: boolean, flags?: infinity.ui.windowFlags ): boolean
```

Parameters:

- id: `number`
  >//TODO

- size: `infinity.ui.vec2`, optional
  >//TODO

- border: `boolean`, optional
  >//TODO

- flags: `infinity.ui.windowFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginChild(id) ) {}
```

---

## beginChildFrame() {: #infinity.ui.beginChildFrame_function .doc-function}

//TODO

Signature:
```
beginChildFrame( id: number, size: infinity.ui.vec2, flags?: infinity.ui.windowFlags ): boolean
```

Parameters:

- id: `number`
  >//TODO

- size: `infinity.ui.vec2`
  >//TODO

- flags: `infinity.ui.windowFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginChildFrame(id, size) ) {}
```

---

## beginCombo() {: #infinity.ui.beginCombo_function .doc-function}

//TODO

Signature:
```
beginCombo( label: string, previewValue: string, flags?: infinity.ui.comboFlags ): boolean
```

Parameters:

- label: `string`
  >//TODO

- previewValue: `string`
  >//TODO

- flags: `infinity.ui.comboFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginCombo(label, previewValue) ) {}
```

---

## beginDisabled() {: #infinity.ui.beginDisabled_function .doc-function}

//TODO

Signature:
```
beginDisabled( disabled: boolean ): void
```

Parameters:

- disabled: `boolean`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.beginDisabled(disabled);
```

---

## beginGroup() {: #infinity.ui.beginGroup_function .doc-function}

//TODO

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

//TODO

Signature:
```
beginListBox( label: string, size?: infinity.ui.vec2 ): boolean
```

Parameters:

- label: `string`
  >//TODO

- size: `infinity.ui.vec2`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginListBox(label) ) {}
```

---

## beginMainMenuBar() {: #infinity.ui.beginMainMenuBar_function .doc-function}

//TODO

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

//TODO

Signature:
```
beginMenu( label: string, enabled?: boolean ): boolean
```

Parameters:

- label: `string`
  >//TODO

- enabled: `boolean`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginMenu(label) ) {}
```

---

## beginMenuBar() {: #infinity.ui.beginMenuBar_function .doc-function}

//TODO

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

//TODO

Signature:
```
beginPopup( id: string, flags?: infinity.ui.windowFlags ): boolean
```

Parameters:

- id: `string`
  >//TODO

- flags: `infinity.ui.windowFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginPopup(id) ) {}
```

---

## beginPopupContextItem() {: #infinity.ui.beginPopupContextItem_function .doc-function}

//TODO

Signature:
```
beginPopupContextItem( id?: string, flags?: infinity.ui.popupFlags ): boolean
```

Parameters:

- id: `string`, optional
  >//TODO

- flags: `infinity.ui.popupFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginPopupContextItem() ) {}
```

---

## beginPopupContextVoid() {: #infinity.ui.beginPopupContextVoid_function .doc-function}

//TODO

Signature:
```
beginPopupContextVoid( id?: string, flags?: infinity.ui.popupFlags ): boolean
```

Parameters:

- id: `string`, optional
  >//TODO

- flags: `infinity.ui.popupFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginPopupContextVoid() ) {}
```

---

## beginPopupContextWindow() {: #infinity.ui.beginPopupContextWindow_function .doc-function}

//TODO

Signature:
```
beginPopupContextWindow( id?: string, flags?: infinity.ui.popupFlags ): boolean
```

Parameters:

- id: `string`, optional
  >//TODO

- flags: `infinity.ui.popupFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginPopupContextWindow() ) {}
```

---

## beginPopupModal() {: #infinity.ui.beginPopupModal_function .doc-function}

//TODO

Signature:
```
beginPopupModal( name: string, open?: boolean, flags?: infinity.ui.windowFlags ): boolean
```

Parameters:

- name: `string`
  >//TODO

- open: `boolean`, optional
  >//TODO

- flags: `infinity.ui.windowFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginPopupModal(name) ) {}
```

---

## beginTabBar() {: #infinity.ui.beginTabBar_function .doc-function}

//TODO

Signature:
```
beginTabBar( id: string, flags?: infinity.ui.tabBarFlags ): boolean
```

Parameters:

- id: `string`
  >//TODO

- flags: `infinity.ui.tabBarFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginTabBar(id) ) {}
```

---

## beginTabItem() {: #infinity.ui.beginTabItem_function .doc-function}

//TODO

Signature:
```
beginTabItem( label: string, open?: boolean, flags?: infinity.ui.tabItemFlags ): boolean
```

Parameters:

- label: `string`
  >//TODO

- open: `boolean`, optional
  >//TODO

- flags: `infinity.ui.tabItemFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginTabItem(label) ) {}
```

---

## beginTable() {: #infinity.ui.beginTable_function .doc-function}

//TODO

Signature:
```
beginTable( id: string, column: number, flags?: infinity.ui.tableFlags, outerSize?: infinity.ui.vec2, innerWidth?: number ): boolean
```

Parameters:

- id: `string`
  >//TODO

- column: `number`
  >//TODO

- flags: `infinity.ui.tableFlags`, optional
  >//TODO

- outerSize: `infinity.ui.vec2`, optional
  >//TODO

- innerWidth: `number`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.beginTable(id, column) ) {}
```

---

## beginTooltip() {: #infinity.ui.beginTooltip_function .doc-function}

//TODO

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

//TODO

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

//TODO

Signature:
```
bulletText( text: string ): void
```

Parameters:

- text: `string`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.bulletText(text);
```

---

## button() {: #infinity.ui.button_function .doc-function}

//TODO

Signature:
```
button( label: string, size?: infinity.ui.vec2 ): boolean
```

Parameters:

- label: `string`
  >//TODO

- size: `infinity.ui.vec2`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.button(label) ) {}
```

---

## calcItemWidth() {: #infinity.ui.calcItemWidth_function .doc-function}

//TODO

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

//TODO

Signature:
```
calcTextSize( text: string, wrapWidth?: number ): infinity.ui.vec2
```

Parameters:

- text: `string`
  >//TODO

- wrapWidth: `number`, optional
  >//TODO


Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.calcTextSize(text);
```

---

## checkbox() {: #infinity.ui.checkbox_function .doc-function}

//TODO

Signature:
```
checkbox( label: string, checked: boolean ): boolean
```

Parameters:

- label: `string`
  >//TODO

- checked: `boolean`
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.checkbox(label, checked) ) {}
```

---

## closeCurrentPopup() {: #infinity.ui.closeCurrentPopup_function .doc-function}

//TODO

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

//TODO

Signature:
```
collapsingHeader( label: string, visible: boolean, flags?: infinity.ui.treeNodeFlags ): infinity.ui.collapsingHeaderStates
```

Parameters:

- label: `string`
  >//TODO

- visible: `boolean`
  >//TODO

- flags: `infinity.ui.treeNodeFlags`, optional
  >//TODO


Return type: `infinity.ui.collapsingHeaderStates`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.collapsingHeader(label, visible);
```

---

## collapsingHeader() {: #infinity.ui.collapsingHeader_function .doc-function}

//TODO

Signature:
```
collapsingHeader( label: string, flags?: infinity.ui.treeNodeFlags ): infinity.ui.collapsingHeaderStates
```

Parameters:

- label: `string`
  >//TODO

- flags: `infinity.ui.treeNodeFlags`, optional
  >//TODO


Return type: `infinity.ui.collapsingHeaderStates`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.collapsingHeader(label);
```

---

## colorButton() {: #infinity.ui.colorButton_function .doc-function}

//TODO

Signature:
```
colorButton( id: string, color: infinity.ui.color, flags?: infinity.ui.colorEditFlags, size?: infinity.ui.vec2 ): boolean
```

Parameters:

- id: `string`
  >//TODO

- color: `infinity.ui.color`
  >//TODO

- flags: `infinity.ui.colorEditFlags`, optional
  >//TODO

- size: `infinity.ui.vec2`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.colorButton(id, color) ) {}
```

---

## colorConvertFloat4ToU32() {: #infinity.ui.colorConvertFloat4ToU32_function .doc-function}

//TODO

Signature:
```
colorConvertFloat4ToU32( color: infinity.ui.color ): number
```

Parameters:

- color: `infinity.ui.color`
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.colorConvertFloat4ToU32(color);
```

---

## colorConvertU32ToFloat4() {: #infinity.ui.colorConvertU32ToFloat4_function .doc-function}

//TODO

Signature:
```
colorConvertU32ToFloat4( color: number ): infinity.ui.color
```

Parameters:

- color: `number`
  >//TODO


Return type: `infinity.ui.color`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.colorConvertU32ToFloat4(color);
```

---

## colorEdit() {: #infinity.ui.colorEdit_function .doc-function}

//TODO

Signature:
```
colorEdit( label: string, color: infinity.ui.color, flags?: infinity.ui.colorEditFlags ): infinity.ui.color
```

Parameters:

- label: `string`
  >//TODO

- color: `infinity.ui.color`
  >//TODO

- flags: `infinity.ui.colorEditFlags`, optional
  >//TODO


Return type: `infinity.ui.color`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.colorEdit(label, color);
```

---

## colorPicker() {: #infinity.ui.colorPicker_function .doc-function}

//TODO

Signature:
```
colorPicker( label: string, color: infinity.ui.color, flags?: infinity.ui.colorEditFlags ): infinity.ui.color
```

Parameters:

- label: `string`
  >//TODO

- color: `infinity.ui.color`
  >//TODO

- flags: `infinity.ui.colorEditFlags`, optional
  >//TODO


Return type: `infinity.ui.color`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.colorPicker(label, color);
```

---

## combo() {: #infinity.ui.combo_function .doc-function}

//TODO

Signature:
```
combo( label: string, currentItem: number, items: infinity.ui.stringArray, heightInItems?: number ): number
```

Parameters:

- label: `string`
  >//TODO

- currentItem: `number`
  >//TODO

- items: `infinity.ui.stringArray`
  >//TODO

- heightInItems: `number`, optional
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.combo(label, currentItem, items);
```

---

## dragFloat() {: #infinity.ui.dragFloat_function .doc-function}

//TODO

Signature:
```
dragFloat( label: string, v: number, speed?: number, vmin?: number, vmax?: number, format?: string, flags?: infinity.ui.sliderFlags ): number
```

Parameters:

- label: `string`
  >//TODO

- v: `number`
  >//TODO

- speed: `number`, optional
  >//TODO

- vmin: `number`, optional
  >//TODO

- vmax: `number`, optional
  >//TODO

- format: `string`, optional
  >//TODO

- flags: `infinity.ui.sliderFlags`, optional
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.dragFloat(label, v);
```

---

## dragInt() {: #infinity.ui.dragInt_function .doc-function}

//TODO

Signature:
```
dragInt( label: string, v: number, speed?: number, vmin?: number, vmax?: number, format?: string, flags?: infinity.ui.sliderFlags ): number
```

Parameters:

- label: `string`
  >//TODO

- v: `number`
  >//TODO

- speed: `number`, optional
  >//TODO

- vmin: `number`, optional
  >//TODO

- vmax: `number`, optional
  >//TODO

- format: `string`, optional
  >//TODO

- flags: `infinity.ui.sliderFlags`, optional
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.dragInt(label, v);
```

---

## dummy() {: #infinity.ui.dummy_function .doc-function}

//TODO

Signature:
```
dummy( size: infinity.ui.vec2 ): void
```

Parameters:

- size: `infinity.ui.vec2`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.dummy(size);
```

---

## end() {: #infinity.ui.end_function .doc-function}

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

Signature:
```
freeTexture( texture: number ): boolean
```

Parameters:

- texture: `number`
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.freeTexture(texture) ) {}
```

---

## getClipboardText() {: #infinity.ui.getClipboardText_function .doc-function}

//TODO

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

//TODO

Signature:
```
getColor( idx: infinity.ui.colorTypes, alphaMul: number ): number
```

Parameters:

- idx: `infinity.ui.colorTypes`
  >//TODO

- alphaMul: `number`
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getColor(idx, alphaMul);
```

---

## getColor() {: #infinity.ui.getColor_function .doc-function}

//TODO

Signature:
```
getColor( col: number ): number
```

Parameters:

- col: `number`
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getColor(col);
```

---

## getColor() {: #infinity.ui.getColor_function .doc-function}

//TODO

Signature:
```
getColor( col: infinity.ui.color ): number
```

Parameters:

- col: `infinity.ui.color`
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getColor(col);
```

---

## getContentRegionAvail() {: #infinity.ui.getContentRegionAvail_function .doc-function}

//TODO

Signature:
```
getContentRegionAvail(): infinity.ui.vec2
```

Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getContentRegionAvail();
```

---

## getContentRegionMax() {: #infinity.ui.getContentRegionMax_function .doc-function}

//TODO

Signature:
```
getContentRegionMax(): infinity.ui.vec2
```

Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getContentRegionMax();
```

---

## getCursorPos() {: #infinity.ui.getCursorPos_function .doc-function}

//TODO

Signature:
```
getCursorPos(): infinity.ui.vec2
```

Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getCursorPos();
```

---

## getCursorPosX() {: #infinity.ui.getCursorPosX_function .doc-function}

//TODO

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

//TODO

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

//TODO

Signature:
```
getCursorScreenPos(): infinity.ui.vec2
```

Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getCursorScreenPos();
```

---

## getCursorStartPos() {: #infinity.ui.getCursorStartPos_function .doc-function}

//TODO

Signature:
```
getCursorStartPos(): infinity.ui.vec2
```

Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getCursorStartPos();
```

---

## getFont() {: #infinity.ui.getFont_function .doc-function}

//TODO

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

//TODO

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

//TODO

Signature:
```
getFontTexUvWhitePixel(): infinity.ui.vec2
```

Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getFontTexUvWhitePixel();
```

---

## getFrameCount() {: #infinity.ui.getFrameCount_function .doc-function}

//TODO

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

//TODO

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

//TODO

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

//TODO

Signature:
```
getId( id: string ): number
```

Parameters:

- id: `string`
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getId(id);
```

---

## getId() {: #infinity.ui.getId_function .doc-function}

//TODO

Signature:
```
getId( idBegin: string, idEnd: string ): number
```

Parameters:

- idBegin: `string`
  >//TODO

- idEnd: `string`
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getId(idBegin, idEnd);
```

---

## getItemRectMax() {: #infinity.ui.getItemRectMax_function .doc-function}

//TODO

Signature:
```
getItemRectMax(): infinity.ui.vec2
```

Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getItemRectMax();
```

---

## getItemRectMin() {: #infinity.ui.getItemRectMin_function .doc-function}

//TODO

Signature:
```
getItemRectMin(): infinity.ui.vec2
```

Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getItemRectMin();
```

---

## getItemRectSize() {: #infinity.ui.getItemRectSize_function .doc-function}

//TODO

Signature:
```
getItemRectSize(): infinity.ui.vec2
```

Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getItemRectSize();
```

---

## getKeyName() {: #infinity.ui.getKeyName_function .doc-function}

//TODO

Signature:
```
getKeyName( key: infinity.ui.keys ): string
```

Parameters:

- key: `infinity.ui.keys`
  >//TODO


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.getKeyName(key);
```

---

## getKeyPressedAmount() {: #infinity.ui.getKeyPressedAmount_function .doc-function}

//TODO

Signature:
```
getKeyPressedAmount( key: infinity.ui.keys, delay: number, rate: number ): number
```

Parameters:

- key: `infinity.ui.keys`
  >//TODO

- delay: `number`
  >//TODO

- rate: `number`
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getKeyPressedAmount(key, delay, rate);
```

---

## getMouseClickedCount() {: #infinity.ui.getMouseClickedCount_function .doc-function}

//TODO

Signature:
```
getMouseClickedCount( button: infinity.ui.mouseButtons ): number
```

Parameters:

- button: `infinity.ui.mouseButtons`
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.getMouseClickedCount(button);
```

---

## getMouseCursor() {: #infinity.ui.getMouseCursor_function .doc-function}

//TODO

Signature:
```
getMouseCursor(): infinity.ui.mouseCursors
```

Return type: `infinity.ui.mouseCursors`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getMouseCursor();
```

---

## getMouseDragDelta() {: #infinity.ui.getMouseDragDelta_function .doc-function}

//TODO

Signature:
```
getMouseDragDelta( button?: infinity.ui.mouseButtons, lockThreshold?: number ): infinity.ui.vec2
```

Parameters:

- button: `infinity.ui.mouseButtons`, optional
  >//TODO

- lockThreshold: `number`, optional
  >//TODO


Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getMouseDragDelta();
```

---

## getMousePos() {: #infinity.ui.getMousePos_function .doc-function}

//TODO

Signature:
```
getMousePos(): infinity.ui.vec2
```

Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getMousePos();
```

---

## getMousePosOnOpeningCurrentPopup() {: #infinity.ui.getMousePosOnOpeningCurrentPopup_function .doc-function}

//TODO

Signature:
```
getMousePosOnOpeningCurrentPopup(): infinity.ui.vec2
```

Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getMousePosOnOpeningCurrentPopup();
```

---

## getStyleColor() {: #infinity.ui.getStyleColor_function .doc-function}

//TODO

Signature:
```
getStyleColor( idx: infinity.ui.colorTypes ): infinity.ui.color
```

Parameters:

- idx: `infinity.ui.colorTypes`
  >//TODO


Return type: `infinity.ui.color`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getStyleColor(idx);
```

---

## getStyleColorName() {: #infinity.ui.getStyleColorName_function .doc-function}

//TODO

Signature:
```
getStyleColorName( index: infinity.ui.colorTypes ): string
```

Parameters:

- index: `infinity.ui.colorTypes`
  >//TODO


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.getStyleColorName(index);
```

---

## getTextLineHeight() {: #infinity.ui.getTextLineHeight_function .doc-function}

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

Signature:
```
getWindowContentRegionMax(): infinity.ui.vec2
```

Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getWindowContentRegionMax();
```

---

## getWindowContentRegionMin() {: #infinity.ui.getWindowContentRegionMin_function .doc-function}

//TODO

Signature:
```
getWindowContentRegionMin(): infinity.ui.vec2
```

Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getWindowContentRegionMin();
```

---

## getWindowHeight() {: #infinity.ui.getWindowHeight_function .doc-function}

//TODO

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

//TODO

Signature:
```
getWindowPos(): infinity.ui.vec2
```

Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getWindowPos();
```

---

## getWindowSize() {: #infinity.ui.getWindowSize_function .doc-function}

//TODO

Signature:
```
getWindowSize(): infinity.ui.vec2
```

Return type: `infinity.ui.vec2`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.getWindowSize();
```

---

## getWindowWidth() {: #infinity.ui.getWindowWidth_function .doc-function}

//TODO

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

//TODO

Signature:
```
image( texture: number, size: infinity.ui.vec2, uv1?: infinity.ui.vec2, uv2?: infinity.ui.vec2, tintCol?: infinity.ui.color, borderCol?: infinity.ui.color ): void
```

Parameters:

- texture: `number`
  >//TODO

- size: `infinity.ui.vec2`
  >//TODO

- uv1: `infinity.ui.vec2`, optional
  >//TODO

- uv2: `infinity.ui.vec2`, optional
  >//TODO

- tintCol: `infinity.ui.color`, optional
  >//TODO

- borderCol: `infinity.ui.color`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.image(texture, size);
```

---

## imageButton() {: #infinity.ui.imageButton_function .doc-function}

//TODO

Signature:
```
imageButton( texture: number, size: infinity.ui.vec2, uv1?: infinity.ui.vec2, uv2?: infinity.ui.vec2, padding?: number, bgCol?: infinity.ui.color, tintCol?: infinity.ui.color ): boolean
```

Parameters:

- texture: `number`
  >//TODO

- size: `infinity.ui.vec2`
  >//TODO

- uv1: `infinity.ui.vec2`, optional
  >//TODO

- uv2: `infinity.ui.vec2`, optional
  >//TODO

- padding: `number`, optional
  >//TODO

- bgCol: `infinity.ui.color`, optional
  >//TODO

- tintCol: `infinity.ui.color`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.imageButton(texture, size) ) {}
```

---

## indent() {: #infinity.ui.indent_function .doc-function}

//TODO

Signature:
```
indent( width?: number ): void
```

Parameters:

- width: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.indent();
```

---

## init() {: #infinity.ui.init_function .doc-function}

//TODO

Signature:
```
init( caption: string, x: number, y: number, width: number, height: number, flags?: infinity.ui.initFlags ): boolean
```

Parameters:

- caption: `string`
  >//TODO

- x: `number`
  >//TODO

- y: `number`
  >//TODO

- width: `number`
  >//TODO

- height: `number`
  >//TODO

- flags: `infinity.ui.initFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.init(caption, x, y, width, height) ) {}
```

---

## inputFloat() {: #infinity.ui.inputFloat_function .doc-function}

//TODO

Signature:
```
inputFloat( label: string, v: number, step?: number, stepFast?: number, format?: string, flags?: infinity.ui.inputTextFlags ): number
```

Parameters:

- label: `string`
  >//TODO

- v: `number`
  >//TODO

- step: `number`, optional
  >//TODO

- stepFast: `number`, optional
  >//TODO

- format: `string`, optional
  >//TODO

- flags: `infinity.ui.inputTextFlags`, optional
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.inputFloat(label, v);
```

---

## inputInt() {: #infinity.ui.inputInt_function .doc-function}

//TODO

Signature:
```
inputInt( label: string, v: number, step?: number, stepFast?: number, flags?: infinity.ui.inputTextFlags ): number
```

Parameters:

- label: `string`
  >//TODO

- v: `number`
  >//TODO

- step: `number`, optional
  >//TODO

- stepFast: `number`, optional
  >//TODO

- flags: `infinity.ui.inputTextFlags`, optional
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.inputInt(label, v);
```

---

## inputText() {: #infinity.ui.inputText_function .doc-function}

//TODO

Signature:
```
inputText( label: string, text: string, flags?: infinity.ui.inputTextFlags ): string
```

Parameters:

- label: `string`
  >//TODO

- text: `string`
  >//TODO

- flags: `infinity.ui.inputTextFlags`, optional
  >//TODO


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.inputText(label, text);
```

---

## inputTextMultiline() {: #infinity.ui.inputTextMultiline_function .doc-function}

//TODO

Signature:
```
inputTextMultiline( label: string, text: string, size?: infinity.ui.vec2, flags?: infinity.ui.inputTextFlags ): string
```

Parameters:

- label: `string`
  >//TODO

- text: `string`
  >//TODO

- size: `infinity.ui.vec2`, optional
  >//TODO

- flags: `infinity.ui.inputTextFlags`, optional
  >//TODO


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.inputTextMultiline(label, text);
```

---

## inputTextWithHint() {: #infinity.ui.inputTextWithHint_function .doc-function}

//TODO

Signature:
```
inputTextWithHint( label: string, hint: string, text: string, flags?: infinity.ui.inputTextFlags ): string
```

Parameters:

- label: `string`
  >//TODO

- hint: `string`
  >//TODO

- text: `string`
  >//TODO

- flags: `infinity.ui.inputTextFlags`, optional
  >//TODO


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.inputTextWithHint(label, hint, text);
```

---

## invisibleButton() {: #infinity.ui.invisibleButton_function .doc-function}

//TODO

Signature:
```
invisibleButton( id: string, size: infinity.ui.vec2, flags?: infinity.ui.buttonFlags ): boolean
```

Parameters:

- id: `string`
  >//TODO

- size: `infinity.ui.vec2`
  >//TODO

- flags: `infinity.ui.buttonFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.invisibleButton(id, size) ) {}
```

---

## isAnyItemActive() {: #infinity.ui.isAnyItemActive_function .doc-function}

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

Signature:
```
isItemClicked( button?: infinity.ui.mouseButtons ): boolean
```

Parameters:

- button: `infinity.ui.mouseButtons`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isItemClicked() ) {}
```

---

## isItemDeactivated() {: #infinity.ui.isItemDeactivated_function .doc-function}

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

Signature:
```
isItemHovered( flags?: infinity.ui.hoveredFlags ): boolean
```

Parameters:

- flags: `infinity.ui.hoveredFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isItemHovered() ) {}
```

---

## isItemToggledOpen() {: #infinity.ui.isItemToggledOpen_function .doc-function}

//TODO

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

//TODO

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

//TODO

Signature:
```
isKeyDown( key: infinity.ui.keys ): boolean
```

Parameters:

- key: `infinity.ui.keys`
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isKeyDown(key) ) {}
```

---

## isKeyPressed() {: #infinity.ui.isKeyPressed_function .doc-function}

//TODO

Signature:
```
isKeyPressed( key: infinity.ui.keys, repeat?: boolean ): boolean
```

Parameters:

- key: `infinity.ui.keys`
  >//TODO

- repeat: `boolean`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isKeyPressed(key) ) {}
```

---

## isKeyReleased() {: #infinity.ui.isKeyReleased_function .doc-function}

//TODO

Signature:
```
isKeyReleased( key: infinity.ui.keys ): boolean
```

Parameters:

- key: `infinity.ui.keys`
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isKeyReleased(key) ) {}
```

---

## isMouseClicked() {: #infinity.ui.isMouseClicked_function .doc-function}

//TODO

Signature:
```
isMouseClicked( button: infinity.ui.mouseButtons, repeat?: boolean ): boolean
```

Parameters:

- button: `infinity.ui.mouseButtons`
  >//TODO

- repeat: `boolean`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isMouseClicked(button) ) {}
```

---

## isMouseDoubleClicked() {: #infinity.ui.isMouseDoubleClicked_function .doc-function}

//TODO

Signature:
```
isMouseDoubleClicked( button: infinity.ui.mouseButtons ): boolean
```

Parameters:

- button: `infinity.ui.mouseButtons`
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isMouseDoubleClicked(button) ) {}
```

---

## isMouseDown() {: #infinity.ui.isMouseDown_function .doc-function}

//TODO

Signature:
```
isMouseDown( button: infinity.ui.mouseButtons ): boolean
```

Parameters:

- button: `infinity.ui.mouseButtons`
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isMouseDown(button) ) {}
```

---

## isMouseDragging() {: #infinity.ui.isMouseDragging_function .doc-function}

//TODO

Signature:
```
isMouseDragging( button: infinity.ui.mouseButtons, lockThreshold?: number ): boolean
```

Parameters:

- button: `infinity.ui.mouseButtons`
  >//TODO

- lockThreshold: `number`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isMouseDragging(button) ) {}
```

---

## isMouseHoveringRect() {: #infinity.ui.isMouseHoveringRect_function .doc-function}

//TODO

Signature:
```
isMouseHoveringRect( topLeft: infinity.ui.vec2, bottomRight: infinity.ui.vec2, clip?: boolean ): boolean
```

Parameters:

- topLeft: `infinity.ui.vec2`
  >//TODO

- bottomRight: `infinity.ui.vec2`
  >//TODO

- clip: `boolean`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isMouseHoveringRect(topLeft, bottomRight) ) {}
```

---

## isMousePosValid() {: #infinity.ui.isMousePosValid_function .doc-function}

//TODO

Signature:
```
isMousePosValid( position?: infinity.ui.vec2 ): boolean
```

Parameters:

- position: `infinity.ui.vec2`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isMousePosValid() ) {}
```

---

## isMouseReleased() {: #infinity.ui.isMouseReleased_function .doc-function}

//TODO

Signature:
```
isMouseReleased( button: infinity.ui.mouseButtons ): boolean
```

Parameters:

- button: `infinity.ui.mouseButtons`
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isMouseReleased(button) ) {}
```

---

## isPopupOpen() {: #infinity.ui.isPopupOpen_function .doc-function}

//TODO

Signature:
```
isPopupOpen( id: string, flags?: infinity.ui.popupFlags ): boolean
```

Parameters:

- id: `string`
  >//TODO

- flags: `infinity.ui.popupFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isPopupOpen(id) ) {}
```

---

## isRectVisible() {: #infinity.ui.isRectVisible_function .doc-function}

//TODO

Signature:
```
isRectVisible( topLeft: infinity.ui.vec2, bottomRight: infinity.ui.vec2 ): boolean
```

Parameters:

- topLeft: `infinity.ui.vec2`
  >//TODO

- bottomRight: `infinity.ui.vec2`
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isRectVisible(topLeft, bottomRight) ) {}
```

---

## isWindowAppearing() {: #infinity.ui.isWindowAppearing_function .doc-function}

//TODO

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

//TODO

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

//TODO

Signature:
```
isWindowFocused( flags?: infinity.ui.focusedFlags ): boolean
```

Parameters:

- flags: `infinity.ui.focusedFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isWindowFocused() ) {}
```

---

## isWindowHovered() {: #infinity.ui.isWindowHovered_function .doc-function}

//TODO

Signature:
```
isWindowHovered( flags?: infinity.ui.hoveredFlags ): boolean
```

Parameters:

- flags: `infinity.ui.hoveredFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.isWindowHovered() ) {}
```

---

## labelText() {: #infinity.ui.labelText_function .doc-function}

//TODO

Signature:
```
labelText( label: string, text: string ): void
```

Parameters:

- label: `string`
  >//TODO

- text: `string`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.labelText(label, text);
```

---

## listBox() {: #infinity.ui.listBox_function .doc-function}

//TODO

Signature:
```
listBox( label: string, currentItem: number, items: infinity.ui.stringArray, heightInItems?: number ): number
```

Parameters:

- label: `string`
  >//TODO

- currentItem: `number`
  >//TODO

- items: `infinity.ui.stringArray`
  >//TODO

- heightInItems: `number`, optional
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.listBox(label, currentItem, items);
```

---

## loadTextureFromFile() {: #infinity.ui.loadTextureFromFile_function .doc-function}

//TODO

Signature:
```
loadTextureFromFile( fileName: string ): number
```

Parameters:

- fileName: `string`
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.loadTextureFromFile(fileName);
```

---

## loadTextureFromImage() {: #infinity.ui.loadTextureFromImage_function .doc-function}

//TODO

Signature:
```
loadTextureFromImage( image: infinity.image ): number
```

Parameters:

- image: `infinity.image`
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.loadTextureFromImage(image);
```

---

## menuItem() {: #infinity.ui.menuItem_function .doc-function}

//TODO

Signature:
```
menuItem( label: string, shortCut?: string, selected?: boolean, enabled?: boolean ): boolean
```

Parameters:

- label: `string`
  >//TODO

- shortCut: `string`, optional
  >//TODO

- selected: `boolean`, optional
  >//TODO

- enabled: `boolean`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.menuItem(label) ) {}
```

---

## mergeFontFromFile() {: #infinity.ui.mergeFontFromFile_function .doc-function}

//TODO

Signature:
```
mergeFontFromFile( fileName: string, size: number, monoSpace?: boolean, opacity?: number, range?: infinity.ui.numberArray ): number
```

Parameters:

- fileName: `string`
  >//TODO

- size: `number`
  >//TODO

- monoSpace: `boolean`, optional
  >//TODO

- opacity: `number`, optional
  >//TODO

- range: `infinity.ui.numberArray`, optional
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.mergeFontFromFile(fileName, size);
```

---

## messageBox() {: #infinity.ui.messageBox_function .doc-function}

//TODO

Signature:
```
messageBox( title: string, message: string, dialogType?: infinity.ui.dialogTypes, iconType?: infinity.ui.iconTypes, defaultButton?: number ): number
```

Parameters:

- title: `string`
  >//TODO

- message: `string`
  >//TODO

- dialogType: `infinity.ui.dialogTypes`, optional
  >//TODO

- iconType: `infinity.ui.iconTypes`, optional
  >//TODO

- defaultButton: `number`, optional
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.messageBox(title, message);
```

---

## newFrame() {: #infinity.ui.newFrame_function .doc-function}

//TODO

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

//TODO

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

//TODO

Signature:
```
notifyPopup( title: string, message: string, iconType?: infinity.ui.iconTypes ): number
```

Parameters:

- title: `string`
  >//TODO

- message: `string`
  >//TODO

- iconType: `infinity.ui.iconTypes`, optional
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.notifyPopup(title, message);
```

---

## openFileDialog() {: #infinity.ui.openFileDialog_function .doc-function}

//TODO

Signature:
```
openFileDialog( title: string, fileName?: string, filter?: infinity.ui.stringArray, filterDescription?: string, allowMultipleSelected?: boolean ): string
```

Parameters:

- title: `string`
  >//TODO

- fileName: `string`, optional
  >//TODO

- filter: `infinity.ui.stringArray`, optional
  >//TODO

- filterDescription: `string`, optional
  >//TODO

- allowMultipleSelected: `boolean`, optional
  >//TODO


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.openFileDialog(title);
```

---

## openPopup() {: #infinity.ui.openPopup_function .doc-function}

//TODO

Signature:
```
openPopup( id: string, flags?: infinity.ui.popupFlags ): void
```

Parameters:

- id: `string`
  >//TODO

- flags: `infinity.ui.popupFlags`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.openPopup(id);
```

---

## plotHistogram() {: #infinity.ui.plotHistogram_function .doc-function}

//TODO

Signature:
```
plotHistogram( label: string, values: infinity.ui.numberArray, offset?: number, overlayText?: string, scaleMin?: number, scaleMax?: number, size?: infinity.ui.vec2 ): void
```

Parameters:

- label: `string`
  >//TODO

- values: `infinity.ui.numberArray`
  >//TODO

- offset: `number`, optional
  >//TODO

- overlayText: `string`, optional
  >//TODO

- scaleMin: `number`, optional
  >//TODO

- scaleMax: `number`, optional
  >//TODO

- size: `infinity.ui.vec2`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.plotHistogram(label, values);
```

---

## plotLines() {: #infinity.ui.plotLines_function .doc-function}

//TODO

Signature:
```
plotLines( label: string, values: infinity.ui.numberArray, offset?: number, overlayText?: string, scaleMin?: number, scaleMax?: number, size?: infinity.ui.vec2 ): void
```

Parameters:

- label: `string`
  >//TODO

- values: `infinity.ui.numberArray`
  >//TODO

- offset: `number`, optional
  >//TODO

- overlayText: `string`, optional
  >//TODO

- scaleMin: `number`, optional
  >//TODO

- scaleMax: `number`, optional
  >//TODO

- size: `infinity.ui.vec2`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.plotLines(label, values);
```

---

## popAllowKeyboardFocus() {: #infinity.ui.popAllowKeyboardFocus_function .doc-function}

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

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

//TODO

Signature:
```
popStyleColor( count?: number ): void
```

Parameters:

- count: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.popStyleColor();
```

---

## popStyleVar() {: #infinity.ui.popStyleVar_function .doc-function}

//TODO

Signature:
```
popStyleVar( count?: number ): void
```

Parameters:

- count: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.popStyleVar();
```

---

## popTextWrapPos() {: #infinity.ui.popTextWrapPos_function .doc-function}

//TODO

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

//TODO

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

//TODO

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

//TODO

Signature:
```
progressBar( fraction: number, size?: infinity.ui.vec2, overlay?: string ): void
```

Parameters:

- fraction: `number`
  >//TODO

- size: `infinity.ui.vec2`, optional
  >//TODO

- overlay: `string`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.progressBar(fraction);
```

---

## pushAllowKeyboardFocus() {: #infinity.ui.pushAllowKeyboardFocus_function .doc-function}

//TODO

Signature:
```
pushAllowKeyboardFocus( allowKeyboardFocus: boolean ): void
```

Parameters:

- allowKeyboardFocus: `boolean`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushAllowKeyboardFocus(allowKeyboardFocus);
```

---

## pushButtonRepeat() {: #infinity.ui.pushButtonRepeat_function .doc-function}

//TODO

Signature:
```
pushButtonRepeat( repeat: boolean ): void
```

Parameters:

- repeat: `boolean`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushButtonRepeat(repeat);
```

---

## pushClipRect() {: #infinity.ui.pushClipRect_function .doc-function}

//TODO

Signature:
```
pushClipRect( topLeft: infinity.ui.vec2, bottomRight: infinity.ui.vec2, intersectWithCurrentClipRect: boolean ): void
```

Parameters:

- topLeft: `infinity.ui.vec2`
  >//TODO

- bottomRight: `infinity.ui.vec2`
  >//TODO

- intersectWithCurrentClipRect: `boolean`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushClipRect(topLeft, bottomRight, intersectWithCurrentClipRect);
```

---

## pushClipRectFullScreen() {: #infinity.ui.pushClipRectFullScreen_function .doc-function}

//TODO

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

//TODO

Signature:
```
pushClipRectRender( p1: infinity.ui.vec2, p2: infinity.ui.vec2, intersectWithCurrentClipRect: boolean ): void
```

Parameters:

- p1: `infinity.ui.vec2`
  >//TODO

- p2: `infinity.ui.vec2`
  >//TODO

- intersectWithCurrentClipRect: `boolean`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushClipRectRender(p1, p2, intersectWithCurrentClipRect);
```

---

## pushFont() {: #infinity.ui.pushFont_function .doc-function}

//TODO

Signature:
```
pushFont( font: number ): void
```

Parameters:

- font: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushFont(font);
```

---

## pushId() {: #infinity.ui.pushId_function .doc-function}

//TODO

Signature:
```
pushId( id: number ): void
```

Parameters:

- id: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushId(id);
```

---

## pushId() {: #infinity.ui.pushId_function .doc-function}

//TODO

Signature:
```
pushId( idBegin: string, idEnd: string ): void
```

Parameters:

- idBegin: `string`
  >//TODO

- idEnd: `string`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushId(idBegin, idEnd);
```

---

## pushId() {: #infinity.ui.pushId_function .doc-function}

//TODO

Signature:
```
pushId( id: string ): void
```

Parameters:

- id: `string`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushId(id);
```

---

## pushItemWidth() {: #infinity.ui.pushItemWidth_function .doc-function}

//TODO

Signature:
```
pushItemWidth( width: number ): void
```

Parameters:

- width: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushItemWidth(width);
```

---

## pushStyleColor() {: #infinity.ui.pushStyleColor_function .doc-function}

//TODO

Signature:
```
pushStyleColor( idx: infinity.ui.colorTypes, col: number ): void
```

Parameters:

- idx: `infinity.ui.colorTypes`
  >//TODO

- col: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushStyleColor(idx, col);
```

---

## pushStyleColor() {: #infinity.ui.pushStyleColor_function .doc-function}

//TODO

Signature:
```
pushStyleColor( idx: infinity.ui.colorTypes, col: infinity.ui.color ): void
```

Parameters:

- idx: `infinity.ui.colorTypes`
  >//TODO

- col: `infinity.ui.color`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushStyleColor(idx, col);
```

---

## pushStyleVar() {: #infinity.ui.pushStyleVar_function .doc-function}

//TODO

Signature:
```
pushStyleVar( idx: infinity.ui.styleVars, val: number ): void
```

Parameters:

- idx: `infinity.ui.styleVars`
  >//TODO

- val: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushStyleVar(idx, val);
```

---

## pushStyleVar() {: #infinity.ui.pushStyleVar_function .doc-function}

//TODO

Signature:
```
pushStyleVar( idx: infinity.ui.styleVars, val: infinity.ui.vec2 ): void
```

Parameters:

- idx: `infinity.ui.styleVars`
  >//TODO

- val: `infinity.ui.vec2`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushStyleVar(idx, val);
```

---

## pushTextWrapPos() {: #infinity.ui.pushTextWrapPos_function .doc-function}

//TODO

Signature:
```
pushTextWrapPos( wrapPos?: number ): void
```

Parameters:

- wrapPos: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushTextWrapPos();
```

---

## pushTextureId() {: #infinity.ui.pushTextureId_function .doc-function}

//TODO

Signature:
```
pushTextureId( texture: number ): void
```

Parameters:

- texture: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.pushTextureId(texture);
```

---

## radioButton() {: #infinity.ui.radioButton_function .doc-function}

//TODO

Signature:
```
radioButton( label: string, active: boolean ): boolean
```

Parameters:

- label: `string`
  >//TODO

- active: `boolean`
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.radioButton(label, active) ) {}
```

---

## render() {: #infinity.ui.render_function .doc-function}

//TODO

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

//TODO

Signature:
```
resetMouseDragDelta( button?: infinity.ui.mouseButtons ): void
```

Parameters:

- button: `infinity.ui.mouseButtons`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.resetMouseDragDelta();
```

---

## sameLine() {: #infinity.ui.sameLine_function .doc-function}

//TODO

Signature:
```
sameLine( offset?: number, spacing?: number ): void
```

Parameters:

- offset: `number`, optional
  >//TODO

- spacing: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.sameLine();
```

---

## saveFileDialog() {: #infinity.ui.saveFileDialog_function .doc-function}

//TODO

Signature:
```
saveFileDialog( title: string, fileName?: string, filter?: infinity.ui.stringArray, filterDescription?: string ): string
```

Parameters:

- title: `string`
  >//TODO

- fileName: `string`, optional
  >//TODO

- filter: `infinity.ui.stringArray`, optional
  >//TODO

- filterDescription: `string`, optional
  >//TODO


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.saveFileDialog(title);
```

---

## selectFolderDialog() {: #infinity.ui.selectFolderDialog_function .doc-function}

//TODO

Signature:
```
selectFolderDialog( title: string, path?: string ): string
```

Parameters:

- title: `string`
  >//TODO

- path: `string`, optional
  >//TODO


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.selectFolderDialog(title);
```

---

## selectable() {: #infinity.ui.selectable_function .doc-function}

//TODO

Signature:
```
selectable( label: string, selected?: boolean, flags?: infinity.ui.selectableFlags, size?: infinity.ui.vec2 ): boolean
```

Parameters:

- label: `string`
  >//TODO

- selected: `boolean`, optional
  >//TODO

- flags: `infinity.ui.selectableFlags`, optional
  >//TODO

- size: `infinity.ui.vec2`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.selectable(label) ) {}
```

---

## separator() {: #infinity.ui.separator_function .doc-function}

//TODO

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

//TODO

Signature:
```
setClipboardText( text: string ): void
```

Parameters:

- text: `string`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setClipboardText(text);
```

---

## setColorEditOptions() {: #infinity.ui.setColorEditOptions_function .doc-function}

//TODO

Signature:
```
setColorEditOptions( flags: infinity.ui.colorEditFlags ): void
```

Parameters:

- flags: `infinity.ui.colorEditFlags`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setColorEditOptions(flags);
```

---

## setCursorPos() {: #infinity.ui.setCursorPos_function .doc-function}

//TODO

Signature:
```
setCursorPos( position: infinity.ui.vec2 ): void
```

Parameters:

- position: `infinity.ui.vec2`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setCursorPos(position);
```

---

## setCursorPosX() {: #infinity.ui.setCursorPosX_function .doc-function}

//TODO

Signature:
```
setCursorPosX( x: number ): void
```

Parameters:

- x: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setCursorPosX(x);
```

---

## setCursorPosY() {: #infinity.ui.setCursorPosY_function .doc-function}

//TODO

Signature:
```
setCursorPosY( y: number ): void
```

Parameters:

- y: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setCursorPosY(y);
```

---

## setCursorScreenPos() {: #infinity.ui.setCursorScreenPos_function .doc-function}

//TODO

Signature:
```
setCursorScreenPos( position: infinity.ui.vec2 ): void
```

Parameters:

- position: `infinity.ui.vec2`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setCursorScreenPos(position);
```

---

## setDefaultFont() {: #infinity.ui.setDefaultFont_function .doc-function}

//TODO

Signature:
```
setDefaultFont( font: number ): void
```

Parameters:

- font: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setDefaultFont(font);
```

---

## setItemAllowOverlap() {: #infinity.ui.setItemAllowOverlap_function .doc-function}

//TODO

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

//TODO

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

//TODO

Signature:
```
setKeyboardFocusHere( offset?: number ): void
```

Parameters:

- offset: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setKeyboardFocusHere();
```

---

## setMouseCursor() {: #infinity.ui.setMouseCursor_function .doc-function}

//TODO

Signature:
```
setMouseCursor( cursor: infinity.ui.mouseCursors ): void
```

Parameters:

- cursor: `infinity.ui.mouseCursors`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setMouseCursor(cursor);
```

---

## setNextFrameWantCaptureKeyboard() {: #infinity.ui.setNextFrameWantCaptureKeyboard_function .doc-function}

//TODO

Signature:
```
setNextFrameWantCaptureKeyboard( capture: boolean ): void
```

Parameters:

- capture: `boolean`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextFrameWantCaptureKeyboard(capture);
```

---

## setNextFrameWantCaptureMouse() {: #infinity.ui.setNextFrameWantCaptureMouse_function .doc-function}

//TODO

Signature:
```
setNextFrameWantCaptureMouse( capture: boolean ): void
```

Parameters:

- capture: `boolean`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextFrameWantCaptureMouse(capture);
```

---

## setNextItemOpen() {: #infinity.ui.setNextItemOpen_function .doc-function}

//TODO

Signature:
```
setNextItemOpen( open: boolean, condition?: infinity.ui.conditions ): void
```

Parameters:

- open: `boolean`
  >//TODO

- condition: `infinity.ui.conditions`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextItemOpen(open);
```

---

## setNextItemWidth() {: #infinity.ui.setNextItemWidth_function .doc-function}

//TODO

Signature:
```
setNextItemWidth( width: number ): void
```

Parameters:

- width: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextItemWidth(width);
```

---

## setNextWindowBgAlpha() {: #infinity.ui.setNextWindowBgAlpha_function .doc-function}

//TODO

Signature:
```
setNextWindowBgAlpha( alpha: number ): void
```

Parameters:

- alpha: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextWindowBgAlpha(alpha);
```

---

## setNextWindowCollapsed() {: #infinity.ui.setNextWindowCollapsed_function .doc-function}

//TODO

Signature:
```
setNextWindowCollapsed( collapsed: boolean, condition?: infinity.ui.conditions ): void
```

Parameters:

- collapsed: `boolean`
  >//TODO

- condition: `infinity.ui.conditions`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextWindowCollapsed(collapsed);
```

---

## setNextWindowContentSize() {: #infinity.ui.setNextWindowContentSize_function .doc-function}

//TODO

Signature:
```
setNextWindowContentSize( size: infinity.ui.vec2 ): void
```

Parameters:

- size: `infinity.ui.vec2`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextWindowContentSize(size);
```

---

## setNextWindowFocus() {: #infinity.ui.setNextWindowFocus_function .doc-function}

//TODO

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

//TODO

Signature:
```
setNextWindowPos( pos: infinity.ui.vec2, condition?: infinity.ui.conditions, pivot?: infinity.ui.vec2 ): void
```

Parameters:

- pos: `infinity.ui.vec2`
  >//TODO

- condition: `infinity.ui.conditions`, optional
  >//TODO

- pivot: `infinity.ui.vec2`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextWindowPos(pos);
```

---

## setNextWindowScroll() {: #infinity.ui.setNextWindowScroll_function .doc-function}

//TODO

Signature:
```
setNextWindowScroll( scroll: infinity.ui.vec2 ): void
```

Parameters:

- scroll: `infinity.ui.vec2`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextWindowScroll(scroll);
```

---

## setNextWindowSize() {: #infinity.ui.setNextWindowSize_function .doc-function}

//TODO

Signature:
```
setNextWindowSize( size: infinity.ui.vec2, condition?: infinity.ui.conditions ): void
```

Parameters:

- size: `infinity.ui.vec2`
  >//TODO

- condition: `infinity.ui.conditions`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextWindowSize(size);
```

---

## setNextWindowSizeConstraints() {: #infinity.ui.setNextWindowSizeConstraints_function .doc-function}

//TODO

Signature:
```
setNextWindowSizeConstraints( size_min: infinity.ui.vec2, size_max: infinity.ui.vec2 ): void
```

Parameters:

- size_min: `infinity.ui.vec2`
  >//TODO

- size_max: `infinity.ui.vec2`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setNextWindowSizeConstraints(size_min, size_max);
```

---

## setScrollFromPosX() {: #infinity.ui.setScrollFromPosX_function .doc-function}

//TODO

Signature:
```
setScrollFromPosX( localX: number, centerXRatio?: number ): void
```

Parameters:

- localX: `number`
  >//TODO

- centerXRatio: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setScrollFromPosX(localX);
```

---

## setScrollFromPosY() {: #infinity.ui.setScrollFromPosY_function .doc-function}

//TODO

Signature:
```
setScrollFromPosY( localY: number, centerYRatio?: number ): void
```

Parameters:

- localY: `number`
  >//TODO

- centerYRatio: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setScrollFromPosY(localY);
```

---

## setScrollHereX() {: #infinity.ui.setScrollHereX_function .doc-function}

//TODO

Signature:
```
setScrollHereX( centerXRatio?: number ): void
```

Parameters:

- centerXRatio: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setScrollHereX();
```

---

## setScrollHereY() {: #infinity.ui.setScrollHereY_function .doc-function}

//TODO

Signature:
```
setScrollHereY( centerYRatio?: number ): void
```

Parameters:

- centerYRatio: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setScrollHereY();
```

---

## setTabItemClosed() {: #infinity.ui.setTabItemClosed_function .doc-function}

//TODO

Signature:
```
setTabItemClosed( label: string ): void
```

Parameters:

- label: `string`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setTabItemClosed(label);
```

---

## setTooltip() {: #infinity.ui.setTooltip_function .doc-function}

//TODO

Signature:
```
setTooltip( text: string ): void
```

Parameters:

- text: `string`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.setTooltip(text);
```

---

## showDebugLogWindow() {: #infinity.ui.showDebugLogWindow_function .doc-function}

//TODO

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

//TODO

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

//TODO

Signature:
```
showFontSelector( label: string ): void
```

Parameters:

- label: `string`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.showFontSelector(label);
```

---

## showMetricsWindow() {: #infinity.ui.showMetricsWindow_function .doc-function}

//TODO

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

//TODO

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

//TODO

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

//TODO

Signature:
```
showStyleSelector( label: string ): boolean
```

Parameters:

- label: `string`
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.showStyleSelector(label) ) {}
```

---

## shutdown() {: #infinity.ui.shutdown_function .doc-function}

//TODO

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

//TODO

Signature:
```
sliderFloat( label: string, v: number, vmin: number, vmax: number, format?: string, flags?: infinity.ui.sliderFlags ): number
```

Parameters:

- label: `string`
  >//TODO

- v: `number`
  >//TODO

- vmin: `number`
  >//TODO

- vmax: `number`
  >//TODO

- format: `string`, optional
  >//TODO

- flags: `infinity.ui.sliderFlags`, optional
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.sliderFloat(label, v, vmin, vmax);
```

---

## sliderInt() {: #infinity.ui.sliderInt_function .doc-function}

//TODO

Signature:
```
sliderInt( label: string, v: number, vmin: number, vmax: number, format?: string, flags?: infinity.ui.sliderFlags ): number
```

Parameters:

- label: `string`
  >//TODO

- v: `number`
  >//TODO

- vmin: `number`
  >//TODO

- vmax: `number`
  >//TODO

- format: `string`, optional
  >//TODO

- flags: `infinity.ui.sliderFlags`, optional
  >//TODO


Return type: `number`

Example:

```typescript
infinity.loadModule('infinity.ui');
let n = infinity.ui.sliderInt(label, v, vmin, vmax);
```

---

## smallButton() {: #infinity.ui.smallButton_function .doc-function}

//TODO

Signature:
```
smallButton( label: string ): boolean
```

Parameters:

- label: `string`
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.smallButton(label) ) {}
```

---

## spacing() {: #infinity.ui.spacing_function .doc-function}

//TODO

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

//TODO

Signature:
```
tabItemButton( label: string, flags?: infinity.ui.tabItemFlags ): boolean
```

Parameters:

- label: `string`
  >//TODO

- flags: `infinity.ui.tabItemFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.tabItemButton(label) ) {}
```

---

## tableGetColumnCount() {: #infinity.ui.tableGetColumnCount_function .doc-function}

//TODO

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

//TODO

Signature:
```
tableGetColumnFlags( column?: number ): infinity.ui.tableColumnFlags
```

Parameters:

- column: `number`, optional
  >//TODO


Return type: `infinity.ui.tableColumnFlags`

Example:

```typescript
infinity.loadModule('infinity.ui');
let x = infinity.ui.tableGetColumnFlags();
```

---

## tableGetColumnIndex() {: #infinity.ui.tableGetColumnIndex_function .doc-function}

//TODO

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

//TODO

Signature:
```
tableGetColumnName( column?: number ): string
```

Parameters:

- column: `number`, optional
  >//TODO


Return type: `string`

Example:

```typescript
infinity.loadModule('infinity.ui');
let s = infinity.ui.tableGetColumnName();
```

---

## tableGetRowIndex() {: #infinity.ui.tableGetRowIndex_function .doc-function}

//TODO

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

//TODO

Signature:
```
tableHeader( label: string ): void
```

Parameters:

- label: `string`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.tableHeader(label);
```

---

## tableHeadersRow() {: #infinity.ui.tableHeadersRow_function .doc-function}

//TODO

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

//TODO

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

//TODO

Signature:
```
tableNextRow( flags?: infinity.ui.tableRowFlags, minRowHeight?: number ): void
```

Parameters:

- flags: `infinity.ui.tableRowFlags`, optional
  >//TODO

- minRowHeight: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.tableNextRow();
```

---

## tableSetBgColor() {: #infinity.ui.tableSetBgColor_function .doc-function}

//TODO

Signature:
```
tableSetBgColor( target: infinity.ui.tableBgTargets, color: number, column?: number ): void
```

Parameters:

- target: `infinity.ui.tableBgTargets`
  >//TODO

- color: `number`
  >//TODO

- column: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.tableSetBgColor(target, color);
```

---

## tableSetColumnEnabled() {: #infinity.ui.tableSetColumnEnabled_function .doc-function}

//TODO

Signature:
```
tableSetColumnEnabled( column: number, enabled: boolean ): void
```

Parameters:

- column: `number`
  >//TODO

- enabled: `boolean`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.tableSetColumnEnabled(column, enabled);
```

---

## tableSetColumnIndex() {: #infinity.ui.tableSetColumnIndex_function .doc-function}

//TODO

Signature:
```
tableSetColumnIndex( column: number ): boolean
```

Parameters:

- column: `number`
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.tableSetColumnIndex(column) ) {}
```

---

## tableSetupColumn() {: #infinity.ui.tableSetupColumn_function .doc-function}

//TODO

Signature:
```
tableSetupColumn( label: string, flags?: infinity.ui.tableColumnFlags, initWidthOrWeight?: number, userId?: number ): void
```

Parameters:

- label: `string`
  >//TODO

- flags: `infinity.ui.tableColumnFlags`, optional
  >//TODO

- initWidthOrWeight: `number`, optional
  >//TODO

- userId: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.tableSetupColumn(label);
```

---

## tableSetupScrollFreeze() {: #infinity.ui.tableSetupScrollFreeze_function .doc-function}

//TODO

Signature:
```
tableSetupScrollFreeze( cols: number, rows: number ): void
```

Parameters:

- cols: `number`
  >//TODO

- rows: `number`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.tableSetupScrollFreeze(cols, rows);
```

---

## text() {: #infinity.ui.text_function .doc-function}

//TODO

Signature:
```
text( text: string ): void
```

Parameters:

- text: `string`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.text(text);
```

---

## textColored() {: #infinity.ui.textColored_function .doc-function}

//TODO

Signature:
```
textColored( color: infinity.ui.color, text: string ): void
```

Parameters:

- color: `infinity.ui.color`
  >//TODO

- text: `string`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.textColored(color, text);
```

---

## textDisabled() {: #infinity.ui.textDisabled_function .doc-function}

//TODO

Signature:
```
textDisabled( text: string ): void
```

Parameters:

- text: `string`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.textDisabled(text);
```

---

## textWrapped() {: #infinity.ui.textWrapped_function .doc-function}

//TODO

Signature:
```
textWrapped( text: string ): void
```

Parameters:

- text: `string`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.textWrapped(text);
```

---

## treeNode() {: #infinity.ui.treeNode_function .doc-function}

//TODO

Signature:
```
treeNode( id: string, label: string ): boolean
```

Parameters:

- id: `string`
  >//TODO

- label: `string`
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.treeNode(id, label) ) {}
```

---

## treeNode() {: #infinity.ui.treeNode_function .doc-function}

//TODO

Signature:
```
treeNode( label: string ): boolean
```

Parameters:

- label: `string`
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.treeNode(label) ) {}
```

---

## treeNodeEx() {: #infinity.ui.treeNodeEx_function .doc-function}

//TODO

Signature:
```
treeNodeEx( id: string, label: string, flags?: infinity.ui.treeNodeFlags ): boolean
```

Parameters:

- id: `string`
  >//TODO

- label: `string`
  >//TODO

- flags: `infinity.ui.treeNodeFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.treeNodeEx(id, label) ) {}
```

---

## treeNodeEx() {: #infinity.ui.treeNodeEx_function .doc-function}

//TODO

Signature:
```
treeNodeEx( label: string, flags?: infinity.ui.treeNodeFlags ): boolean
```

Parameters:

- label: `string`
  >//TODO

- flags: `infinity.ui.treeNodeFlags`, optional
  >//TODO


Return type: `boolean`

Example:

```typescript
infinity.loadModule('infinity.ui');
if ( infinity.ui.treeNodeEx(label) ) {}
```

---

## treePop() {: #infinity.ui.treePop_function .doc-function}

//TODO

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

//TODO

Signature:
```
treePush( id: string ): void
```

Parameters:

- id: `string`
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.treePush(id);
```

---

## unindent() {: #infinity.ui.unindent_function .doc-function}

//TODO

Signature:
```
unindent( width?: number ): void
```

Parameters:

- width: `number`, optional
  >//TODO


Example:

```typescript
infinity.loadModule('infinity.ui');
infinity.ui.unindent();
```



---

<div class="doc-heading">Properties</div>

---

## backgroundColor {: #infinity.ui.backgroundColor_property .doc-property}

Type: `infinity.ui.color`

//TODO

---

## framePos {: #infinity.ui.framePos_property .doc-property}

Type: `infinity.ui.vec2`

//TODO

---

## frameSize {: #infinity.ui.frameSize_property .doc-property}

Type: `infinity.ui.vec2`

//TODO

---

## iniFilename {: #infinity.ui.iniFilename_property .doc-property}

Type: `string`

//TODO

---

## scrollX {: #infinity.ui.scrollX_property .doc-property}

Type: `number`

//TODO

---

## scrollY {: #infinity.ui.scrollY_property .doc-property}

Type: `number`

//TODO

---

## style {: #infinity.ui.style_property .doc-property}

Type: `infinity.ui.styles`

//TODO

---

## title {: #infinity.ui.title_property .doc-property}

Type: `string`

//TODO

---

## displaySize {: #infinity.ui.displaySize_property .doc-property}

Type: `infinity.ui.vec2`

//TODO

---

## scrollMaxX {: #infinity.ui.scrollMaxX_property .doc-property}

Type: `number`

//TODO

---

## scrollMaxY {: #infinity.ui.scrollMaxY_property .doc-property}

Type: `number`

//TODO

---

## version {: #infinity.ui.version_property .doc-property}

Type: `string`

//TODO



---

<div class="doc-heading">Enums</div>

---

## infinity.ui.buttonFlags {: #infinity.ui.buttonFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- mouseButtonLeft: `1`
  >//TODO

- mouseButtonRight: `2`
  >//TODO

- mouseButtonMiddle: `4`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let buttonFlags = infinity.ui.buttonFlags.none;
```



---

## infinity.ui.collapsingHeaderStates {: #infinity.ui.collapsingHeaderStates_enum .doc-enum}

Values:

- closed: `0`
  >//TODO

- open: `1`
  >//TODO

- closeButtonClicked: `2`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let collapsingHeaderStates = infinity.ui.collapsingHeaderStates.closed;
```



---

## infinity.ui.colorEditFlags {: #infinity.ui.colorEditFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- noAlpha: `2`
  >//TODO

- noPicker: `4`
  >//TODO

- noOptions: `8`
  >//TODO

- noSmallPreview: `16`
  >//TODO

- noInputs: `32`
  >//TODO

- noTooltip: `64`
  >//TODO

- noLabel: `128`
  >//TODO

- noSidePreview: `256`
  >//TODO

- noDragDrop: `512`
  >//TODO

- noBorder: `1024`
  >//TODO

- alphaBar: `65536`
  >//TODO

- alphaPreview: `131072`
  >//TODO

- alphaPreviewHalf: `262144`
  >//TODO

- hdr: `524288`
  >//TODO

- displayRGB: `1048576`
  >//TODO

- displayHSV: `2097152`
  >//TODO

- displayHex: `4194304`
  >//TODO

- uint8: `8388608`
  >//TODO

- float: `16777216`
  >//TODO

- pickerHueBar: `33554432`
  >//TODO

- pickerHueWheel: `67108864`
  >//TODO

- inputRGB: `134217728`
  >//TODO

- inputHSV: `268435456`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let colorEditFlags = infinity.ui.colorEditFlags.none;
```



---

## infinity.ui.colorTypes {: #infinity.ui.colorTypes_enum .doc-enum}

Values:

- text: `0`
  >//TODO

- textDisabled: `1`
  >//TODO

- windowBg: `2`
  >//TODO

- childBg: `3`
  >//TODO

- popupBg: `4`
  >//TODO

- border: `5`
  >//TODO

- borderShadow: `6`
  >//TODO

- frameBg: `7`
  >//TODO

- frameBgHovered: `8`
  >//TODO

- frameBgActive: `9`
  >//TODO

- titleBg: `10`
  >//TODO

- titleBgActive: `11`
  >//TODO

- titleBgCollapsed: `12`
  >//TODO

- menuBarBg: `13`
  >//TODO

- scrollbarBg: `14`
  >//TODO

- scrollbarGrab: `15`
  >//TODO

- scrollbarGrabHovered: `16`
  >//TODO

- scrollbarGrabActive: `17`
  >//TODO

- checkMark: `18`
  >//TODO

- sliderGrab: `19`
  >//TODO

- sliderGrabActive: `20`
  >//TODO

- button: `21`
  >//TODO

- buttonHovered: `22`
  >//TODO

- buttonActive: `23`
  >//TODO

- header: `24`
  >//TODO

- headerHovered: `25`
  >//TODO

- headerActive: `26`
  >//TODO

- separator: `27`
  >//TODO

- separatorHovered: `28`
  >//TODO

- separatorActive: `29`
  >//TODO

- resizeGrip: `30`
  >//TODO

- resizeGripHovered: `31`
  >//TODO

- resizeGripActive: `32`
  >//TODO

- tab: `33`
  >//TODO

- tabHovered: `34`
  >//TODO

- tabActive: `35`
  >//TODO

- tabUnfocused: `36`
  >//TODO

- tabUnfocusedActive: `37`
  >//TODO

- dockingPreview: `38`
  >//TODO

- dockingEmptyBg: `39`
  >//TODO

- plotLines: `40`
  >//TODO

- plotLinesHovered: `41`
  >//TODO

- plotHistogram: `42`
  >//TODO

- plotHistogramHovered: `43`
  >//TODO

- tableHeaderBg: `44`
  >//TODO

- tableBorderStrong: `45`
  >//TODO

- tableBorderLight: `46`
  >//TODO

- tableRowBg: `47`
  >//TODO

- tableRowBgAlt: `48`
  >//TODO

- textSelectedBg: `49`
  >//TODO

- dragDropTarget: `50`
  >//TODO

- navHighlight: `51`
  >//TODO

- navWindowingHighlight: `52`
  >//TODO

- navWindowingDimBg: `53`
  >//TODO

- modalWindowDimBg: `54`
  >//TODO

- count: `55`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let colorTypes = infinity.ui.colorTypes.text;
```



---

## infinity.ui.comboFlags {: #infinity.ui.comboFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- popupAlignLeft: `1`
  >//TODO

- heightSmall: `2`
  >//TODO

- heightRegular: `4`
  >//TODO

- heightLarge: `8`
  >//TODO

- heightLargest: `16`
  >//TODO

- noArrowButton: `32`
  >//TODO

- noPreview: `64`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let comboFlags = infinity.ui.comboFlags.none;
```



---

## infinity.ui.conditions {: #infinity.ui.conditions_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- always: `1`
  >//TODO

- once: `2`
  >//TODO

- firstUseEver: `4`
  >//TODO

- appearing: `8`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let conditions = infinity.ui.conditions.none;
```



---

## infinity.ui.dialogTypes {: #infinity.ui.dialogTypes_enum .doc-enum}

Values:

- ok: `1`
  >//TODO

- okCancel: `2`
  >//TODO

- yesNo: `3`
  >//TODO

- yesNoCancel: `4`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let dialogTypes = infinity.ui.dialogTypes.ok;
```



---

## infinity.ui.directions {: #infinity.ui.directions_enum .doc-enum}

Values:

- none: `-1`
  >//TODO

- left: `0`
  >//TODO

- right: `1`
  >//TODO

- up: `2`
  >//TODO

- down: `3`
  >//TODO

- count: `4`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let directions = infinity.ui.directions.none;
```



---

## infinity.ui.drawFlags {: #infinity.ui.drawFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- closed: `1`
  >//TODO

- roundCornersTopLeft: `16`
  >//TODO

- roundCornersTopRight: `32`
  >//TODO

- roundCornersBottomLeft: `64`
  >//TODO

- roundCornersBottomRight: `128`
  >//TODO

- roundCornersNone: `256`
  >//TODO

- roundCornersTop: `48`
  >//TODO

- roundCornersBottom: `192`
  >//TODO

- roundCornersLeft: `80`
  >//TODO

- roundCornersRight: `160`
  >//TODO

- roundCornersAll: `240`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let drawFlags = infinity.ui.drawFlags.none;
```



---

## infinity.ui.focusedFlags {: #infinity.ui.focusedFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- childWindows: `1`
  >//TODO

- rootWindow: `2`
  >//TODO

- anyWindow: `4`
  >//TODO

- noPopupHierarchy: `8`
  >//TODO

- dockHierarchy: `16`
  >//TODO

- rootAndChildWindows: `3`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let focusedFlags = infinity.ui.focusedFlags.none;
```



---

## infinity.ui.hoveredFlags {: #infinity.ui.hoveredFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- childWindows: `1`
  >//TODO

- rootWindow: `2`
  >//TODO

- anyWindow: `4`
  >//TODO

- noPopupHierarchy: `8`
  >//TODO

- dockHierarchy: `16`
  >//TODO

- allowWhenBlockedByPopup: `32`
  >//TODO

- allowWhenBlockedByActiveItem: `128`
  >//TODO

- allowWhenOverlapped: `256`
  >//TODO

- allowWhenDisabled: `512`
  >//TODO

- noNavOverride: `1024`
  >//TODO

- rectOnly: `416`
  >//TODO

- rootAndChildWindows: `3`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let hoveredFlags = infinity.ui.hoveredFlags.none;
```



---

## infinity.ui.iconTypes {: #infinity.ui.iconTypes_enum .doc-enum}

Values:

- info: `1`
  >//TODO

- warning: `2`
  >//TODO

- error: `3`
  >//TODO

- question: `4`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let iconTypes = infinity.ui.iconTypes.info;
```



---

## infinity.ui.initFlags {: #infinity.ui.initFlags_enum .doc-enum}

Values:

- fullscreen: `1`
  >//TODO

- borderless: `16`
  >//TODO

- resizeable: `32`
  >//TODO

- minimized: `64`
  >//TODO

- maximized: `128`
  >//TODO

- fullscreenDesktop: `4097`
  >//TODO

- allowHighDpi: `8192`
  >//TODO

- alwaysOnTop: `32768`
  >//TODO

- skipTaskBar: `65536`
  >//TODO

- utility: `131072`
  >//TODO

- toolTip: `262144`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let initFlags = infinity.ui.initFlags.fullscreen;
```



---

## infinity.ui.inputTextFlags {: #infinity.ui.inputTextFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- charsDecimal: `1`
  >//TODO

- charsHexadecimal: `2`
  >//TODO

- charsUppercase: `4`
  >//TODO

- charsNoBlank: `8`
  >//TODO

- autoSelectAll: `16`
  >//TODO

- enterReturnsTrue: `32`
  >//TODO

- callbackCompletion: `64`
  >//TODO

- callbackHistory: `128`
  >//TODO

- callbackAlways: `256`
  >//TODO

- callbackCharFilter: `512`
  >//TODO

- allowTabInput: `1024`
  >//TODO

- ctrlEnterForNewLine: `2048`
  >//TODO

- noHorizontalScroll: `4096`
  >//TODO

- alwaysOverwrite: `8192`
  >//TODO

- readOnly: `16384`
  >//TODO

- password: `32768`
  >//TODO

- noUndoRedo: `65536`
  >//TODO

- charsScientific: `131072`
  >//TODO

- callbackResize: `262144`
  >//TODO

- callbackEdit: `524288`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let inputTextFlags = infinity.ui.inputTextFlags.none;
```



---

## infinity.ui.keys {: #infinity.ui.keys_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- tab: `512`
  >//TODO

- leftArrow: `513`
  >//TODO

- rightArrow: `514`
  >//TODO

- upArrow: `515`
  >//TODO

- downArrow: `516`
  >//TODO

- pageUp: `517`
  >//TODO

- pageDown: `518`
  >//TODO

- home: `519`
  >//TODO

- end: `520`
  >//TODO

- insert: `521`
  >//TODO

- delete: `522`
  >//TODO

- backspace: `523`
  >//TODO

- space: `524`
  >//TODO

- enter: `525`
  >//TODO

- escape: `526`
  >//TODO

- leftCtrl: `527`
  >//TODO

- leftShift: `528`
  >//TODO

- leftAlt: `529`
  >//TODO

- leftSuper: `530`
  >//TODO

- rightCtrl: `531`
  >//TODO

- rightShift: `532`
  >//TODO

- rightAlt: `533`
  >//TODO

- rightSuper: `534`
  >//TODO

- menu: `535`
  >//TODO

- key0: `536`
  >//TODO

- key1: `537`
  >//TODO

- key2: `538`
  >//TODO

- key3: `539`
  >//TODO

- key4: `540`
  >//TODO

- key5: `541`
  >//TODO

- key6: `542`
  >//TODO

- key7: `543`
  >//TODO

- key8: `544`
  >//TODO

- key9: `545`
  >//TODO

- keyA: `546`
  >//TODO

- keyB: `547`
  >//TODO

- keyC: `548`
  >//TODO

- keyD: `549`
  >//TODO

- keyE: `550`
  >//TODO

- keyF: `551`
  >//TODO

- keyG: `552`
  >//TODO

- keyH: `553`
  >//TODO

- keyI: `554`
  >//TODO

- keyJ: `555`
  >//TODO

- keyK: `556`
  >//TODO

- keyL: `557`
  >//TODO

- keyM: `558`
  >//TODO

- keyN: `559`
  >//TODO

- keyO: `560`
  >//TODO

- keyP: `561`
  >//TODO

- keyQ: `562`
  >//TODO

- keyR: `563`
  >//TODO

- keyS: `564`
  >//TODO

- keyT: `565`
  >//TODO

- keyU: `566`
  >//TODO

- keyV: `567`
  >//TODO

- keyW: `568`
  >//TODO

- keyX: `569`
  >//TODO

- keyY: `570`
  >//TODO

- keyZ: `571`
  >//TODO

- keyF1: `572`
  >//TODO

- keyF2: `573`
  >//TODO

- keyF3: `574`
  >//TODO

- keyF4: `575`
  >//TODO

- keyF5: `576`
  >//TODO

- keyF6: `577`
  >//TODO

- keyF7: `578`
  >//TODO

- keyF8: `579`
  >//TODO

- keyF9: `580`
  >//TODO

- keyF10: `581`
  >//TODO

- keyF11: `582`
  >//TODO

- keyF12: `583`
  >//TODO

- apostrophe: `584`
  >//TODO

- comma: `585`
  >//TODO

- minus: `586`
  >//TODO

- period: `587`
  >//TODO

- slash: `588`
  >//TODO

- semicolon: `589`
  >//TODO

- equal: `590`
  >//TODO

- leftBracket: `591`
  >//TODO

- backslash: `592`
  >//TODO

- rightBracket: `593`
  >//TODO

- graveAccent: `594`
  >//TODO

- capsLock: `595`
  >//TODO

- scrollLock: `596`
  >//TODO

- numLock: `597`
  >//TODO

- printScreen: `598`
  >//TODO

- pause: `599`
  >//TODO

- keypad0: `600`
  >//TODO

- keypad1: `601`
  >//TODO

- keypad2: `602`
  >//TODO

- keypad3: `603`
  >//TODO

- keypad4: `604`
  >//TODO

- keypad5: `605`
  >//TODO

- keypad6: `606`
  >//TODO

- keypad7: `607`
  >//TODO

- keypad8: `608`
  >//TODO

- keypad9: `609`
  >//TODO

- keypadDecimal: `610`
  >//TODO

- keypadDivide: `611`
  >//TODO

- keypadMultiply: `612`
  >//TODO

- keypadSubtract: `613`
  >//TODO

- keypadAdd: `614`
  >//TODO

- keypadEnter: `615`
  >//TODO

- keypadEqual: `616`
  >//TODO

- modCtrl: `641`
  >//TODO

- modShift: `642`
  >//TODO

- modAlt: `643`
  >//TODO

- modSuper: `644`
  >//TODO

- count: `646`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let keys = infinity.ui.keys.none;
```



---

## infinity.ui.mouseButtons {: #infinity.ui.mouseButtons_enum .doc-enum}

Values:

- left: `0`
  >//TODO

- right: `1`
  >//TODO

- middle: `2`
  >//TODO

- count: `5`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let mouseButtons = infinity.ui.mouseButtons.left;
```



---

## infinity.ui.mouseCursors {: #infinity.ui.mouseCursors_enum .doc-enum}

Values:

- none: `-1`
  >//TODO

- arrow: `0`
  >//TODO

- textInput: `1`
  >//TODO

- resizeAll: `2`
  >//TODO

- resizeNS: `3`
  >//TODO

- resizeEW: `4`
  >//TODO

- resizeNESW: `5`
  >//TODO

- resizeNWSE: `6`
  >//TODO

- hand: `7`
  >//TODO

- notAllowed: `8`
  >//TODO

- count: `9`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let mouseCursors = infinity.ui.mouseCursors.none;
```



---

## infinity.ui.popupFlags {: #infinity.ui.popupFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- mouseButtonLeft: `0`
  >//TODO

- mouseButtonRight: `1`
  >//TODO

- mouseButtonMiddle: `2`
  >//TODO

- noOpenOverExistingPopup: `32`
  >//TODO

- noOpenOverItems: `64`
  >//TODO

- anyPopupId: `128`
  >//TODO

- anyPopupLevel: `256`
  >//TODO

- anyPopup: `384`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let popupFlags = infinity.ui.popupFlags.none;
```



---

## infinity.ui.selectableFlags {: #infinity.ui.selectableFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- dontClosePopups: `1`
  >//TODO

- spanAllColumns: `2`
  >//TODO

- allowDoubleClick: `4`
  >//TODO

- disabled: `8`
  >//TODO

- allowItemOverlap: `16`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let selectableFlags = infinity.ui.selectableFlags.none;
```



---

## infinity.ui.sliderFlags {: #infinity.ui.sliderFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- alwaysClamp: `16`
  >//TODO

- logarithmic: `32`
  >//TODO

- noRoundToFormat: `64`
  >//TODO

- noInput: `128`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let sliderFlags = infinity.ui.sliderFlags.none;
```



---

## infinity.ui.styleVars {: #infinity.ui.styleVars_enum .doc-enum}

Values:

- alpha: `0`
  >//TODO

- disabledAlpha: `1`
  >//TODO

- windowPadding: `2`
  >//TODO

- windowRounding: `3`
  >//TODO

- windowBorderSize: `4`
  >//TODO

- windowMinSize: `5`
  >//TODO

- windowTitleAlign: `6`
  >//TODO

- childRounding: `7`
  >//TODO

- childBorderSize: `8`
  >//TODO

- popupRounding: `9`
  >//TODO

- popupBorderSize: `10`
  >//TODO

- framePadding: `11`
  >//TODO

- frameRounding: `12`
  >//TODO

- frameBorderSize: `13`
  >//TODO

- itemSpacing: `14`
  >//TODO

- itemInnerSpacing: `15`
  >//TODO

- indentSpacing: `16`
  >//TODO

- cellPadding: `17`
  >//TODO

- scrollbarSize: `18`
  >//TODO

- scrollbarRounding: `19`
  >//TODO

- grabMinSize: `20`
  >//TODO

- grabRounding: `21`
  >//TODO

- tabRounding: `22`
  >//TODO

- buttonTextAlign: `23`
  >//TODO

- selectableTextAlign: `24`
  >//TODO

- count: `25`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let styleVars = infinity.ui.styleVars.alpha;
```



---

## infinity.ui.styles {: #infinity.ui.styles_enum .doc-enum}

Values:

- dark: `1`
  >//TODO

- light: `2`
  >//TODO

- classic: `3`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let styles = infinity.ui.styles.dark;
```



---

## infinity.ui.tabBarFlags {: #infinity.ui.tabBarFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- reorderable: `1`
  >//TODO

- autoSelectNewTabs: `2`
  >//TODO

- tabListPopupButton: `4`
  >//TODO

- noCloseWithMiddleMouseButton: `8`
  >//TODO

- noTabListScrollingButtons: `16`
  >//TODO

- noTooltip: `32`
  >//TODO

- fittingPolicyResizeDown: `64`
  >//TODO

- fittingPolicyScroll: `128`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let tabBarFlags = infinity.ui.tabBarFlags.none;
```



---

## infinity.ui.tabItemFlags {: #infinity.ui.tabItemFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- unsavedDocument: `1`
  >//TODO

- setSelected: `2`
  >//TODO

- noCloseWithMiddleMouseButton: `4`
  >//TODO

- noPushId: `8`
  >//TODO

- noTooltip: `16`
  >//TODO

- noReorder: `32`
  >//TODO

- leading: `64`
  >//TODO

- trailing: `128`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let tabItemFlags = infinity.ui.tabItemFlags.none;
```



---

## infinity.ui.tableBgTargets {: #infinity.ui.tableBgTargets_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- rowBg0: `1`
  >//TODO

- rowBg1: `2`
  >//TODO

- cellBg: `3`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let tableBgTargets = infinity.ui.tableBgTargets.none;
```



---

## infinity.ui.tableColumnFlags {: #infinity.ui.tableColumnFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- disabled: `1`
  >//TODO

- defaultHide: `2`
  >//TODO

- defaultSort: `4`
  >//TODO

- widthStretch: `8`
  >//TODO

- widthFixed: `16`
  >//TODO

- noResize: `32`
  >//TODO

- noReorder: `64`
  >//TODO

- noHide: `128`
  >//TODO

- noClip: `256`
  >//TODO

- noSort: `512`
  >//TODO

- noSortAscending: `1024`
  >//TODO

- noSortDescending: `2048`
  >//TODO

- noHeaderLabel: `4096`
  >//TODO

- noHeaderWidth: `8192`
  >//TODO

- preferSortAscending: `16384`
  >//TODO

- preferSortDescending: `32768`
  >//TODO

- indentEnable: `65536`
  >//TODO

- indentDisable: `131072`
  >//TODO

- isEnabled: `16777216`
  >//TODO

- isVisible: `33554432`
  >//TODO

- isSorted: `67108864`
  >//TODO

- isHovered: `134217728`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let tableColumnFlags = infinity.ui.tableColumnFlags.none;
```



---

## infinity.ui.tableFlags {: #infinity.ui.tableFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- resizable: `1`
  >//TODO

- reorderable: `2`
  >//TODO

- hideable: `4`
  >//TODO

- sortable: `8`
  >//TODO

- noSavedSettings: `16`
  >//TODO

- contextMenuInBody: `32`
  >//TODO

- rowBg: `64`
  >//TODO

- bordersInnerH: `128`
  >//TODO

- bordersOuterH: `256`
  >//TODO

- bordersInnerV: `512`
  >//TODO

- bordersOuterV: `1024`
  >//TODO

- bordersH: `384`
  >//TODO

- bordersV: `1536`
  >//TODO

- bordersInner: `640`
  >//TODO

- bordersOuter: `1280`
  >//TODO

- borders: `1920`
  >//TODO

- noBordersInBody: `2048`
  >//TODO

- noBordersInBodyUntilResize: `4096`
  >//TODO

- sizingFixedFit: `8192`
  >//TODO

- sizingFixedSame: `16384`
  >//TODO

- sizingStretchProp: `24576`
  >//TODO

- sizingStretchSame: `32768`
  >//TODO

- noHostExtendX: `65536`
  >//TODO

- noHostExtendY: `131072`
  >//TODO

- noKeepColumnsVisible: `262144`
  >//TODO

- preciseWidths: `524288`
  >//TODO

- noClip: `1048576`
  >//TODO

- padOuterX: `2097152`
  >//TODO

- noPadOuterX: `4194304`
  >//TODO

- noPadInnerX: `8388608`
  >//TODO

- scrollX: `16777216`
  >//TODO

- scrollY: `33554432`
  >//TODO

- sortMulti: `67108864`
  >//TODO

- sortTristate: `134217728`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let tableFlags = infinity.ui.tableFlags.none;
```



---

## infinity.ui.tableRowFlags {: #infinity.ui.tableRowFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- headers: `1`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let tableRowFlags = infinity.ui.tableRowFlags.none;
```



---

## infinity.ui.treeNodeFlags {: #infinity.ui.treeNodeFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- selected: `1`
  >//TODO

- framed: `2`
  >//TODO

- allowItemOverlap: `4`
  >//TODO

- noTreePushOnOpen: `8`
  >//TODO

- noAutoOpenOnLog: `16`
  >//TODO

- defaultOpen: `32`
  >//TODO

- openOnDoubleClick: `64`
  >//TODO

- openOnArrow: `128`
  >//TODO

- leaf: `256`
  >//TODO

- bullet: `512`
  >//TODO

- framePadding: `1024`
  >//TODO

- spanAvailWidth: `2048`
  >//TODO

- spanFullWidth: `4096`
  >//TODO

- navLeftJumpsBackHere: `8192`
  >//TODO

- collapsingHeader: `26`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let treeNodeFlags = infinity.ui.treeNodeFlags.none;
```



---

## infinity.ui.windowFlags {: #infinity.ui.windowFlags_enum .doc-enum}

Values:

- none: `0`
  >//TODO

- noTitleBar: `1`
  >//TODO

- noResize: `2`
  >//TODO

- noMove: `4`
  >//TODO

- noScrollbar: `8`
  >//TODO

- noScrollWithMouse: `16`
  >//TODO

- noCollapse: `32`
  >//TODO

- alwaysAutoResize: `64`
  >//TODO

- noBackground: `128`
  >//TODO

- noSavedSettings: `256`
  >//TODO

- noMouseInputs: `512`
  >//TODO

- menuBar: `1024`
  >//TODO

- horizontalScrollbar: `2048`
  >//TODO

- noFocusOnAppearing: `4096`
  >//TODO

- noBringToFrontOnFocus: `8192`
  >//TODO

- alwaysVerticalScrollbar: `16384`
  >//TODO

- alwaysHorizontalScrollbar: `32768`
  >//TODO

- alwaysUseWindowPadding: `65536`
  >//TODO

- noNavInputs: `262144`
  >//TODO

- noNavFocus: `524288`
  >//TODO

- unsavedDocument: `1048576`
  >//TODO

- noDocking: `2097152`
  >//TODO

- noNav: `786432`
  >//TODO

- noDecoration: `43`
  >//TODO

- noInputs: `786944`
  >//TODO

- navFlattened: `8388608`
  >//TODO

- childWindow: `16777216`
  >//TODO

- toolTip: `33554432`
  >//TODO

- popup: `67108864`
  >//TODO

- modal: `134217728`
  >//TODO

- childMenu: `268435456`
  >//TODO

- dockNodeHost: `536870912`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let windowFlags = infinity.ui.windowFlags.none;
```



---

## infinity.ui.windowPositions {: #infinity.ui.windowPositions_enum .doc-enum}

Values:

- undefined: `536805376`
  >//TODO

- centered: `805240832`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let windowPositions = infinity.ui.windowPositions.undefined;
```



---

## infinity.ui.windowStates {: #infinity.ui.windowStates_enum .doc-enum}

Values:

- open: `0`
  >//TODO

- closed: `1`
  >//TODO

- collapsed: `2`
  >//TODO

Example:

```typescript
infinity.loadModule('infinity.ui');
let windowStates = infinity.ui.windowStates.open;
```





