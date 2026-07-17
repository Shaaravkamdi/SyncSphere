# Architecture Decisions

## ADR-001

### Decision

Use Feature-Based Architecture.

### Reason

- Better scalability
- Easier maintenance
- Better separation of concerns

---

## ADR-002

### Decision

All icons are exported through:

shared/icons/index.ts

### Reason

- Single import path
- Consistent icon usage
- Easy to replace icon library

---

## ADR-003

### Decision

Use Tailwind CSS for styling.

### Reason

- Utility-first
- Faster UI development
- Easy responsive design