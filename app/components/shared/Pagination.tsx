import { PaginationButton } from './PaginationButton';

export interface PaginationProps {
  /** Number of pages */
  pages: number;
  /** Current page */
  currentPage: number;
  /** Optional click handler */
  onClick?: (page: number) => void;
}
export const Pagination = ({
  pages,
  currentPage,
  onClick,
}: PaginationProps) => {
  return (
    <div className="flex justify-around  p-8">
      <PaginationButton
      variant="prev"
      onClick={() => onClick && onClick(currentPage - 1)}
      active={currentPage > 1}
      />
      <div className='space-x-2'>
      {Array.from({ length: pages }, (_, i) => (
        <PaginationButton
        key={i}
        variant="num"
        num={i + 1}
        onClick={() => onClick && onClick(i + 1)}
        active={currentPage === i + 1}
        />
      ))}
        </div>
      <PaginationButton
      variant="next"
      onClick={() => onClick && onClick(currentPage + 1)}
      active={currentPage < pages}
      />
    </div>
  );
}