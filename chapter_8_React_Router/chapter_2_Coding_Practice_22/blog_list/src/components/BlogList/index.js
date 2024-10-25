
import './index.css'
import BlogItem from '../BlogItem'

const blogdata=[
    {
        id:1,
        name:'My first post',
        date:'Aug 2nd',
        desc:'A High solution beautifully designed for startups',
    },
    {
        id:2,
        name:'My second post',
        date:'Mar 1nd',
        desc:'A High solution beautifully designed for startups',
    },
    {
        id:3,
        name:'My first post',
        date:'Aug 2nd',
        desc:'A High solution beautifully designed for startups',
    },
    {
        id:4,
        name:'My first post',
        date:'Aug 2nd',
        desc:'A High solution beautifully designed for startups',
    },
    {
        id:5,
        name:'My first post',
        date:'Aug 2nd',
        desc:'A High solution beautifully designed for startups',
    }
]

const BlogList = ()=>{

   return(
    <>
    <div className='blog-list-container'>
        {/* <h1>blogList</h1> */}
        <ul className='blog-list-contianer-unorder-list'>
        {blogdata.map(item=> <BlogItem item={item} key={item.id} />)}
        </ul>
    </div>
    
    </>
   )


}

export default BlogList;