<!-- quirq-wiki-generated repo=ui dir=components/shapes/forms-inputs -->

# ui / components/shapes/forms-inputs

Source: [components/shapes/forms-inputs](https://github.com/quirq-ai/ui/tree/main/components/shapes/forms-inputs) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### _kit.tsx

Demo scaffolding for the forms-inputs category: mono captions, labelled cells, responsive
grids and a static focus look for state demos. Server-safe. Demos only, not a shape. Notable
exports: `DemoCaption`, `DemoCell`, `DemoGrid`, `DemoRule`, `FOCUS_LOOK`.

[`components/shapes/forms-inputs/_kit.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/_kit.tsx) · code · 1771 bytes

### _styles.tsx

Plain CSS for the few rules Tailwind would need bracketed arbitrary variants for (":has()"
focus rings on field shells, number and search input chrome, rich text lists). React 19
hoists and dedupes this <style> by href, so every component can render it safely. Kept out
of Tailwind on purpose: bracketed variants get re-scanned from compressed build caches and
can produce invalid selectors. Notable exports: `FormStyles`.

[`components/shapes/forms-inputs/_styles.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/_styles.tsx) · code · 2827 bytes

### _timers.ts

/** setTimeout that is cleared when the component unmounts. For simulated round trips. */
export function useTimers() { const timers = useRef[]>([]); useEffect(() => { const list =
timers.current; return () => { list.forEach(clearTimeout); }; }, []); return
useCallback((fn: () => void, ms: number) => { timers.current.push(setTimeout(fn, ms)); },
[]); } Notable exports: `useTimers`. Marked `'use client'` so it runs in the browser.

[`components/shapes/forms-inputs/_timers.ts`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/_timers.ts) · code · 489 bytes

### budget-setter-demo.tsx

const UNSET = WORK_ITEMS.find((w) => w.id === "wi_48")!; // galileo#17, backlog, no budget
yet const SET = WORK_ITEMS.find((w) => w.id === "wi_55")!; // space-drift#4, before work
starts const MEASURED = QUIRQ_READINGS.find((r) => r.unitId === "uow_118")!; const
UNMEASURED = QUIRQ_READINGS.find((r) => r.unitId === "uow_121")! Notable exports:
`BudgetSetterDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/forms-inputs/budget-setter-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/budget-setter-demo.tsx) · code · 6868 bytes

### budget-setter.tsx

Budget B setter: the owner sets potential quirqs before the work runs. BudgetSetter sits
inline on a work item (unset, set and still editable, locked once work starts; a locked item
shows its verified result or "Unavailable"), BudgetField is the same control as a field in a
new task form, and MintEquation is the compact "Q = V · B" chip. Type or drag; Enter saves.
B is potential, never delivered work; cost is recorded separately.

[`components/shapes/forms-inputs/budget-setter.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/budget-setter.tsx) · code · 13002 bytes

### device-sign-in-demo.tsx

const GITHUB = { url: "https://github.com/login/device", label: "github.com/login/device" }
Notable exports: `DeviceSignInDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/forms-inputs/device-sign-in-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/device-sign-in-demo.tsx) · code · 4912 bytes

### device-sign-in.tsx

Device code and QR sign-in: DeviceCodeCard (the large letter-spaced code is the anchor;
copy, open the verify page, then a waiting line until the provider confirms; a centered card
or an inline row), PairingQr (deterministic QR-style art from a seed, no network) and
QrPairing (idle, connecting, QR with an expiry ring, success, error with Retry).

[`components/shapes/forms-inputs/device-sign-in.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/device-sign-in.tsx) · code · 11520 bytes

### dropzone-demo.tsx

const STAGED: StagedFile[] = [ { id: "f1", name: "quirq-whitepaper-v3.pdf", size:
Math.round(2.4 * 1024 * 1024) }, { id: "f2", name: "ledger-2026-09.csv", size: 18 * 1024 },
]; const NOTES = PROJECT_BY_ID["research-notes"] Notable exports: `DropzoneDemo`. Marked
`'use client'` so it runs in the browser.

[`components/shapes/forms-inputs/dropzone-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/dropzone-demo.tsx) · code · 1839 bytes

### dropzone.tsx

File dropzone: a dashed strip that takes dropped files or opens the file picker (it is a
label for a real file input, so Enter and Space work), a staged list with sizes and remove
buttons, an Upload and Clear row, per-file and overall progress, then a done line. Uploads
are simulated with a timer; nothing leaves the browser. Notable exports: `FileDropzone`,
`StagedFile`, `DropzonePhase`, `FileDropzoneProps`.

[`components/shapes/forms-inputs/dropzone.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/dropzone.tsx) · code · 10005 bytes

### entry-form-demo.tsx

