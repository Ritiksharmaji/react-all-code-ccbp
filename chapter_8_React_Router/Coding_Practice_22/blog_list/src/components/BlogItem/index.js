
import './index.css'

const BlogItem = (props)=>{

const{item} = props;
// console.log(item)
const{name,date,desc} = item;


return(
    
    <li className='blog-list-contianer'>
        <div className='name-date-contianer'>
        <h1 className='class-name heading'>{name}</h1>
        <p className='class-date paragraph'>{date}</p>
        </div>
        <p className='class-desc paragraph'>{desc}</p>
    </li>
)



}
export default BlogItem;