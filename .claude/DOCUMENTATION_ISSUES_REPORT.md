# React Chrono Documentation Issues Report

**Generated:** 2025-10-22
**Source Code Version:** v3.0.0
**Documentation Site:** /Users/prabhu/code/react-chrono-docs

---

## Executive Summary

This report identifies discrepancies, outdated information, and missing documentation between the React Chrono v3.0 source code and its documentation site. The analysis compared:
- Source code TypeScript interfaces and default values
- Prop migration utilities showing deprecated props
- Documentation markdown files across all sections

---

## Critical Issues (Must Fix)

### 1. Incorrect Default Values

#### Issue 1.1: `layout.responsive.breakpoint` Default Value
- **File:** `docs/api/grouped-config.md` (line 79-81)
- **Documented:** `768` (pixels)
- **Actual Source:** `1024` (pixels) - see `TimelineContextProvider.tsx:268`
- **Impact:** HIGH - Users will expect different responsive behavior
- **Fix Required:** Change default from 768 to 1024

#### Issue 1.2: `layout.cardWidth` Default Value
- **File:** `docs/api/grouped-config.md` (line 51)
- **Documented:** `400` (pixels)
- **Actual Source:** No default value (undefined/optional)
- **Impact:** MEDIUM - Creates false expectations about default card width
- **Fix Required:** Remove default value notation or mark as "auto/undefined"

#### Issue 1.3: `animation.slideshow.showProgress` Default Value
- **File:** `docs/api/props-reference.md` (line 315)
- **Documented:** `false`
- **Actual Source:** `true` - see `TimelineContextProvider.tsx:258`
- **Impact:** MEDIUM - Users expect opposite behavior
- **Fix Required:** Change default from false to true

---

## Moderate Issues

### 2. Missing or Incomplete Documentation

#### Issue 2.1: Toolbar Search Configuration
- **Status:** Partially documented
- **Missing:** Complete toolbar.search configuration properties
- **Location:** `docs/api/props-reference.md` has it, but `docs/api/grouped-config.md` may be incomplete
- **Properties Missing:**
  - `toolbar.search.width`
  - `toolbar.search.maxWidth`
  - `toolbar.search.minWidth`
  - `toolbar.search.inputWidth`
  - `toolbar.search.inputMaxWidth`
- **Fix Required:** Ensure all toolbar search properties are documented with examples

#### Issue 2.2: autoStart for Slideshow
- **Status:** Present in source code, documented in catalog
- **Issue:** May not be prominently featured in main API docs
- **Property:** `animation.slideshow.autoStart`
- **Type:** `boolean`
- **Default:** `false`
- **Fix Required:** Verify presence in grouped-config.md and props-reference.md

#### Issue 2.3: Dark Mode Configuration Section
- **Status:** Documented as prop but may lack dedicated section
- **Properties:**
  - `darkMode.enabled`
  - `darkMode.showToggle`
- **Fix Required:** Ensure dark mode configuration has dedicated section in grouped-config.md

---

## Documentation Structure Issues

### 3. Outdated or Legacy Content

#### Issue 3.1: Legacy Props in Main Documentation
- **Status:** Legacy props should only be in migration guide
- **Risk:** Users may use deprecated props instead of new grouped API
- **Action Required:** Audit all documentation pages to ensure:
  - Main docs use only new grouped API
  - Old API is only shown in migration guide and legacy section
  - Examples use new syntax

#### Issue 3.2: Mode Enum Values
- **Old Format:** `'VERTICAL'`, `'HORIZONTAL'`, `'VERTICAL_ALTERNATING'`, `'HORIZONTAL_ALL'` (UPPERCASE)
- **New Format:** `'vertical'`, `'horizontal'`, `'alternating'`, `'horizontal-all'` (lowercase)
- **Issue:** Some docs may still show old UPPERCASE mode values
- **Fix Required:** Search all docs for UPPERCASE mode references and update to lowercase

---

## Missing Features Documentation

### 4. Undocumented or Under-documented Features

