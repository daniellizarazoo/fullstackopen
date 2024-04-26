const Titles = ({title,h}) =>{
    const HeadingTag = `h${h}`;
    if (h >=1 && h <= 6){
        return <HeadingTag>{title}</HeadingTag>;
    } else {
        return <h1>{title}</h1>
    }
}
export default Titles