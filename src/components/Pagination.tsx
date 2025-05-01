import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const renderPageNumbers = () => {
    const pages = [];
    const range = 2;

    pages.push(
      <Button
        key={1}
        variant={currentPage === 1 ? "default" : "outline"}
        size="icon"
        onClick={() => onPageChange(1)}
        className={currentPage === 1 ? "bg-accent text-accent-foreground" : ""}
      >
        1
      </Button>
    );

    if (currentPage > 3) {
      pages.push(
        <Button key="ellipsis1" variant="ghost" size="icon" disabled>
          ...
        </Button>
      );
    }

    for (
      let i = Math.max(2, currentPage - range);
      i <= Math.min(totalPages - 1, currentPage + range);
      i++
    ) {
      if (i === 1 || i === totalPages) continue;

      pages.push(
        <Button
          key={i}
          variant={currentPage === i ? "default" : "outline"}
          size="icon"
          onClick={() => onPageChange(i)}
          className={currentPage === i ? "bg-accent text-accent-foreground" : ""}
        >
          {i}
        </Button>
      );
    }

    if (currentPage < totalPages - 2) {
      pages.push(
        <Button key="ellipsis2" variant="ghost" size="icon" disabled>
          ...
        </Button>
      );
    }

    if (totalPages > 1) {
      pages.push(
        <Button
          key={totalPages}
          variant={currentPage === totalPages ? "default" : "outline"}
          size="icon"
          onClick={() => onPageChange(totalPages)}
          className={currentPage === totalPages ? "bg-accent text-accent-foreground" : ""}
        >
          {totalPages}
        </Button>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 pt-8 pb-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {renderPageNumbers()}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