#### Issue 4.1: i18n Text Categories
- **Status:** Partially documented
- **Issue:** The comprehensive i18n system with 60+ text keys across 11 categories may not be fully documented
- **Categories Identified:**
  1. `navigation` (8 keys)
  2. `search` (7 keys)
  3. `theme` (3 keys)
  4. `layout` (6 keys)
  5. `fullscreen` (4 keys)
  6. `quickJump` (3 keys)
  7. `content` (6 keys)
  8. `status` (4 keys)
  9. `accessibility` (8 keys)
  10. `view` (4 keys)
  11. `keyboard` (7 keys)
- **Fix Required:** Create comprehensive i18n reference table

#### Issue 4.2: Google Fonts Per-Element Configuration
- **Status:** May be documented but could be more detailed
- **Feature:** Font weight, style, and size control per element
- **Elements:**
  - `title`
  - `cardTitle`
  - `cardSubtitle`
  - `cardText`
  - `controls`
- **Fix Required:** Ensure complete examples with per-element configuration

#### Issue 4.3: Template String Variables in i18n
- **Status:** Mentioned but examples may be limited
- **Feature:** Template variables like `{current}`, `{total}`, `{index}`, `{title}`
- **Used In:**
  - `search.resultsCount`: `'{current} of {total}'`
  - `accessibility.itemPosition`: `'Item {current} of {total}'`
  - `quickJump.itemTemplate`: `'{index}: {title}'`
- **Fix Required:** Add prominent examples of template string usage

---

## Inconsistencies

### 5. Naming and Terminology

#### Issue 5.1: Card Position Terminology
- **Property:** `layout.positioning.cardPosition`
- **Values:** `'top'` | `'bottom'`
- **Old Values:** `'TOP'` | `'BOTTOM'` (deprecated)
- **Action:** Ensure all docs use lowercase values

#### Issue 5.2: Slideshow Type Values
- **New Values:** `'reveal'`, `'slide'`, `'fade'`
- **Old Values:** `'slide_in'`, `'slide_from_sides'` (deprecated, mapped to 'slide')
- **Action:** Ensure docs only show new values, with migration note for old values

---

## Recommendations

### Priority 1 (Immediate Fix Required)
1. Fix responsive.breakpoint default (768 → 1024)
2. Fix cardWidth default (400 → no default/undefined)
3. Fix slideshow.showProgress default (false → true)
4. Update all mode values to lowercase

### Priority 2 (High Importance)
1. Complete i18n documentation with all 60+ text keys
2. Add comprehensive toolbar.search configuration docs
3. Ensure Google Fonts per-element examples
4. Document template string variables

### Priority 3 (Medium Importance)
1. Audit all code examples for new grouped API usage
2. Ensure deprecated props only appear in migration guide
3. Add dark mode configuration section
4. Verify autoStart slideshow prop is documented

### Priority 4 (Nice to Have)
1. Add visual examples for different configurations
2. Create troubleshooting section
3. Add performance best practices
4. Document TypeScript usage patterns

---

## Files Requiring Updates

### High Priority
- `/docs/api/grouped-config.md` - Fix default values, add missing sections
- `/docs/api/props-reference.md` - Fix default values, verify completeness
- `/docs/features/internationalization.md` - Complete i18n text keys reference
- `/docs/introduction/migration-v3.md` - Verify accuracy of migration mappings

### Medium Priority
- `/docs/features/*.md` - Audit all for new API usage
- `/docs/timeline-modes/*.md` - Verify mode value formatting
- `/docs/customize/*.md` - Check for deprecated prop references

### Low Priority
- `/docs/index.md` - Ensure examples use new API
- All feature docs - Add more comprehensive examples

---

## Validation Checklist

- [ ] All default values match source code
- [ ] All deprecated props only in migration guide
- [ ] All examples use new grouped API
- [ ] All mode values are lowercase
- [ ] All i18n text keys documented
- [ ] All toolbar configuration documented
- [ ] Google Fonts per-element examples present
- [ ] Template string variables documented
- [ ] TypeScript interfaces match source code
- [ ] No outdated terminology used

---

## Next Steps

1. **Review this report** with documentation maintainers
2. **Prioritize fixes** based on user impact
3. **Create PRs** for each major section update
4. **Test examples** to ensure they work with current version
5. **Update changelog** to reflect documentation improvements
6. **Consider automation** for keeping docs in sync with source code

---

*This report was generated by comparing source code from `/Users/prabhu/code/react-chrono/src/` with documentation at `/Users/prabhu/code/react-chrono-docs/docs/`*
