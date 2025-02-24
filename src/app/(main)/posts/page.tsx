import PostsTable from "@/components/posts/PostTable";
import PreviousBtn from "@/components/PreviousBtn";
import PostPagination from "@/components/posts/PostPagination";


const PostsPage = () => {
    return ( 
        <>
        <PreviousBtn text="Back" link="/" />
        <PostsTable />
        <PostPagination />
        </>
     );
}
 
export default PostsPage;