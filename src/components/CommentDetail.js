const CommentDetail = (props) => {
  return (
    <div className='mx-auto max-w-2xl'>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
        </div>
      </div>
      <div className='flex items-center mb-6'>
        <img className='mr-4 w-16 h-16 rounded-full' src={props.avatar} alt='avatar' />
        <div>
          <p className='text-xl font-bold text-gray-900 dark:text-white'>{props.author}</p>
          <p className='text-base font-light text-gray-500 dark:text-grey-400'>{props.profession}</p>
          <p className='text-base font-light text-gray-500 dark:text-grey-400'>{props.timeAgo}</p>
        </div>
      </div>
      <h1 className='mb-4 text-2xl font-bold text-gray-900'>{props.content}</h1>
    </div>
  );
};

export default CommentDetail;
