import  React from "react";
class MySection extends React.Component{
    render(){
        return(
               <section>
               <h2>This is my section{this.props.children}
               </h2>
               </section>
        );
    }
}
export default MySection;