import './PaginationItem.css'

const getActiv = (page, number) =>{
    if (page === number) {
        return "active"
    }else
    {
        return ""
    }

};

const PaginationItem = (props) => {
    const onPaginationClick = () =>{
        props.onSetUrl(props.number);
    };
    return (
          <li onClick = {onPaginationClick}><a href="#" className = {getActiv(props.page, props.number)} >{props.number}</a></li>
    );
};

export default PaginationItem;