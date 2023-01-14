import { faker } from '@faker-js/faker';

import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className='pt-8 pb-16 justify-between px-4'>
      <CommentDetail avatar={faker.image.avatar()} author='Sam' profession='Graphic Designer' timeAgo='10:00 AM' content='Nice blog post' />
      <CommentDetail avatar={faker.image.avatar()} author='Alex' profession='Software Engineer' timeAgo='11:00 AM' content='I like the comment' />
      <CommentDetail avatar={faker.image.avatar()} author='Jane' profession='Solutions Architect' timeAgo='12:00 PM' content='I like the writing' />
    </div>
  );
};

export default App;
