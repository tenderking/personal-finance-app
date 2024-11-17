export interface BaseListItemProps {

  /** The title of the list item */
  title: string;

  /** The subtitle of the list item */
  subtitle?: string;

  /** The image to display */
  image?: string;

  /** Optional click handler */
  onClick?: () => void;
}

export const BaseListItem = ({
  title,
  subtitle,
  image,
  onClick,
}: BaseListItemProps) => {
  return (
    <div className="flex items-center p-4 border-b border-grey-200" onClick={onClick}>
      <div className="flex items-center">
        {image && <img src={image} alt={title} className="w-10 h-10 rounded-full mr-4" />}
        <div>
        <h3 className="text-sm  font-semibold text-grey-900">  {title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}{subtitle ? `  - ${subtitle.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} `: ''}</h3>
          
        </div>
      </div>
    </div>
  );
}