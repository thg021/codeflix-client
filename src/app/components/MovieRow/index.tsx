import { map } from 'lodash';
import Image from 'next/image';
import { MovieCard } from '../MovieCard';

type MovieRowProps = {
  sectionTitle: string;
};
export const MovieRow = ({ sectionTitle }: MovieRowProps) => {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex items-center'>
        <h2 className='inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='no-scrollbar -ml-8 flex space-x-4 overflow-x-scroll p-6'>
        {map([1, 2, 3, 4, 5, 6, 7, 8], (item) => (
          <MovieCard index={item} />
        ))}
      </div>
    </div>
  );
};
