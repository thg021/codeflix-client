import Image from 'next/image';

type MovieCardProps = {
  index: number;
};
export const MovieCard = ({ index }: MovieCardProps) => {
  return (
    <div
      key={index}
      className='lg:min-w-px[400px] group relative h-28 min-w-[200px] bg-gradient-to-t from-transparent to-black transition duration-200 ease-in hover:z-50 hover:scale-110 md:h-40 md:min-w-[380px] lg:h-52'
    >
      <Image
        src={`/items/item_${index}.jpg`}
        fill
        alt='A'
        className='rounded'
      />
    </div>
  );
};
