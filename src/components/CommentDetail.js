import { faker } from '@faker-js/faker';

const CommentDetail = (props) => {
  return (
    <div className='mx-auto max-w-2xl'>
      <div className='flex items-center mb-6'>
        <img className='mr-4 w-16 h-16 rounded-full' src={faker.image.avatar()} alt='avatar' />
        <div>
          <p className='text-xl font-bold text-gray-900 dark:text-white'>{props.author}</p>
          <p className='text-base font-light text-gray-500 dark:text-grey-400'>Graphic Designer</p>
          <p className='text-base font-light text-gray-500 dark:text-grey-400'>Jan 12, 2023</p>
        </div>
      </div>
      <h1 className='mb-4 text-2xl font-bold text-gray-900'>Best practices for successful prototypes</h1>
    </div>
  );
};

export default CommentDetail;
