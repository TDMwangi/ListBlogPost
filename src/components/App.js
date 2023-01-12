import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className='pt-8 pb-16 justify-between px-4'>
      <CommentDetail author='Sam' />
      <CommentDetail author='Alex' />
      <CommentDetail author='Jane' />
    </div>
  );
};

export default App;
