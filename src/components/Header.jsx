function Header(){
      var title = "React Learning"
      var bgPrimary = "bg-primary"
      var isHeader = false;
      
      var styleObj = {
         backgroundColor: "red",
         fontSize: "50px"
      }
      // condition ? true statement: false statement
    return(
        <div className={isHeader ? "bg-primary" : "bg-secondary"}>
            <h2>Header Component</h2>
            <h3 style={styleObj}>{title}</h3>
            {/* <h3>JS Expression: {2+2}</h3>  */}
        </div>
       
    )
}

export default Header;