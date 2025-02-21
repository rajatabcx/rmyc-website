import { DynamicIcon as LucideDynamicIcon } from 'lucide-react/dynamic';

export const DynamicIcon = ({
  iconName,
  className,
}: {
  iconName: any;
  className?: string;
}) => {
  return <LucideDynamicIcon name={iconName} className={className} />;
};
