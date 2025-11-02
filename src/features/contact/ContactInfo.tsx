import { memo } from 'react';
import { IconBadge } from '../../components/common';
import type { ContactInfoProps } from './types';

// Componente ContactInfo optimizado con React.memo
// Ubicación: src/ui/pages/contact/ContactInfo.tsx

function ContactInfo({ icon, title, content, color }: ContactInfoProps) {
  return (
    <div className="flex items-start">
      <div className="shrink-0">
        <IconBadge icon={icon} color={color} />
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

export default memo(ContactInfo);