import { AddAppForm, AddSourceForm, CloneProjectForm, ContactForm, CreateSpaceForm,
TemplateDeployForm, type BuilderOption, } from "./entry-form"; const SOURCE_NAMES =
GALILEO_SOURCES.map((s) => s.name); const SPACE_NAMES = SPACES.map((s) => s.name) Notable
exports: `EntryFormDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/forms-inputs/entry-form-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/entry-form-demo.tsx) · code · 6241 bytes

### entry-form.tsx

Add and create forms.

[`components/shapes/forms-inputs/entry-form.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/entry-form.tsx) · code · 40537 bytes

### form-toast.tsx

FormToast: the small result card a form shows after it submits ("Project cloned", "2 added,
1 updated"). Rendered inline under the form, announced through a polite live region,
dismissible, and optionally auto-hidden after a delay. Notable exports: `FormToast`,
`FormToastTone`, `FormToastProps`. Marked `'use client'` so it runs in the browser.

[`components/shapes/forms-inputs/form-toast.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/form-toast.tsx) · code · 2754 bytes

### index.tsx

forms-inputs: fields, pickers, toggles and the flows for adding, sharing and signing in.
Reusable components live in the shape files (text-fields.tsx, search-field.tsx, …); the
*-demo.tsx files feed them fixture data and show every variant and state. Notable exports:
`shapes`.

[`components/shapes/forms-inputs/index.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/index.tsx) · code · 6700 bytes

### pickers-demo.tsx

const TODAY: DayKey = NOW_ISO.slice(0, 10); // 2026-10-02 const LAST_FULL_DAY: DayKey =
USAGE_DAILY[USAGE_DAILY.length - 1].date; // 2026-10-01 Notable exports: `PickersDemo`.
Marked `'use client'` so it runs in the browser.

[`components/shapes/forms-inputs/pickers-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/pickers-demo.tsx) · code · 6324 bytes

### pickers.tsx

Select, period and date pickers: ProjectPicker (a select-only combobox over a listbox: arrow
keys, Home, End, type-ahead, Enter, Esc), Calendar and RangeCalendar (month grids with a
roving tab stop: arrows move by day and week, Home and End jump in the week, Page Up and
Page Down change month; today, selected, range, outside-month, disabled and marked days),
and PeriodPicker ("Last 30 days" presets plus a custom range in a popover).

[`components/shapes/forms-inputs/pickers.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/pickers.tsx) · code · 27111 bytes

### range-slider-demo.tsx

const hrs = (v: number) => ({ value: String(v), unit: "hrs" }); const hrsText = (v: number)
=> ${v} hours a week; const pct = (v: number) => ({ value: String(v), unit: "%" }); const
pctText = (v: number) => ${v} percent Notable exports: `RangeSliderDemo`. Marked `'use
client'` so it runs in the browser.

[`components/shapes/forms-inputs/range-slider-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/range-slider-demo.tsx) · code · 4011 bytes

### range-slider.tsx

Range slider: RangeSlider (a native range input, so arrow keys, Page keys, Home and End all
step it; spectrum-blue fill up to the thumb; a 2px ink focus ring on the thumb; a live mono
readout with its unit; aria-valuetext reads the value in words) in a field layout or an
inline lever layout, and HoursBackPanel (the Machine Speed hours-back calculator: two
sliders, an answer in hours, blue below the target and lime once hit).

[`components/shapes/forms-inputs/range-slider.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/range-slider.tsx) · code · 9319 bytes

### search-field-demo.tsx

const logoFor = (id: RuntimeId) => (id === "gemini_cli" ? "gemini" : id) Notable exports:
`SearchFieldDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/forms-inputs/search-field-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/search-field-demo.tsx) · code · 9699 bytes

### search-field.tsx

Search and faceted filter: FilterSearch (glyph, input, "/" kbd hint, clear button; Esc
clears, the change callback is debounced, "/" can focus it from anywhere), FacetedFilter
(dashed "+ Runtime" trigger that opens a popover of checkable options with counts; arrow
keys, Enter and Esc work inside it), EmailSearch (exact-email lookup with searching, found
and not found states) and HighlightMatch (bolds the matching part of a label).

[`components/shapes/forms-inputs/search-field.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/search-field.tsx) · code · 20593 bytes

### secrets-editor-demo.tsx

const toRow = (s: Secret): SecretRow => ({ key: s.name, state: s.status === "Set" ?
"configured" : s.status === "Not set" ? "not_set" : "needs_attention", hint: s.masked,
usedBy: s.usedBy, updated: s.updated, }) Notable exports: `SecretsEditorDemo`. Marked `'use
client'` so it runs in the browser.

[`components/shapes/forms-inputs/secrets-editor-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/secrets-editor-demo.tsx) · code · 4974 bytes

### secrets-editor.tsx

Secrets editor. Values are write-only: once saved they are never shown again, only a mask.

[`components/shapes/forms-inputs/secrets-editor.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/secrets-editor.tsx) · code · 23918 bytes

