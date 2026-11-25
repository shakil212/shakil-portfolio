import { Plus } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  id?: string;
  title: string;
  icon?: ReactNode;
  preview?: string;
  children: ReactNode;
};

export function DirectoryEntry({ id, title, icon, preview, children }: Props) {
  return (
    <details className="directory-entry" id={id}>
      <summary>
        {icon && <span className="entry-icon" aria-hidden="true">{icon}</span>}
        <span className="entry-caption"><strong>{title}</strong>{preview && <small>{preview}</small>}</span>
        <Plus className="entry-toggle" size={17} aria-hidden="true" />
      </summary>
      <div className="entry-body">{children}</div>
    </details>
  );
}
