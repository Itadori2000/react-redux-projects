function Titles(props){
    const{ name, price } = props;
    return (
         <>
         <h1>{name}</h1>
         <p>{price || "$10,999"}</p>
         <button>Buy Now</button>
         </>   
    );
}
export default Titles;