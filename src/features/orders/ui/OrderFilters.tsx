import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input } from '@/shared/ui/input';
import { useDebounce } from '@/shared/hooks/useDebounce'; // This hook doesn't exist yet

const OrderFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (debouncedQuery) {
      newSearchParams.set('q', debouncedQuery);
    } else {
      newSearchParams.delete('q');
    }
    setSearchParams(newSearchParams);
  }, [debouncedQuery, setSearchParams]);

  return (
    <div className="flex items-center space-x-4">
      <Input
        placeholder="Filter by customer..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="max-w-sm"
      />
      {/* Other filters like status select would go here */}
    </div>
  );
};

export default OrderFilters;
