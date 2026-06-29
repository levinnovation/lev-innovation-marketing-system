# Workspace Customization Rules

These rules apply specifically to development, styling, and asset management in the `agentyx-hyperframes-video` workspace.

## 1. Design System Alignment

*   **Design Tokens First**: Do not define inline color values or custom font faces in template CSS. Always import and use the variables and typography classes defined in `/brand-system/colors_and_type.css`.
*   **Fonts Reference**: Ensure that all HTML documents use the local web fonts (`/brand-system/fonts/`) to prevent external network request dependencies and layout shift.
*   **Asset Location**: Use `/brand-system/assets/` as the single source of truth for branding images, logos, and illustrations.
*   **Guidelines Compliance**: Always consult `/brand-system/brand-guidelines.md` before starting modifications on any of the format templates.

## 2. Text Content & Copywriting

*   **Spanish Accents**: All copy and voiceover narration written in Spanish must be thoroughly proofread for correct grammatical accents (e.g., "contratación", "será", "operación", "cotización").
*   **Brand Voice**: Maintain a precise, calm, and executive tone across all slides, documents, and videos. Avoid informal slang or chaotic phrasing.

## 3. Git Workflow

*   **Atomic Commits**: Keep commits small and focused on a single change area. 
*   **Commit Message Convention**: Use standard prefixes:
    *   `feat: ...` for new templates or layout features.
    *   `chore: ...` for cleaning up directories, build settings, or configurations.
    *   `docs: ...` for guidelines and instructions modifications.
    *   `style: ...` for pure visual design updates.
