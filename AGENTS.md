# BeauteFest review workflow

Enhancement requests authorize changes to the review version only. Publish to beautefest.in only when the user explicitly requests publication.

- Production repository: anchitsharma15/beautefest, main branch. Do not publish relaunch site changes there without explicit user approval.
- The review/relaunch branch preserves the earlier relaunch draft. The separate preview repository contains the latest client preview.
- Review website: https://anchitsharma15.github.io/beautefest-preview/ (separate public preview repository anchitsharma15/beautefest-preview).
- Use the GitHub plugin for supported GitHub operations.
- Keep a visible review banner and noindex metadata in preview output. Preserve correct relative asset links.
- Verify preview changes and present them for review. Do not infer publication approval from requests for enhancements or fixes.