### settings-form-demo.tsx

const THEMES: ThemeOption[] = [ { id: "grove", label: "Grove", swatches: ["#a8d94f",
"#beb9ac", "#6f93ad"], description: "Moss green and warm neutrals.", ground: "#10120d", ink:
"#ecebe4" }, { id: "neon", label: "Neon", swatches: ["#f2a2d5", "#bb9aef", "#eac17a"],
description: "Soft magenta, violet and amber on charcoal.", ground: "#151317", ink:
"#f1ecf3" } Notable exports: `SettingsFormDemo`.

[`components/shapes/forms-inputs/settings-form-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/settings-form-demo.tsx) · code · 3151 bytes

### settings-form.tsx

Settings forms with a live preview: SettingsCard (head, italic status, body, Save and
Reset), BrandingEditor (name and logo, previewed as the space header while you type),
ThemePicker (named themes with three swatches each, a description and a mini dashboard
preview) and PathSettingsForm (folder paths with In use or Pending restart badges, an error
box and the command that applies them).

[`components/shapes/forms-inputs/settings-form.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/settings-form.tsx) · code · 20463 bytes

### share-and-access-demo.tsx

const XO_SPACE = PROJECT_BY_ID["xo-space"]; const OPS = SPACE_BY_ID["ws_7f3a9c21e4b0"]
Notable exports: `ShareAndAccessDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/forms-inputs/share-and-access-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/share-and-access-demo.tsx) · code · 5490 bytes

### share-and-access.tsx

Share and access: InlineShareForm (Space ID, Share, Cancel; validation, Sharing…, the
success line, and Share stays off for an ID already shared), ShareComposer (two steps: pick
a project, then a recipient), PeopleAccessList (people with role, Revoke, and Approve or
Deny for requests; loading and empty states), SharedProjectDetail (commits fetched from
origin with Apply and the equivalent git command; skeleton and flash ring) and ShareDialog

[`components/shapes/forms-inputs/share-and-access.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/share-and-access.tsx) · code · 25326 bytes

### text-fields-demo.tsx

import { CommandField, InlineInput, NumberStepper, ReadOnlyEnvField, ReportBugForm,
SecretInput, type ReportStatus, } from "./text-fields" Notable exports: `TextFieldsDemo`.
Marked `'use client'` so it runs in the browser.

[`components/shapes/forms-inputs/text-fields-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/text-fields-demo.tsx) · code · 7932 bytes

### text-fields.tsx

Text fields: SecretInput (write-only key with inline Show or Hide), NumberStepper (joined
minus, value, plus; clamps on blur), ReadOnlyEnvField (an environment value the space sets,
with copy), CommandField (mono command textarea: Enter submits, Esc puts it back),
InlineInput (a small field set inside a sentence), RichTextEditor (bold, italic and lists
over a contenteditable box) and ReportBugForm (the rich text dialog body with its send

[`components/shapes/forms-inputs/text-fields.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/text-fields.tsx) · code · 22259 bytes

### toggles-demo.tsx

const logoFor = (id: RuntimeId) => (id === "gemini_cli" ? "gemini" : id); const wait = (ms:
number) => new Promise((r) => setTimeout(r, ms)) Notable exports: `TogglesDemo`. Marked
`'use client'` so it runs in the browser.

[`components/shapes/forms-inputs/toggles-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/toggles-demo.tsx) · code · 6779 bytes

### toggles.tsx

Switches, checkboxes and radio cards: SwitchRow (a settings row whose save can be async; the
thumb spins while it saves), SettingsList (hairline-divided rows on a panel),
SourceCheckboxGroup (session sources as checkable chips; offline sources are muted with a
reason; none selected shows an empty note), RadioCardGroup (native radios as cards with an
icon, title and description; arrow keys move) and OnOffToggle (the compact HUD toggle with

[`components/shapes/forms-inputs/toggles.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/toggles.tsx) · code · 12526 bytes

### wizard-demo.tsx

const NIGHTLY = JOBS.find((j) => j.id === "job_nightly")! Notable exports: `WizardDemo`.
Marked `'use client'` so it runs in the browser.

[`components/shapes/forms-inputs/wizard-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/wizard-demo.tsx) · code · 3839 bytes

### wizard.tsx

Wizard and numbered stepper: Stepper (numbered circles joined by a connector, each step
done, active, waiting, error or disabled, with the active step's body inline), SignInFlow
(two steps: open the provider sign-in, then paste the code; Retry on a bad code),
JobEditorWizard (kind, schedule presets and a live "Every day at 02:00 · Next: …" preview,
with Back and Next) and StepProgress ("Step 2 of 7" over a segmented bar).

[`components/shapes/forms-inputs/wizard.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/forms-inputs/wizard.tsx) · code · 25371 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
